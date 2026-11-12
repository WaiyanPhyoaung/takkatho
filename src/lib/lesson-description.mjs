/**
 * A search-result description for lessons whose frontmatter description is
 * missing or just repeats the title (129 of 385 lessons when this was added).
 * Built at build time from the lesson's opening prose; the files themselves
 * are not changed, and a description written by hand always wins.
 *
 * Used by src/routeMiddleware.ts.
 */

const MAX = 155; // roughly what Google shows before truncating

/** First paragraph of real prose in an MDX body, as plain text. */
export function openingProse(body) {
  const lines = body
    .replace(/```[\s\S]*?```/g, "\n") // code blocks
    // Code some lessons keep in template strings: export const x = `...`,
    // code={`...`}. Anchored on "=" or "{" so inline code in prose, such as
    // (`?`), is untouched.
    .replace(/[={]\s*`[^`]*`/g, "\n")
    .replace(/<!--[\s\S]*?-->/g, "\n") // HTML comments
    .split("\n");

  const paragraphs = [];
  let current = [];
  const flush = () => {
    if (current.length) paragraphs.push(current.join(" "));
    current = [];
  };
  for (const raw of lines) {
    const line = raw.trim();
    const structural =
      !line ||
      /^(import|export)\s/.test(line) || // MDX imports
      /^#{1,6}\s/.test(line) || // headings
      /^<\/?[A-Za-z]/.test(line) || // components and HTML
      /^[|>-]{1,3}\s*[-|:]*\s*$/.test(line) || // table rules, empty quotes
      /^\|/.test(line) || // table rows
      /^[-*+]\s|^\d+\.\s/.test(line) || // list items
      /^\{.*\}$/.test(line) || // MDX expressions
      /^(\/\/|\/\*|\*)/.test(line) || // code comments
      /[;{}]\s*$/.test(line); // lines that end like code
    if (structural) flush();
    else current.push(line.replace(/^>\s*/, ""));
  }
  flush();

  // Inline code keeps its text, even when that text looks like a tag
  // (`<details>`); only real inline HTML outside code is dropped.
  const clean = (text) =>
    text
      .split(/(`[^`]+`)/)
      .map((part, i) =>
        i % 2
          ? part.slice(1, -1)
          : part
              .replace(/!\[[^\]]*\]\([^)]*\)/g, "") // images
              .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // links -> text
              .replace(/(\*\*|__|\*)/g, "") // emphasis marks
              .replace(/<[^>]+>/g, ""), // inline HTML
      )
      .join("")
      .replace(/\s+/g, " ")
      .trim();

  // Skip paragraphs that are really code (samples kept in template strings can
  // survive the line rules) and ones with no Burmese, so the description is
  // always lesson prose.
  const looksLikeCode = (text) => /[;{}`]|=>|\/\/|\$\{/.test(text);
  const hasBurmese = (text) => /[\u1000-\u109F]/.test(text);
  return (
    paragraphs
      .map(clean)
      .find((text) => text.length >= 40 && hasBurmese(text) && !looksLikeCode(text)) ?? ""
  );
}

/** Shorten to MAX characters, ending on a Burmese full stop (။) or a word. */
export function toDescription(text) {
  if (text.length <= MAX) return text;
  const head = text.slice(0, MAX);
  const sentenceEnd = head.lastIndexOf("။");
  if (sentenceEnd >= 60) return head.slice(0, sentenceEnd + 1);
  const space = head.lastIndexOf(" ");
  return `${head.slice(0, space > 60 ? space : MAX).trimEnd()}…`;
}

/** True when a lesson needs a generated description. */
export const needsDescription = (title, description) =>
  !description || description.trim() === title.trim();
