"use client";

import { FocusRail, type FocusRailItem } from "@/components/ui/focus-rail";
import data from "@/data/dienstleistungen.json";

export function ServiceGallery() {
    const items: FocusRailItem[] = data.dienstleistungen.map((service) => ({
        id: service.id,
        title: service.title,
        description: service.description,
        imageSrc: service.image,
        // Use first two details as meta info, joined by a bullet point
        meta: service.details.slice(0, 2).join(" • "),
        // Link to the specific service page (even if it's an anchor on home for now, using /services/id is cleaner structure)
        href: `/services/${service.id}`,
    }));

    return (
        <section className="w-full bg-white py-12 md:py-20">
            <div className="container mx-auto px-4 mb-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4">
                    Unsere Dienstleistungen
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Wir bieten Ihnen ein umfassendes Spektrum an professionellen Dienstleistungen.
                </p>
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex w-full">
                <FocusRail
                    items={items}
                    autoPlay={false}
                    loop={true}
                />
            </div>

            {/* Mobile View */}
            <div className="flex md:hidden w-full overflow-x-auto snap-x snap-mandatory px-4 gap-4 pb-8 no-scrollbar">
                {items.map((item) => (
                    <div key={item.id} className="snap-center shrink-0 w-[85vw] relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={item.imageSrc}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6 text-white text-left">
                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 block">
                                {item.meta}
                            </span>
                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            {item.description && <p className="text-sm text-gray-200 line-clamp-2">{item.description}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
