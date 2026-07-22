import { Trophy, CheckCircle2, Search, Sprout } from "lucide-react";

const FEATURES = [
    {
        icon: Trophy,
        title: "Trusted Experience",
        desc: "Over 15 years delivering landmark residential projects across prime locations.",
    },
    {
        icon: CheckCircle2,
        title: "Premium Quality",
        desc: "International construction standards with locally sourced premium materials.",
    },
    {
        icon: Search,
        title: "Full Transparency",
        desc: "Clear documentation, regular updates, and honest timelines at every stage.",
    },
    {
        icon: Sprout,
        title: "Sustainable Design",
        desc: "Eco-conscious architecture that lowers footprint without compromising luxury.",
    },
];

export default function Hero2() {
    return (
        <div className="bg-[#0b1628] px-6 py-24">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-px bg-[#c9a84c]" />
                        <span className="text-[#c9a84c] text-xs tracking-[0.2em] font-semibold">
                            ABOUT JBVALLEY
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-4xl font-extrabold text-white leading-tight mb-6">
                        Building Value Through <br /> Trust &amp; Transparency
                    </h2>

                    <p className="text-gray-400 text-lg mb-8">
                        JBvalley creates vibrant residential communities that blend
                        modern design, luxury living, and prime locations. Our
                        properties elevate lifestyles and set new standards in
                        living excellence. From concept to handover, we are
                        committed to delivering experiences that exceed
                        expectations.
                    </p>

                    <button className="bg-[#c9a84c] hover:bg-[#d9b45f] text-[#0D192B] rounded-sm font-semibold px-8 py-4 text-sm tracking-wide mb-12">
                        LEARN MORE ABOUT US
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        {FEATURES.map((feature) => (
                            <div key={feature.title} className="flex gap-3">
                                <feature.icon className="w-6 h-6 text-[#c9a84c] shrink-0" />
                                <div>
                                    <div className="text-white font-semibold mb-1">
                                        {feature.title}
                                    </div>
                                    <div className="text-gray-400 text-sm">
                                        {feature.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 border border-[#c9a84c]/30 rounded-sm translate-x-4 translate-y-4" />
                    <img
                        src="/hero-img.jpg"
                        alt="JBvalley development"
                        className="relative w-full h-[500px] object-cover rounded-sm"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-[#c9a84c] rounded-sm px-8 py-5 text-center">
                        <div className="text-3xl font-extrabold text-[#0D192B]">
                            15+
                        </div>
                        <div className="text-[11px] font-semibold tracking-widest text-[#0D192B]">
                            YEARS OF TRUST
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
