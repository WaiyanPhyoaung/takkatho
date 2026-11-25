import React, { useState } from "react";

interface Question {
  id?: string;
  question: string;
  options: string[];
  correctIndex?: number;
  /** Legacy alias supported in case any MDX still passes correctAnswer */
  correctAnswer?: number;
  explanation?: string;
}

interface QuizProps {
  title?: string;
  questions: Question[];
}

const getCorrectIndex = (q: Question): number =>
  typeof q.correctIndex === "number" ? q.correctIndex : (q.correctAnswer ?? -1);

export const Quiz: React.FC<QuizProps> = ({ title = "သင်ခန်းစာ စစ်ဆေးမှု (Mini Quiz)", questions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSelect = (questionIdx: number, optionIdx: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionIdx]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === getCorrectIndex(q)) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="not-content my-10 p-6 sm:p-8 rounded-3xl bg-white dark:bg-stone-950 border border-orange-500/30 text-gray-900 dark:text-stone-100 shadow-xl backdrop-blur-xl">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200 dark:border-stone-800">
        <div
          className="w-10 h-10 rounded-2xl bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 font-bold text-xl flex items-center justify-center shrink-0"
          aria-hidden="true"
        >
          ❓
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
          <p className="text-xs text-gray-600 dark:text-stone-400">မေးခွန်းများကို ဖြေဆိုပြီး မိမိ၏ နားလည်မှုကို စစ်ဆေးပါ</p>
        </div>
      </div>

      <div className="space-y-8">
        {questions.map((q, qIdx) => {
          const correctIdx = getCorrectIndex(q);

          return (
            <div
              key={q.id ?? qIdx}
              className="p-5 rounded-2xl bg-gray-50 dark:bg-stone-900/60 border border-gray-200 dark:border-stone-800"
            >
              <h3 className="font-bold text-base text-gray-900 dark:text-white mb-4 leading-relaxed">
                {qIdx + 1}. {q.question}
              </h3>

              <div className="space-y-3">
                {q.options.map((opt, oIdx) => {
                  const isSelected = selectedAnswers[qIdx] === oIdx;
                  const isCorrect = oIdx === correctIdx;

                  let optionStyle =
                    "bg-white hover:bg-gray-100 text-gray-800 border-gray-300 dark:bg-stone-800 dark:hover:bg-stone-700 dark:text-stone-200 dark:border-stone-700";

                  if (isSelected) {
                    optionStyle =
                      "bg-orange-50 border-orange-600 text-orange-950 font-semibold dark:bg-orange-500/20 dark:border-orange-500 dark:text-orange-200";
                  }

                  if (submitted) {
                    if (isCorrect) {
                      optionStyle =
                        "bg-green-50 border-green-700 text-green-950 font-semibold dark:bg-green-500/20 dark:border-green-500 dark:text-green-200";
                    } else if (isSelected && !isCorrect) {
                      optionStyle =
                        "bg-red-50 border-red-700 text-red-950 dark:bg-red-500/20 dark:border-red-500 dark:text-red-200";
                    }
                  }

                  return (
                    <button
                      type="button"
                      key={oIdx}
                      onClick={() => handleSelect(qIdx, oIdx)}
                      disabled={submitted}
                      className={`w-full text-left p-3.5 rounded-xl border text-sm leading-relaxed transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer disabled:cursor-default ${optionStyle}`}
                    >
                      <span>{opt}</span>
                      {isSelected && !submitted && (
                        <span className="w-2.5 h-2.5 shrink-0 rounded-full bg-orange-600 dark:bg-orange-500" />
                      )}
                      {submitted && isCorrect && (
                        <span className="shrink-0 font-bold text-green-700 dark:text-green-400">✓ Correct</span>
                      )}
                      {submitted && isSelected && !isCorrect && (
                        <span className="shrink-0 font-bold text-red-700 dark:text-red-400">✕ Wrong</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && q.explanation && (
                <div className="mt-4 p-3 rounded-xl bg-orange-50 border border-orange-200 text-xs leading-relaxed text-orange-950 dark:bg-orange-500/10 dark:border-orange-500/20 dark:text-orange-200">
                  💡 <strong>ရှင်းလင်းချက်:</strong> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        {submitted ? (
          <div className="flex items-center gap-4 w-full justify-between">
            <div className="text-lg font-bold text-gray-900 dark:text-white">
              ရမှတ်:{" "}
              <span className="text-orange-700 dark:text-orange-400">{calculateScore()}</span> / {questions.length}
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="px-5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-stone-800 dark:hover:bg-stone-700 dark:text-stone-200 text-sm font-semibold transition-all cursor-pointer"
            >
              ပြန်လည်စမ်းသပ်ရန် 🔄
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={Object.keys(selectedAnswers).length < questions.length}
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-orange-700 to-amber-700 hover:from-orange-800 hover:to-amber-800 disabled:opacity-50 font-bold text-white text-sm transition-all shadow-lg active:scale-95 ml-auto cursor-pointer disabled:cursor-not-allowed"
          >
            အဖြေများ စစ်ဆေးမည် →
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
