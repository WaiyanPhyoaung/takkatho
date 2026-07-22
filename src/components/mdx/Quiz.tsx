import React, { useState } from "react";

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

interface QuizProps {
  title?: string;
  questions: Question[];
}

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
      if (selectedAnswers[idx] === q.correctIndex) {
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
    <div className="my-10 p-6 sm:p-8 rounded-3xl bg-stone-950 border border-orange-500/30 text-stone-100 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-800">
        <div className="w-10 h-10 rounded-2xl bg-orange-500/20 text-orange-400 font-bold text-xl flex items-center justify-center">
          ❓
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-xs text-stone-400">မေးခွန်းများကို ဖြေဆိုပြီး မိမိ၏ နားလည်မှုကို စစ်ဆေးပါ</p>
        </div>
      </div>

      <div className="space-y-8">
        {questions.map((q, qIdx) => {
          return (
            <div key={qIdx} className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800">
              <h4 className="font-bold text-base text-white mb-4">
                {qIdx + 1}. {q.question}
              </h4>

              <div className="space-y-3">
                {q.options.map((opt, oIdx) => {
                  let optionStyle = "bg-stone-800 hover:bg-stone-700 text-stone-200 border-stone-700";

                  if (selectedAnswers[qIdx] === oIdx) {
                    optionStyle = "bg-orange-500/20 border-orange-500 text-orange-300 font-semibold";
                  }

                  if (submitted) {
                    if (oIdx === q.correctIndex) {
                      optionStyle = "bg-green-500/20 border-green-500 text-green-300 font-semibold";
                    } else if (selectedAnswers[qIdx] === oIdx && oIdx !== q.correctIndex) {
                      optionStyle = "bg-red-500/20 border-red-500 text-red-300";
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelect(qIdx, oIdx)}
                      disabled={submitted}
                      className={`w-full text-left p-3.5 rounded-xl border text-sm transition-all duration-200 flex items-center justify-between cursor-pointer ${optionStyle}`}
                    >
                      <span>{opt}</span>
                      {selectedAnswers[qIdx] === oIdx && !submitted && (
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                      )}
                      {submitted && oIdx === q.correctIndex && (
                        <span className="text-green-400 font-bold">✓ Correct</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && q.explanation && (
                <div className="mt-4 p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs text-orange-300">
                  💡 <strong>ရှင်းလင်းချက်:</strong> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        {submitted ? (
          <div className="flex items-center gap-4 w-full justify-between">
            <div className="text-lg font-bold">
              ရမှတ်: <span className="text-orange-400">{calculateScore()}</span> / {questions.length}
            </div>
            <button
              onClick={handleReset}
              className="px-5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-sm font-semibold transition-all cursor-pointer"
            >
              ပြန်လည်စမ်းသပ်ရန် 🔄
            </button>
          </div>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={Object.keys(selectedAnswers).length < questions.length}
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:opacity-50 font-bold text-white text-sm transition-all shadow-lg active:scale-95 ml-auto cursor-pointer"
          >
            အဖြေများ စစ်ဆေးမည် →
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
