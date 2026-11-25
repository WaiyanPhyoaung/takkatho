import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Check, Copy, Search, X } from "lucide-react";
import {
  CHEATSHEET_DATA,
  type CheatCategoryId,
  type CheatItem,
  type CheatLang,
} from "../data/cheatsheets";

type TokenKind =
  | "plain"
  | "comment"
  | "string"
  | "flag"
  | "placeholder"
  | "keyword"
  | "property"
  | "number"
  | "expression"
  | "operator";

type Token = { text: string; kind: TokenKind };

const SQL_KEYWORDS = new Set([
  "select", "from", "where", "insert", "into", "values", "update", "set",
  "delete", "create", "table", "index", "alter", "add", "column", "drop",
  "join", "left", "right", "inner", "outer", "on", "group", "by", "order",
  "having", "limit", "offset", "as", "and", "or", "not", "null", "is", "in",
  "distinct", "count", "sum", "avg", "min", "max", "rank", "over",
  "partition", "with", "union", "all", "begin", "commit", "rollback",
  "primary", "key", "foreign", "references", "cascade", "default", "asc",
  "desc", "explain", "analyze", "conflict", "do", "nothing", "interval",
  "case", "when", "then", "else", "end", "exists", "between", "like",
]);

const JS_KEYWORDS = new Set([
  "const", "let", "var", "function", "return", "await", "async", "if", "else",
  "for", "of", "in", "while", "try", "catch", "finally", "throw", "new",
  "typeof", "instanceof", "type", "interface", "export", "import", "default",
  "class", "extends", "this", "null", "undefined", "true", "false", "void",
]);

const TOKEN_PATTERN =
  /(\{\{[\s\S]*?\}\})|('[^']*'|"[^"]*"|`[^`]*`)|(<[a-zA-Z_][\w-]*>)|(\/\/[^\n]*)|(\/\*[\s\S]*?\*\/)|(\s-{1,2}[a-zA-Z][\w-]*)|(\b\d+(?:\.\d+)?\b)|(&&|\|\||[|;>])/g;

function classifyWord(word: string, lang: CheatLang): TokenKind {
  const lower = word.toLowerCase();
  if (lang === "sql" && SQL_KEYWORDS.has(lower)) return "keyword";
  if ((lang === "js" || lang === "n8n") && JS_KEYWORDS.has(word)) return "keyword";
  return "plain";
}

function tokenizeLine(line: string, lang: CheatLang, isFirstLine: boolean): Token[] {
  const trimmed = line.trimStart();
  if (
    trimmed.startsWith("//") ||
    trimmed.startsWith("/*") ||
    trimmed.startsWith("*") ||
    (lang === "shell" && trimmed.startsWith("#"))
  ) {
    return [{ text: line, kind: "comment" }];
  }

  const tokens: Token[] = [];
  let lastIndex = 0;

  const pushPlain = (text: string) => {
    if (!text) return;
    if (lang === "css") {
      const propertyMatch = text.match(/^(\s*)([a-z-]+)(\s*:)/);
      if (propertyMatch) {
        if (propertyMatch[1]) tokens.push({ text: propertyMatch[1], kind: "plain" });
        tokens.push({ text: propertyMatch[2], kind: "property" });
        tokens.push({ text: propertyMatch[3], kind: "plain" });
        text = text.slice(propertyMatch[0].length);
        if (!text) return;
      }
    }

    const parts = text.split(/([A-Za-z_$][\w$.-]*)/g);
    parts.forEach((part, index) => {
      if (!part) return;
      if (index % 2 === 1) {
        let kind = classifyWord(part, lang);
        if (
          kind === "plain" &&
          lang === "shell" &&
          isFirstLine &&
          tokens.every((t) => !t.text.trim())
        ) {
          kind = "keyword";
        }
        tokens.push({ text: part, kind });
      } else {
        tokens.push({ text: part, kind: "plain" });
      }
    });
  };

  for (const match of line.matchAll(TOKEN_PATTERN)) {
    const index = match.index ?? 0;
    pushPlain(line.slice(lastIndex, index));
    const [full, expression, string, placeholder, lineComment, blockComment, flag, num] =
      match;
    if (expression) tokens.push({ text: full, kind: "expression" });
    else if (string) tokens.push({ text: full, kind: "string" });
    else if (placeholder) tokens.push({ text: full, kind: "placeholder" });
    else if (lineComment || blockComment) tokens.push({ text: full, kind: "comment" });
    else if (flag) {
      const leading = full.length - full.trimStart().length;
      if (leading) tokens.push({ text: full.slice(0, leading), kind: "plain" });
      tokens.push({ text: full.slice(leading), kind: "flag" });
    }
    else if (num) tokens.push({ text: full, kind: "number" });
    else tokens.push({ text: full, kind: "operator" });
    lastIndex = index + full.length;
  }
  pushPlain(line.slice(lastIndex));

  return tokens;
}

const HighlightedCommand: React.FC<{ command: string; lang: CheatLang }> = ({
  command,
  lang,
}) => {
  const lines = command.split("\n");
  const showLineNumbers = lines.length > 1;

  return (
    <code className="cs-code">
      {lines.map((line, lineIndex) => (
        <span className="cs-code-line" key={lineIndex}>
          {showLineNumbers && (
            <span className="cs-code-gutter" aria-hidden="true">
              {lineIndex + 1}
            </span>
          )}
          <span className="cs-code-text">
            {tokenizeLine(line, lang, lineIndex === 0).map((token, tokenIndex) => (
              <span className={`cs-t-${token.kind}`} key={tokenIndex}>
                {token.text}
              </span>
            ))}
            {line === "" ? "\u00a0" : null}
          </span>
        </span>
      ))}
    </code>
  );
};

const VALID_CATEGORIES = new Set<string>(CHEATSHEET_DATA.map((s) => s.id));

const CATEGORIES: { id: CheatCategoryId | "all"; label: string }[] = [
  { id: "all", label: "all" },
  ...CHEATSHEET_DATA.map((section) => ({
    id: section.id,
    label: section.id === "javascript" ? "js / ts" : section.id,
  })),
];

const LANG_SIGIL: Record<CheatLang, string> = {
  shell: "$",
  sql: "sql",
  css: "css",
  js: "js",
  n8n: "n8n",
};

const itemMatches = (item: CheatItem, q: string) =>
  item.command.toLowerCase().includes(q) ||
  item.descBurmese.toLowerCase().includes(q) ||
  (item.tag ?? "").toLowerCase().includes(q);

export const CheatSheetsViewer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CheatCategoryId | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  // Support category deep links like /cheatsheets#docker or /cheatsheets#javascript.
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && VALID_CATEGORIES.has(hash)) {
        setSelectedCategory(hash as CheatCategoryId);
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  // ⌘K / Ctrl+K or "/" focuses search; Escape clears when focused.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing =
        target?.tagName === "INPUT" || target?.tagName === "TEXTAREA";

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      } else if (event.key === "/" && !typing) {
        event.preventDefault();
        inputRef.current?.focus();
      } else if (event.key === "Escape" && typing) {
        setSearchQuery("");
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleCopy = useCallback(async (text: string, id: string) => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("clipboard-unavailable");
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
      } catch {
        /* ignore copy fallback failure */
      }
      document.body.removeChild(textarea);
    }
    setCopiedId(id);
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setCopiedId(null), 2000);
  }, []);

  const query = searchQuery.trim().toLowerCase();

  const counts = useMemo(() => {
    const byCat: Record<string, number> = {};
    let total = 0;
    for (const section of CHEATSHEET_DATA) {
      const count = query
        ? section.items.filter((item) => itemMatches(item, query)).length
        : section.items.length;
      byCat[section.id] = count;
      total += count;
    }
    byCat.all = total;
    return byCat;
  }, [query]);

  const sections = useMemo(() => {
    return CHEATSHEET_DATA.filter(
      (section) => selectedCategory === "all" || section.id === selectedCategory,
    )
      .map((section) => {
        if (!query) return section;
        return {
          ...section,
          items: section.items.filter((item) => itemMatches(item, query)),
        };
      })
      .filter((section) => section.items.length > 0);
  }, [selectedCategory, query]);

  const matchCount = useMemo(
    () => sections.reduce((sum, section) => sum + section.items.length, 0),
    [sections],
  );

  const isFiltered = query !== "" || selectedCategory !== "all";

  const selectCategory = (id: CheatCategoryId | "all") => {
    setSelectedCategory(id);
    if (typeof window !== "undefined") {
      if (id === "all") {
        history.replaceState(null, "", window.location.pathname);
      } else {
        history.replaceState(null, "", `#${id}`);
      }
    }
  };

  const resetFilters = () => {
    setSearchQuery("");
    selectCategory("all");
  };

  return (
    <div className="cs-root">
      {/* Command bar */}
      <div className="cs-bar">
        <div className="cs-bar-inner">
          <div className="cs-field">
            <Search className="cs-field-icon" aria-hidden="true" />
            <input
              ref={inputRef}
              id="cheatsheet-search"
              type="text"
              inputMode="search"
              autoComplete="off"
              spellCheck={false}
              aria-label="Command သို့မဟုတ် အကြောင်းအရာ ရှာဖွေရန်"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="ရှာဖွေပါ — git reset, port, grid, telegram…"
              className="cs-input"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="ရှာဖွေမှုကို ရှင်းလင်းမည်"
                className="cs-field-clear"
              >
                <X className="cs-icon-sm" />
              </button>
            ) : (
              <kbd className="cs-kbd" aria-hidden="true">
                ⌘K
              </kbd>
            )}
          </div>

          <div className="cs-cats" role="group" aria-label="Category filter">
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category.id;
              const catCount = counts[category.id] ?? 0;
              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => selectCategory(category.id)}
                  className={`cs-cat${isSelected ? " is-active" : ""}`}
                  style={catCount === 0 ? { opacity: 0.45 } : undefined}
                >
                  {category.label} ({catCount})
                </button>
              );
            })}
          </div>
        </div>

        <div className="cs-bar-meta">
          <span aria-live="polite">
            <strong>{matchCount}</strong> command{matchCount === 1 ? "" : "s"}
            {query ? (
              <>
                {" "}
                matching <em>{searchQuery.trim()}</em>
              </>
            ) : null}
          </span>
          {isFiltered ? (
            <button type="button" onClick={resetFilters} className="cs-reset">
              Clear filters
            </button>
          ) : null}
        </div>
      </div>

      {/* Results */}
      {sections.length === 0 ? (
        <div className="cs-empty">
          <p className="cs-empty-title">
            {query ? (
              <>
                <span className="cs-t-comment">#</span> ရှာဖွေတွေ့ရှိချက် မရှိပါ —{" "}
                <em>{searchQuery.trim()}</em>
              </>
            ) : (
              "ဒီ Category အတွက် အကြောင်းအရာ မရှိသေးပါ"
            )}
          </p>
          <p className="cs-empty-hint">
            Command အမည်တစ်စိတ်တစ်ပိုင်း (reset, port, grid) ဖြင့် ပြန်ရှာကြည့်ပါ။
          </p>
          <button type="button" onClick={resetFilters} className="cs-empty-reset">
            Clear filters
          </button>
        </div>
      ) : (
        <div className="cs-sections">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="cs-section" aria-labelledby={`cs-${section.id}`}>
              <header className="cs-section-head">
                <span className="cs-sigil" aria-hidden="true">
                  {section.sigil}
                </span>
                <h2 id={`cs-${section.id}`} className="cs-section-title">
                  {section.titleBurmese}
                </h2>
                <span className="cs-rule" aria-hidden="true" />
                <span className="cs-section-count">
                  {section.items.length} command{section.items.length === 1 ? "" : "s"}
                </span>
              </header>
              <p className="cs-section-sub">{section.title}</p>

              <div className="cs-grid">
                {section.items.map((item, index) => (
                  <CommandRow
                    key={`${section.id}-${index}`}
                    item={item}
                    id={`${section.id}-${index}`}
                    isCopied={copiedId === `${section.id}-${index}`}
                    onCopy={handleCopy}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
};

const CommandRow: React.FC<{
  item: CheatItem;
  id: string;
  isCopied: boolean;
  onCopy: (text: string, id: string) => void;
}> = ({ item, id, isCopied, onCopy }) => {
  const isMultiline = item.command.includes("\n");

  return (
    <article className={`cs-row${isMultiline ? " is-wide" : ""}${isCopied ? " is-copied" : ""}`}>
      <div className="cs-terminal">
        <span className={`cs-prompt cs-prompt-${item.lang}`} aria-hidden="true">
          {isCopied ? <Check className="cs-icon-sm" /> : LANG_SIGIL[item.lang]}
        </span>
        <pre className="cs-pre">
          <HighlightedCommand command={item.command} lang={item.lang} />
        </pre>
        <button
          type="button"
          onClick={() => onCopy(item.command, id)}
          className="cs-copy"
          aria-label={isCopied ? "ကူးယူပြီးပါပြီ" : "Command ကို ကူးယူမည်"}
        >
          {isCopied ? (
            <>
              <Check className="cs-icon-sm" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="cs-icon-sm" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <footer className="cs-row-foot">
        <p className="cs-desc">{item.descBurmese}</p>
        {item.tag ? <span className="cs-tag">{item.tag}</span> : null}
      </footer>
    </article>
  );
};

export default CheatSheetsViewer;
