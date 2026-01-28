import Image from 'next/image';
import Link from 'next/link';
import data from '@/data/dienstleistungen.json';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return data.dienstleistungen.map((service) => ({
        id: service.id.toString(),
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const service = data.dienstleistungen.find((s) => s.id === parseInt(id));

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white text-black">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 p-8 flex justify-between items-center mix-blend-difference text-white">
                <Link href="/" className="text-xl font-bold tracking-tighter uppercase">L7-Pro</Link>
                <Link href="/" className="text-sm font-medium tracking-widest uppercase hover:text-gray-300 transition-colors">Zurück</Link>
            </nav>

            {/* Hero */}
            <div className="relative h-[70vh] w-full">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-0 left-0 p-12 md:p-24 w-full">
                    <span className="text-white text-sm font-light tracking-[0.2em] block uppercase mb-4">
                        Service {service.id.toString().padStart(2, '0')}
                    </span>
                    <h1 className="text-white text-5xl md:text-7xl font-light tracking-tight leading-tight max-w-4xl">
                        {service.title}
                    </h1>
                </div>
            </div>

            {/* Content Placeholder */}
            <div className="max-w-4xl mx-auto px-8 py-24 md:py-32">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
                    <div>
                        <h3 className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-4">Überblick</h3>
                        <p className="text-xl font-light leading-relaxed">
                            Detaillierte Informationen zu {service.title} werden hier bald verfügbar sein. Wir bieten maßgeschneiderte Lösungen für Ihre Anforderungen.
                        </p>
                    </div>
                    <div className="space-y-8 text-gray-600 font-light leading-relaxed">
                        <p>
                            {service.title} ist einer unserer Kernbereiche bei L7-Pro. Wir setzen auf höchste Qualität, Zuverlässigkeit und moderne Ansätze, um Ihnen das bestmögliche Ergebnis zu liefern.
                        </p>
                        <p>
                            Unser Team aus Experten steht Ihnen zur Seite, von der Planung bis zur Umsetzung. Kontaktieren Sie uns für ein unverbindliches Angebot.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
