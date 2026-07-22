const STEPS = [
    {
        number: "01",
        title: "Site Visit & Consultation",
        desc: "We walk you through the property, master plan, and investment thesis.",
    },
    {
        number: "02",
        title: "Documentation & Legal Review",
        desc: "Our team handles all due diligence — title verification, RERA registration, and agreements.",
    },
    {
        number: "03",
        title: "Flexible Payment Plans",
        desc: "Structured payment options with construction-linked milestones to suit your cash flow.",
    },
    {
        number: "04",
        title: "Handover & Beyond",
        desc: "Smooth possession with ongoing property management and community support.",
    },
];

export default function Hero6() {
    return (
        <div className="bg-[#0D192B] px-6 py-24">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                    <span className="w-10 h-px bg-[#c9a84c]" />
                    <span className="text-[#c9a84c] text-xs tracking-[0.2em] font-semibold">
                        OUR PROCESS
                    </span>
                    <span className="w-10 h-px bg-[#c9a84c]" />
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-20">
                    Simple Steps. Strong Partnership.
                </h2>

                <div className="grid md:grid-cols-4 gap-8">
                    {STEPS.map((step, i) => (
                        <div key={step.number} className="relative">
                            {i < STEPS.length - 1 && (
                                <span className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-white/15" />
                            )}
                            <div className="relative z-10 w-16 h-16 rounded-full border border-[#c9a84c] bg-[#0D192B] flex items-center justify-center text-[#c9a84c] font-bold mb-6">
                                {step.number}
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
