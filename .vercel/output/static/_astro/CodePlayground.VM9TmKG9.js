import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as o}from"./index.CY-HDqYb.js";const C=`<div class="card">
  <h1>Hello Takkatho! 👋</h1>
  <p>မင်္ဂလာပါ! Live Code Playground တွင် စမ်းသပ် ပြင်ဆင်ကြည့်ပါ။</p>
  <button id="btn">Click Me!</button>
</div>`,w=`body {
  font-family: system-ui, sans-serif;
  background: #0f172a;
  color: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.card {
  background: #1e293b;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #334155;
  text-align: center;
  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5);
}

h1 {
  color: #f97316;
  margin-top: 0;
}

button {
  background: linear-gradient(135deg, #f97316, #f59e0b);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
}

button:hover {
  transform: scale(1.05);
}`,N=`document.getElementById('btn').addEventListener('click', () => {
  alert('🎉 Takkatho Playground တွင် အောင်မြင်စွာ စမ်းသပ်ပြီးပါပြီ!');
});`,T=({title:h="Interactive Live Playground",initialHtml:d=C,initialCss:c=w,initialJs:x=N})=>{const[n,b]=o.useState(d),[r,m]=o.useState(c),[a,g]=o.useState(x),[s,l]=o.useState("html"),[p,f]=o.useState(""),[v,u]=o.useState(!1),i=()=>{const t=`
      <!DOCTYPE html>
      <html>
        <head>
          <style>${r}</style>
        </head>
        <body>
          ${n}
          <script>${a}<\/script>
        </body>
      </html>
    `;f(t)};o.useEffect(()=>{i()},[]);const j=()=>{b(d),m(c),g(x),i()},y=()=>{let t=n;s==="css"&&(t=r),s==="js"&&(t=a),navigator.clipboard.writeText(t),u(!0),setTimeout(()=>u(!1),2e3)};return e.jsxs("div",{className:"my-10 rounded-3xl bg-stone-950 border border-orange-500/30 text-stone-100 shadow-2xl overflow-hidden backdrop-blur-xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-stone-900 border-b border-stone-800",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 font-bold flex items-center justify-center text-sm",children:"💻"}),e.jsx("h3",{className:"text-base font-bold text-white",children:h})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:y,className:"px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-300 transition-colors cursor-pointer",children:v?"✓ Copied!":"📋 Copy Code"}),e.jsx("button",{onClick:j,className:"px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-300 transition-colors cursor-pointer",children:"🔄 Reset"}),e.jsx("button",{onClick:i,className:"px-4 py-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer",children:"Run Code ⚡"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-stone-800 min-h-[420px]",children:[e.jsxs("div",{className:"flex flex-col bg-stone-950",children:[e.jsxs("div",{className:"flex border-b border-stone-800 bg-stone-900/50",children:[e.jsx("button",{onClick:()=>l("html"),className:`px-4 py-2.5 text-xs font-bold transition-colors cursor-pointer ${s==="html"?"bg-orange-500/20 text-orange-400 border-b-2 border-orange-500":"text-stone-400 hover:text-stone-200"}`,children:"HTML"}),e.jsx("button",{onClick:()=>l("css"),className:`px-4 py-2.5 text-xs font-bold transition-colors cursor-pointer ${s==="css"?"bg-orange-500/20 text-orange-400 border-b-2 border-orange-500":"text-stone-400 hover:text-stone-200"}`,children:"CSS"}),e.jsx("button",{onClick:()=>l("js"),className:`px-4 py-2.5 text-xs font-bold transition-colors cursor-pointer ${s==="js"?"bg-orange-500/20 text-orange-400 border-b-2 border-orange-500":"text-stone-400 hover:text-stone-200"}`,children:"JavaScript"})]}),e.jsxs("div",{className:"relative flex-1 p-4",children:[s==="html"&&e.jsx("textarea",{value:n,onChange:t=>b(t.target.value),className:"w-full h-full min-h-[340px] bg-transparent text-orange-300 font-mono text-xs leading-relaxed outline-none resize-none",spellCheck:!1}),s==="css"&&e.jsx("textarea",{value:r,onChange:t=>m(t.target.value),className:"w-full h-full min-h-[340px] bg-transparent text-amber-300 font-mono text-xs leading-relaxed outline-none resize-none",spellCheck:!1}),s==="js"&&e.jsx("textarea",{value:a,onChange:t=>g(t.target.value),className:"w-full h-full min-h-[340px] bg-transparent text-yellow-300 font-mono text-xs leading-relaxed outline-none resize-none",spellCheck:!1})]})]}),e.jsxs("div",{className:"flex flex-col bg-white",children:[e.jsxs("div",{className:"px-4 py-2 bg-stone-900 border-b border-stone-800 text-xs font-semibold text-stone-400 flex items-center justify-between",children:[e.jsx("span",{children:"Live Output Preview"}),e.jsx("span",{className:"w-2 h-2 rounded-full bg-green-500 animate-pulse"})]}),e.jsx("iframe",{srcDoc:p,title:"Live Output",sandbox:"allow-scripts",className:"w-full flex-1 min-h-[340px] border-none bg-white"})]})]})]})};export{T as CodePlayground,T as default};
