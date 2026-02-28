import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dso1QYyF.mjs';
import 'piccolore';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDownIcon, CheckIcon, ChevronUpIcon, Search, Filter, X, Loader2, ArrowRight, GraduationCap, TrendingUp, Sparkles, Palette, Globe, Database, Users, Zap, GitBranch, Code, Rocket, BookOpen, Target } from 'lucide-react';
import { $ as $$StandaloneLayout } from '../chunks/StandaloneLayout_D5c19KLE.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground selection:bg-primary selection:text-primary-foreground border-input flex w-full min-w-0 rounded-md border bg-transparent px-3 leading-snug shadow-xs transition-colors duration-200 outline-none file:inline-flex file:border-0 file:bg-transparent file:text-xs file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 text-xs md:text-sm h-auto min-h-8",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}

function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-2 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-popover-foreground text-sm", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className),
      ...props
    }
  );
}

function Select({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-input/10 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4 text-accent" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover  text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-4 hover:text-accent" }) }) }),
        /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4" })
    }
  );
}

const coursesData = [
  {
    id: "html",
    title: "HTML",
    description: "Web development အတွက် မရှိမဖြစ် အခြေခံ HTML ကို လွယ်လွယ်နဲ့ လေ့လာခြင်း",
    difficulty: "beginner",
    category: "Web Development",
    icon: "globe",
    href: "/html/introduction/welcome-to-html",
    lessons: 8,
    tags: ["HTML", "Web Basics", "Markup"],
    estimatedTime: "2 weeks",
    rating: 4.4,
    students: 4200
  },
  {
    id: "css",
    title: "CSS",
    description: "Webpage များကို လှပအောင် ဒီဇိုင်းဆွဲခြင်း၊ Layout ချခြင်းနှင့် Responsive ဖြစ်အောင် ဖန်တီးခြင်း",
    difficulty: "beginner",
    category: "Web Development",
    icon: "palette",
    href: "/css/introduction/welcome",
    lessons: 11,
    tags: ["CSS", "Design", "Responsive"],
    estimatedTime: "3 weeks",
    rating: 4.5,
    students: 3500
  },
  {
    id: "javascript",
    title: "Interactive JavaScript",
    description: "Website များကို အသက်ဝင်လှုပ်ရှားစေရန် JavaScript ကို အခြေခံမှစ၍ လက်တွေ့ Project များဖြင့် လေ့လာခြင်း",
    difficulty: "beginner",
    category: "Web Development",
    icon: "code",
    href: "/javascript/introduction/intro",
    lessons: 9,
    tags: ["JavaScript", "DOM", "Interactivity"],
    estimatedTime: "4 weeks",
    rating: 4.8,
    students: 2800
  },
  // {
  //   id: "dsa",
  //   title: "Data Structures & Algorithms",
  //   description:
  //     "Brute force ကနေ Optimized thinking ကို ကူးပြောင်းကြမယ်။ Patterns တွေနဲ့ Visuals တွေကို သုံးပြီး လေ့လာကြမယ်။",
  //   difficulty: "intermediate",
  //   category: "Computer Science",
  //   icon: "trending",
  //   href: "/dsa",
  //   lessons: 20,
  //   tags: ["Algorithms", "Optimization", "Problem Solving"],
  //   estimatedTime: "8 weeks",
  //   rating: 4.9,
  //   students: 100,
  // },
  // {
  //   id: "python",
  //   title: "Python Programming",
  //   description:
  //     "Python ကို အခြေခံမှစ၍ လွယ်ကူရှင်းလင်းစွာ လေ့လာခြင်း။ Variables, Loops, Functions မှစ၍ OOP အထိ ပါဝင်သည်။",
  //   difficulty: "beginner",
  //   category: "Programming",
  //   icon: "code",
  //   href: "/python",
  //   lessons: 8,
  //   tags: ["Python", "Basics", "OOP"],
  //   estimatedTime: "4 weeks",
  //   rating: 4.8,
  //   students: 1200,
  // },
  // {
  //   id: "java",
  //   title: "Java Programming",
  //   description:
  //     "Java ကို အခြေခံမှစ၍ လွယ်ကူရှင်းလင်းစွာ လေ့လာခြင်း။ Syntax, OOP, Collections နှင့် Exception Handling များ ပါဝင်သည်။",
  //   difficulty: "beginner",
  //   category: "Programming",
  //   icon: "code",
  //   href: "/java",
  //   lessons: 8,
  //   tags: ["Java", "Basics", "OOP"],
  //   estimatedTime: "5 weeks",
  //   rating: 4.8,
  //   students: 1100,
  // },
  // {
  //   id: "nodejs",
  //   title: "Node.js & Express",
  //   description:
  //     "JavaScript ကို အသုံးပြု၍ Backend Server များ တည်ဆောက်ခြင်း။ File System, API နှင့် Express.js အကြောင်းများ ပါဝင်သည်။",
  //   difficulty: "intermediate",
  //   category: "Web Development",
  //   icon: "database",
  //   href: "/nodejs",
  //   lessons: 8,
  //   tags: ["Node.js", "Backend", "Express"],
  //   estimatedTime: "5 weeks",
  //   rating: 4.8,
  //   students: 1500,
  // },
  // {
  //   id: "typescript",
  //   title: "TypeScript Programming",
  //   description:
  //     "JavaScript ကို Type System ဖြင့် ပိုမိုခိုင်မာအောင် တည်ဆောက်ခြင်း။ Interfaces, Generics နှင့် Advanced Types များ ပါဝင်သည်။",
  //   difficulty: "intermediate",
  //   category: "Programming",
  //   icon: "code",
  //   href: "/typescript",
  //   lessons: 9,
  //   tags: ["TypeScript", "JavaScript", "Types"],
  //   estimatedTime: "5 weeks",
  //   rating: 4.9,
  //   students: 1800,
  // },
  // {
  //   id: "golang",
  //   title: "Golang Programming",
  //   description:
  //     "Google မှ ဖန်တီးထားသော Go Language ကို အခြေခံမှစ၍ Concurrency နှင့် REST API တည်ဆောက်ခြင်းအထိ လေ့လာခြင်း။",
  //   difficulty: "intermediate",
  //   category: "Programming",
  //   icon: "code",
  //   href: "/golang",
  //   lessons: 10,
  //   tags: ["Go", "Backend", "Concurrency"],
  //   estimatedTime: "6 weeks",
  //   rating: 4.9,
  //   students: 1300,
  // },
  // {
  //   id: "advanced-css",
  //   title: "Advanced CSS",
  //   description:
  //     "Modern CSS Features, Logic, Layouts နှင့် Architecture များကို နက်နက်နဲနဲ လေ့လာခြင်း",
  //   difficulty: "advanced",
  //   category: "Web Development",
  //   icon: "palette",
  //   href: "/advanced-css/introduction/welcome",
  //   lessons: 15,
  //   tags: ["CSS", "Advanced", "Architecture"],
  //   estimatedTime: "5 weeks",
  //   rating: 4.9,
  //   students: 1500,
  // },
  {
    id: "websocket",
    title: "WebSocket နည်းပညာ",
    description: "Real-time communication အတွက် WebSocket နည်းပညာကို အခြေခံမှ အဆင့်မြင့်သဘောတရားများအထိ လေ့လာခြင်း",
    difficulty: "intermediate",
    category: "Web Development",
    icon: "rocket",
    href: "/websocket/introduction/what-is-websocket",
    lessons: 12,
    tags: ["Real-time", "WebSocket", "Communication"],
    estimatedTime: "6 weeks",
    rating: 4.8,
    students: 1250
  },
  {
    id: "advanced-typescript",
    title: "Advanced TypeScript",
    description: "TypeScript ၏ အဆင့်မြင့်သဘောတရားများကို နက်နက်နဲနဲ လေ့လာခြင်း",
    difficulty: "advanced",
    category: "Programming Languages",
    icon: "code",
    href: "/advanced-typescript/why-is-advanced-ts-needed/why-advanced-typescript",
    lessons: 25,
    tags: ["TypeScript", "Generics", "Utility Types"],
    estimatedTime: "10 weeks",
    rating: 4.9,
    students: 2100
  },
  {
    id: "git-course",
    title: "Git Version Control",
    description: "Codes အပြောင်းအလဲများကို စနစ်တကျ စီမံခန့်ခွဲခြင်းနှင့် Teamwork အတွက် မရှိမဖြစ်လိုအပ်သော Git ကို လေ့လာခြင်း",
    difficulty: "beginner",
    category: "Development Tools",
    icon: "git",
    href: "/git-course/introduction/why-git",
    lessons: 20,
    tags: ["Git", "Version Control", "Collaboration"],
    estimatedTime: "4 weeks",
    rating: 4.7,
    students: 3200
  },
  {
    id: "web-performance",
    title: "Web Performance",
    description: "Website တစ်ခု၏ စွမ်းဆောင်ရည်မြှင့်တင်ခြင်းနှင့် အမြန်နှုန်းတိုးမြှင့်ခြင်းဆိုင်ရာ နည်းပညာများကို လေ့လာခြင်း",
    difficulty: "intermediate",
    category: "Web Development",
    icon: "zap",
    href: "/web-performance/introduction/why-web-performance",
    lessons: 18,
    tags: ["Performance", "Optimization", "Core Web Vitals"],
    estimatedTime: "8 weeks",
    rating: 4.6,
    students: 1800
  },
  {
    id: "software-architecture",
    title: "Software Architecture",
    description: "Software system တစ်ခုကို ခွဲခြားတည်ဆောက်နည်း၊ maintainable, scalable, reliable ဖြစ်အောင် တည်ဆောက်မှုကို လေ့လာခြင်း",
    difficulty: "advanced",
    category: "System Design",
    icon: "users",
    href: "/software-architecture/foundations/foundations",
    lessons: 22,
    tags: ["Architecture", "Microservices", "Design Patterns"],
    estimatedTime: "12 weeks",
    rating: 4.9,
    students: 950
  },
  {
    id: "relational-database",
    title: "Relational Database",
    description: "Database design principles မှ SQL queries များအထိ၊ data ကို စနစ်တကျ သိမ်းဆည်းခြင်းနှင့် စီမံခန့်ခွဲခြင်းဆိုင်ရာ နည်းပညာများကို လေ့လာခြင်း",
    difficulty: "intermediate",
    category: "Database",
    icon: "database",
    href: "/relational-database/introduction/welcome-to-database",
    lessons: 16,
    tags: ["SQL", "Database Design", "Normalization"],
    estimatedTime: "6 weeks",
    rating: 4.5,
    students: 1650
  },
  {
    id: "frontend-architecture",
    title: "Frontend Architecture Patterns",
    description: "Frontend application များကို စနစ်တကျ ဒီဇိုင်းဆွဲခြင်း၊ scalable နှင့် maintainable ဖြစ်အောင် တည်ဆောက်ခြင်းဆိုင်ရာ နည်းပညာများကို လေ့လာခြင်း",
    difficulty: "intermediate",
    category: "Web Development",
    icon: "code",
    href: "/fe-architecture/introduction/welcome",
    lessons: 15,
    tags: ["Frontend", "Architecture", "Patterns"],
    estimatedTime: "8 weeks",
    rating: 4.7,
    students: 1200
  },
  {
    id: "ai-proficiency",
    title: "AI Proficiency for Developers",
    description: "Developer များအတွက် AI နည်းပညာများကို အခြေခံမှစ၍ လက်တွေ့လုပ်ငန်းခွင်အသုံးချနိုင်သည်အထိ လေ့လာခြင်း",
    difficulty: "intermediate",
    category: "Artificial Intelligence",
    icon: "sparkles",
    href: "/ai-proficiency/foundations/introduction",
    lessons: 16,
    tags: ["AI", "Machine Learning", "LLM", "RAG"],
    estimatedTime: "12 weeks",
    rating: 4.8,
    students: 500
  }
  // {
  //   id: "cli",
  //   title: "Command Line Interface (CLI) Basics",
  //   description:
  //     "Terminal နှင့် Command Line ကို အခြေခံမှ လေ့လာခြင်း။ ဖိုင်များစီမံခန့်ခွဲခြင်းဆငှ့် အသုံးများသော commands များအကြောင်း",
  //   difficulty: "beginner",
  //   category: "Development Tools",
  //   icon: "code",
  //   href: "/cli/introduction/what-is-cli",
  //   lessons: 6,
  //   tags: ["CLI", "Terminal", "Commands"],
  //   estimatedTime: "1 week",
  //   rating: 0,
  //   students: 0,
  // },
  // {
  //   id: "responsive-design",
  //   title: "Modern Responsive Web Design",
  //   description:
  //     "Media Queries အသစ်များ၊ Flexbox/Grid Layouts များ၊ Container Queries နှင့် Fluid Typography ကဲ့သို့သော ခေတ်အမီဆုံး Responsive နည်းပညာများ",
  //   difficulty: "intermediate",
  //   category: "Web Development",
  //   icon: "palette",
  //   href: "/responsive-design/introduction/what-is-rwd",
  //   lessons: 6,
  //   tags: ["Responsive", "CSS", "UI/UX"],
  //   estimatedTime: "2 weeks",
  //   rating: 4.8,
  //   students: 150,
  // },
  // {
  //   id: "vim-motions",
  //   title: "Vim Motions (Mastering Keyboard)",
  //   description:
  //     "Mouse အသုံးမပြုဘဲ ကီးဘုတ်မှတစ်ဆင့် Code များကို လျင်မြန်စွာ ရေးသားပြင်ဆင်နိုင်မည့် နည်းစနစ်များ",
  //   difficulty: "advanced",
  //   category: "Development Tools",
  //   icon: "rocket",
  //   href: "/vim-motions/introduction/what-is-vim",
  //   lessons: 5,
  //   tags: ["Vim", "Productivity", "Terminal"],
  //   estimatedTime: "1 week",
  //   rating: 4.9,
  //   students: 120,
  // },
  // {
  //   id: "docker-course",
  //   title: "Docker for Developers",
  //   description: "စက်တိုင်းမှာ အလုပ်လုပ်မည့် Application များ တည်ဆောက်ရန် Docker, Containers, Images နှင့် Compose အသုံးပြုနည်းများ။",
  //   difficulty: "intermediate",
  //   category: "Development Tools",
  //   icon: "database",
  //   href: "/docker/introduction/what-is-docker",
  //   lessons: 5,
  //   tags: ["Docker", "DevOps", "Containers"],
  //   estimatedTime: "2 weeks",
  //   rating: 4.8,
  //   students: 230,
  // },
];
const difficultyConfig = {
  beginner: {
    color: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800",
    icon: /* @__PURE__ */ jsx(Target, { className: "w-3 h-3" }),
    label: "Beginner"
  },
  intermediate: {
    color: "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800",
    icon: /* @__PURE__ */ jsx(TrendingUp, { className: "w-3 h-3" }),
    label: "Intermediate"
  },
  advanced: {
    color: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800",
    icon: /* @__PURE__ */ jsx(Sparkles, { className: "w-3 h-3" }),
    label: "Advanced"
  }
};
const icons = {
  rocket: Rocket,
  code: Code,
  git: GitBranch,
  zap: Zap,
  users: Users,
  database: Database,
  globe: Globe,
  palette: Palette,
  sparkles: Sparkles,
  trending: TrendingUp
};
const CourseIcon = ({
  icon,
  className = "w-6 h-6"
}) => {
  const IconComponent = icons[icon] || BookOpen;
  return /* @__PURE__ */ jsx(IconComponent, { className });
};
const DifficultyBadge = ({
  difficulty
}) => {
  const config = difficultyConfig[difficulty];
  return /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: `${config.color} font-medium border`, children: [
    config.icon,
    config.label
  ] });
};
const CourseStats = ({ course }) => {
  return /* @__PURE__ */ jsx("div", { className: "mt-3 flex items-center gap-4 text-xs", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsx(BookOpen, { className: "w-3 h-3" }),
    /* @__PURE__ */ jsxs("span", { children: [
      course.lessons,
      " lessons"
    ] })
  ] }) });
};
function CoursesListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const coursesPerPage = 9;
  const categories = [
    ...new Set(coursesData.map((course) => course.category))
  ];
  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || course.description.toLowerCase().includes(searchTerm.toLowerCase()) || course.tags.some(
        (tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesDifficulty = selectedDifficulty === "all" || course.difficulty === selectedDifficulty;
      const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
      return matchesSearch && matchesDifficulty && matchesCategory;
    });
  }, [searchTerm, selectedDifficulty, selectedCategory]);
  Math.ceil(filteredCourses.length / coursesPerPage);
  const visibleCount = Math.min(
    filteredCourses.length,
    currentPage * coursesPerPage
  );
  const visibleCourses = filteredCourses.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCourses.length;
  const observer = useRef(null);
  const lastCourseElementRef = useCallback(
    (node) => {
      if (isLoading || isLoadingMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setIsLoadingMore(true);
            setTimeout(() => {
              setCurrentPage((prev) => prev + 1);
              setIsLoadingMore(false);
            }, 250);
          }
        },
        { rootMargin: "200px" }
      );
      if (node) observer.current.observe(node);
    },
    [isLoading, isLoadingMore, hasMore]
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedDifficulty, selectedCategory]);
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm, selectedDifficulty, selectedCategory]);
  return /* @__PURE__ */ jsx("div", { className: "w-full not-content", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 md:py-8 ", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:flex-wrap gap-4 items-start lg:items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "courses-search relative flex-1 min-w-0 w-full lg:w-auto text-sm", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "text",
            placeholder: "Search courses, topics, or technologies...",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value),
            className: "w-full pl-10 py-2 text-base md:text-sm"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-auto grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm", children: [
        /* @__PURE__ */ jsxs(
          Select,
          {
            value: selectedDifficulty,
            onValueChange: (value) => setSelectedDifficulty(
              value
            ),
            children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "w-full sm:min-w-[150px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "All Levels" }) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "all", children: "All Levels" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "beginner", children: "Beginner" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "intermediate", children: "Intermediate" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "advanced", children: "Advanced" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Select,
          {
            value: selectedCategory,
            onValueChange: setSelectedCategory,
            children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "w-full sm:min-w-[200px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "All Categories" }) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "all", children: "All Categories" }),
                categories.map((category) => /* @__PURE__ */ jsx(SelectItem, { value: category, children: category }, category))
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex mt-4 md:mt-6 flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsx(Filter, { className: "w-4 h-4" }),
        /* @__PURE__ */ jsxs("span", { children: [
          filteredCourses.length,
          " course",
          filteredCourses.length !== 1 ? "s" : "",
          " found",
          searchTerm && /* @__PURE__ */ jsxs("span", { children: [
            " ",
            "for ",
            /* @__PURE__ */ jsxs("strong", { children: [
              '"',
              searchTerm,
              '"'
            ] })
          ] })
        ] })
      ] }),
      (searchTerm || selectedDifficulty !== "all" || selectedCategory !== "all") && /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "ghost",
          size: "sm",
          onClick: () => {
            setSearchTerm("");
            setSelectedDifficulty("all");
            setSelectedCategory("all");
          },
          className: " flex justify-center items-center",
          children: [
            /* @__PURE__ */ jsx(X, { className: "w-4 h-4 mr-2" }),
            /* @__PURE__ */ jsx("span", { className: "pt-1", children: "Clear all filters" })
          ]
        }
      )
    ] }),
    isLoading && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-16", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(Loader2, { className: "w-6 h-6 animate-spin" }),
      /* @__PURE__ */ jsx("span", { children: "Loading courses..." })
    ] }) }),
    !isLoading && /* @__PURE__ */ jsx("div", { className: "courses-grid grid grid-cols-1 mt:2 md:mt-2 md:grid-cols-2 xl:grid-cols-3 gap-6", children: visibleCourses.map((course) => /* @__PURE__ */ jsxs(
      Card,
      {
        className: "group transition-all duration-300 h-full flex flex-col overflow-hidden pt-2",
        children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "pb-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-14 h-14 rounded-xl group-hover:scale-105 transition-transform duration-300", children: /* @__PURE__ */ jsx(
                CourseIcon,
                {
                  icon: course.icon,
                  className: "w-7 block h-7 text-accent"
                }
              ) }),
              /* @__PURE__ */ jsx(DifficultyBadge, { difficulty: course.difficulty })
            ] }),
            /* @__PURE__ */ jsx(CardTitle, { className: "text-xl font-semibold transition-colors duration-300 line-clamp-2", children: course.title })
          ] }),
          /* @__PURE__ */ jsxs(CardContent, { className: "flex-1", children: [
            /* @__PURE__ */ jsx(CardDescription, { className: "text-sm leading-relaxed line-clamp-3 ", children: course.description }),
            /* @__PURE__ */ jsx(CourseStats, { course }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [
              course.tags.slice(0, 3).map((tag) => /* @__PURE__ */ jsx(
                Badge,
                {
                  variant: "secondary",
                  className: "text-xs px-2 py-1 transition-colors border-0",
                  children: tag
                },
                tag
              )),
              course.tags.length > 3 && /* @__PURE__ */ jsxs(
                Badge,
                {
                  variant: "secondary",
                  className: "text-xs px-2 py-1 transition-colors border-0",
                  children: [
                    "+",
                    course.tags.length - 3,
                    " more"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(CardFooter, { className: "pt-4", children: /* @__PURE__ */ jsx("a", { href: course.href, className: "w-full", children: /* @__PURE__ */ jsxs(Button, { className: "w-full cursor-pointer group/btn border-1 shadow-md transition-all duration-300", children: [
            "Start Learning",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" })
          ] }) }) })
        ]
      },
      course.id
    )) }),
    !isLoading && filteredCourses.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-3 pt-8", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
        "Showing ",
        visibleCount,
        " of ",
        filteredCourses.length,
        " courses"
      ] }),
      hasMore && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", "aria-live": "polite", children: [
        isLoadingMore && /* @__PURE__ */ jsx(Loader2, { className: "w-5 h-5 animate-spin" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm", children: isLoadingMore ? "Loading more..." : "Scroll to load more" })
      ] }),
      hasMore && /* @__PURE__ */ jsx("div", { ref: lastCourseElementRef, className: "h-1 w-full" })
    ] }),
    !isLoading && filteredCourses.length === 0 && /* @__PURE__ */ jsx(Card, { className: "text-center py-20 border-2 border-dashed", children: /* @__PURE__ */ jsxs(CardContent, { className: "space-y-8", children: [
      /* @__PURE__ */ jsx("div", { className: "w-28 h-28 mx-auto rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(Search, { className: "w-14 h-14" }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-semibold", children: "No courses found" }),
        /* @__PURE__ */ jsx(CardDescription, { className: "text-lg max-w-lg mx-auto leading-relaxed", children: "We couldn't find any courses matching your criteria. Try adjusting your search terms or clearing the filters to explore all available courses." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "secondary",
          onClick: () => {
            setSearchTerm("");
            setSelectedDifficulty("all");
            setSelectedCategory("all");
          },
          children: [
            /* @__PURE__ */ jsx(GraduationCap, { className: "w-4 h-4 mr-2" }),
            "View all courses"
          ]
        }
      ) })
    ] }) })
  ] }) });
}

const $$Courses = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "StandaloneLayout", $$StandaloneLayout, { "title": "Programming Courses", "description": "Comprehensive programming courses designed for Myanmar developers - from beginner to advanced level", "class": "astro-aee76kgo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="neo-page neo-courses astro-aee76kgo"> <!-- Hero Section --> <section class="neo-hero relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-amber-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-8 pb-12 astro-aee76kgo"> <!-- Background Elements --> <div class="absolute inset-0 dot-pattern opacity-50 astro-aee76kgo"></div> <div class="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 dark:bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 astro-aee76kgo"></div> <div class="absolute bottom-0 left-0 w-72 h-72 bg-orange-400/10 dark:bg-orange-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 astro-aee76kgo"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 astro-aee76kgo"> <div class="text-center astro-aee76kgo"> <!-- Badge --> <div class="neo-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 mb-6 astro-aee76kgo"> <svg class="w-4 h-4 text-amber-600 dark:text-amber-400 astro-aee76kgo" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" class="astro-aee76kgo"></path> </svg> <span class="text-sm font-medium text-amber-700 dark:text-amber-300 astro-aee76kgo">12+ Courses Available</span> </div> <!-- Heading --> <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 astro-aee76kgo">
Programming
<span class="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent astro-aee76kgo">သင်ခန်းစာများ</span> </h1> <!-- Description --> <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 astro-aee76kgo">
Beginner မှ Advanced အဆင့်အထိ ကြိုက်နှစ်သက်ရာ သင်ခန်းစာများဖြင့်
            သင့်ရဲ့ programming journey ကို စတင်လိုက်ပါ
</p> <!-- Quick Stats --> <div class="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 astro-aee76kgo"> <div class="flex items-center gap-2 astro-aee76kgo"> <svg class="w-5 h-5 text-green-500 astro-aee76kgo" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" class="astro-aee76kgo"></path> </svg> <span class="astro-aee76kgo">အခမဲ့ လေ့လာနိုင်</span> </div> <div class="flex items-center gap-2 astro-aee76kgo"> <svg class="w-5 h-5 text-blue-500 astro-aee76kgo" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" class="astro-aee76kgo"></path> </svg> <span class="astro-aee76kgo">မိမိနှုန်းဖြင့် လေ့လာပါ</span> </div> <div class="flex items-center gap-2 astro-aee76kgo"> <svg class="w-5 h-5 text-amber-500 astro-aee76kgo" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" class="astro-aee76kgo"></path> </svg> <span class="astro-aee76kgo">မြန်မာဘာသာဖြင့်</span> </div> </div> </div> </div> </section> <!-- Courses Listing --> <section class="py-8 bg-white dark:bg-gray-950 neo-alt astro-aee76kgo"> <div class="courses-wrapper astro-aee76kgo"> ${renderComponent($$result2, "CoursesListing", CoursesListing, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/CoursesListing", "client:component-export": "CoursesListing", "class": "astro-aee76kgo" })} </div> </section> </div> ` })} `;
}, "/Users/waiyanphyoaung/code/waiyanphyoaung/src/pages/courses.astro", void 0);

const $$file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/pages/courses.astro";
const $$url = "/courses";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Courses,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
