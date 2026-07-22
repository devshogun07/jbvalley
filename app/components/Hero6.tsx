const STEPS = [
    {
        number: "01",
        title: "Land Assembly & Tenure",
        desc: "Multi-parcel acquisition, boundary consolidation, and the instrument that evidences control of every parcel.",
    },
    {
        number: "02",
        title: "Statutory Sanction",
        desc: "Land-use declaration, environmental clearance, FSI sanction, and RERA registration before any marketing begins.",
    },
    {
        number: "03",
        title: "Phased Construction",
        desc: "Ten phases delivered in sequence, each with its own approvals, contractor package and completion record.",
    },
    {
        number: "04",
        title: "Handover & Operation",
        desc: "Possession against completion certificates, followed by facility management of the operating asset.",
    },
];

export default function Hero6() {
    return (
        <div className="bg-[#0D192B] px-6 py-24">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                    <span className="w-10 h-px bg-[#c9a84c]" />
                    <span className="text-[#c9a84c] text-xs tracking-[0.2em] font-semibold">
                        DEVELOPMENT SEQUENCE
                    </span>
                    <span className="w-10 h-px bg-[#c9a84c]" />
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-6">
                    The Order the Work Is Done In
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-20">
                    No stage begins before the one before it is documented.
                    This is the sequence carried over from four decades of
                    public and private works.
                </p>

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
