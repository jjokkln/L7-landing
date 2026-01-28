import Image from 'next/image';
import { ServiceSection } from '@/components/ServiceSection';
import { ServiceGallery } from '@/components/ServiceGallery';
import data from '@/data/dienstleistungen.json';
import { Service } from '@/lib/types';

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
          <source src="/images/Hero.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/10 z-10" />

        <div className="relative z-20 flex flex-col items-center">
          <div className="backdrop-blur-sm bg-white/30 p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl animate-in fade-in zoom-in duration-1000">
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-4 leading-none text-black drop-shadow-sm">
              L7-Pro
            </h1>
            <div className="h-1 w-24 bg-black/80 mx-auto mb-6 rounded-full" />
            <p className="max-w-2xl text-lg md:text-2xl font-medium tracking-wide text-gray-900 leading-relaxed">
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
