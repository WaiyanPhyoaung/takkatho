/**
 * Cheat sheet content for /cheatsheets.
 *
 * `lang` drives both the prompt sigil shown before a command and the syntax
 * tokenizer, so keep it accurate: "shell" for anything you paste into a
 * terminal, "sql", "css", "js" for source snippets, "n8n" for expressions.
 */

export type CheatLang = "shell" | "sql" | "css" | "js" | "n8n";

export type CheatItem = {
  command: string;
  descBurmese: string;
  lang: CheatLang;
  tag?: string;
};

export type CheatCategoryId =
  | "git"
  | "docker"
  | "linux"
  | "sql"
  | "css"
  | "javascript"
  | "npm"
  | "n8n";

export type CheatSection = {
  id: CheatCategoryId;
  title: string;
  titleBurmese: string;
  /** Short mono sigil used as the section marker. */
  sigil: string;
  items: CheatItem[];
};

export const CHEATSHEET_DATA: CheatSection[] = [
  {
    id: "git",
    title: "Git Version Control",
    titleBurmese: "Git မရှိမဖြစ် Commands များ",
    sigil: "git",
    items: [
      {
        command: "git switch -c feature/new-page",
        descBurmese: "Branch အသစ်ဆောက်ပြီး ချက်ချင်း ကူးပြောင်းလုပ်ကိုင်မည်",
        lang: "shell",
        tag: "Branching",
      },
      {
        command: "git switch main",
        descBurmese: "main branch ပေါ်သို့ ပြန်ကူးပြောင်းမည်",
        lang: "shell",
        tag: "Branching",
      },
      {
        command: "git add -A && git commit -m 'feat: update ui'",
        descBurmese: "ပြင်ဆင်ချက်အားလုံးကို stage လုပ်ပြီး commit မှတ်မည်",
        lang: "shell",
        tag: "Commit",
      },
      {
        command: "git commit --amend -m 'fix: correct message'",
        descBurmese:
          "နောက်ဆုံး commit ၏ message ကို ပြန်ပြင်မည် (push မလုပ်ရသေးမှသာ သုံးပါ)",
        lang: "shell",
        tag: "Commit",
      },
      {
        command: "git reset --soft HEAD~1",
        descBurmese:
          "နောက်ဆုံး commit ကို ဖျက်ပြီး code ပြင်ဆင်ချက်များကို staged အဖြစ် ပြန်ချန်ထားမည် (Undo)",
        lang: "shell",
        tag: "Undo",
      },
      {
        command: "git restore --staged <file>",
        descBurmese: "git add လုပ်ထားသော ဖိုင်ကို unstaged အဖြစ် ပြန်ပြောင်းမည်",
        lang: "shell",
        tag: "Undo",
      },
      {
        command: "git restore <file>",
        descBurmese:
          "ဖိုင်တစ်ခု၏ သိမ်းမထားသော ပြင်ဆင်ချက်များကို နောက်ဆုံး commit အတိုင်း ပြန်လည်ရုပ်သိမ်းမည်",
        lang: "shell",
        tag: "Undo",
      },
      {
        command: "git revert <commit_hash>",
        descBurmese:
          "History မဖျက်ဘဲ commit တစ်ခု၏ အကျိုးသက်ရောက်မှုကို ပြောင်းပြန်လုပ်သည့် commit အသစ် ဆောက်မည်",
        lang: "shell",
        tag: "Undo",
      },
      {
        command: "git stash push -m 'wip-feature'",
        descBurmese: "လက်ရှိ မပြီးသေးသော code များကို ယာယီ ဖယ်သိမ်းထားမည်",
        lang: "shell",
        tag: "Stash",
      },
      {
        command: "git stash pop",
        descBurmese: "ယာယီ သိမ်းဆည်းထားသော code များကို ပြန်လည် ထုတ်ယူမည်",
        lang: "shell",
        tag: "Stash",
      },
      {
        command: "git log --oneline --graph --all",
        descBurmese:
          "Commit history များကို သစ်ကိုင်းပုံစံဖြင့် တစ်ကြောင်းတည်း ရှင်းလင်းစွာ ကြည့်မည်",
        lang: "shell",
        tag: "Logs",
      },
      {
        command: "git diff --staged",
        descBurmese:
          "Commit မလုပ်ခင် stage လုပ်ထားသော ပြင်ဆင်ချက်များကို အတိအကျ စစ်ဆေးမည်",
        lang: "shell",
        tag: "Review",
      },
      {
        command: "git rebase -i HEAD~3",
        descBurmese:
          "နောက်ဆုံး commit ၃ ခုကို squash/reword/reorder ပြုလုပ်၍ History သပ်ရပ်စေမည်",
        lang: "shell",
        tag: "Rebase",
      },
      {
        command: "git cherry-pick <commit_hash>",
        descBurmese:
          "အခြား branch မှ commit တစ်ခုတည်းကို လက်ရှိ branch ပေါ်သို့ ရွေးချယ်ယူမည်",
        lang: "shell",
        tag: "Rebase",
      },
      {
        command: "git pull --rebase origin main",
        descBurmese:
          "Remote အပြောင်းအလဲများကို merge commit မထည့်ဘဲ မိမိ commit များအောက်တွင် ထပ်ဆင့်ယူမည်",
        lang: "shell",
        tag: "Remote",
      },
      {
        command: "git push -u origin feature/new-page",
        descBurmese:
          "Local branch ကို remote သို့ တင်ပြီး tracking ချိတ်ဆက်မည် (နောက်ပိုင်း git push ရိုက်ရုံဖြင့် ရမည်)",
        lang: "shell",
        tag: "Remote",
      },
      {
        command: "git blame <file>",
        descBurmese:
          "ဖိုင်၏ စာကြောင်းတိုင်းကို နောက်ဆုံး ပြင်ဆင်သူနှင့် commit ကို လိုက်ရှာမည်",
        lang: "shell",
        tag: "Review",
      },
      {
        command: "git clean -fd",
        descBurmese:
          "Git မသိမ်းထားသော Untracked files နှင့် folders အားလုံးကို အပြီးသတ် ဖျက်ထုတ်မည်",
        lang: "shell",
        tag: "Cleanup",
      },
    ],
  },
  {
    id: "docker",
    title: "Docker & Docker Compose",
    titleBurmese: "Docker CLI & Containers စီမံခန့်ခွဲမှု",
    sigil: "dkr",
    items: [
      {
        command: "docker run -d -p 8080:80 --name my-web nginx:alpine",
        descBurmese:
          "Nginx container ကို background တွင် port 8080 ဖွင့်၍ စတင် run မည်",
        lang: "shell",
        tag: "Containers",
      },
      {
        command: "docker ps -a",
        descBurmese:
          "Run နေသော (သို့) ရပ်တန့်နေသော Containers အားလုံး၏ စာရင်းကို ကြည့်မည်",
        lang: "shell",
        tag: "Containers",
      },
      {
        command: "docker stop <container_id> && docker rm <container_id>",
        descBurmese: "Container ကို ရပ်တန့်ပြီး အပြီးသတ် ဖျက်ထုတ်မည်",
        lang: "shell",
        tag: "Containers",
      },
      {
        command: "docker exec -it <container_id> sh",
        descBurmese:
          "Run နေသော Container အတွင်းသို့ Terminal ဖြင့် ဝင်ရောက် အလုပ်လုပ်မည်",
        lang: "shell",
        tag: "Exec",
      },
      {
        command: "docker build -t my-app:latest .",
        descBurmese:
          "လက်ရှိ folder ရှိ Dockerfile ကို အသုံးပြု၍ Image အသစ် build လုပ်မည်",
        lang: "shell",
        tag: "Images",
      },
      {
        command: "docker images",
        descBurmese: "Local machine ပေါ်ရှိ Image အားလုံးနှင့် အရွယ်အစားများ ကြည့်မည်",
        lang: "shell",
        tag: "Images",
      },
      {
        command: "docker logs -f --tail 100 <container_id>",
        descBurmese:
          "Container ၏ နောက်ဆုံး log ၁၀၀ ကြောင်းမှစ၍ real-time စောင့်ကြည့်မည်",
        lang: "shell",
        tag: "Logs",
      },
      {
        command: "docker compose up -d --build",
        descBurmese:
          "Docker Compose service များကို image အသစ် build လုပ်ပြီး background တွင် စတင်မည်",
        lang: "shell",
        tag: "Compose",
      },
      {
        command: "docker compose down",
        descBurmese: "Compose service အားလုံးကို ရပ်တန့်ပြီး Containers များ ဖျက်မည်",
        lang: "shell",
        tag: "Compose",
      },
      {
        command: "docker compose logs -f <service_name>",
        descBurmese:
          "Compose service ၏ Logs များကို Real-time streaming စောင့်ကြည့်မည်",
        lang: "shell",
        tag: "Logs",
      },
      {
        command: "docker compose exec <service_name> sh",
        descBurmese: "Compose service အတွင်းသို့ Terminal ဖြင့် ဝင်ရောက်မည်",
        lang: "shell",
        tag: "Compose",
      },
      {
        command: "docker inspect <container_id>",
        descBurmese:
          "Container ၏ Config, Network, Mounts အစရှိသော အချက်အလက်အားလုံးကို JSON ဖြင့် ကြည့်မည်",
        lang: "shell",
        tag: "Debug",
      },
      {
        command: "docker cp <container_id>:/app/log.txt ./log.txt",
        descBurmese: "Container အတွင်းမှ ဖိုင်ကို Host machine ပေါ်သို့ ကူးယူမည်",
        lang: "shell",
        tag: "Debug",
      },
      {
        command: "docker volume ls",
        descBurmese:
          "Data သိမ်းဆည်းရာ Volume အားလုံး၏ စာရင်းကို ကြည့်မည်",
        lang: "shell",
        tag: "Volumes",
      },
      {
        command: "docker system prune -af --volumes",
        descBurmese:
          "မသုံးတော့သော Containers, Images, Networks နှင့် Volumes အားလုံးကို ရှင်းလင်း၍ Disk နေရာ ပြန်ယူမည်",
        lang: "shell",
        tag: "Cleanup",
      },
    ],
  },
  {
    id: "linux",
    title: "Linux & VPS Server",
    titleBurmese: "Ubuntu Server & Terminal Commands",
    sigil: "sh",
    items: [
      {
        command: "ls -lah",
        descBurmese:
          "ဖိုင်အရွယ်အစား (MB/GB)၊ hidden files နှင့် permissions အားလုံးကို စာရင်းကြည့်မည်",
        lang: "shell",
        tag: "CLI",
      },
      {
        command: "grep -rin 'search_text' ./src",
        descBurmese:
          "Folder အတွင်းရှိ ဖိုင်အားလုံးထဲမှ စာလုံးကို စာကြောင်းနံပါတ်ဖြင့် လိုက်ရှာမည် (စာလုံးအကြီးအသေး ခွဲမည်မဟုတ်)",
        lang: "shell",
        tag: "Search",
      },
      {
        command: "find . -name '*.log' -type f",
        descBurmese:
          "လက်ရှိ folder နှင့် အောက်ခံ folder အားလုံးမှ .log ဖိုင်များကို လိုက်ရှာမည်",
        lang: "shell",
        tag: "Search",
      },
      {
        command: "tail -f /var/log/nginx/error.log",
        descBurmese:
          "Nginx Error logs များကို real-time အသစ်တက်လာတိုင်း ချက်ချင်း စောင့်ကြည့်မည်",
        lang: "shell",
        tag: "Logs",
      },
      {
        command: "df -h",
        descBurmese: "Disk နေရာ ကုန်ခြင်း/လွတ်ခြင်းကို ဖတ်ရလွယ်သော ပုံစံဖြင့် ကြည့်မည်",
        lang: "shell",
        tag: "Disk",
      },
      {
        command: "du -sh ./* | sort -h",
        descBurmese:
          "လက်ရှိ folder အတွင်းရှိ အရာများ၏ အရွယ်အစားကို အနည်းမှအများ စီပြမည် (နေရာစားသူ ရှာရန်)",
        lang: "shell",
        tag: "Disk",
      },
      {
        command: "chmod 644 <file> && chmod 755 <folder>",
        descBurmese:
          "Web files များအတွက် အသင့်တော်ဆုံး Standard Permissions များ သတ်မှတ်မည်",
        lang: "shell",
        tag: "Security",
      },
      {
        command: "sudo chown -R $USER:$USER /var/www/my-site",
        descBurmese:
          "Folder နှင့် အောက်ခံအားလုံး၏ ပိုင်ရှင်ကို လက်ရှိ user အဖြစ် ပြောင်းလဲမည်",
        lang: "shell",
        tag: "Security",
      },
      {
        command: "sudo systemctl restart <service_name>",
        descBurmese:
          "Systemd background service (e.g. nginx, nodejs) ကို ပြန်လည်စတင်မည်",
        lang: "shell",
        tag: "Systemd",
      },
      {
        command: "sudo systemctl status <service_name>",
        descBurmese:
          "Service သည် run နေသလား၊ error တက်နေသလား အခြေအနေ စစ်ဆေးမည်",
        lang: "shell",
        tag: "Systemd",
      },
      {
        command: "sudo journalctl -u <service_name> -f",
        descBurmese:
          "Systemd service ၏ console.log output များကို real-time ခြေရာခံမည်",
        lang: "shell",
        tag: "Systemd",
      },
      {
        command: "ps aux | grep node",
        descBurmese:
          "Run နေသော Node.js process များနှင့် ၎င်းတို့၏ PID ကို လိုက်ရှာမည်",
        lang: "shell",
        tag: "Process",
      },
      {
        command: "kill -9 <pid>",
        descBurmese: "တုံ့ဆိုင်းနေသော process ကို အတင်းအကြပ် ရပ်တန့်မည်",
        lang: "shell",
        tag: "Process",
      },
      {
        command: "sudo ufw allow 80/tcp && sudo ufw allow 443/tcp",
        descBurmese:
          "Web traffic များအတွက် HTTP (80) နှင့် HTTPS (443) firewall ports များကို ဖွင့်ပေးမည်",
        lang: "shell",
        tag: "Firewall",
      },
      {
        command: "sudo certbot --nginx -d example.com",
        descBurmese:
          "Let's Encrypt ဖြင့် အခမဲ့ HTTPS SSL certificate ထုတ်ယူပြီး Nginx တွင် auto တပ်ဆင်မည်",
        lang: "shell",
        tag: "SSL",
      },
      {
        command: "ssh-keygen -t ed25519 -C 'my@email.com'",
        descBurmese:
          "Password မလိုဘဲ Server ဝင်ရန် လုံခြုံမြန်ဆန်သော SSH key အသစ် ဖန်တီးမည်",
        lang: "shell",
        tag: "SSH",
      },
      {
        command: "scp ./backup.zip user@1.2.3.4:/home/user/",
        descBurmese: "Local ဖိုင်ကို Remote Server ပေါ်သို့ လုံခြုံစွာ ကူးတင်မည်",
        lang: "shell",
        tag: "Transfer",
      },
      {
        command: "rsync -avz --progress ./dist/ user@1.2.3.4:/var/www/html/",
        descBurmese:
          "ပြောင်းလဲသော ဖိုင်များကိုသာ ရွေးချယ်ကူးယူ၍ Server ပေါ်သို့ မြန်ဆန်စွာ deploy လုပ်မည်",
        lang: "shell",
        tag: "Transfer",
      },
      {
        command: "tar -czvf backup.tar.gz ./my-folder",
        descBurmese: "Folder တစ်ခုလုံးကို ချုံ့၍ backup ဖိုင် တစ်ဖိုင်တည်း ပြုလုပ်မည်",
        lang: "shell",
        tag: "Archive",
      },
      {
        command: "crontab -e",
        descBurmese:
          "အချိန်မှန် အလိုအလျောက် run မည့် Scheduled jobs များကို ပြင်ဆင်မည်",
        lang: "shell",
        tag: "Cron",
      },
    ],
  },
  {
    id: "sql",
    title: "SQL & Database Queries",
    titleBurmese: "SQL ဒေတာဘေ့စ် မေးခွန်းထုတ်မှုများ",
    sigil: "sql",
    items: [
      {
        command:
          "SELECT u.id, u.name, COUNT(o.id) AS total_orders\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nWHERE u.status = 'active'\nGROUP BY u.id, u.name\nHAVING COUNT(o.id) > 5\nORDER BY total_orders DESC\nLIMIT 20;",
        descBurmese:
          "Active users များထဲမှ Order ၅ ခုထက်ပိုသော သူများကို တွက်ချက်၍ အများဆုံးမှ အနည်းဆုံးသို့ စီပြခြင်း",
        lang: "sql",
        tag: "Aggregations",
      },
      {
        command:
          "INSERT INTO users (name, email, role)\nVALUES ('Mg Mg', 'mgmg@example.com', 'developer')\nON CONFLICT (email) DO UPDATE SET updated_at = NOW();",
        descBurmese:
          "ဒေတာအသစ် ထည့်သွင်းခြင်း (Email တူနေပါက update လုပ်ပေးမည့် Upsert ပုံစံ)",
        lang: "sql",
        tag: "CRUD",
      },
      {
        command:
          "UPDATE orders\nSET status = 'shipped', updated_at = NOW()\nWHERE id = 1042;",
        descBurmese:
          "Order တစ်ခု၏ status ကို ပြောင်းလဲခြင်း (WHERE မပါပါက row အားလုံး ပြောင်းသွားမည်ကို သတိပြုပါ)",
        lang: "sql",
        tag: "CRUD",
      },
      {
        command: "DELETE FROM sessions\nWHERE expires_at < NOW();",
        descBurmese: "သက်တမ်းကုန်သွားသော Session မှတ်တမ်းများကို ရှင်းလင်းခြင်း",
        lang: "sql",
        tag: "CRUD",
      },
      {
        command:
          "CREATE TABLE posts (\n  id SERIAL PRIMARY KEY,\n  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,\n  title VARCHAR(200) NOT NULL,\n  created_at TIMESTAMPTZ DEFAULT NOW()\n);",
        descBurmese:
          "Foreign key နှင့် Default value များပါဝင်သော Table အသစ် တည်ဆောက်ခြင်း",
        lang: "sql",
        tag: "Schema",
      },
      {
        command: "ALTER TABLE users ADD COLUMN phone VARCHAR(20);",
        descBurmese: "လက်ရှိ Table တွင် Column အသစ် ထပ်ထည့်ခြင်း",
        lang: "sql",
        tag: "Schema",
      },
      {
        command: "CREATE INDEX idx_users_email ON users(email);",
        descBurmese:
          "Email ဖြင့် ရှာဖွေရာတွင် မြန်ဆန်စေရန် B-Tree Index တည်ဆောက်ခြင်း",
        lang: "sql",
        tag: "Indexing",
      },
      {
        command:
          "SELECT name, department, salary,\n  RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank\nFROM employees;",
        descBurmese:
          "ဌာနအလိုက် လစာအမြင့်ဆုံးမှ အဆင့်သတ်မှတ်ခြင်း (Window Function)",
        lang: "sql",
        tag: "Window",
      },
      {
        command:
          "WITH monthly AS (\n  SELECT DATE_TRUNC('month', created_at) AS month, SUM(total) AS revenue\n  FROM orders\n  GROUP BY 1\n)\nSELECT * FROM monthly ORDER BY month DESC;",
        descBurmese:
          "CTE (WITH) ဖြင့် လအလိုက် ရောင်းအား စုစည်းတွက်ချက်ခြင်း (ရှည်လျားသော query ကို ဖတ်ရလွယ်စေသည်)",
        lang: "sql",
        tag: "CTE",
      },
      {
        command:
          "SELECT * FROM users\nWHERE id IN (SELECT user_id FROM orders WHERE total > 100000);",
        descBurmese:
          "တစ်သိန်းအထက် အော်ဒါမှာထားသူများ၏ အချက်အလက်ကို Subquery ဖြင့် ထုတ်ယူခြင်း",
        lang: "sql",
        tag: "Subquery",
      },
      {
        command:
          "BEGIN;\nUPDATE accounts SET balance = balance - 5000 WHERE id = 1;\nUPDATE accounts SET balance = balance + 5000 WHERE id = 2;\nCOMMIT;",
        descBurmese:
          "ငွေလွဲခြင်းကဲ့သို့ အားလုံးအောင်မြင်ရမည့် လုပ်ဆောင်ချက်များကို Transaction ဖြင့် ကာကွယ်ခြင်း",
        lang: "sql",
        tag: "Transaction",
      },
      {
        command: "SELECT DISTINCT country FROM users ORDER BY country;",
        descBurmese: "ထပ်နေသော ဒေတာများကို ဖယ်ရှား၍ တစ်မျိုးတစ်ခုသာ ထုတ်ပြခြင်း",
        lang: "sql",
        tag: "Filtering",
      },
      {
        command:
          "SELECT * FROM users\nWHERE created_at >= NOW() - INTERVAL '7 days';",
        descBurmese: "လွန်ခဲ့သော ၇ ရက်အတွင်း အသစ်အသင်းဝင်လာသူများကို ရှာဖွေခြင်း",
        lang: "sql",
        tag: "Filtering",
      },
      {
        command:
          "EXPLAIN ANALYZE SELECT * FROM orders WHERE created_at >= NOW() - INTERVAL '7 days';",
        descBurmese:
          "Query ၏ အမှန်တကယ် Run ချိန်နှင့် Index Scan အလုပ်လုပ်ပုံကို စစ်ဆေးခြင်း",
        lang: "sql",
        tag: "Performance",
      },
    ],
  },
  {
    id: "css",
    title: "CSS Layout & Modern Features",
    titleBurmese: "ခေတ်မီ CSS Layout Snippets",
    sigil: "css",
    items: [
      {
        command:
          "/* အရာအားလုံးကို အလယ်ဗဟိုတည့်တည့် ချထားနည်း (Center Anything) */\ndisplay: grid;\nplace-items: center;",
        descBurmese:
          "Container အတွင်းရှိ မည်သည့်အရာမဆို ဒေါင်လိုက်ရော အလျားလိုက်ပါ အလယ်တည့်တည့် ပို့ဆောင်နည်း",
        lang: "css",
        tag: "Centering",
      },
      {
        command:
          "/* Auto-Responsive Cards Grid (Media Queries မလိုဘဲ အလိုအလျောက် ကျစ်လစ်စေသည်) */\ndisplay: grid;\ngrid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\ngap: 1.5rem;",
        descBurmese:
          "Screen အရွယ်အစားအလိုက် ၁ လိုင်းတွင် ၂ ကဒ်/၃ ကဒ် အလိုအလျောက် ချိန်ညှိပေးသည့် Responsive Grid",
        lang: "css",
        tag: "Grid",
      },
      {
        command:
          "/* Flexbox Navigation Header (ဘယ်/ညာ ခွဲထုတ်ခြင်း) */\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\ngap: 1rem;",
        descBurmese:
          "Logo ကို ဘယ်ဘက်၊ Nav links များကို ညာဘက်တွင် ညီညာစွာ ခွဲခြားထားခြင်း",
        lang: "css",
        tag: "Flexbox",
      },
      {
        command:
          "/* Flex item များ ကျုံ့မရဘဲ ဘောင်ကျော်ခြင်းကို တားဆီးနည်း */\nmin-width: 0;",
        descBurmese:
          "Flex/Grid item များသည် default min-width:auto ကြောင့် ကျုံ့မရဘဲ ဘောင်ကျော်တက်လာသည်ကို ဖြေရှင်းခြင်း",
        lang: "css",
        tag: "Flexbox",
      },
      {
        command:
          "/* စာကြောင်းရှည်များကို အစက် ၃ စက် (...) ဖြင့် အလိုအလျောက် ဖြတ်ပေးခြင်း */\noverflow: hidden;\ntext-overflow: ellipsis;\nwhite-space: nowrap;",
        descBurmese:
          "Text Truncation (စာကြောင်း ဘောင်ကျော်ပါက ... ဖြင့် ပြသခြင်း)",
        lang: "css",
        tag: "Typography",
      },
      {
        command:
          "/* စာကြောင်း အတိအကျ ၂ ကြောင်းသာ ပြပြီး ကျန်ကို ဖြတ်ခြင်း */\ndisplay: -webkit-box;\n-webkit-line-clamp: 2;\n-webkit-box-orient: vertical;\noverflow: hidden;",
        descBurmese:
          "Card description များကို စာကြောင်းအရေအတွက် သတ်မှတ်၍ ညီညာစွာ ဖြတ်ပြခြင်း",
        lang: "css",
        tag: "Typography",
      },
      {
        command:
          "/* Screen အရွယ်အလိုက် အလိုအလျောက် ကြီး/ငယ် ဖြစ်သော စာလုံးအရွယ် */\nfont-size: clamp(1.5rem, 4vw, 3rem);",
        descBurmese:
          "Media query မလိုဘဲ အနည်းဆုံး/အများဆုံး အရွယ်အစား ကန့်သတ်ပြီး Fluid Typography ဖန်တီးခြင်း",
        lang: "css",
        tag: "Typography",
      },
      {
        command:
          "/* Scroll လိုက်သည့်အခါ ထိပ်တွင် ကပ်နေသော Header */\nposition: sticky;\ntop: 0;\nz-index: 50;",
        descBurmese:
          "Parent element အတွင်း scroll လုပ်စဉ် အမြဲထိပ်တွင် ကပ်နေမည့် Header ဖန်တီးခြင်း",
        lang: "css",
        tag: "Position",
      },
      {
        command:
          "/* ပုံများကို အချိုးအစား မပျက်ဘဲ ဘောင်အတွင်း အံကိုက်ထည့်ခြင်း */\naspect-ratio: 16 / 9;\nobject-fit: cover;",
        descBurmese:
          "Video thumbnail များကို အချိုးအစားတူညီစွာ ဆွဲဆန့်မှုမရှိဘဲ ပြသခြင်း",
        lang: "css",
        tag: "Images",
      },
      {
        command:
          "/* Design Tokens (CSS Variables) သတ်မှတ်ပြီး သုံးခြင်း */\n:root {\n  --brand: #f97316;\n}\n.button {\n  background: var(--brand);\n}",
        descBurmese:
          "အရောင်များကို တစ်နေရာတည်းတွင် သတ်မှတ်ထား၍ Theme တစ်ခုလုံး လွယ်ကူစွာ ပြောင်းလဲနိုင်ခြင်း",
        lang: "css",
        tag: "Variables",
      },
      {
        command:
          "/* အသုံးပြုသူ၏ System Dark Mode ကို လိုက်လျောခြင်း */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --bg: #0a0e13;\n  }\n}",
        descBurmese:
          "Device ၏ Dark/Light setting အလိုက် အရောင်များ အလိုအလျောက် ပြောင်းလဲစေခြင်း",
        lang: "css",
        tag: "Dark Mode",
      },
      {
        command:
          "/* Parent ၏ အရွယ်အစားပေါ် မူတည်၍ Style ပြောင်းခြင်း (Container Query) */\n.card-wrap {\n  container-type: inline-size;\n}\n@container (min-width: 400px) {\n  .card {\n    flex-direction: row;\n  }\n}",
        descBurmese:
          "Screen အရွယ်မဟုတ်ဘဲ Component ၏ ဘောင်အရွယ်အလိုက် Layout ပြောင်းလဲစေခြင်း",
        lang: "css",
        tag: "Container",
      },
      {
        command:
          "/* Child element ပေါ် မူတည်၍ Parent ကို Style ချခြင်း */\n.field:has(input:invalid) {\n  border-color: #ef4444;\n}",
        descBurmese:
          ":has() selector ဖြင့် အတွင်းရှိ input မှားနေပါက ပြင်ပ ဘောင်အရောင် ပြောင်းလဲစေခြင်း",
        lang: "css",
        tag: "Selectors",
      },
      {
        command:
          "/* Animation များကို မလိုလားသူများအတွက် ပိတ်ပေးခြင်း (Accessibility) */\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation: none !important;\n    transition: none !important;\n  }\n}",
        descBurmese:
          "လှုပ်ရှားမှုကြောင့် မူးဝေဒနာရှိသူများအတွက် Animation များ ရပ်တန့်ပေးခြင်း",
        lang: "css",
        tag: "A11y",
      },
      {
        command:
          "/* အောက်ခံကို မှုန်ဝါးစေသော Glass Effect */\nbackground: rgba(255, 255, 255, 0.08);\nbackdrop-filter: blur(12px);",
        descBurmese: "Modal နှင့် Header များအတွက် ဖန်သားပုံစံ မှုန်ဝါးအကျိုးသက်ရောက်မှု",
        lang: "css",
        tag: "Effects",
      },
    ],
  },
  {
    id: "javascript",
    title: "JavaScript & TypeScript",
    titleBurmese: "လက်တွေ့သုံး JavaScript Patterns",
    sigil: "js",
    items: [
      {
        command:
          "const totals = orders.map((order) => order.total);\nconst revenue = totals.reduce((sum, n) => sum + n, 0);",
        descBurmese:
          "Array မှ တန်ဖိုးများ ထုတ်ယူပြီး စုစုပေါင်း တွက်ချက်ခြင်း (map နှင့် reduce)",
        lang: "js",
        tag: "Arrays",
      },
      {
        command: "const actives = users.filter((user) => user.status === 'active');",
        descBurmese: "စည်းကမ်းနှင့် ကိုက်ညီသော item များကိုသာ စစ်ထုတ်ခြင်း",
        lang: "js",
        tag: "Arrays",
      },
      {
        command: "const unique = [...new Set(tags)];",
        descBurmese: "Array အတွင်းရှိ ထပ်နေသော တန်ဖိုးများကို ဖယ်ရှားခြင်း",
        lang: "js",
        tag: "Arrays",
      },
      {
        command:
          "const byId = Object.fromEntries(users.map((user) => [user.id, user]));",
        descBurmese:
          "Array ကို id ဖြင့် ချက်ချင်းရှာနိုင်သော Object (Lookup Map) အဖြစ် ပြောင်းလဲခြင်း",
        lang: "js",
        tag: "Objects",
      },
      {
        command:
          "const { name, email = 'n/a', ...rest } = user;",
        descBurmese:
          "Object မှ လိုအပ်သော field များကို ခွဲထုတ်ခြင်း (မရှိပါက default တန်ဖိုး ထည့်ခြင်း)",
        lang: "js",
        tag: "Objects",
      },
      {
        command: "const city = user?.address?.city ?? 'Yangon';",
        descBurmese:
          "အလယ်တွင် null ရှိနိုင်သည့် ဒေတာကို error မတက်ဘဲ လုံခြုံစွာ ဖတ်ခြင်း (Optional Chaining)",
        lang: "js",
        tag: "Safety",
      },
      {
        command:
          "const [users, posts] = await Promise.all([\n  fetch('/api/users').then((r) => r.json()),\n  fetch('/api/posts').then((r) => r.json()),\n]);",
        descBurmese:
          "API ၂ ခုကို တစ်ပြိုင်နက် ခေါ်ယူ၍ အချိန်ကုန်သက်သာစေခြင်း (တစ်ခုပြီးမှ တစ်ခု မဟုတ်)",
        lang: "js",
        tag: "Async",
      },
      {
        command:
          "try {\n  const res = await fetch(url);\n  if (!res.ok) throw new Error(`HTTP ${res.status}`);\n  return await res.json();\n} catch (error) {\n  console.error('Fetch failed:', error);\n}",
        descBurmese:
          "fetch သည် 404/500 တွင် error မတက်သဖြင့် res.ok ကို ကိုယ်တိုင် စစ်ရန် လိုအပ်ခြင်း",
        lang: "js",
        tag: "Async",
      },
      {
        command:
          "const debounce = (fn, ms = 300) => {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), ms);\n  };\n};",
        descBurmese:
          "Search box တွင် စာရိုက်ပြီးမှ API ခေါ်စေရန် အခေါ်အရေအတွက် လျှော့ချခြင်း (Debounce)",
        lang: "js",
        tag: "Performance",
      },
      {
        command:
          "const formatted = new Intl.NumberFormat('en-US').format(1250000);",
        descBurmese:
          "ကိန်းဂဏန်းများကို ကော်မာခြားဖြင့် ဖတ်ရလွယ်စွာ ပြသခြင်း (1,250,000)",
        lang: "js",
        tag: "Format",
      },
      {
        command:
          "const when = new Date().toLocaleDateString('en-GB', {\n  day: '2-digit',\n  month: 'short',\n  year: 'numeric',\n});",
        descBurmese: "ရက်စွဲကို ဖတ်ရလွယ်သော ပုံစံဖြင့် ပြောင်းလဲခြင်း (29 Aug 2026)",
        lang: "js",
        tag: "Format",
      },
      {
        command:
          "type User = {\n  id: number;\n  name: string;\n  role?: 'admin' | 'member';\n};",
        descBurmese:
          "TypeScript ဖြင့် ဒေတာပုံစံ သတ်မှတ်ခြင်း (role သည် မထည့်လျှင်လည်း ရသည်)",
        lang: "js",
        tag: "TypeScript",
      },
      {
        command:
          "type PublicUser = Omit<User, 'password'>;\ntype UserPatch = Partial<User>;",
        descBurmese:
          "လက်ရှိ Type မှ field ဖယ်ခြင်း (Omit) နှင့် အားလုံးကို optional ပြောင်းခြင်း (Partial)",
        lang: "js",
        tag: "TypeScript",
      },
      {
        command:
          "const isUser = (value: unknown): value is User =>\n  typeof value === 'object' && value !== null && 'id' in value;",
        descBurmese:
          "Runtime တွင် ဒေတာအမျိုးအစား စစ်ဆေးပြီး TypeScript ကို အသိပေးခြင်း (Type Guard)",
        lang: "js",
        tag: "TypeScript",
      },
    ],
  },
  {
    id: "npm",
    title: "npm, pnpm & Node.js",
    titleBurmese: "Package Manager နှင့် Project Commands",
    sigil: "npm",
    items: [
      {
        command: "npm install",
        descBurmese:
          "package.json အတွင်းရှိ dependency အားလုံးကို ထည့်သွင်းမည် (project အသစ် clone ပြီးလျှင် ပထမဆုံး လုပ်ရမည်)",
        lang: "shell",
        tag: "Install",
      },
      {
        command: "npm ci",
        descBurmese:
          "Lock file အတိအကျအတိုင်း သန့်ရှင်းစွာ ထည့်သွင်းမည် (CI/CD အတွက် အသင့်တော်ဆုံး)",
        lang: "shell",
        tag: "Install",
      },
      {
        command: "npm install -D vitest",
        descBurmese:
          "Development အတွက်သာ လိုအပ်သော package ကို devDependencies အဖြစ် ထည့်မည်",
        lang: "shell",
        tag: "Install",
      },
      {
        command: "npm install react@19.2.7",
        descBurmese:
          "Version အတိအကျ သတ်မှတ်၍ ထည့်သွင်းမည် (Production တွင် version pin လုပ်ရန် အကြံပြုသည်)",
        lang: "shell",
        tag: "Install",
      },
      {
        command: "npm outdated",
        descBurmese: "Version အသစ် ရနိုင်သော package များ၏ စာရင်းကို ကြည့်မည်",
        lang: "shell",
        tag: "Maintain",
      },
      {
        command: "npm audit fix",
        descBurmese:
          "Dependency များတွင် တွေ့ရှိသော security အားနည်းချက်များကို ဖြေရှင်းမည်",
        lang: "shell",
        tag: "Security",
      },
      {
        command: "npm run dev",
        descBurmese: "Local development server ကို စတင်မည်",
        lang: "shell",
        tag: "Scripts",
      },
      {
        command: "npm run build && npm run preview",
        descBurmese:
          "Production build ထုတ်ပြီး deploy မလုပ်ခင် Local တွင် အမှန်တကယ် စမ်းကြည့်မည်",
        lang: "shell",
        tag: "Scripts",
      },
      {
        command: "npx <package_name>",
        descBurmese:
          "Package ကို ထည့်သွင်းမထားဘဲ တစ်ခါတည်း run မည် (e.g. npx astro add react)",
        lang: "shell",
        tag: "Scripts",
      },
      {
        command: "rm -rf node_modules package-lock.json && npm install",
        descBurmese:
          "Dependency များ ရှုပ်ထွေးနေပါက အားလုံးဖျက်၍ အစမှ ပြန်ထည့်မည် (Nuclear option)",
        lang: "shell",
        tag: "Fix",
      },
      {
        command: "node --version && npm --version",
        descBurmese:
          "လက်ရှိ ထည့်သွင်းထားသော Node.js နှင့် npm version များကို စစ်ဆေးမည်",
        lang: "shell",
        tag: "Env",
      },
      {
        command: "npx kill-port 3000",
        descBurmese:
          "Port 3000 ကို ပိတ်ထားသော process ကို ရပ်တန့်မည် (EADDRINUSE error ဖြေရှင်းရန်)",
        lang: "shell",
        tag: "Fix",
      },
    ],
  },
  {
    id: "n8n",
    title: "n8n Workflow Automation",
    titleBurmese: "n8n Core Nodes & Expressions",
    sigil: "n8n",
    items: [
      {
        command:
          "// n8n Code Node ထဲတွင် JSON Data ကို Filter ပြုလုပ်ခြင်း\nreturn $input.all().filter(item => item.json.price > 50000);",
        descBurmese:
          "Input data များထဲမှ စျေးနှုန်း ၅ သောင်းအထက် ပစ္စည်းများကိုသာ စစ်ထုတ်ခြင်း",
        lang: "js",
        tag: "Code Node",
      },
      {
        command:
          "// Item အသစ်များ ဖန်တီး၍ ပြန်ပို့ခြင်း\nreturn items.map(item => ({\n  json: {\n    name: item.json.customer_name,\n    total: item.json.qty * item.json.price,\n  },\n}));",
        descBurmese:
          "Data ပုံစံကို ပြောင်းလဲပြီး နောက် Node သို့ ပို့ရန် အသင့်ပြင်ဆင်ခြင်း",
        lang: "js",
        tag: "Code Node",
      },
      {
        command:
          "https://api.telegram.org/bot<TOKEN>/sendMessage?chat_id=<CHAT_ID>&text={{ encodeURIComponent('🔔 New Order: ' + $json.order_id) }}",
        descBurmese:
          "Telegram Bot သို့ HTTP Request Node မှတစ်ဆင့် Message အလိုအလျောက် ပို့ခြင်း",
        lang: "n8n",
        tag: "Telegram Bot",
      },
      {
        command: "{{ $now.plus({ days: 7 }).toFormat('yyyy-MM-dd') }}",
        descBurmese:
          "လက်ရှိရက်စွဲမှ ၇ ရက်ပေါင်းပြီး ISO Format ဖြင့် ထုတ်ယူခြင်း (Date Math)",
        lang: "n8n",
        tag: "Expression",
      },
      {
        command: "{{ $json.body.email || 'customer@example.com' }}",
        descBurmese:
          "Webhook မှ လာသော Email မရှိပါက Default Email ထည့်သွင်းပေးခြင်း (Fallback)",
        lang: "n8n",
        tag: "Expression",
      },
      {
        command: "{{ $node['Webhook'].json.body.customer.name }}",
        descBurmese:
          "အခြား Node တစ်ခုမှ ထွက်လာသော Data ကို နာမည်ဖြင့် ရည်ညွှန်း ခေါ်ယူခြင်း",
        lang: "n8n",
        tag: "Expression",
      },
      {
        command: "{{ $json.items.length }} items — {{ $json.total }} MMK",
        descBurmese:
          "Text အတွင်း Expression များ ရောစွက်၍ Message တစ်ခု တည်ဆောက်ခြင်း",
        lang: "n8n",
        tag: "Expression",
      },
      {
        command: "{{ $json.phone.replace(/[^0-9]/g, '') }}",
        descBurmese:
          "ဖုန်းနံပါတ်မှ ကွက်လပ်နှင့် အထူးအက္ခရာများ ဖယ်ရှား၍ ဂဏန်းသာ ချန်ထားခြင်း",
        lang: "n8n",
        tag: "Cleanup",
      },
      {
        command: "{{ $json.email.toLowerCase().trim() }}",
        descBurmese:
          "Email ကို စာလုံးအသေးပြောင်းပြီး အနားကွက်လပ်များ ဖယ်ရှားခြင်း (Data သန့်စင်ခြင်း)",
        lang: "n8n",
        tag: "Cleanup",
      },
      {
        command: "{{ $execution.id }} / {{ $workflow.name }}",
        descBurmese:
          "Error log များတွင် ထည့်သွင်းရန် လက်ရှိ Execution ID နှင့် Workflow နာမည် ထုတ်ယူခြင်း",
        lang: "n8n",
        tag: "Debug",
      },
      {
        command:
          "// Loop အတွင်း လက်ရှိ item အရေအတွက် စစ်ဆေးခြင်း\nconst all = $input.all();\nif (all.length === 0) {\n  return [{ json: { skipped: true } }];\n}\nreturn all;",
        descBurmese:
          "Data မရှိသည့်အခါ Workflow ရပ်တန့်မသွားစေရန် Empty state ကို ကိုင်တွယ်ခြင်း",
        lang: "js",
        tag: "Error Handling",
      },
      {
        command: "{{ JSON.stringify($json, null, 2) }}",
        descBurmese:
          "လက်ရှိ Item ၏ Data အားလုံးကို ဖတ်ရလွယ်သော JSON ပုံစံဖြင့် ထုတ်ကြည့်ခြင်း (Debug)",
        lang: "n8n",
        tag: "Debug",
      },
    ],
  },
];

export const TOTAL_COMMANDS = CHEATSHEET_DATA.reduce(
  (sum, section) => sum + section.items.length,
  0,
);
