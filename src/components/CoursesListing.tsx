import React, { useState, useMemo, useEffect, type JSX } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
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
import { Badge } from "./ui/badge";
import {
  Search,
  BookOpen,
  Clock,
  ArrowRight,
  ArrowLeft,
  Filter,
  Users,
  Star,
  Zap,
  Code,
  Database,
  Globe,
  GitBranch,
  Rocket,
} from "lucide-react";

// Type definitions
type Course = {
  id: string;
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  category: string;
  icon: keyof typeof icons;
  href: string;
  lessons: number;
  duration: string;
  tags: string[];
};

// Course data extracted from the sidebar configuration
const coursesData: Course[] = [
  {
    id: "websocket",
    title: "WebSocket နည်းပညာ",
    description:
      "Real-time communication အတွက် WebSocket နည်းပညာကို အခြေခံမှ အဆင့်မြင့်သဘောတရားများအထိ လေ့လာခြင်း",
    difficulty: "intermediate",
    category: "Web Development",
    icon: "rocket",
    href: "/websocket/introduction/what-is-websocket",
    lessons: 12,
    duration: "6-8 weeks",
    tags: ["Real-time", "WebSocket", "Communication"],
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
    duration: "10-12 weeks",
    tags: ["TypeScript", "Generics", "Utility Types"],
  },
  {
    id: "git-course",
    title: "Git Version Control",
    description:
      "Codes အပြောင်းအလဲများကို စနစ်တကျ စီမံခန့်ခွဲခြင်းနှင့် Teamwork အတွက် မရှိမဖြစ်လိုအပ်သော Git ကို လေ့လာခြင်း",
    difficulty: "beginner",
    category: "Development Tools",
    icon: "git",
    href: "/git-course/introduction/why-git",
    lessons: 20,
    duration: "4-5 weeks",
    tags: ["Git", "Version Control", "Collaboration"],
  },
  {
    id: "web-performance",
    title: "Web Performance",
    description:
      "Website တစ်ခု၏ စွမ်းဆောင်ရည်မြှင့်တင်ခြင်းနှင့် အမြန်နှုန်းတိုးမြှင့်ခြင်းဆိုင်ရာ နည်းပညာများကို လေ့လာခြင်း",
    difficulty: "intermediate",
    category: "Web Development",
    icon: "zap",
    href: "/web-performance/introduction/why-web-performance",
    lessons: 18,
    duration: "7-8 weeks",
    tags: ["Performance", "Optimization", "Core Web Vitals"],
  },
  {
    id: "software-architecture",
    title: "Software Architecture",
    description:
      "Software system တစ်ခုကို ခွဲခြားတည်ဆောက်နည်း၊ maintainable, scalable, reliable ဖြစ်အောင် တည်ဆောက်မှုကို လေ့လာခြင်း",
    difficulty: "advanced",
    category: "System Design",
    icon: "users",
    href: "/software-architecture/foundations/foundations",
    lessons: 22,
    duration: "12-14 weeks",
    tags: ["Architecture", "Microservices", "Design Patterns"],
  },
  {
    id: "relational-database",
    title: "Relational Database",
    description:
      "Database design principles မှ SQL queries များအထိ၊ data ကို စနစ်တကျ သိမ်းဆည်းခြင်းနှင့် စီမံခန့်ခွဲခြင်းဆိုင်ရာ နည်းပညာများကို လေ့လာခြင်း",
    difficulty: "intermediate",
    category: "Database",
    icon: "database",
    href: "/relational-database/introduction/welcome-to-database",
    lessons: 16,
    duration: "6-7 weeks",
    tags: ["SQL", "Database Design", "Normalization"],
  },
  {
    id: "html",
    title: "HTML",
    description:
      "Web development အတွက် မရှိမဖြစ် အခြေခံ HTML ကို လွယ်လွယ်နဲ့ လေ့လာခြင်း",
    difficulty: "beginner",
    category: "Web Development",
    icon: "globe",
    href: "/html/introduction/welcome-to-html",
    lessons: 8,
    duration: "2-3 weeks",
    tags: ["HTML", "Web Basics", "Markup"],
  },
];

const difficultyLabels: Record<Course["difficulty"], string> = {
  beginner: "အခြေခံ",
  intermediate: "အလယ်အလတ်",
  advanced: "အဆင့်မြင့်",
};

const difficultyColors: Record<Course["difficulty"], string> = {
  beginner:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800",
  intermediate:
    "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200 border-amber-200 dark:border-amber-800",
  advanced:
    "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200 border-rose-200 dark:border-rose-800",
};

const icons = {
  rocket: Rocket,
  code: Code,
  git: GitBranch,
  zap: Zap,
  users: Users,
  database: Database,
  globe: Globe,
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

export function CoursesListing(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    "all" | Course["difficulty"]
  >("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const coursesPerPage: number = 9;

  // Get unique categories
  const categories: string[] = [
    ...new Set(coursesData.map((course) => course.category)),
  ];

  // Filter courses based on search and filters
  const filteredCourses = useMemo<Course[]>(() => {
    return coursesData.filter((course: Course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.tags.some((tag: string) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesDifficulty =
        selectedDifficulty === "all" ||
        course.difficulty === selectedDifficulty;
      const matchesCategory =
        selectedCategory === "all" || course.category === selectedCategory;

      return matchesSearch && matchesDifficulty && matchesCategory;
    });
  }, [searchTerm, selectedDifficulty, selectedCategory]);

  // Pagination
  const totalPages: number = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex: number = (currentPage - 1) * coursesPerPage;
  const paginatedCourses: Course[] = filteredCourses.slice(
    startIndex,
    startIndex + coursesPerPage
  );

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedDifficulty, selectedCategory]);

  return (
    <div className="not-content w-full max-w-7xl mx-auto px-4 py-8 flex flex-col gap-10">
      {/* Search and Filters */}

      <div className="flex gap-6">
        {/* Search Bar */}
        <div className="md:col-span-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search Courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-full"
            />
          </div>
        </div>

        {/* Difficulty Filter */}

        <Select
          value={selectedDifficulty}
          onValueChange={(value) =>
            setSelectedDifficulty(
              value as "beginner" | "intermediate" | "advanced" | "all"
            )
          }
        >
          <SelectTrigger className="h-full min-w-36 hover:bg-accent/80 transition-colors">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>

        {/* Category Filter */}
        <>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="h-full hover:bg-accent/80 transition-colors">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </>
      </div>

      {/* Results Summary */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-muted-foreground" />
          <p className="text-muted-foreground">
            {filteredCourses.length} courses found.
            {searchTerm && ` "${searchTerm}" အတွက်`}
          </p>
        </div>
        {(searchTerm ||
          selectedDifficulty !== "all" ||
          selectedCategory !== "all") && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSearchTerm("");
              setSelectedDifficulty("all");
              setSelectedCategory("all");
            }}
          >
            clear
          </Button>
        )}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedCourses.map((course, index) => (
          <Card
            key={course.id}
            className="group hover:shadow-lg transition-all duration-300 border border-muted-foreground/20 relative overflow-hidden flex flex-col h-full min-h-[370px] bg-gradient-to-br from-background via-muted/10 to-background"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <CardHeader className="relative z-10 pb-2">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-105">
                  <CourseIcon icon={course.icon} className="w-6 h-6" />
                </div>
                <Badge
                  variant="secondary"
                  className={`${
                    difficultyColors[course.difficulty]
                  } font-medium px-3 py-1 rounded-full text-xs`}
                >
                  {difficultyLabels[course.difficulty]}
                </Badge>
              </div>
              <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                {course.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="relative z-10 space-y-3 flex-1 flex flex-col">
              <CardDescription className="text-sm leading-relaxed line-clamp-3 mb-2">
                {course.description}
              </CardDescription>
              <div className="flex flex-wrap mt-6 gap-3 justify-between items-center text-xs text-muted-foreground mb-2">
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <span className="font-medium text-primary">
                  {course.category}
                </span>
              </div>
              <div className="flex pt-2 flex-wrap gap-2 mt-auto">
                {course.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {course.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{course.tags.length - 3}
                  </Badge>
                )}
              </div>
            </CardContent>

            <CardFooter className="relative z-10 pt-4 mt-auto">
              <Button
                asChild
                className="w-full group/btn rounded-lg text-base font-medium bg-[var(--sl-color-accent)] hover:bg-[var(--sl-color-accent-high)] text-[var(--sl-color-bg)] transition-colors duration-200"
              >
                <a href={course.href}>
                  စတင်လေ့လာရန်
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredCourses.length === 0 && (
        <Card className="text-center py-16">
          <CardContent>
            <div className="mb-4 opacity-50">
              <Search className="w-16 h-16 mx-auto text-muted-foreground" />
            </div>
            <CardTitle className="text-2xl mb-2">No courses found</CardTitle>
            <CardDescription className="mb-6 max-w-md mx-auto">
              Try adjusting your search or clear the filters to see more
              courses.
            </CardDescription>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedDifficulty("all");
                setSelectedCategory("all");
              }}
            >
              clear filter
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <CardContent className="pt-6">
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              ရှေ့သို့
            </Button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-10 h-10"
                  >
                    {page}
                  </Button>
                )
              )}
            </div>

            <Button
              variant="outline"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="flex items-center gap-2"
            >
              နောက်သို့
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground">
              page {currentPage} / {totalPages}
            </p>
          </div>
        </CardContent>
      )}
    </div>
  );
}
