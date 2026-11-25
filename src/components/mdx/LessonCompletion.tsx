import React, { useState, useEffect } from "react";

interface LessonCompletionProps {
  lessonId?: string;
  lessonTitle?: string;
}

type CompletedCourseMap = Record<
  string,
  { path: string; courseDir: string; title: string; completedAt: number }
>;

const COURSE_PATHS_KEY = "takkatho_course_paths";

export const LessonCompletion: React.FC<LessonCompletionProps> = ({
  lessonId,
  lessonTitle,
}) => {
  const [completed, setCompleted] = useState<boolean>(false);
  const [key, setKey] = useState<string>("");
  const [normalizedPath, setNormalizedPath] = useState<string>("");

  useEffect(() => {
    const id = (lessonId || window.location.pathname).replace(/\/$/, "");
    setNormalizedPath(id);
    const storageKey = `takkatho_completed_${id}`;
    setKey(storageKey);
    try {
      if (localStorage.getItem(storageKey) === "true") {
        setCompleted(true);
      }
    } catch {
      // Storage may be unavailable in private browsing or strict privacy modes.
    }
  }, [lessonId]);

  const toggleCompletion = () => {
    if (!key) return;
    const nextState = !completed;
    setCompleted(nextState);
    try {
      const rawPaths = localStorage.getItem(COURSE_PATHS_KEY);
      const parsed: CompletedCourseMap = rawPaths ? JSON.parse(rawPaths) : {};
      if (nextState) {
        localStorage.setItem(key, "true");
        if (normalizedPath) {
          const courseDir = normalizedPath.split("/").filter(Boolean)[0] ?? "";
          parsed[normalizedPath] = {
            path: normalizedPath,
            courseDir,
            title:
              lessonTitle ||
              document.title.split("|")[0]?.trim() ||
              normalizedPath,
            completedAt: Date.now(),
          };
          localStorage.setItem(COURSE_PATHS_KEY, JSON.stringify(parsed));
        }
      } else {
        localStorage.removeItem(key);
        if (normalizedPath && parsed[normalizedPath]) {
          delete parsed[normalizedPath];
          localStorage.setItem(COURSE_PATHS_KEY, JSON.stringify(parsed));
        }
      }
    } catch {
      // Ignore storage quota / access errors so toggle state still works in-memory.
    }
  };

  return (
    <div className="not-content my-8 p-5 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-orange-500/10 border border-orange-500/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${completed ? "bg-green-700 text-white" : "bg-orange-500/20 text-orange-700 dark:text-orange-400"}`}
        >
          {completed ? "✓" : "📖"}
        </div>
        <div>
          <h2 className="font-bold text-base text-gray-900 dark:text-white">
            {completed ? "သင်ခန်းစာ ပြီးမြောက်ပါပြီ!" : "ဒီသင်ခန်းစာ ဖတ်ပြီးပြီလား?"}
          </h2>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {completed ? "သင်၏ လေ့လာမှု တိုးတက်မှုကို သိမ်းဆည်းပြီးပါပြီ" : "ပြီးမြောက်ကြောင်း မှတ်သားထားရန် အောက်ပါ ခလုတ်ကို နှိပ်ပါ"}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={toggleCompletion}
        className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md active:scale-95 flex items-center gap-2 cursor-pointer ${
          completed
            ? "bg-green-700 hover:bg-green-800 text-white"
            : "bg-gradient-to-r from-orange-700 to-amber-700 hover:from-orange-800 hover:to-amber-800 text-white"
        }`}
      >
        {completed ? (
          <>
            <span>✓ ပြီးမြောက်ပြီး</span>
            <span className="text-xs opacity-80">(ပြန်ဖျက်ရန် နှိပ်ပါ)</span>
          </>
        ) : (
          <span>Mark as Completed ✓</span>
        )}
      </button>
    </div>
  );
};

export default LessonCompletion;
