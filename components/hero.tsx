import { Button, Container, Eyebrow } from "./ui";
import { Icon } from "./icon";

function ProductDiagram() {
  return <div className="relative mx-auto w-full max-w-[460px] py-6 lg:py-0" aria-hidden="true">
    <div className="absolute inset-10 rounded-full bg-brand/5 blur-3xl" />
    <svg viewBox="0 0 480 430" className="diagram-float relative w-full" fill="none">
      <defs><linearGradient id="platform" x1="40" y1="200" x2="420" y2="350" gradientUnits="userSpaceOnUse"><stop stopColor="#171e13" /><stop offset="1" stopColor="#0b0c0b" /></linearGradient></defs>
      <g stroke="#79ff03" strokeOpacity="0.2" strokeWidth="1"><path d="m50 265 190-104 190 104-190 107L50 265Z" /><path d="m50 285 190 106 190-106M50 305l190 106 190-106M240 372v39" /><path d="M240 22v58M54 178l41 23M425 178l-41 23" strokeDasharray="4 6" /></g>
      <path d="m75 245 165-93 165 93-165 94L75 245Z" fill="url(#platform)" stroke="#79ff03" strokeOpacity="0.6" />
      <path d="M75 245v24l165 93 165-93v-24M240 339v23" stroke="#79ff03" strokeOpacity="0.3" />
      <path d="m120 201 120-68 120 68-120 68-120-68Z" fill="#10160d" stroke="#79ff03" />
      <path d="M120 201v23l120 68 120-68v-23M240 269v23" stroke="#79ff03" strokeOpacity="0.5" />
      <path d="m180 162 60-34 60 34-60 34-60-34Z" fill="#79ff03" /><path d="M180 162v28l60 34 60-34v-28" fill="#3d8000" stroke="#79ff03" /><path d="M240 196v28" stroke="#79ff03" />
      <path d="m224 157-10 6 10 6m32-12 10 6-10 6m-11-16-8 20" stroke="#0b0c0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="240" cy="74" r="5" fill="#79ff03" /><circle cx="54" cy="178" r="3" fill="#79ff03" /><circle cx="425" cy="178" r="3" fill="#79ff03" />
      <g fontFamily="monospace" fontSize="10" letterSpacing="2"><text x="240" y="52" textAnchor="middle" fill="#79ff03">YOUR NEXT MOVE</text><text x="17" y="162" fill="#ffffff80">IDEA</text><text x="386" y="162" fill="#ffffff80">IMPACT</text><text x="240" y="400" textAnchor="middle" fill="#ffffff55">BUILT ON A SHARED GOAL</text></g>
    </svg>
    <div className="absolute bottom-16 left-0 rounded-lg border border-white/15 bg-[#111310] px-4 py-3 shadow-xl"><div className="flex items-center gap-2 font-mono text-[10px] text-white/65"><span className="h-1.5 w-1.5 rounded-full bg-brand" />Thoughtful engineering</div></div>
    <div className="absolute right-0 top-[38%] rounded-lg border border-white/15 bg-[#111310] px-4 py-3"><div className="flex items-center gap-2 font-mono text-[10px] text-white/65"><Icon name="sparkles" className="h-3.5 w-3.5 text-brand" />Practical possibilities</div></div>
  </div>;
}

export function Hero() {
  return <section className="grid-pattern overflow-hidden bg-ink text-white"><Container className="grid items-center gap-8 pb-12 pt-14 sm:pt-20 lg:grid-cols-[1.3fr_1fr] lg:gap-12 lg:pb-20 lg:pt-24"><div className="relative z-10"><Eyebrow light>Software expertise. Digital possibilities.</Eyebrow><h1 className="max-w-3xl font-heading text-[40px] font-semibold leading-[1.04] tracking-[-0.06em] sm:text-[64px] lg:text-[76px]">Build your<br />next move<span className="text-brand">.</span><br /><span className="text-brand">With Codenefy.</span></h1><p className="mt-7 max-w-lg text-base leading-7 text-white/60 sm:text-lg sm:leading-8">From your next product to a stronger team. Software development, ecommerce support, and creative services built around your business.</p><div className="mt-9 flex flex-wrap gap-3"><Button href="/contact">Discuss your project</Button><Button href="#services" variant="outline" className="border-white/20 text-white">Explore our services</Button></div><div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 text-[11px] text-white/50">{["Project delivery", "Team extension", "Ongoing support"].map(item => <span key={item} className="flex items-center gap-2"><Icon name="check" className="h-3.5 w-3.5 text-brand" />{item}</span>)}</div></div><ProductDiagram /></Container><Container><div className="flex flex-col justify-between gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center"><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">Local understanding. Global collaboration.</p><p className="text-[11px] leading-6 text-white/60">Pakistan <span className="px-1.5 text-white/25">/</span> USA <span className="px-1.5 text-white/25">/</span> Canada <span className="px-1.5 text-white/25">/</span> Australia <span className="px-1.5 text-white/25">/</span> UAE <span className="px-1.5 text-white/25">/</span> Saudi Arabia <span className="px-1.5 text-brand">+</span> Worldwide</p></div></Container></section>;
}
