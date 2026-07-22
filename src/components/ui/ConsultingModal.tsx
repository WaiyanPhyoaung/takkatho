import React, { useState } from "react";

export const ConsultingModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    summary: "",
    budget: "အခြား",
    source: "YouTube",
  });

  const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfYVNCAoFRjc1s0-IodUL2STEo7xFbPTiNvTbB9jBXKYFHLpg/formResponse";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Build form data for Google Form submission
      const body = new URLSearchParams();
      body.append("entry.1916612169", formData.name);
      body.append("entry.747831225", formData.contact);
      body.append("entry.625197430", formData.summary);
      body.append("entry.1495079002", formData.budget);
      body.append("entry.194347537", formData.source);

      // Post directly to Google Form Response endpoint
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const getTelegramUrl = () => {
    const text = encodeURIComponent(
      `👋 မင်္ဂလာပါ ဝေယံ၊ အလိုအလျောက် Automation မေးမြန်းချင်လို့ပါ:\n\n👤 အမည်: ${formData.name}\n📞 ဆက်သွယ်ရန်: ${formData.contact}\n⚡ လိုအပ်ချက်: ${formData.summary}\n💰 Budget: ${formData.budget}\n🌐 သိရှိခဲ့သည့် လမ်းကြောင်း: ${formData.source}`
    );
    return `https://t.me/share/url?url=&text=${text}`;
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => { setIsOpen(true); setSubmitted(false); }}
        className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm shadow-2xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
      >
        <span className="text-base animate-bounce">🤖</span>
        <span>Automation Consulting</span>
      </button>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn overflow-y-auto">
          <div className="relative w-full max-w-lg my-8 p-6 sm:p-8 rounded-3xl bg-stone-950 border border-orange-500/30 text-white shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-stone-400 hover:text-white text-xl font-bold transition-colors cursor-pointer"
            >
              ✕
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-3xl mx-auto">
                  ✓
                </div>
                <h3 className="text-2xl font-bold">ကျေးဇူးတင်ပါသည်!</h3>
                <p className="text-sm text-stone-300">
                  သင်၏ အချက်အလက်များ Google Form သို့ အောင်မြင်စွာ ရောက်ရှိသွားပါပြီ။ Telegram မှလည်း တိုက်ရိုက် မေးမြန်းနိုင်ပါသည်။
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getTelegramUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
                  >
                    <span>💬 Telegram မှတိုက်ရိုက် ပြောဆိုမည်</span>
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-sm font-semibold text-stone-300 transition-colors cursor-pointer"
                  >
                    ပိတ်မည်
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-2xl bg-orange-500/20 text-orange-400 font-bold text-xl flex items-center justify-center">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Business Automation Consulting</h3>
                    <p className="text-xs text-stone-400">လုပ်ငန်းသုံး AI & n8n System များ တည်ဆောက်ရန် ဆက်သွယ်ပါ</p>
                  </div>
                </div>

                {/* Name Field */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">အမည် (Name)</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="ဦးမောင်မောင်"
                    className="w-full p-3 rounded-xl bg-stone-900 border border-stone-800 focus:border-orange-500 text-sm text-white outline-none"
                  />
                </div>

                {/* Contact Field */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">ဖုန်းနံပါတ် သို့မဟုတ် Telegram Handle</label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="09123456789 / @username"
                    className="w-full p-3 rounded-xl bg-stone-900 border border-stone-800 focus:border-orange-500 text-sm text-white outline-none"
                  />
                </div>

                {/* Budget Selection Field */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">ခန့်မှန်း Budget ပမာဏ (Budget Range)</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full p-3 rounded-xl bg-stone-900 border border-stone-800 focus:border-orange-500 text-sm text-white outline-none cursor-pointer"
                  >
                    <option value="အခြား">အခြား (Other)</option>
                    <option value="<$300">&lt; $300</option>
                    <option value="$300 - $500">$300 - $500</option>
                    <option value="$500 - $1,000">$500 - $1,000</option>
                    <option value="$1,000+">$1,000+</option>
                  </select>
                </div>

                {/* Where did you hear about us? */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">မည်သည့် လမ်းကြောင်းမှ သိရှိခဲ့သနည်း?</label>
                  <select
                    value={formData.source}
                    onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                    className="w-full p-3 rounded-xl bg-stone-900 border border-stone-800 focus:border-orange-500 text-sm text-white outline-none cursor-pointer"
                  >
                    <option value="youtube">YouTube</option>
                    <option value="facebook">Facebook</option>
                    <option value="github">GitHub</option>
                    <option value="friend">မိတ်ဆွေ ညွှန်းဆိုမှု (Friend Recommendation)</option>
                    <option value="other">အခြား (Other)</option>
                  </select>
                </div>

                {/* Requirements / Summary Field */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">လိုအပ်သော Automation အကြောင်းအရာ စုစည်းချက်</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    placeholder="Telegram Order Bot, Messenger Auto-reply, CRM Sync..."
                    className="w-full p-3 rounded-xl bg-stone-900 border border-stone-800 focus:border-orange-500 text-sm text-white outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 font-bold text-sm text-white shadow-lg transition-all active:scale-95 disabled:opacity-50 mt-2 cursor-pointer"
                >
                  {loading ? "ပို့ဆောင်နေပါသည်..." : "မေးမြန်းမှု ပို့မည် →"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ConsultingModal;
