import { Landmark, FileCheck2, Layers, FileText, Users, ShieldCheck } from "lucide-react";

const FEATURES = [
    {
        icon: Landmark,
        title: "Public Service Discipline",
        desc: "Sixteen years of public civil works under departmental procedure, technical audit, and state administration.",
    },
    {
        icon: FileCheck2,
        title: "Multi-Authority Sanctions",
        desc: "Layout sanctions issued by four statutory development authorities (HMDA, HUDA, VUDA, NUDA) across two states.",
    },
    {
        icon: Layers,
        title: "Assembly at Scale",
        desc: "Independent consolidation and layout sanction of large land parcels spanning 742, 650, and 200 acres per venture.",
    },
    {
        icon: FileText,
        title: "Full Disclosure Portal",
        desc: "Every pending statutory approval and project milestone is publicly declared on this corporate portal.",
    },
    {
        icon: Users,
        title: "Consortium Capital Alignment",
        desc: "Forty-three private institutional and co-developer investors participating alongside developer equity.",
    },
    {
        icon: ShieldCheck,
        title: "Phased Risk Mitigation",
        desc: "Ten-phase capital deployment model ensuring exposure is staged and matched to statutory progress.",
    },
];

export default function Hero4() {
    return (
        <div id="engineering" className="bg-[#0D192B] px-6 py-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                    <span className="w-10 h-px bg-[#c9a84c]" />
                    <span className="text-[#c9a84c] text-xs tracking-[0.2em] font-semibold">
                        EXECUTION RIGOR
                    </span>
                    <span className="w-10 h-px bg-[#c9a84c]" />
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center leading-tight mb-6">
                    Evidence-Based Governance &amp; Performance
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    Supported by official public registers, statutory layout
                    sanctions, and transparent corporate governance.
                </p>

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
