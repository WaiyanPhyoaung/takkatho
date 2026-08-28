import React, { useState, useMemo } from "react";
import {
  Search,
  Copy,
  Check,
  Terminal,
  GitBranch,
  Database,
  Layers,
  Zap,
  Code,
  FolderGit2,
  X,
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

const CATEGORIES = [
  { id: "all", label: "အားလုံး (All)", icon: Layers },
  { id: "git", label: "Git", icon: GitBranch },
  { id: "docker", label: "Docker", icon: FolderGit2 },
  { id: "linux", label: "Linux / VPS", icon: Terminal },
  { id: "sql", label: "SQL", icon: Database },
  { id: "css", label: "CSS Layouts", icon: Code },
  { id: "n8n", label: "n8n Automation", icon: Zap },
];

export const CheatSheetsViewer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    // navigator.clipboard is unavailable on insecure origins and older browsers,
    // so fall back to a temporary textarea instead of failing silently.
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
        /* nothing more we can do */
      }
      document.body.removeChild(textarea);
    }
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const filteredSections = useMemo(() => {
    return CHEATSHEET_DATA.filter((section) => {
      if (selectedCategory !== "all" && section.category !== selectedCategory) {
        return false;
      }
      return true;
    }).map((section) => {
      if (!searchQuery.trim()) return section;
      const q = searchQuery.toLowerCase();
      const matchingItems = section.items.filter(
        (item) =>
          item.command.toLowerCase().includes(q) ||
          item.descBurmese.toLowerCase().includes(q) ||
          (item.tag && item.tag.toLowerCase().includes(q))
      );
      return {
        ...section,
        items: matchingItems,
      };
    }).filter((section) => section.items.length > 0);
  }, [selectedCategory, searchQuery]);

  const totalMatches = useMemo(
    () => filteredSections.reduce((sum, section) => sum + section.items.length, 0),
    [filteredSections],
  );

  return (
    <div className="w-full space-y-8">
      {/* Controls Bar: Search & Category Pills */}
      <div className="flex flex-col xl:flex-row xl:items-center gap-3 xl:gap-4 p-4 rounded-2xl bg-white dark:bg-stone-900/70 border border-gray-200 dark:border-stone-800 shadow-sm backdrop-blur-xl">
        {/* Search Input */}
        <div className="relative w-full min-w-0 xl:w-80 xl:shrink-0">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
          />
          <input
            id="cheatsheet-search"
            type="text"
            inputMode="search"
            autoComplete="off"
            aria-label="Command သို့မဟုတ် အကြောင်းအရာ ရှာဖွေရန်"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setSearchQuery("");
            }}
            placeholder="Command ရှာဖွေပါ (reset, port, grid...)"
            className="w-full min-w-0 h-11 pl-10 pr-10 rounded-xl bg-gray-50 dark:bg-stone-950 border border-gray-200 dark:border-stone-800 text-sm text-gray-900 dark:text-white outline-none transition-colors placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="ရှာဖွေမှုကို ရှင်းလင်းမည်"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 grid place-items-center w-6 h-6 rounded-md text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-200/70 dark:hover:bg-stone-800 transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Categories Horizontal Scroll */}
        <div className="-mx-1 min-w-0 xl:flex-1 overflow-x-auto scrollbar-hide">
          <div
            role="group"
            aria-label="Category filter"
            className="flex w-max items-center gap-2 px-1 py-0.5"
          >
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex shrink-0 items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40 ${
                    isSelected
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20"
                      : "bg-gray-100 dark:bg-stone-800 text-gray-600 dark:text-stone-300 hover:bg-gray-200 dark:hover:bg-stone-700"
                  }`}
                >
                  <Icon aria-hidden="true" className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Result Count */}
      <p
        aria-live="polite"
        className="-mt-4 px-1 text-xs text-gray-500 dark:text-gray-400"
      >
        {totalMatches} command
        {totalMatches !== 1 ? "s" : ""} တွေ့ရှိသည်
        {searchQuery.trim() && (
          <>
            {" — "}
            <strong className="font-semibold text-gray-700 dark:text-gray-200">
              "{searchQuery.trim()}"
            </strong>
          </>
        )}
      </p>

      {/* Cheat Sheets Grid Sections */}
      {filteredSections.length === 0 ? (
        <div className="text-center py-16 p-6 rounded-3xl bg-gray-50 dark:bg-stone-900/40 border border-dashed border-gray-300 dark:border-stone-800">
          <p className="text-gray-500 dark:text-gray-400 text-base mb-2">
            {searchQuery.trim()
              ? `ရှာဖွေတွေ့ရှိချက် မရှိပါ: "${searchQuery.trim()}"`
              : "ဒီ Category အတွက် အကြောင်းအရာ မရှိသေးပါ"}
          </p>
          <button
            type="button"
            onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
            className="text-xs font-bold text-orange-500 hover:underline"
          >
            Filter များကို အစမှ ပြန်လည်စတင်မည်
          </button>
        </div>
      ) : (
        <div className="space-y-10">
          {filteredSections.map((section) => (
            <div
              key={section.id}
              className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-stone-900/60 border border-gray-200 dark:border-stone-800/80 shadow-lg backdrop-blur-xl"
            >
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-stone-800">
                <div
                  className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center text-white font-bold shadow-md`}
                >
                  {section.category === "git" && <GitBranch className="w-5 h-5" />}
                  {section.category === "docker" && <FolderGit2 className="w-5 h-5" />}
                  {section.category === "linux" && <Terminal className="w-5 h-5" />}
                  {section.category === "sql" && <Database className="w-5 h-5" />}
                  {section.category === "css" && <Code className="w-5 h-5" />}
                  {section.category === "n8n" && <Zap className="w-5 h-5" />}
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    {section.titleBurmese}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {section.title}
                  </p>
                </div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {section.items.map((item, index) => {
                  const itemId = `${section.id}-${index}`;
                  const isCopied = copiedIndex === itemId;

                  return (
                    <div
                      key={itemId}
                      className="group relative flex flex-col justify-between p-4 rounded-2xl bg-gray-50/80 dark:bg-stone-950/80 border border-gray-200/80 dark:border-stone-800/80 hover:border-orange-500/50 transition-all hover:shadow-md"
                    >
                      <div>
                        {/* Tag and Explanation */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 line-clamp-2">
                            {item.descBurmese}
                          </span>
                          {item.tag && (
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 shrink-0">
                              {item.tag}
                            </span>
                          )}
                        </div>

                        {/* Code Block */}
                        <div className="relative mt-2 p-3 rounded-xl bg-gray-900 text-amber-300 dark:text-amber-400 font-mono text-xs overflow-x-auto leading-relaxed border border-stone-800">
                          <pre className="pr-8 whitespace-pre-wrap break-words">{item.command}</pre>

                          {/* 1-Click Copy Button */}
                          <button
                            onClick={() => handleCopy(item.command, itemId)}
                            className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-stone-800/90 hover:bg-stone-700 text-stone-300 hover:text-white transition-all shadow-sm cursor-pointer"
                            title="Copy code"
                          >
                            {isCopied ? (
                              <Check className="w-3.5 h-3.5 text-green-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheatSheetsViewer;
