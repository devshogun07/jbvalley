const STATS = [
    { value: "3,500+", label: "ACRES PROPOSED" },
    { value: "275 Mn", label: "SQ.FT. PROPOSED" },
    { value: "10", label: "PHASES" },
    { value: "10 Yrs", label: "DEVELOPMENT HORIZON" },
    { value: "43", label: "CONSORTIUM INVESTORS" },
];

export default function Hero5() {
    return (
        <div className="bg-[#c9a84c] py-12 md:py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-y-8 text-center">
                {STATS.map((stat) => (
                    <div key={stat.label}>
                        <div className="text-3xl font-extrabold text-[#0D192B] mb-2">
                            {stat.value}
                        </div>
                        <div className="text-xs tracking-widest text-[#0D192B]/70 font-medium">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
            <p className="max-w-3xl mx-auto text-center text-[#0D192B]/70 text-xs mt-10">
                Indicative vision — figures describe the proposed master plan.
                They are not sanctioned quantities and remain subject to
                statutory approval.
            </p>
        </div>
    );
}
