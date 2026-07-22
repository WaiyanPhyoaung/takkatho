import React, { useState, useEffect } from "react";

interface LessonCompletionProps {
  lessonId?: string;
}

export const LessonCompletion: React.FC<LessonCompletionProps> = ({ lessonId }) => {
  const [completed, setCompleted] = useState<boolean>(false);
  const [key, setKey] = useState<string>("");

  useEffect(() => {
    const id = lessonId || window.location.pathname.replace(/\/$/, "");
    setKey(`takkatho_completed_${id}`);
    const saved = localStorage.getItem(`takkatho_completed_${id}`);
    if (saved === "true") {
      setCompleted(true);
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
  };

  return (
    <div className="my-8 p-5 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-orange-500/10 border border-orange-500/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${completed ? 'bg-green-500 text-white' : 'bg-orange-500/20 text-orange-600 dark:text-orange-400'}`}>
          {completed ? "✓" : "📖"}
        </div>
        <div>
          <h4 className="font-bold text-base text-gray-900 dark:text-white">
            {completed ? "သင်ခန်းစာ ပြီးမြောက်ပါပြီ!" : "ဒီသင်ခန်းစာ ဖတ်ပြီးပြီလား?"}
          </h4>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {completed ? "သင်၏ လေ့လာမှု တိုးတက်မှုကို သိမ်းဆည်းပြီးပါပြီ" : "ပြီးမြောက်ကြောင်း မှတ်သားထားရန် အောက်ပါ ခလုတ်ကို နှိပ်ပါ"}
          </p>
        </div>
      </div>

      <button
        onClick={toggleCompletion}
        className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md active:scale-95 flex items-center gap-2 cursor-pointer ${
          completed
            ? "bg-green-600 hover:bg-green-700 text-white"
            : "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
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
