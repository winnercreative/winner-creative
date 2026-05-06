"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
  Play, Check, Zap, Target, ShieldCheck, ChevronDown, 
  ArrowRight, Layers, ChevronLeft, ChevronRight, Clock, 
  Menu, X, MessageCircle, Mail, Sparkles
} from 'lucide-react';

import TestimonialsSection from '@/components/TestimonialsSection'

export default function WinnerCreativePremium() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // --- PREMIUM CSS & ADVANCED ANIMATIONS ---
  const customStyles = `
    @keyframes subtlePan {
      0% { background-position: 0% 0%; }
      50% { background-position: 100% 100%; }
      100% { background-position: 0% 0%; }
    }
    @keyframes float-slow {
      0%, 100% { transform: translateY(0px) scale(1); }
      50% { transform: translateY(-30px) scale(1.05); }
    }
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes spin-slow {
      100% { transform: rotate(360deg); }
    }

    /* Core Utility Classes */
    .bg-mesh {
      background-image: 
        radial-gradient(at 0% 0%, rgba(245, 158, 11, 0.15) 0px, transparent 50%),
        radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.15) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(245, 158, 11, 0.1) 0px, transparent 50%);
      background-size: 200% 200%;
      animation: subtlePan 20s ease infinite;
    }
    
    .bento-card {
      background: linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 32px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .bento-card:hover {
      border-color: rgba(245, 158, 11, 0.3);
      transform: translateY(-4px);
      box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5), inset 0 0 20px rgba(245,158,11,0.05);
    }

    .text-gradient {
      background: linear-gradient(to right, #fff, #a1a1aa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .text-gradient-amber {
      background: linear-gradient(to right, #fcd34d, #f59e0b, #b45309);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    /* Animated Border Wrapper */
    .animated-border-box {
      position: relative;
      border-radius: 32px;
      overflow: hidden;
      padding: 2px; /* Border thickness */
    }
    .animated-border-box::before {
      content: '';
      position: absolute;
      top: -50%; left: -50%; width: 200%; height: 200%;
      background: conic-gradient(transparent, transparent, transparent, #f59e0b, #fff, #f59e0b);
      animation: spin-slow 4s linear infinite;
      z-index: 0;
    }
    .animated-border-inner {
      background: #0a0a0a;
      border-radius: 30px;
      position: relative;
      z-index: 1;
      height: 100%;
    }

    /* Scroll Reveal Classes */
    .reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal.active {
      opacity: 1;
      transform: translateY(0);
    }
    .delay-100 { transition-delay: 100ms; }
    .delay-200 { transition-delay: 200ms; }
    .delay-300 { transition-delay: 300ms; }

    .hide-scrollbar::-webkit-scrollbar { display: none; }
    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `;

  // --- INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ---
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleFaq = (index: number) => setOpenFaqIndex(openFaqIndex === index ? null : index);
 
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollPortfolio = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = Math.min(current.offsetWidth * 0.8, 400);
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const whatsappLink = "https://wa.me/923213953018";

  const allVideos = [
    { title: "Magnetic Charger", cat: "Tech", color: "from-blue-600/80 to-indigo-900/80", src: "/videos/1.mp4" },
    { title: "Smart Ring", cat: "Tech", color: "from-zinc-700/80 to-zinc-900/80", src: "/videos/2.mp4" },
    { title: "TurboJet X", cat: "Tech", color: "from-orange-600/80 to-red-900/80", src: "/videos/3.mp4" },
    { title: "LED Mask", cat: "Beauty", color: "from-pink-600/80 to-rose-900/80", src: "/videos/5.mp4" },
    { title: "Volcano Humidifier", cat: "Home", color: "from-amber-600/80 to-orange-900/80", src: "/videos/7.mp4" },
    { title: "Portable Blender", cat: "Home", color: "from-green-600/80 to-emerald-900/80", src: "/videos/8.mp4" },
    { title: "Defrosting Board", cat: "Home", color: "from-slate-600/80 to-slate-900/80", src: "/videos/9.mp4" },
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-amber-500 selection:text-black overflow-x-hidden relative">
      <style>{customStyles}</style>

      {/* --- MESH BACKGROUND --- */}
      <div className="fixed inset-0 z-0 opacity-40 bg-mesh pointer-events-none"></div>
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
     
      {/* --- VIDEO MODAL (Kept exactly to requirements) --- */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-[360px] aspect-[9/16] bg-black rounded-[32px] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(245,158,11,0.2)]">
            
            {/* WATERMARK LOGO - CENTERED AND HOLLOW */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[110] font-black tracking-tighter pointer-events-none text-3xl whitespace-nowrap opacity-60 mix-blend-difference">
              <span className="text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.8)]">Winner</span>
              <span className="text-transparent [-webkit-text-stroke:1.5px_rgba(245,158,11,0.9)]">creativeads</span>.
            </div>

            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 z-[110] bg-black/40 hover:bg-white text-white hover:text-black p-2 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10"
            >
              <X size={20} />
            </button>
            <video 
              src={activeVideo} 
              className="w-full h-full object-cover" 
              controls 
              controlsList="nodownload" 
              autoPlay 
              playsInline 
            />
          </div>
        </div>
      )}

      {/* --- FLOATING WHATSAPP --- */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-50 group">
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 blur-xl group-hover:blur-2xl transition-all duration-500"></span>
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-110 flex items-center justify-center border border-white/20">
          <MessageCircle size={28} fill="white" />
        </div>
      </a>

      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-[#030303]/80 backdrop-blur-2xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter cursor-pointer flex items-center gap-2" onClick={() => scrollToSection('hero')}>
            <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center text-black font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)]">W</div>
            <span>Winner<span className="text-amber-500">creativeads</span>.</span>
          </div>

          <div className="hidden md:flex gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {['About', 'Why Us', 'Portfolio', 'Pricing', 'FAQ'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))} className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-black hover:bg-white transition-all duration-300">
                {item}
              </button>
            ))}
          </div>

          <a href={whatsappLink} className="hidden md:flex items-center gap-2 bg-amber-500 text-black px-6 py-2.5 rounded-full font-bold hover:bg-white hover:text-black transition-all transform hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-10px_rgba(245,158,11,0.6)]">
            Book Now <ArrowRight size={16} />
          </a>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
       
        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[400px] py-6' : 'max-h-0 py-0 border-transparent'}`}>
          <div className="px-6 flex flex-col gap-2">
            {['About', 'Why Us', 'Portfolio', 'Pricing', 'FAQ'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))} className="text-left text-xl font-bold text-slate-300 hover:text-amber-500 py-3 border-b border-white/5">
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative pt-48 pb-24 px-6 text-center overflow-hidden min-h-[95vh] flex flex-col justify-center items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[150px] -z-10 animate-[float-slow_8s_ease-in-out_infinite]"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 w-full">
          <div className="reveal inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-[0.2em] mb-8 shadow-[0_0_30px_rgba(245,158,11,0.15)]">
            <Sparkles size={14} className="animate-pulse" />
            HIGH-CONVERTING ADS FOR META & TIKTOK
          </div>
         
          <h1 className="reveal delay-100 text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter mb-8 leading-[0.9]">
            <span className="text-gradient">WE DON'T JUST EDIT.</span><br />
            <span className="text-gradient-amber">WE ENGINEER VIRALITY.</span>
          </h1>
         
          <p className="reveal delay-200 text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-14 font-light leading-relaxed">
            Stop scrolling. Start selling. Get <span className="text-white font-medium border-b border-amber-500/30">scroll-stopping hooks</span> and <span className="text-white font-medium border-b border-amber-500/30">retention-based edits</span> delivered in 24 hours.
          </p>
         
          <div className="reveal delay-300 flex flex-col sm:flex-row justify-center gap-6">
            <a href={whatsappLink} className="group relative px-8 py-5 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              <span className="relative z-10 flex items-center gap-2"><Zap size={20} className="text-amber-500" /> Get a Winner Ad ($10)</span>
              <div className="absolute inset-0 bg-amber-400 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </a>
            <button onClick={() => scrollToSection('portfolio')} className="px-8 py-5 rounded-full font-bold text-lg border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-3 group">
              <Play size={20} className="group-hover:text-amber-500 transition-colors" /> View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* --- INFINITE MARQUEE --- */}

      <div className="border-y border-white/5 bg-black/40 backdrop-blur-md py-6 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10"></div>
        <div className="flex gap-24 animate-[marquee_30s_linear_infinite] whitespace-nowrap w-max">
           {[1,2,3,4,5,6].map(i => (
             <React.Fragment key={i}>
                <span className="text-2xl font-black text-white/30 uppercase tracking-widest flex items-center gap-6">TikTok Ads <span className="w-2 h-2 rounded-full bg-amber-500"></span></span>
                <span className="text-2xl font-black text-white/30 uppercase tracking-widest flex items-center gap-6">Meta Reels <span className="w-2 h-2 rounded-full bg-amber-500"></span></span>
                <span className="text-2xl font-black text-white/30 uppercase tracking-widest flex items-center gap-6">Dropshipping <span className="w-2 h-2 rounded-full bg-amber-500"></span></span>
             </React.Fragment>
           ))}
        </div>
      </div>

      {/* --- ABOUT (ORIGINAL STRUCTURE + PREMIUM STYLES) --- */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           
            {/* Left: The Mission */}
            <div className="reveal space-y-8">
              <div className="flex items-center gap-3 text-amber-500 font-bold uppercase tracking-widest text-sm">
                 <Target size={18} /> Our Mission
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter">
                We Don't Just Edit.<br />
                <span className="text-amber-500">We Engineer Traffic.</span>
              </h2>
              <div className="text-slate-300 text-lg leading-relaxed space-y-6">
                <p>
                  <strong>WinnerCreativeAds</strong> is a top-rated creative agency (Fiverr & Upwork) trusted by hundreds of dropshippers to scale their brands. But we are more than just editors—we are students of the algorithm.
                </p>
                <p>
                  We specialize in crafting high-performance video creatives designed to trigger the algorithm immediately:
                </p>
                <ul className="space-y-4 mt-4">
                   {[
                     "The 3-Second Hook: We grab attention instantly to stop the scroll.",
                     "Visual Storytelling: We sell the feeling, not just the product.",
                     "Psychological CTA: Direct response triggers that compel viewers to buy."
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-3">
                       <div className="bg-amber-500/20 p-1 rounded mt-1"><Check size={14} className="text-amber-500"/></div>
                       <span>{item}</span>
                     </li>
                   ))}
                </ul>
                <p className="border-l-4 border-amber-500 pl-4 italic text-white/60">
                  The result? Lower CPC, higher CTR, and more sales—without wasting money on bad ads.
                </p>
              </div>
            </div>

            {/* Right: The Algorithm Strategy */}
            <div className="reveal delay-100 space-y-6">
               {/* Andromeda Box */}
               <div className="bento-card p-10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-[50px] group-hover:bg-amber-500/20 transition-all"></div>
                  <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <Layers className="text-amber-500"/> The Andromeda Update
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    The Game Has Changed. With Meta’s new <strong className="text-white">Andromeda update</strong> and TikTok’s interest-based algorithm, the old way of "buying traffic" is dead. You don't need a massive ad budget anymore. You need <strong className="text-amber-500">Creative Diversity</strong>.
                  </p>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                     <p className="text-white font-medium">The algorithm now prioritizes one thing: <span className="text-amber-500 font-bold uppercase tracking-wider">RETENTION</span>.</p>
                  </div>
               </div>

               {/* Trust Badges */}
               <div className="grid grid-cols-2 gap-4">
                  <div className="bento-card p-6 flex flex-col justify-center items-center text-center">
                     <div className="bg-green-500/20 p-3 rounded-full text-green-500 mb-3"><ShieldCheck size={28}/></div>
                     <div className="font-bold text-xl text-white">Top Rated</div>
                     <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Fiverr & Upwork</div>
                  </div>
                  <div className="bento-card p-6 flex flex-col justify-center items-center text-center">
                     <div className="bg-blue-500/20 p-3 rounded-full text-blue-500 mb-3"><Clock size={28}/></div>
                     <div className="font-bold text-xl text-white">24 Hours</div>
                     <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Fast Delivery</div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- WHY US (ORIGINAL STRUCTURE + PREMIUM STYLES) --- */}
      <section id="why-us" className="py-32 bg-zinc-900/20 border-y border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="reveal text-center mb-16">
               <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">Why Choose Us?</h2>
               <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
            </div>
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                  {
                    t: "🧠 The 3-Second Rule",
                    d: "We know the algorithm. If they don't click in 3 seconds, you lose money. Every video we make is built around a psychological 'Scroll-Stopper' hook designed to grab attention immediately."
                  },
                  {
                    t: "⚡ Speed = Sales",
                    d: "Dropshipping moves fast. Trends die in days. That’s why we deliver winner-ready ads in 24 hours. Launch your campaign tomorrow, not next week."
                  },
                  {
                    t: "📉 Test for $10, Scale for Millions",
                    d: "Stop burning your budget on expensive agencies. Test your products for just $10. If it’s a winner, we’ll help you scale with our bulk packages. Low risk, massive reward."
                  },
                  {
                    t: "📱 Native to the Platform",
                    d: "We don't make 'commercials.' We make TikToks and Reels that feel natural, authentic, and engaging—the kind of content that actually converts Gen Z buyers."
                  }
               ].map((f, i) => (
                  <div key={i} className={`reveal delay-${(i % 2) * 100} bento-card p-10 group flex gap-6 items-start`}>
                     <div className="text-4xl">{f.t.split(' ')[0]}</div>
                     <div>
                        <h3 className="font-bold text-2xl mb-4 text-white">{f.t.substring(2)}</h3>
                        <p className="text-slate-400 text-base leading-relaxed">{f.d}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- PORTFOLIO (CAROUSEL) --- */}
      <section id="portfolio" className="py-32 overflow-hidden relative bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">Recent <span className="text-amber-500">Winners</span></h2>
              <p className="text-xl text-slate-400">High retention. Scroll-stopping hooks. Scalable ads.</p>
            </div>
            <div className="flex gap-3">
               <button onClick={() => scrollPortfolio('left')} className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all group"><ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform"/></button>
               <button onClick={() => scrollPortfolio('right')} className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all group"><ChevronRight size={24} className="group-hover:translate-x-1 transition-transform"/></button>
            </div>
          </div>

          <div ref={scrollContainerRef} className="reveal delay-100 flex overflow-x-auto gap-8 pb-12 hide-scrollbar snap-x snap-mandatory px-4 -mx-4">
            {allVideos.map((vid, idx) => (
              <div
                key={idx}
                onClick={() => setActiveVideo(vid.src)}
                className="min-w-[280px] md:min-w-[340px] snap-center group relative aspect-[9/16] rounded-[40px] overflow-hidden cursor-pointer border border-white/10 transition-all duration-500 shadow-2xl hover:shadow-[0_0_50px_rgba(245,158,11,0.2)] hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${vid.color} mix-blend-multiply opacity-60 z-10`}></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                
                {/* Play Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-125 transition-transform duration-500 z-20 shadow-xl">
                  <Play size={28} fill="white" className="ml-1"/>
                </div>
                
                {/* Info Card */}
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/60 backdrop-blur-xl rounded-3xl border border-white/10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">{vid.cat}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-tight">{vid.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-32 px-6 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">Test. <span className="text-amber-500">Scale.</span> Dominate.</h2>
            <p className="text-xl text-slate-400">Simple pricing. High ROI. Unlimited revisions.</p>
          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
           
            {/* STARTER */}
            <div className="reveal bento-card p-10 flex flex-col h-full">
              <div className="mb-8 pb-8 border-b border-white/10">
                 <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-3">Testing Phase</p>
                 <h3 className="text-3xl font-bold text-white">Starter</h3>
                 <div className="text-6xl font-black text-white mt-4">$10</div>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-amber-400 font-bold text-xs tracking-widest uppercase mb-8 w-max border border-white/5">
                 <Clock size={14}/> 1 Day Delivery
              </div>
              <ul className="space-y-4 text-slate-300 text-sm mb-12 flex-1">
                {["1 Engaging Winner Video Ad", "Script writing included", "Trending music", "Professional editing", "Product imagery usage", "Premium Voice-over", "Up to 20s running time", "3 different hooks (test)", "Unlimited revisions"].map((f, i) => (
                  <li key={i} className="flex gap-3 items-center"><Check size={16} className="text-green-400 shrink-0" /> {f}</li>
                ))}
              </ul>
              <a href={whatsappLink} className="block w-full py-5 rounded-2xl border border-white/20 bg-transparent text-center font-bold hover:bg-white hover:text-black transition-all">Select Starter</a>
            </div>

            {/* STANDARD (Animated Glow) */}
            <div className="reveal delay-100 animated-border-box h-[105%] md:-mt-8 transform z-10 shadow-[0_0_80px_rgba(245,158,11,0.15)]">
              <div className="animated-border-inner p-10 flex flex-col">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[10px] font-black px-6 py-2 rounded-full tracking-widest shadow-lg z-20 whitespace-nowrap">MOST POPULAR</div>
                <div className="mb-8 pb-8 border-b border-white/10 pt-4">
                   <p className="text-amber-500/70 text-xs uppercase tracking-widest font-bold mb-3">Scaling Phase</p>
                   <h3 className="text-4xl font-bold text-amber-500">Standard</h3>
                   <div className="text-7xl font-black text-white mt-4">$50</div>
                </div>
                <div className="inline-flex items-center gap-2 bg-amber-500/10 px-4 py-2 rounded-full text-amber-400 font-bold text-xs tracking-widest uppercase mb-8 w-max border border-amber-500/20">
                   <Clock size={14}/> 2 Days Delivery
                </div>
                <ul className="space-y-4 text-white text-sm mb-12 flex-1 font-medium">
                   {["6 Engaging Winner Video Ads", "Script writing for each ad", "Trending music", "Professional editing", "Product imagery usage", "Premium Voice-over", "Up to 20s running time", "Different hooks & angles", "Unlimited revisions"].map((f, i) => (
                    <li key={i} className="flex gap-3 items-center"><Check size={18} className="text-amber-500 shrink-0" /> {f}</li>
                  ))}
                </ul>
                <a href={whatsappLink} className="block w-full py-5 rounded-2xl bg-amber-500 text-black font-black text-center hover:bg-amber-400 transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transform hover:-translate-y-1">Get Standard</a>
              </div>
            </div>

            {/* PREMIUM */}
            <div className="reveal delay-200 bento-card p-10 flex flex-col h-full">
              <div className="mb-8 pb-8 border-b border-white/10">
                 <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-3">Domination Phase</p>
                 <h3 className="text-3xl font-bold text-white">Scale</h3>
                 <div className="text-6xl font-black text-white mt-4">$100</div>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-purple-400 font-bold text-xs tracking-widest uppercase mb-8 w-max border border-white/5">
                 <Clock size={14}/> 3 Days Delivery
              </div>
              <ul className="space-y-4 text-slate-300 text-sm mb-12 flex-1">
                 {["15 Engaging Winner Video Ads", "Advanced script writing", "Trending music", "High-end editing", "Product imagery usage", "Premium Voice-over", "Up to 20s running time", "Multiple hooks & CTAs", "Unlimited revisions"].map((f, i) => (
                  <li key={i} className="flex gap-3 items-center"><Check size={16} className="text-purple-400 shrink-0" /> {f}</li>
                ))}
              </ul>
              <a href={whatsappLink} className="block w-full py-5 rounded-2xl border border-white/20 bg-transparent text-center font-bold hover:bg-white hover:text-black transition-all">Select Scale</a>
            </div>

          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="py-32 px-6 bg-black/20 border-t border-white/5">
         <div className="max-w-4xl mx-auto">
           <div className="reveal text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Questions? We got you.</h2>
             <p className="text-slate-400 text-lg">Everything you need to know before we start.</p>
           </div>
           
           <div className="space-y-4">
              {[
                 { q: "Do I need to send you the physical product?", a: "No! You don't need to ship us anything. We source high-quality footage of your product from existing online sources (like AliExpress, Alibaba, YouTube, and competitor ads) and edit it into a completely new, viral-style video. This is how we keep our prices low and delivery fast." },
                 { q: "What do I need to provide to get started?", a: "Just your Product Link (AliExpress, Amazon, or your store link) and your Logo (optional). If you have specific text or a special offer (e.g., '50% Off Today'), just let us know in the order notes!" },
                 { q: "Will the music get my ad banned?", a: "We use Trending copyright-free Sounds to maximize virality. However, if you plan to run ads on Facebook/Instagram and need 100% royalty-free stock music to avoid copyright issues, just check the 'Copyright Safe Music' box when you order." },
                 { q: "Can I use these videos on Facebook & Instagram Reels?", a: "Absolutely. We deliver all videos in vertical 9:16 format (1080x1920), which is the perfect standard for TikTok, Instagram Reels, YouTube Shorts, and Facebook Stories. One video, four platforms." },
                 { q: "What if I don't like the video?", a: "We want you to have a winner. Firstly we will try our best to satisfy you and make the best ads. If by chance you don't like it, we offer a 100% money-back guarantee." }
              ].map((faq, idx) => (
                 <div key={idx} className="reveal bento-card overflow-hidden">
                    <button onClick={() => toggleFaq(idx)} className="w-full flex justify-between items-center p-6 md:p-8 text-left group">
                       <span className="font-bold text-lg md:text-xl pr-4 text-white group-hover:text-amber-400 transition-colors">{faq.q}</span>
                       <ChevronDown className={`text-slate-500 transition-transform duration-500 shrink-0 ${openFaqIndex === idx ? 'rotate-180 text-amber-500' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaqIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                       <div className="p-6 md:p-8 pt-0 text-slate-400 text-base leading-relaxed">
                          {faq.a}
                       </div>
                    </div>
                 </div>
              ))}
           </div>
         </div>
      </section>
<TestimonialsSection />
      {/* --- PREMIUM FOOTER --- */}
      <footer className="py-24 border-t border-white/10 bg-[#020202] text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center text-black font-bold">W</div>
              <span className="text-3xl font-black tracking-tighter">Winner<span className="text-amber-500">creativeads</span>.</span>
            </div>
            <p className="text-slate-500 text-xs font-bold tracking-[0.2em] uppercase">Est. 2026 // Worldwide</p>
          </div>
         
          <div className="flex flex-col sm:flex-row gap-6 md:gap-10 text-sm font-bold tracking-widest uppercase">
            <a href={whatsappLink} className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-2xl transition-all border border-white/5">
              <MessageCircle size={20} className="text-green-500 group-hover:scale-110 transition-transform" /> 
              <span className="text-slate-300 group-hover:text-white transition-colors">WhatsApp Us</span>
            </a>
         
          </div>
        </div>
        
        <div className="relative z-10 mt-20 pt-8 border-t border-white/5 text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} WinnerCreativeAds. All rights reserved.
        </div>
      </footer>
    </div>
  );
}