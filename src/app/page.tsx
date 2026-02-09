import Image from 'next/image';
import { ServiceSection } from '@/components/ServiceSection';
import { ServiceGallery } from '@/components/ServiceGallery';
import data from '@/data/dienstleistungen.json';
import { Service } from '@/lib/types';
import { cn } from "@/lib/utils";

// --- TITLE DESIGN OPTIONS ---
// 'A': Minimalist (White, Tracking-widest, Clean)
// 'B': Cinematic (Glass/Blur, Gradient, Current Best)
// 'C': Modern Outline (Glass Text, Stroke, Glow)
const TITLE_OPTION: 'A' | 'B' | 'C' = 'B';


export default function Home() {
  const services: Service[] = data.dienstleistungen;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center text-black text-center p-8 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/images/L7-Video-canva.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="relative z-20 flex flex-col items-center gap-8">
          {/* TITLE VARIATIONS */}
          <div className="relative">
            {/* Option A: Minimalist & Elegant */}
            {TITLE_OPTION === 'A' && (
              <h1 className="relative z-10 text-7xl md:text-9xl font-bold tracking-[0.2em] text-white drop-shadow-xl font-moderniz">
                L7 PRO
              </h1>
            )}

            {/* Option B: Cinematic Blur & Gradient (Original) */}
            {TITLE_OPTION === 'B' && (
              <div className="relative">
                {/* Soft blurred glow behind the text */}
                <div className="absolute inset-0 blur-3xl bg-white/20 rounded-full scale-150 z-0" />
                <h1 className="relative z-10 text-7xl md:text-9xl font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] font-moderniz mix-blend-overlay">
                  L7 PRO
                </h1>
                {/* Fallback/Duplicate for readability if blend mode gets lost */}
                <h1 className="absolute inset-0 z-10 text-7xl md:text-9xl font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 opacity-50 font-moderniz" aria-hidden="true">
                  L7 PRO
                </h1>
              </div>
            )}

            {/* Option C: Modern Glass Outline */}
            {TITLE_OPTION === 'C' && (
              <div className="relative group">
                {/* Outer Glow */}
                <div className="absolute inset-0 blur-2xl bg-emerald-500/20 rounded-full scale-110 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <h1 className="relative z-10 text-7xl md:text-9xl font-bold tracking-tight text-transparent font-moderniz"
                  style={{
                    WebkitTextStroke: '2px rgba(255, 255, 255, 0.8)',
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
                  }}>
                  L7 PRO
                </h1>
                {/* Inner Fill on Hover or standard state if desired */}
                <h1 className="absolute inset-0 z-10 text-7xl md:text-9xl font-bold tracking-tight text-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-moderniz" aria-hidden="true">
                  L7 PRO
                </h1>
              </div>
            )}
          </div>

          <div className="h-1 w-24 bg-white/80 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

          {/* Glass container for subtitle only */}
          <div className="backdrop-blur-md bg-white/10 p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <p className="text-lg md:text-2xl font-medium tracking-wide text-white leading-relaxed text-center">
              Exzellenz in sieben Dimensionen.<br className="hidden md:block" /> Ihr Partner für umfassende Dienstleistungen.
            </p>
          </div>
        </div>

        <div className="absolute bottom-12 z-20 animate-bounce">
          <svg className="w-8 h-8 text-black drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Interactive Service Gallery */}
      <ServiceGallery />

      {/* Services Loop */}
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      {/* Footer */}
      <footer className="w-full py-12 px-8 flex justify-between items-center bg-black text-white text-xs tracking-widest uppercase">
        <div>© {new Date().getFullYear()} L7-Pro</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-gray-400 transition-colors">Impressum</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Kontakt</a>
        </div>
      </footer>
    </main>
  );
}
