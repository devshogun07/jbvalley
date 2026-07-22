import { Construction, Scale, TrendingUp, Lock, Banknote, ClipboardList } from "lucide-react";

const FEATURES = [
    {
        icon: Construction,
        title: "Prime Land",
        desc: "Strategically located plots in high-growth corridors.",
    },
    {
        icon: Scale,
        title: "Clear Legal Title",
        desc: "Fully verified, encumbrance-free properties.",
    },
    {
        icon: TrendingUp,
        title: "High Growth",
        desc: "Markets with 15–25% appreciation potential.",
    },
    {
        icon: Lock,
        title: "Flexibility",
        desc: "Multiple tenure options tailored to your goals.",
    },
    {
        icon: Banknote,
        title: "Attractive ROI",
        desc: "Consistent above-market returns for investors.",
    },
    {
        icon: ClipboardList,
        title: "Long Term Plans",
        desc: "Decade-long master plans with clear milestones.",
    },
];

export default function Hero4() {
    return (
        <div className="bg-[#0D192B] px-6 py-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                    <span className="w-10 h-px bg-[#c9a84c]" />
                    <span className="text-[#c9a84c] text-xs tracking-[0.2em] font-semibold">
                        WHY CHOOSE US
                    </span>
                    <span className="w-10 h-px bg-[#c9a84c]" />
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center leading-tight mb-16">
                    Strategic Land. Strong Returns.
                    <br />
                    <span className="text-[#c9a84c]">Secure Future.</span>
                </h2>

                <div className="grid md:grid-cols-3 border-t border-l border-white/10 bg-[#111f38]/40">
                    {FEATURES.map((feature) => (
                        <div
                            key={feature.title}
                            className="border-b border-r border-white/10 p-10"
                        >
                            <feature.icon className="w-8 h-8 text-[#c9a84c] mb-6" />
                            <h3 className="text-white font-bold text-lg mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
