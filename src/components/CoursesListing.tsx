import React, { useState, useMemo, useEffect, type JSX } from "react";
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
  Target,
  TrendingUp,
  Sparkles,
  Loader2,
  GraduationCap,
  PlayCircle,
  X,
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
  tags: string[];
  estimatedTime?: string;
  rating?: number;
  students?: number;
};

// Course data
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
    tags: ["Real-time", "WebSocket", "Communication"],
    estimatedTime: "6 weeks",
    rating: 4.8,
    students: 1250,
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
    students: 2100,
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
    tags: ["Git", "Version Control", "Collaboration"],
    estimatedTime: "4 weeks",
    rating: 4.7,
    students: 3200,
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
    tags: ["Performance", "Optimization", "Core Web Vitals"],
    estimatedTime: "8 weeks",
    rating: 4.6,
    students: 1800,
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
    tags: ["Architecture", "Microservices", "Design Patterns"],
    estimatedTime: "12 weeks",
    rating: 4.9,
    students: 950,
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
    tags: ["SQL", "Database Design", "Normalization"],
    estimatedTime: "6 weeks",
    rating: 4.5,
    students: 1650,
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
    tags: ["HTML", "Web Basics", "Markup"],
    estimatedTime: "2 weeks",
    rating: 4.4,
    students: 4200,
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

const CourseStats: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="mt-3 flex items-center gap-4 text-xs">
      <div className="flex items-center gap-1">
        <BookOpen className="w-3 h-3" />
        <span>{course.lessons} lessons</span>
      </div>
    </div>
  );
};

export function CoursesListing(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
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

  // Simulate loading state
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedDifficulty, selectedCategory]);

  return (
    <div className="w-full not-content">
      <div className="max-w-7xl mx-auto px-4 md:py-8 ">
        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          {/* Search Bar */}
          <div className="relative flex-1 min-w-0 w-full md:w-auto text-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search courses, topics, or technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 py-2"
            />
          </div>

          {/* Filters */}
          <div className="w-full md:w-auto flex gap-3 text-sm">
            {/* Difficulty Filter */}
            <Select
              value={selectedDifficulty}
              onValueChange={(value) =>
                setSelectedDifficulty(
                  value as "beginner" | "intermediate" | "advanced" | "all"
                )
              }
            >
              <SelectTrigger className="min-w-[150px]">
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
              <SelectTrigger className="min-w-[200px] flex-1 ">
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
          <div className="flex items-center gap-2 text-sm">
            <Filter className="w-4 h-4" />
            <span>
              {filteredCourses.length} course
              {filteredCourses.length !== 1 ? "s" : ""} found
              {searchTerm && (
                <span>
                  {" "}
                  for <strong>"{searchTerm}"</strong>
                </span>
              )}
            </span>
          </div>

          {/* Clear Filters */}
          {(searchTerm ||
            selectedDifficulty !== "all" ||
            selectedCategory !== "all") && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearchTerm("");
                setSelectedDifficulty("all");
                setSelectedCategory("all");
              }}
              className=" flex justify-center items-center"
            >
              <X className="w-4 h-4 mr-2" />
              <span className="pt-1">Clear all filters</span>
            </Button>
          )}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-16">
            <div className="flex items-center gap-3">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span>Loading courses...</span>
            </div>
          </div>
        )}

        {/* Courses Grid */}
        {!isLoading && (
          <div className="grid grid-cols-1 mt:2 md:mt-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {paginatedCourses.map((course) => (
              <Card
                key={course.id}
                className="group transition-all duration-300 h-full flex flex-col overflow-hidden pt-2"
              >
                {/* Card Header */}
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
                    {course.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1">
                  <CardDescription className="text-sm leading-relaxed line-clamp-3 ">
                    {course.description}
                  </CardDescription>

                  {/* Course Stats */}
                  <CourseStats course={course} />

                  {/* Tags */}
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

                {/* Card Footer */}
                <CardFooter className="pt-4">
                  <a href={course.href} className="w-full">
                    <Button className="w-full cursor-pointer group/btn border-1 shadow-md transition-all duration-300">
                      Start Learning
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredCourses.length === 0 && (
          <Card className="text-center py-20 border-2 border-dashed">
            <CardContent className="space-y-8">
              <div className="w-28 h-28 mx-auto rounded-full flex items-center justify-center">
                <Search className="w-14 h-14" />
              </div>

              <div className="space-y-3">
                <CardTitle className="text-2xl font-semibold">
                  No courses found
                </CardTitle>
                <CardDescription className="text-lg max-w-lg mx-auto leading-relaxed">
                  We couldn't find any courses matching your criteria. Try
                  adjusting your search terms or clearing the filters to explore
                  all available courses.
                </CardDescription>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedDifficulty("all");
                    setSelectedCategory("all");
                  }}
                  className="text-white shadow-lg"
                >
                  <GraduationCap className="w-4 h-4 mr-2" />
                  View all courses
                </Button>
                <Button variant="outline">
                  <Search className="w-4 h-4 mr-2" />
                  Browse categories
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Pagination */}
        {!isLoading && totalPages > 1 && (
          <div className="flex flex-col items-center gap-6 pt-8">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>

              <div className="flex items-center gap-2">
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  let pageNum = i + 1;
                  if (totalPages > 5) {
                    if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                  }

                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
                      className="w-10 h-10"
                    >
                      {pageNum}
                    </Button>
                  );
                })}
              </div>

              <Button
                variant="outline"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm">
                Page {currentPage} of {totalPages} • {filteredCourses.length}{" "}
                total courses
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
