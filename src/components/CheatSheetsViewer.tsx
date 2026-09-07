import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Check,
  Code,
  Copy,
  Database,
  FolderGit2,
  GitBranch,
  Layers,
  Search,
  Terminal,
  Zap,
} from "lucide-react";

type CheatItem = {
  command: string;
  descBurmese: string;
  tag?: string;
};

type CheatSection = {
  id: string;
  category: "git" | "docker" | "linux" | "sql" | "css" | "n8n";
  title: string;
  titleBurmese: string;
  icon: string;
  color: string;
  items: CheatItem[];
};

const CHEATSHEET_DATA: CheatSection[] = [
  {
    id: "git",
    category: "git",
    title: "Git Version Control",
    titleBurmese: "Git မရှိမဖြစ် Commands များ",
    icon: "git",
    color: "from-orange-500 to-red-500",
    items: [
      {
        command: "git switch -c feature/new-page",
        descBurmese: "Branch အသစ်ဆောက်ပြီး ချက်ချင်း ကူးပြောင်းလုပ်ကိုင်မည်",
        tag: "Branching",
      },
      {
        command: "git add -A && git commit -m 'feat: update ui'",
        descBurmese: "ပြင်ဆင်ချက်အားလုံးကို stage လုပ်ပြီး commit မှတ်မည်",
        tag: "Commit",
      },
      {
        command: "git reset --soft HEAD~1",
        descBurmese: "နောက်ဆုံး commit ကို ဖျက်ပြီး code ပြင်ဆင်ချက်များကို staged အဖြစ် ပြန်ချန်ထားမည် (Undo)",
        tag: "Undo",
      },
      {
        command: "git restore --staged <file>",
        descBurmese: "git add လုပ်ထားသော ဖိုင်ကို unstaged အဖြစ် ပြန်ပြောင်းမည်",
        tag: "Undo",
      },
      {
        command: "git stash push -m 'wip-feature'",
        descBurmese: "လက်ရှိ မပြီးသေးသော code များကို ယာယီ ဖယ်သိမ်းထားမည်",
        tag: "Stash",
      },
      {
        command: "git stash pop",
        descBurmese: "ယာယီ သိမ်းဆည်းထားသော code များကို ပြန်လည် ထုတ်ယူမည်",
        tag: "Stash",
      },
      {
        command: "git log --oneline --graph --all",
        descBurmese: "Commit history များကို သစ်ကိုင်းပုံစံဖြင့် တစ်ကြောင်းတည်း ရှင်းလင်းစွာ ကြည့်မည်",
        tag: "Logs",
      },
      {
        command: "git clean -fd",
        descBurmese: "Git မသိမ်းထားသော Untracked files နှင့် folders အားလုံးကို အပြီးသတ် ဖျက်ထုတ်မည်",
        tag: "Cleanup",
      },
    ],
  },
  {
    id: "docker",
    category: "docker",
    title: "Docker & Docker Compose",
    titleBurmese: "Docker CLI & Containers စီမံခန့်ခွဲမှု",
    icon: "docker",
    color: "from-blue-500 to-cyan-500",
    items: [
      {
        command: "docker run -d -p 8080:80 --name my-web nginx:alpine",
        descBurmese: "Nginx container ကို background တွင် port 8080 ဖွင့်၍ စတင် run မည်",
        tag: "Containers",
      },
      {
        command: "docker ps -a",
        descBurmese: "Run နေသော (သို့) ရပ်တန့်နေသော Containers အားလုံး၏ စာရင်းကို ကြည့်မည်",
        tag: "Containers",
      },
      {
        command: "docker exec -it <container_id> sh",
        descBurmese: "Run နေသော Container အတွင်းသို့ Terminal ဖြင့် ဝင်ရောက် အလုပ်လုပ်မည်",
        tag: "Exec",
      },
      {
        command: "docker compose up -d --build",
        descBurmese: "Docker Compose service များကို image အသစ် build လုပ်ပြီး background တွင် စတင်မည်",
        tag: "Compose",
      },
      {
        command: "docker compose logs -f <service_name>",
        descBurmese: "Compose service ၏ Logs များကို Real-time streaming စောင့်ကြည့်မည်",
        tag: "Logs",
      },
      {
        command: "docker system prune -af --volumes",
        descBurmese: "မသုံးတော့သော Containers, Images, Networks နှင့် Volumes အားလုံးကို ရှင်းလင်း၍ Disk နေရာ ပြန်ယူမည်",
        tag: "Cleanup",
      },
    ],
  },
  {
    id: "linux",
    category: "linux",
    title: "Linux & VPS Server",
    titleBurmese: "Ubuntu Server & Terminal Commands",
    icon: "terminal",
    color: "from-emerald-500 to-teal-500",
    items: [
      {
        command: "ls -lah",
        descBurmese: "ဖိုင်အရွယ်အစား (MB/GB)၊ hidden files နှင့် permissions အားလုံးကို စာရင်းကြည့်မည်",
        tag: "CLI",
      },
      {
        command: "tail -f /var/log/nginx/error.log",
        descBurmese: "Nginx Error logs များကို real-time အသစ်တက်လာတိုင်း ချက်ချင်း စောင့်ကြည့်မည်",
        tag: "Logs",
      },
      {
        command: "chmod 644 <file> && chmod 755 <folder>",
        descBurmese: "Web files များအတွက် အသင့်တော်ဆုံး Standard Permissions များ သတ်မှတ်မည်",
        tag: "Security",
      },
      {
        command: "sudo systemctl restart <service_name>",
        descBurmese: "Systemd background service (e.g. nginx, nodejs) ကို ပြန်လည်စတင်မည်",
        tag: "Systemd",
      },
      {
        command: "sudo journalctl -u <service_name> -f",
        descBurmese: "Systemd service ၏ console.log output များကို real-time ခြေရာခံမည်",
        tag: "Systemd",
      },
      {
        command: "sudo ufw allow 80/tcp && sudo ufw allow 443/tcp",
        descBurmese: "Web traffic များအတွက် HTTP (80) နှင့် HTTPS (443) firewall ports များကို ဖွင့်ပေးမည်",
        tag: "Firewall",
      },
      {
        command: "sudo certbot --nginx -d example.com",
        descBurmese: "Let's Encrypt ဖြင့် အခမဲ့ HTTPS SSL certificate ထုတ်ယူပြီး Nginx တွင် auto တပ်ဆင်မည်",
        tag: "SSL",
      },
    ],
  },
  {
    id: "sql",
    category: "sql",
    title: "SQL & Database Queries",
    titleBurmese: "SQL ဒေတာဘေ့စ် မေးခွန်းထုတ်မှုများ",
    icon: "database",
    color: "from-amber-500 to-yellow-500",
    items: [
      {
        command: "SELECT u.id, u.name, COUNT(o.id) AS total_orders\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nWHERE u.status = 'active'\nGROUP BY u.id, u.name\nHAVING COUNT(o.id) > 5\nORDER BY total_orders DESC\nLIMIT 20;",
        descBurmese: "Active users များထဲမှ Order ၅ ခုထက်ပိုသော သူများကို တွက်ချက်၍ အများဆုံးမှ အနည်းဆုံးသို့ စီပြခြင်း",
        tag: "Aggregations",
      },
      {
        command: "INSERT INTO users (name, email, role)\nVALUES ('Mg Mg', 'mgmg@example.com', 'developer')\nON CONFLICT (email) DO UPDATE SET updated_at = NOW();",
        descBurmese: "ဒေတာအသစ် ထည့်သွင်းခြင်း (Email တူနေပါက update လုပ်ပေးမည့် Upsert ပုံစံ)",
        tag: "CRUD",
      },
      {
        command: "CREATE INDEX idx_users_email ON users(email);",
        descBurmese: "Email ဖြင့် ရှာဖွေရာတွင် မြန်ဆန်စေရန် B-Tree Index တည်ဆောက်ခြင်း",
        tag: "Indexing",
      },
      {
        command: "EXPLAIN ANALYZE SELECT * FROM orders WHERE created_at >= NOW() - INTERVAL '7 days';",
        descBurmese: "Query ၏ အမှန်တကယ် Run ချိန်နှင့် Index Scan အလုပ်လုပ်ပုံကို စစ်ဆေးခြင်း",
        tag: "Performance",
      },
    ],
  },
  {
    id: "css",
    category: "css",
    title: "CSS Flexbox & Modern Grid",
    titleBurmese: "ခေတ်မီ CSS Layout Snippets",
    icon: "layers",
    color: "from-purple-500 to-indigo-500",
    items: [
      {
        command: "/* အရာအားလုံးကို အလယ်ဗဟိုတည့်တည့် ချထားနည်း (Center Anything) */\ndisplay: grid;\nplace-items: center;",
        descBurmese: "Container အတွင်းရှိ မည်သည့်အရာမဆို ဒေါင်လိုက်ရော အလျားလိုက်ပါ အလယ်တည့်တည့် ပို့ဆောင်နည်း",
        tag: "Centering",
      },
      {
        command: "/* Auto-Responsive Cards Grid (Media Queries မလိုဘဲ အလိုအလျောက် ကျစ်လစ်စေသည်) */\ndisplay: grid;\ngrid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\ngap: 1.5rem;",
        descBurmese: "Screen အရွယ်အစားအလိုက် ၁ လိုင်းတွင် ၂ ကဒ်/၃ ကဒ် အလိုအလျောက် ချိန်ညှိပေးသည့် Responsive Grid",
        tag: "Grid",
      },
      {
        command: "/* Flexbox Navigation Header (ဘယ်/ညာ ခွဲထုတ်ခြင်း) */\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\ngap: 1rem;",
        descBurmese: "Logo ကို ဘယ်ဘက်၊ Nav links များကို ညာဘက်တွင် ညီညာစွာ ခွဲခြားထားခြင်း",
        tag: "Flexbox",
      },
      {
        command: "/* စာကြောင်းရှည်များကို အစက် ၃ စက် (...) ဖြင့် အလိုအလျောက် ဖြတ်ပေးခြင်း */\noverflow: hidden;\ntext-overflow: ellipsis;\nwhite-space: nowrap;",
        descBurmese: "Text Truncation (စာကြောင်း ဘောင်ကျော်ပါက ... ဖြင့် ပြသခြင်း)",
        tag: "Typography",
      },
    ],
  },
  {
    id: "n8n",
    category: "n8n",
    title: "n8n Workflow Automation",
    titleBurmese: "n8n Core Nodes & Expressions",
    icon: "zap",
    color: "from-rose-500 to-pink-500",
    items: [
      {
        command: "// n8n Code Node ထဲတွင် JSON Data ကို Filter ပြုလုပ်ခြင်း\nreturn $input.all().filter(item => item.json.price > 50000);",
        descBurmese: "Input data များထဲမှ စျေးနှုန်း ၅ သောင်းအထက် ပစ္စည်းများကိုသာ စစ်ထုတ်ခြင်း",
        tag: "Code Node",
      },
      {
        command: "https://api.telegram.org/bot<TOKEN>/sendMessage?chat_id=<CHAT_ID>&text={{ encodeURIComponent('🔔 New Order: ' + $json.order_id) }}",
        descBurmese: "Telegram Bot သို့ HTTP Request Node မှတစ်ဆင့် Message အလိုအလျောက် ပို့ခြင်း",
        tag: "Telegram Bot",
      },
      {
        command: "{{ $now.plus({ days: 7 }).toFormat('yyyy-MM-dd') }}",
        descBurmese: "လက်ရှိရက်စွဲမှ ၇ ရက်ပေါင်းပြီး ISO Format ဖြင့် ထုတ်ယူခြင်း (Date Math)",
        tag: "Expression",
      },
      {
        command: "{{ $json.body.email || 'customer@example.com' }}",
        descBurmese: "Webhook မှ လာသော Email မရှိပါက Default Email ထည့်သွင်းပေးခြင်း (Fallback)",
        tag: "Expression",
      },
    ],
  },
];

type Category = CheatSection["category"];

type Accent = {
  /** Icon tile gradient */
  gradient: string;
  /** Tag chip + accent text */
  chip: string;
  /** Card hover border */
  hover: string;
  /** Active pill background */
  pill: string;
};

const ACCENTS: Record<Category, Accent> = {
  git: {
    gradient: "from-orange-500 to-red-500",
    chip: "bg-orange-500/10 text-orange-600 dark:text-orange-300",
    hover: "hover:border-orange-400/60 dark:hover:border-orange-500/50",
    pill: "bg-orange-500 text-white shadow-md shadow-orange-500/25",
  },
  docker: {
    gradient: "from-sky-500 to-cyan-500",
    chip: "bg-sky-500/10 text-sky-600 dark:text-sky-300",
    hover: "hover:border-sky-400/60 dark:hover:border-sky-500/50",
    pill: "bg-sky-500 text-white shadow-md shadow-sky-500/25",
  },
  linux: {
    gradient: "from-emerald-500 to-teal-500",
    chip: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300",
    hover: "hover:border-emerald-400/60 dark:hover:border-emerald-500/50",
    pill: "bg-emerald-500 text-white shadow-md shadow-emerald-500/25",
  },
  sql: {
    gradient: "from-amber-500 to-yellow-500",
    chip: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
    hover: "hover:border-amber-400/60 dark:hover:border-amber-500/50",
    pill: "bg-amber-500 text-white shadow-md shadow-amber-500/25",
  },
  css: {
    gradient: "from-violet-500 to-indigo-500",
    chip: "bg-violet-500/10 text-violet-600 dark:text-violet-300",
    hover: "hover:border-violet-400/60 dark:hover:border-violet-500/50",
    pill: "bg-violet-500 text-white shadow-md shadow-violet-500/25",
  },
  n8n: {
    gradient: "from-rose-500 to-pink-500",
    chip: "bg-rose-500/10 text-rose-600 dark:text-rose-300",
    hover: "hover:border-rose-400/60 dark:hover:border-rose-500/50",
    pill: "bg-rose-500 text-white shadow-md shadow-rose-500/25",
  },
};

const CATEGORY_ICONS: Record<Category, React.ElementType> = {
  git: GitBranch,
  docker: FolderGit2,
  linux: Terminal,
  sql: Database,
  css: Code,
  n8n: Zap,
};

const CATEGORIES: { id: string; label: string; icon: React.ElementType }[] = [
  { id: "all", label: "အားလုံး", icon: Layers },
  { id: "git", label: "Git", icon: GitBranch },
  { id: "docker", label: "Docker", icon: FolderGit2 },
  { id: "linux", label: "Linux / VPS", icon: Terminal },
  { id: "sql", label: "SQL", icon: Database },
  { id: "css", label: "CSS", icon: Code },
  { id: "n8n", label: "n8n", icon: Zap },
];

const TOTAL_ITEMS = CHEATSHEET_DATA.reduce(
  (sum, section) => sum + section.items.length,
  0,
);

const matches = (item: CheatItem, query: string) => {
  const q = query.toLowerCase();
  return (
    item.command.toLowerCase().includes(q) ||
    item.descBurmese.toLowerCase().includes(q) ||
    (item.tag ?? "").toLowerCase().includes(q)
  );
};

/** Wrap every occurrence of the query in a <mark> so hits are easy to spot. */
const Highlight: React.FC<{ text: string; query: string }> = ({
  text,
  query,
}) => {
  const q = query.trim();
  if (!q) return <>{text}</>;

  const parts: React.ReactNode[] = [];
  const lower = text.toLowerCase();
  const needle = q.toLowerCase();
  let cursor = 0;

  while (cursor < text.length) {
    const hit = lower.indexOf(needle, cursor);
    if (hit === -1) {
      parts.push(text.slice(cursor));
      break;
    }
    if (hit > cursor) parts.push(text.slice(cursor, hit));
    parts.push(
      <mark
        key={`${hit}-${parts.length}`}
        className="rounded bg-amber-300/70 px-0.5 text-inherit dark:bg-amber-400/30"
      >
        {text.slice(hit, hit + needle.length)}
      </mark>,
    );
    cursor = hit + needle.length;
  }

  return <>{parts}</>;
};

export const CheatSheetsViewer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Deep links such as /cheatsheets#docker land on that category preselected.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && hash in ACCENTS) setSelectedCategory(hash);
  }, []);

  // "/" focuses search, Escape clears it.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing =
        target?.tagName === "INPUT" || target?.tagName === "TEXTAREA";

      if (event.key === "/" && !typing) {
        event.preventDefault();
        searchRef.current?.focus();
      }
      if (event.key === "Escape" && typing) {
        setSearchQuery("");
        searchRef.current?.blur();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  /** Per-category hit counts, so the pills can show how much is behind them. */
  const counts = useMemo(() => {
    const q = searchQuery.trim();
    const byCategory = CHEATSHEET_DATA.reduce<Record<string, number>>(
      (acc, section) => {
        acc[section.category] = q
          ? section.items.filter((item) => matches(item, q)).length
          : section.items.length;
        return acc;
      },
      {},
    );
    byCategory.all = Object.values(byCategory).reduce((a, b) => a + b, 0);
    return byCategory;
  }, [searchQuery]);

  const filteredSections = useMemo(() => {
    const q = searchQuery.trim();
    return CHEATSHEET_DATA.filter(
      (section) =>
        selectedCategory === "all" || section.category === selectedCategory,
    )
      .map((section) =>
        q
          ? { ...section, items: section.items.filter((i) => matches(i, q)) }
          : section,
      )
      .filter((section) => section.items.length > 0);
  }, [selectedCategory, searchQuery]);

  const shown = filteredSections.reduce((sum, s) => sum + s.items.length, 0);
  const isFiltered = Boolean(searchQuery.trim()) || selectedCategory !== "all";

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  return (
    <div className="w-full">
      {/* ---------- Toolbar ---------- */}
      <div className="sticky top-16 z-30 -mx-4 mb-10 bg-white/95 px-4 py-4 backdrop-blur-md sm:-mx-6 sm:px-6 dark:bg-[#0c0a09]/95">
        <div className="rounded-2xl border border-gray-200/80 bg-white/85 p-4 shadow-sm backdrop-blur-xl dark:border-stone-800 dark:bg-stone-900/85">
          {/* Search: own row, so long placeholders can never push the pills */}
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              ref={searchRef}
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Command ရှာဖွေပါ..."
              aria-label="Search commands"
              className="h-12 w-full min-w-0 rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-24 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-orange-500 focus:bg-white dark:border-stone-800 dark:bg-stone-950 dark:text-white dark:focus:bg-stone-950 [&::-webkit-search-cancel-button]:hidden"
            />
            <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-2">
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="cursor-pointer rounded-lg px-2 py-1 text-xs font-semibold text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-stone-800 dark:hover:text-white"
                >
                  Clear
                </button>
              ) : (
                <kbd className="hidden rounded-md border border-gray-200 bg-white px-1.5 py-0.5 font-mono text-[11px] text-gray-500 sm:block dark:border-stone-700 dark:bg-stone-900 dark:text-gray-400">
                  /
                </kbd>
              )}
            </div>
          </div>

          {/* Category pills: wrap instead of scroll, so nothing overflows */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              const count = counts[cat.id] ?? 0;
              const accent =
                cat.id === "all"
                  ? "bg-gray-900 text-white shadow-md shadow-gray-900/20 dark:bg-white dark:text-gray-900"
                  : ACCENTS[cat.id as Category].pill;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  aria-pressed={isSelected}
                  className={`flex cursor-pointer items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold transition-all ${
                    isSelected
                      ? accent
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
                  } ${count === 0 ? "opacity-40" : ""}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{cat.label}</span>
                  <span
                    className={`rounded-full px-1.5 text-[10px] font-bold tabular-nums ${
                      isSelected ? "bg-black/15" : "bg-black/5 dark:bg-white/10"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Result count */}
          <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500 dark:border-stone-800">
            <span className="tabular-nums">
              {shown} / {TOTAL_ITEMS} commands
            </span>
            {isFiltered && (
              <button
                type="button"
                onClick={resetFilters}
                className="cursor-pointer font-semibold text-orange-600 hover:underline dark:text-orange-400"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ---------- Results ---------- */}
      {filteredSections.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 px-6 py-20 text-center dark:border-stone-800 dark:bg-stone-900/40">
          <Search className="mx-auto mb-4 h-8 w-8 text-gray-300 dark:text-stone-700" />
          <p className="mb-1 text-base font-semibold text-gray-800 dark:text-gray-200">
            ရှာဖွေတွေ့ရှိချက် မရှိပါ
          </p>
          <p className="mb-5 text-sm text-gray-500">"{searchQuery}"</p>
          <button
            type="button"
            onClick={resetFilters}
            className="cursor-pointer rounded-full bg-orange-500 px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-orange-600"
          >
            Filter များ ရှင်းလင်းမည်
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          {filteredSections.map((section) => {
            const accent = ACCENTS[section.category];
            const SectionIcon = CATEGORY_ICONS[section.category];

            return (
              <section key={section.id} id={section.id} className="scroll-mt-40">
                {/* Section header */}
                <div className="mb-5 flex items-center gap-3.5">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accent.gradient} text-white shadow-lg`}
                  >
                    <SectionIcon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-lg font-bold leading-[1.9] text-gray-900 sm:text-xl dark:text-white">
                      {section.titleBurmese}
                    </h2>
                    <p className="text-xs text-gray-500 sm:text-sm">
                      {section.title}
                    </p>
                  </div>
                  <span className="ml-auto shrink-0 rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-bold tabular-nums text-gray-600 dark:bg-stone-800 dark:text-stone-300">
                    {section.items.length}
                  </span>
                </div>

                {/* Items */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  {section.items.map((item, index) => {
                    const itemId = `${section.id}-${index}`;
                    const isCopied = copiedId === itemId;

                    return (
                      <article
                        key={itemId}
                        className={`group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-stone-800 dark:bg-stone-900 ${accent.hover}`}
                      >
                        {/* Explanation */}
                        <div className="flex items-start justify-between gap-3 px-4 pb-3 pt-4">
                          <p className="text-[13px] font-medium leading-7 text-gray-700 dark:text-gray-300">
                            <Highlight
                              text={item.descBurmese}
                              query={searchQuery}
                            />
                          </p>
                          {item.tag && (
                            <span
                              className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${accent.chip}`}
                            >
                              {item.tag}
                            </span>
                          )}
                        </div>

                        {/* Terminal-style code block */}
                        <div className="mt-auto border-t border-gray-100 bg-[#12100e] dark:border-stone-800 dark:bg-[#0a0806]">
                          <div className="flex items-center justify-between border-b border-white/5 px-3 py-1.5">
                            <div className="flex items-center gap-1.5">
                              <span className="h-2 w-2 rounded-full bg-red-500/70" />
                              <span className="h-2 w-2 rounded-full bg-amber-400/70" />
                              <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
                            </div>
                            <button
                              type="button"
                              onClick={() => handleCopy(item.command, itemId)}
                              aria-label="Copy command"
                              className="flex cursor-pointer items-center gap-1.5 rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-stone-400 transition-colors hover:bg-white/10 hover:text-white"
                            >
                              {isCopied ? (
                                <>
                                  <Check className="h-3 w-3 text-emerald-400" />
                                  <span className="text-emerald-400">
                                    Copied
                                  </span>
                                </>
                              ) : (
                                <>
                                  <Copy className="h-3 w-3" />
                                  <span>Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                          <pre className="max-h-64 overflow-auto px-4 py-3.5 font-mono text-xs leading-relaxed text-amber-300 [overflow-wrap:anywhere] whitespace-pre-wrap">
                            <Highlight
                              text={item.command}
                              query={searchQuery}
                            />
                          </pre>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CheatSheetsViewer;
