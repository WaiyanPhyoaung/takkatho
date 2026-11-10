import React, { useMemo, useState, type JSX } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Code,
  Database,
  Filter,
  GitBranch,
  Globe,
  GraduationCap,
  Palette,
  Rocket,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";

export type Course = {
  id: string;
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  category: string;
  icon: keyof typeof icons;
  /** Course folder under src/content/docs, e.g. "git-course". */
  dir: string;
  tags: string[];
  estimatedTime?: string;
};

/**
 * Per-course facts derived at build time from the docs sidebar
 * (src/lib/course-stats.mjs), keyed by course folder. Passed in as a prop so
 * the sidebar itself never ships to the browser.
 */
export type CourseFacts = Record<string, { href: string; lessonCount: number }>;

// Course data
export const coursesData: Course[] = [
  {
    id: "html",
    title: "HTML",
    description:
      "Web development အတွက် မရှိမဖြစ် အခြေခံ HTML ကို လွယ်လွယ်နဲ့ လေ့လာခြင်း",
    difficulty: "beginner",
    category: "Web Development",
    icon: "globe",
    dir: "html",
    tags: ["HTML", "Web Basics", "Markup"],
    estimatedTime: "2 weeks",
  },
  {
    id: "css",
    title: "CSS",
    description:
      "Webpage များကို လှပအောင် ဒီဇိုင်းဆွဲခြင်း၊ Layout ချခြင်းနှင့် Responsive ဖြစ်အောင် ဖန်တီးခြင်း",
    difficulty: "beginner",
    category: "Web Development",
    icon: "palette",
    dir: "css",
    tags: ["CSS", "Design", "Responsive"],
    estimatedTime: "3 weeks",
  },
  {
    id: "javascript",
    title: "Interactive JavaScript",
    description:
      "Website များကို အသက်ဝင်လှုပ်ရှားစေရန် JavaScript ကို အခြေခံမှစ၍ လက်တွေ့ Project များဖြင့် လေ့လာခြင်း",
    difficulty: "beginner",
    category: "Web Development",
    icon: "code",
    dir: "javascript",
    tags: ["JavaScript", "DOM", "Interactivity"],
    estimatedTime: "4 weeks",
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    description:
      "Brute force ကနေ Optimized thinking ကို ကူးပြောင်းကြမယ်။ Patterns တွေနဲ့ Visuals တွေကို သုံးပြီး လေ့လာကြမယ်။",
    difficulty: "intermediate",
    category: "Computer Science",
    icon: "trending",
    dir: "dsa",
    tags: ["Algorithms", "Optimization", "Problem Solving"],
    estimatedTime: "8 weeks",
  },
  {
    id: "python",
    title: "Python Programming",
    description:
      "Python ကို အခြေခံမှစ၍ လွယ်ကူရှင်းလင်းစွာ လေ့လာခြင်း။ Variables, Loops, Functions မှစ၍ OOP အထိ ပါဝင်သည်။",
    difficulty: "beginner",
    category: "Programming",
    icon: "code",
    dir: "python",
    tags: ["Python", "Basics", "OOP"],
    estimatedTime: "4 weeks",
  },
  {
    id: "java",
    title: "Java Programming",
    description:
      "Java ကို အခြေခံမှစ၍ လွယ်ကူရှင်းလင်းစွာ လေ့လာခြင်း။ Syntax, OOP, Collections နှင့် Exception Handling များ ပါဝင်သည်။",
    difficulty: "beginner",
    category: "Programming",
    icon: "code",
    dir: "java",
    tags: ["Java", "Basics", "OOP"],
    estimatedTime: "5 weeks",
  },
  {
    id: "nodejs",
    title: "Node.js & Express",
    description:
      "JavaScript ကို အသုံးပြု၍ Backend Server များ တည်ဆောက်ခြင်း။ File System, API နှင့် Express.js အကြောင်းများ ပါဝင်သည်။",
    difficulty: "intermediate",
    category: "Web Development",
    icon: "database",
    dir: "nodejs",
    tags: ["Node.js", "Backend", "Express"],
    estimatedTime: "5 weeks",
  },
  {
    id: "typescript",
    title: "TypeScript Programming",
    description:
      "JavaScript ကို Type System ဖြင့် ပိုမိုခိုင်မာအောင် တည်ဆောက်ခြင်း။ Interfaces, Generics နှင့် Advanced Types များ ပါဝင်သည်။",
    difficulty: "intermediate",
    category: "Programming",
    icon: "code",
    dir: "typescript",
    tags: ["TypeScript", "JavaScript", "Types"],
    estimatedTime: "5 weeks",
  },
  {
    id: "golang",
    title: "Golang Programming",
    description:
      "Google မှ ဖန်တီးထားသော Go Language ကို အခြေခံမှစ၍ Concurrency နှင့် REST API တည်ဆောက်ခြင်းအထိ လေ့လာခြင်း။",
    difficulty: "intermediate",
    category: "Programming",
    icon: "code",
    dir: "golang",
    tags: ["Go", "Backend", "Concurrency"],
    estimatedTime: "6 weeks",
  },
  {
    id: "advanced-css",
    title: "Advanced CSS",
    description:
      "Modern CSS Features, Logic, Layouts နှင့် Architecture များကို နက်နက်နဲနဲ လေ့လာခြင်း",
    difficulty: "advanced",
    category: "Web Development",
    icon: "palette",
    dir: "advanced-css",
    tags: ["CSS", "Advanced", "Architecture"],
    estimatedTime: "5 weeks",
  },
  {
    id: "sql-course",
    title: "SQL အခြေခံ (SQL Masterclass)",
    description:
      "Database များနှင့် စကားပြောဆိုရန်၊ ဒေတာများ ထိန်းချုပ်ရန်နှင့် တည်ဆောက်ရန် မရှိမဖြစ်လိုအပ်သော SQL ကို အလွယ်ကူဆုံး လေ့လာခြင်း",
    difficulty: "beginner",
    category: "Database",
    icon: "database",
    dir: "sql-course",
    tags: ["SQL", "Database", "Queries", "MySQL", "PostgreSQL"],
    estimatedTime: "2 weeks",
  },
  {
    id: "websocket",
    title: "WebSocket နည်းပညာ",
    description:
      "Real-time communication အတွက် WebSocket နည်းပညာကို အခြေခံမှ အဆင့်မြင့်သဘောတရားများအထိ လေ့လာခြင်း",
    difficulty: "intermediate",
    category: "Web Development",
    icon: "rocket",
    dir: "websocket",
    tags: ["Real-time", "WebSocket", "Communication"],
    estimatedTime: "6 weeks",
  },
  {
    id: "advanced-typescript",
    title: "Advanced TypeScript",
    description: "TypeScript ၏ အဆင့်မြင့်သဘောတရားများကို နက်နက်နဲနဲ လေ့လာခြင်း",
    difficulty: "advanced",
    category: "Programming",
    icon: "code",
    dir: "advanced-typescript",
    tags: ["TypeScript", "Generics", "Utility Types"],
    estimatedTime: "10 weeks",
  },
  {
    id: "git-course",
    title: "Git Version Control",
    description:
      "Codes အပြောင်းအလဲများကို စနစ်တကျ စီမံခန့်ခွဲခြင်းနှင့် Teamwork အတွက် မရှိမဖြစ်လိုအပ်သော Git ကို လေ့လာခြင်း",
    difficulty: "beginner",
    category: "Development Tools",
    icon: "git",
    dir: "git-course",
    tags: ["Git", "Version Control", "Collaboration"],
    estimatedTime: "4 weeks",
  },
  {
    id: "web-performance",
    title: "Web Performance",
    description:
      "Website တစ်ခု၏ စွမ်းဆောင်ရည်မြှင့်တင်ခြင်းနှင့် အမြန်နှုန်းတိုးမြှင့်ခြင်းဆိုင်ရာ နည်းပညာများကို လေ့လာခြင်း",
    difficulty: "intermediate",
    category: "Web Development",
    icon: "zap",
    dir: "web-performance",
    tags: ["Performance", "Optimization", "Core Web Vitals"],
    estimatedTime: "8 weeks",
  },
  {
    id: "software-architecture",
    title: "Software Architecture",
    description:
      "Software system တစ်ခုကို ခွဲခြားတည်ဆောက်နည်း၊ maintainable, scalable, reliable ဖြစ်အောင် တည်ဆောက်မှုကို လေ့လာခြင်း",
    difficulty: "advanced",
    category: "System Design",
    icon: "users",
    dir: "software-architecture",
    tags: ["Architecture", "Microservices", "Design Patterns"],
    estimatedTime: "12 weeks",
  },
  {
    id: "relational-database",
    title: "Relational Database",
    description:
      "Database design principles မှ SQL queries များအထိ၊ data ကို စနစ်တကျ သိမ်းဆည်းခြင်းနှင့် စီမံခန့်ခွဲခြင်းဆိုင်ရာ နည်းပညာများကို လေ့လာခြင်း",
    difficulty: "intermediate",
    category: "Database",
    icon: "database",
    dir: "relational-database",
    tags: ["SQL", "Database Design", "Normalization"],
    estimatedTime: "6 weeks",
  },
  {
    id: "frontend-architecture",
    title: "Frontend Architecture Patterns",
    description:
      "Frontend application များကို စနစ်တကျ ဒီဇိုင်းဆွဲခြင်း၊ scalable နှင့် maintainable ဖြစ်အောင် တည်ဆောက်ခြင်းဆိုင်ရာ နည်းပညာများကို လေ့လာခြင်း",
    difficulty: "intermediate",
    category: "Web Development",
    icon: "code",
    dir: "fe-architecture",
    tags: ["Frontend", "Architecture", "Patterns"],
    estimatedTime: "8 weeks",
  },
  {
    id: "ai-proficiency",
    title: "AI Proficiency for Developers",
    description:
      "Developer များအတွက် AI နည်းပညာများကို အခြေခံမှစ၍ လက်တွေ့လုပ်ငန်းခွင်အသုံးချနိုင်သည်အထိ လေ့လာခြင်း",
    difficulty: "intermediate",
    category: "Artificial Intelligence",
    icon: "sparkles",
    dir: "ai-proficiency",
    tags: ["AI", "Machine Learning", "LLM", "RAG"],
    estimatedTime: "12 weeks",
  },
  {
    id: "n8n-course",
    title: "n8n Workflow Automation",
    description:
      "Code မရေးဘဲ Apps, APIs, Services တွေကို ချိတ်ဆက်ပြီး Task တွေကို အလိုအလျောက် လုပ်ဆောင်ပေးနိုင်သော n8n Automation Tool ကို အခြေခံမှ လေ့လာခြင်း",
    difficulty: "beginner",
    category: "Automation",
    icon: "zap",
    dir: "n8n-course",
    tags: ["n8n", "Automation", "No-Code", "Workflow", "AI"],
    estimatedTime: "6 weeks",
  },
  {
    id: "docker",
    title: "Docker & Containerization",
    description:
      "Containers vs VMs၊ Dockerfile ရေးဆွဲခြင်း၊ Docker Compose ဖြင့် Multi-container စနစ်များနှင့် Production Best Practices များ",
    difficulty: "intermediate",
    category: "DevOps",
    icon: "rocket",
    dir: "docker",
    tags: ["Docker", "Containers", "DevOps", "Compose"],
    estimatedTime: "3 weeks",
  },
  {
    id: "nextjs",
    title: "Next.js Full-Stack App Router",
    description:
      "React Server Components (RSC)၊ Server Actions၊ App Router File-system Routing နှင့် Vercel Deployment အပြည့်အစုံ",
    difficulty: "intermediate",
    category: "Web Development",
    icon: "code",
    dir: "nextjs",
    tags: ["Next.js", "React", "Full-Stack", "SSR", "App Router"],
    estimatedTime: "4 weeks",
  },
  {
    id: "mongodb-course",
    title: "MongoDB NoSQL အခြေခံ",
    description:
      "Document-based NoSQL database တစ်ခုဖြစ်သည့် MongoDB ၏ အခြေခံသဘောတရားများ၊ CRUD လုပ်ဆောင်ချက်များနှင့် Atlas Cloud ချိတ်ဆက်ခြင်း",
    difficulty: "beginner",
    category: "Database",
    icon: "database",
    dir: "mongodb-course",
    tags: ["MongoDB", "NoSQL", "Database", "Atlas"],
    estimatedTime: "2 weeks",
  },
  {
    id: "linux-devops",
    title: "Linux, Cloud VPS & DevOps",
    description:
      "Ubuntu Server စီမံခန့်ခွဲခြင်း၊ SSH Security၊ Systemd Services၊ Nginx Reverse Proxy၊ SSL နှင့် GitHub Actions CI/CD Auto-deployment",
    difficulty: "intermediate",
    category: "DevOps",
    icon: "zap",
    dir: "linux-devops",
    tags: ["Linux", "Ubuntu", "DevOps", "Nginx", "VPS", "CI/CD", "SSH", "Security"],
    estimatedTime: "4 weeks",
  },
];


const difficultyConfig: Record<
  Course["difficulty"],
  { color: string; icon: React.ReactNode; label: string }
> = {
  beginner: {
    color:
      "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800",
    icon: <Target className="w-3 h-3" />,
    label: "Beginner",
  },
  intermediate: {
    color:
      "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800",
    icon: <TrendingUp className="w-3 h-3" />,
    label: "Intermediate",
  },
  advanced: {
    color:
      "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800",
    icon: <Sparkles className="w-3 h-3" />,
    label: "Advanced",
  },
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
  trending: TrendingUp,
};

type CourseIconProps = {
  icon: keyof typeof icons;
  className?: string;
};

const CourseIcon: React.FC<CourseIconProps> = ({
  icon,
  className = "w-6 h-6",
}) => {
  const IconComponent = icons[icon] || BookOpen;
  return <IconComponent className={className} />;
};

const DifficultyBadge: React.FC<{ difficulty: Course["difficulty"] }> = ({
  difficulty,
}) => {
  const config = difficultyConfig[difficulty];
  return (
    <Badge variant="outline" className={`${config.color} font-medium border`}>
      {config.icon}
      {config.label}
    </Badge>
  );
};

const CourseStats: React.FC<{
  lessonCount: number;
  estimatedTime?: string;
}> = ({ lessonCount, estimatedTime }) => (
  <div className="mt-3 flex items-center gap-4 text-xs">
    <span className="flex items-center gap-1">
      <BookOpen className="w-3 h-3" aria-hidden="true" />
      {lessonCount} lessons
    </span>
    {estimatedTime && (
      <span className="flex items-center gap-1">
        <Clock className="w-3 h-3" aria-hidden="true" />
        {estimatedTime}
      </span>
    )}
  </div>
);

const matchesQuery = (course: Course, query: string): boolean => {
  if (!query) return true;
  return (
    course.title.toLowerCase().includes(query) ||
    course.description.toLowerCase().includes(query) ||
    course.tags.some((tag) => tag.toLowerCase().includes(query))
  );
};

const categories: string[] = [
  ...new Set(coursesData.map((course) => course.category)),
];

/*
 * Every course renders on the server. There used to be a simulated 300ms
 * "Loading courses" state and a scroll-triggered pager over static data that
 * is already in memory; that made the built /courses page ship zero course
 * cards (search engines saw only a spinner) and blanked the grid on every
 * keystroke.
 */
export function CoursesListing({ facts }: { facts: CourseFacts }): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const query = searchTerm.trim().toLowerCase();

  const filteredCourses = useMemo<Course[]>(
    () =>
      coursesData.filter(
        (course) =>
          matchesQuery(course, query) &&
          (selectedDifficulty === "all" ||
            course.difficulty === selectedDifficulty) &&
          (selectedCategory === "all" || course.category === selectedCategory),
      ),
    [query, selectedDifficulty, selectedCategory],
  );

  const isFiltered =
    query !== "" || selectedDifficulty !== "all" || selectedCategory !== "all";

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedDifficulty("all");
    setSelectedCategory("all");
  };

  return (
    <div className="w-full not-content">
      <div className="max-w-7xl mx-auto px-4 md:py-8 ">
        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 items-start lg:items-center">
          {/* Search Bar */}
          <div className="courses-search relative flex-1 min-w-0 w-full lg:w-auto text-sm">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
              aria-hidden="true"
            />
            <Input
              type="text"
              inputMode="search"
              autoComplete="off"
              aria-label="Search courses"
              placeholder="Search courses, topics, or technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 py-2 text-base md:text-sm"
            />
          </div>

          {/* Filters */}
          <div className="w-full lg:w-auto grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {/* Difficulty Filter */}
            <Select
              value={selectedDifficulty}
              onValueChange={setSelectedDifficulty}
            >
              <SelectTrigger
                className="w-full sm:min-w-[150px]"
                aria-label="Filter by level"
              >
                <SelectValue placeholder="All Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>

            {/* Category Filter */}
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger
                className="w-full sm:min-w-[200px]"
                aria-label="Filter by category"
              >
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Summary & Active Filters */}
        <div className="flex mt-4 md:mt-6 flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm" aria-live="polite">
            <Filter className="w-4 h-4" aria-hidden="true" />
            <span>
              {filteredCourses.length} course
              {filteredCourses.length !== 1 ? "s" : ""} found
              {query && (
                <span>
                  {" "}
                  for <strong>"{searchTerm.trim()}"</strong>
                </span>
              )}
            </span>
          </div>

          {isFiltered && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className=" flex justify-center items-center"
            >
              <X className="w-4 h-4 mr-2" aria-hidden="true" />
              <span className="pt-1">Clear all filters</span>
            </Button>
          )}
        </div>

        {filteredCourses.length > 0 ? (
          <div className="courses-grid grid grid-cols-1 md:mt-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCourses.map((course) => {
              const fact = facts[course.dir];
              return (
                <Card
                  key={course.id}
                  className="group transition-all duration-300 h-full flex flex-col overflow-hidden pt-2"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center justify-center w-14 h-14 rounded-xl group-hover:scale-105 transition-transform duration-300">
                        <CourseIcon
                          icon={course.icon}
                          className="w-7 block h-7 text-accent"
                        />
                      </div>
                      <DifficultyBadge difficulty={course.difficulty} />
                    </div>

                    <CardTitle className="text-xl font-semibold transition-colors duration-300 line-clamp-2">
                      {/* A real heading so screen readers can jump between
                          courses. Inherits the card title styling because
                          this project does not load Tailwind's preflight. */}
                      <h2 className="m-0 [font-size:inherit] [font-weight:inherit] [line-height:inherit]">
                        {course.title}
                      </h2>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <CardDescription className="text-sm leading-relaxed line-clamp-3 ">
                      {course.description}
                    </CardDescription>

                    <CourseStats
                      lessonCount={fact?.lessonCount ?? 0}
                      estimatedTime={course.estimatedTime}
                    />

                    <div className="mt-4 flex flex-wrap gap-2">
                      {course.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs px-2 py-1 transition-colors border-0"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {course.tags.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="text-xs px-2 py-1 transition-colors border-0"
                        >
                          +{course.tags.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4">
                    {/* One link styled as a button: a <button> nested in an
                        <a> is invalid HTML and is announced twice. */}
                    <Button
                      asChild
                      className="w-full cursor-pointer group/btn border-1 shadow-md transition-all duration-300"
                    >
                      <a href={fact?.href ?? `/${course.dir}`}>
                        Start Learning
                        <span className="sr-only">: {course.title}</span>
                        <ArrowRight
                          className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200"
                          aria-hidden="true"
                        />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card className="text-center py-20 border-2 border-dashed">
            <CardContent className="space-y-8">
              <div className="w-28 h-28 mx-auto rounded-full flex items-center justify-center">
                <Search className="w-14 h-14" aria-hidden="true" />
              </div>

              <div className="space-y-3">
                <CardTitle className="text-2xl font-semibold">
                  No courses found
                </CardTitle>
                <CardDescription className="text-lg max-w-lg mx-auto leading-relaxed">
                  No course matches that search. Try a shorter word such as
                  "git" or "sql", or clear the filters to see all{" "}
                  {coursesData.length} courses.
                </CardDescription>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="secondary" onClick={clearFilters}>
                  <GraduationCap className="w-4 h-4 mr-2" aria-hidden="true" />
                  View all courses
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
