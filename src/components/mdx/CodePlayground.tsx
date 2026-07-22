import React, { useState, useEffect } from "react";

interface CodePlaygroundProps {
  title?: string;
  initialHtml?: string;
  initialCss?: string;
  initialJs?: string;
}

const defaultHtml = `<div class="card">
  <h1>Hello Takkatho! 👋</h1>
  <p>မင်္ဂလာပါ! Live Code Playground တွင် စမ်းသပ် ပြင်ဆင်ကြည့်ပါ။</p>
  <button id="btn">Click Me!</button>
</div>`;

const defaultCss = `body {
  font-family: system-ui, sans-serif;
  background: #0f172a;
  color: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.card {
  background: #1e293b;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #334155;
  text-align: center;
  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5);
}

h1 {
  color: #f97316;
  margin-top: 0;
}

button {
  background: linear-gradient(135deg, #f97316, #f59e0b);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
}

button:hover {
  transform: scale(1.05);
}`;

const defaultJs = `document.getElementById('btn').addEventListener('click', () => {
  alert('🎉 Takkatho Playground တွင် အောင်မြင်စွာ စမ်းသပ်ပြီးပါပြီ!');
});`;

export const CodePlayground: React.FC<CodePlaygroundProps> = ({
  title = "Interactive Live Playground",
  initialHtml = defaultHtml,
  initialCss = defaultCss,
  initialJs = defaultJs,
}) => {
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [js, setJs] = useState(initialJs);
  const [activeTab, setActiveTab] = useState<"html" | "css" | "js">("html");
  const [srcDoc, setSrcDoc] = useState("");
  const [copied, setCopied] = useState(false);

  const runCode = () => {
    const combined = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `;
    setSrcDoc(combined);
  };

  useEffect(() => {
    runCode();
  }, []);

  const handleReset = () => {
    setHtml(initialHtml);
    setCss(initialCss);
    setJs(initialJs);
    runCode();
  };

  const handleCopy = () => {
    let textToCopy = html;
    if (activeTab === "css") textToCopy = css;
    if (activeTab === "js") textToCopy = js;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-10 rounded-3xl bg-stone-950 border border-orange-500/30 text-stone-100 shadow-2xl overflow-hidden backdrop-blur-xl">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-stone-900 border-b border-stone-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 font-bold flex items-center justify-center text-sm">
            💻
          </div>
          <h3 className="text-base font-bold text-white">{title}</h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-300 transition-colors cursor-pointer"
          >
            {copied ? "✓ Copied!" : "📋 Copy Code"}
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-300 transition-colors cursor-pointer"
          >
            🔄 Reset
          </button>
          <button
            onClick={runCode}
            className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
          >
            Run Code ⚡
          </button>
        </div>
      </div>

      {/* Main Grid: Code Editor & Output */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-stone-800 min-h-[420px]">
        {/* Left Column: Code Editor */}
        <div className="flex flex-col bg-stone-950">
          {/* Tabs */}
          <div className="flex border-b border-stone-800 bg-stone-900/50">
            <button
              onClick={() => setActiveTab("html")}
              className={`px-4 py-2.5 text-xs font-bold transition-colors cursor-pointer ${
                activeTab === "html"
                  ? "bg-orange-500/20 text-orange-400 border-b-2 border-orange-500"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              HTML
            </button>
            <button
              onClick={() => setActiveTab("css")}
              className={`px-4 py-2.5 text-xs font-bold transition-colors cursor-pointer ${
                activeTab === "css"
                  ? "bg-orange-500/20 text-orange-400 border-b-2 border-orange-500"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              CSS
            </button>
            <button
              onClick={() => setActiveTab("js")}
              className={`px-4 py-2.5 text-xs font-bold transition-colors cursor-pointer ${
                activeTab === "js"
                  ? "bg-orange-500/20 text-orange-400 border-b-2 border-orange-500"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              JavaScript
            </button>
          </div>

          {/* Textarea Editor */}
          <div className="relative flex-1 p-4">
            {activeTab === "html" && (
              <textarea
                value={html}
                onChange={(e) => setHtml(e.target.value)}
                className="w-full h-full min-h-[340px] bg-transparent text-orange-300 font-mono text-xs leading-relaxed outline-none resize-none"
                spellCheck={false}
              />
            )}
            {activeTab === "css" && (
              <textarea
                value={css}
                onChange={(e) => setCss(e.target.value)}
                className="w-full h-full min-h-[340px] bg-transparent text-amber-300 font-mono text-xs leading-relaxed outline-none resize-none"
                spellCheck={false}
              />
            )}
            {activeTab === "js" && (
              <textarea
                value={js}
                onChange={(e) => setJs(e.target.value)}
                className="w-full h-full min-h-[340px] bg-transparent text-yellow-300 font-mono text-xs leading-relaxed outline-none resize-none"
                spellCheck={false}
              />
            )}
          </div>
        </div>

        {/* Right Column: Live Output Iframe */}
        <div className="flex flex-col bg-white">
          <div className="px-4 py-2 bg-stone-900 border-b border-stone-800 text-xs font-semibold text-stone-400 flex items-center justify-between">
            <span>Live Output Preview</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          </div>
          <iframe
            srcDoc={srcDoc}
            title="Live Output"
            sandbox="allow-scripts"
            className="w-full flex-1 min-h-[340px] border-none bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;
