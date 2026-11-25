import React, { useState, useEffect } from "react";

interface LessonCompletionProps {
  lessonId?: string;
  lessonTitle?: string;
}

const PROGRESS_KEY = "takkatho_course_paths";

function syncCourseProgress(courseSlug: string, pathname: string, isDone: boolean) {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    const map: Record<string, string[]> = raw ? JSON.parse(raw) : {};
    const list = new Set(map[courseSlug] ?? []);
    if (isDone) {
      list.add(pathname);
    } else {
      list.delete(pathname);
    }
    map[courseSlug] = [...list];
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(map));
  } catch {
    /* ignore malformed storage */
  }
}

export const LessonCompletion: React.FC<LessonCompletionProps> = ({
  lessonId,
  lessonTitle,
}) => {
  const [completed, setCompleted] = useState<boolean>(false);
  const [key, setKey] = useState<string>("");

  useEffect(() => {
    const pathname = window.location.pathname.replace(/\/$/, "");
    const id = lessonId || pathname;
    const storageKey = `takkatho_completed_${id}`;
    setKey(storageKey);
    const saved = localStorage.getItem(storageKey);
    if (saved === "true") {
      setCompleted(true);
      const courseSlug = pathname.split("/")[1];
      if (courseSlug) syncCourseProgress(courseSlug, pathname, true);
    }
  }, [lessonId]);

  const toggleCompletion = () => {
    if (!key) return;
    const nextState = !completed;
    setCompleted(nextState);
    if (nextState) {
      localStorage.setItem(key, "true");
    } else {
      localStorage.removeItem(key);
    }
    const pathname = window.location.pathname.replace(/\/$/, "");
    const courseSlug = pathname.split("/")[1];
    if (courseSlug) syncCourseProgress(courseSlug, pathname, nextState);
  };

  return (
    <div className="not-content my-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-orange-500/20 bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-orange-500/10 p-5 shadow-sm backdrop-blur-md sm:flex-row">
      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold transition-colors ${completed ? "bg-green-500 text-white" : "bg-orange-500/20 text-orange-600 dark:text-orange-400"}`}>
          {completed ? "✓" : "📖"}
        </div>
        <div>
          <h4 className="m-0 text-base font-bold text-gray-900 dark:text-white">
            {completed ? "သင်ခန်းစာ ပြီးမြောက်ပါပြီ!" : "ဒီသင်ခန်းစာ ဖတ်ပြီးပြီလား?"}
          </h4>
          <p className="m-0 mt-0.5 text-xs text-gray-600 dark:text-gray-400">
            {completed
              ? `${lessonTitle ? `${lessonTitle} — ` : ""}သင်၏ လေ့လာမှု တိုးတက်မှုကို သိမ်းဆည်းပြီးပါပြီ`
              : "ပြီးမြောက်ကြောင်း မှတ်သားထားရန် အောက်ပါ ခလုတ်ကို နှိပ်ပါ"}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={toggleCompletion}
        aria-label={lessonTitle ? `Mark ${lessonTitle} as completed` : "Toggle lesson completion"}
        className={`flex shrink-0 cursor-pointer items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold shadow-md transition-all duration-200 active:scale-95 ${
          completed
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600"
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
