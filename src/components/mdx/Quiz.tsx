import React, { useState } from "react";

interface Question {
  id?: string;
  question: string;
  options: string[];
  correctIndex?: number;
  /** Legacy alias supported for backwards compatibility. */
  correctAnswer?: number;
  explanation?: string;
}

interface QuizProps {
  title?: string;
  questions: Question[];
}

const getCorrectIndex = (q: Question): number =>
  q.correctIndex ?? q.correctAnswer ?? -1;

export const Quiz: React.FC<QuizProps> = ({
  title = "သင်ခန်းစာ စစ်ဆေးမှု (Mini Quiz)",
  questions,
}) => {
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
    <div className="not-content my-10 rounded-3xl border border-orange-200 bg-white p-6 text-gray-900 shadow-xl backdrop-blur-xl sm:p-8 dark:border-orange-500/30 dark:bg-stone-950 dark:text-stone-100 dark:shadow-2xl">
      <div className="mb-6 flex items-center gap-3 border-b border-gray-200 pb-4 dark:border-stone-800">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-orange-500/15 text-xl font-bold text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
          ❓
        </div>
        <div>
          <h3 className="m-0 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <p className="m-0 mt-0.5 text-xs text-gray-500 dark:text-stone-400">
            မေးခွန်းများကို ဖြေဆိုပြီး မိမိ၏ နားလည်မှုကို စစ်ဆေးပါ
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {questions.map((q, qIdx) => {
          const correctIdx = getCorrectIndex(q);
          return (
            <div
              key={q.id ?? qIdx}
              className="rounded-2xl border border-gray-200/80 bg-gray-50 p-5 dark:border-stone-800 dark:bg-stone-900/60"
            >
              <h4 className="m-0 mb-4 text-base font-bold leading-relaxed text-gray-900 dark:text-white">
                {qIdx + 1}. {q.question}
              </h4>

              <div className="space-y-3">
                {q.options.map((opt, oIdx) => {
                  const isSelected = selectedAnswers[qIdx] === oIdx;
                  const isCorrect = oIdx === correctIdx;
                  let optionStyle =
                    "bg-white hover:bg-orange-50/60 text-gray-800 border-gray-200 dark:bg-stone-800 dark:hover:bg-stone-700 dark:text-stone-200 dark:border-stone-700";

                  if (isSelected && !submitted) {
                    optionStyle =
                      "bg-orange-50 border-orange-500 text-orange-800 font-semibold dark:bg-orange-500/20 dark:text-orange-300";
                  }

                  if (submitted) {
                    if (isCorrect) {
                      optionStyle =
                        "bg-green-50 border-green-500 text-green-800 font-semibold dark:bg-green-500/20 dark:text-green-300";
                    } else if (isSelected && !isCorrect) {
                      optionStyle =
                        "bg-red-50 border-red-500 text-red-800 dark:bg-red-500/20 dark:text-red-300";
                    }
                  }

                  return (
                    <button
                      type="button"
                      key={oIdx}
                      onClick={() => handleSelect(qIdx, oIdx)}
                      disabled={submitted}
                      className={`flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border p-3.5 text-left text-sm leading-relaxed transition-all duration-200 disabled:cursor-default ${optionStyle}`}
                    >
                      <span>{opt}</span>
                      {isSelected && !submitted && (
                        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                      )}
                      {submitted && isCorrect && (
                        <span className="shrink-0 font-bold text-green-600 dark:text-green-400">
                          ✓ Correct
                        </span>
                      )}
                      {submitted && isSelected && !isCorrect && (
                        <span className="shrink-0 font-bold text-red-600 dark:text-red-400">
                          ✕ Wrong
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && q.explanation && (
                <div className="mt-4 rounded-xl border border-orange-200 bg-orange-50 p-3 text-xs leading-relaxed text-orange-900 dark:border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-300">
                  💡 <strong>ရှင်းလင်းချက်:</strong> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 sm:flex-row dark:border-stone-800">
        {submitted ? (
          <div className="flex w-full items-center justify-between gap-4">
            <div className="text-lg font-bold text-gray-900 dark:text-white">
              ရမှတ်:{" "}
              <span className="text-orange-600 dark:text-orange-400">
                {calculateScore()}
              </span>{" "}
              / {questions.length}
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="cursor-pointer rounded-xl bg-gray-100 px-5 py-2 text-sm font-semibold text-gray-800 transition-all hover:bg-gray-200 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700"
            >
              ပြန်လည်စမ်းသပ်ရန် 🔄
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={Object.keys(selectedAnswers).length < questions.length}
            className="ml-auto w-full cursor-pointer rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-3 text-sm font-bold text-white shadow-lg transition-all hover:from-orange-600 hover:to-amber-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            အဖြေများ စစ်ဆေးမည် →
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
