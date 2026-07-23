const STATS = [
    { value: "41", label: "YEARS ENGINEERING PRACTICE" },
    { value: "9", label: "SANCTIONED VENTURES DELIVERED" },
    { value: "1,869", label: "ACRES DEVELOPED & SANCTIONED" },
    { value: "4", label: "STATUTORY DEVELOPMENT AUTHORITIES" },
];

export default function Hero1() {
    return (
        <div
            id="overview"
            className="relative bg-cover bg-center"
            style={{ backgroundImage: "url(/hero-bg.jpeg)" }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D192B]/95 via-[#0D192B]/70 to-[#0D192B]/95" />

            <div className="relative px-6 pt-32 pb-40 max-w-3xl mx-auto md:mx-0 md:pl-24">
                <span className="inline-block border border-[#c9a84c] rounded-sm text-[#c9a84c] bg-[#c9a84c]/10 text-xs tracking-[0.2em] px-4 py-2 mb-6">
                    JB VALLEY HOMES INFRA LLP · INFRASTRUCTURE &amp; MASTER PLANNING
                </span>

                <h1 className="text-5xl font-extrabold leading-tight mb-6">
                    <span className="block text-white">Engineering Discipline.</span>
                    <span className="block text-[#c9a84c]">Master-Planned Infrastructure.</span>
                </h1>

                <p className="text-gray-300 text-lg mb-8 max-w-xl">
                    Forty-one years across public civil engineering and private
                    township development — nine sanctioned ventures totaling
                    1,869 acres delivered across Telangana and Andhra Pradesh,
                    sanctioned by four development authorities. Now advancing
                    Konkan Valley, a 3,500+ acre integrated township project.
                </p>

                <div className="flex gap-4">
                    <a
                        href="#ventures"
                        className="bg-[#c9a84c] hover:bg-[#d9b45f] text-[#0D192B] rounded-sm font-semibold px-8 py-4 text-sm tracking-wide"
                    >
                        REVIEW TRACK RECORD
                    </a>
                    <a
                        href="#contact"
                        className="border border-gray-400 text-white rounded-sm font-semibold px-8 py-4 text-sm tracking-wide"
                    >
                        GOVERNANCE &amp; APPROVALS LEDGER →
                    </a>
                </div>
            </div>

            <div className="relative bg-[#c9a84c]/20 border-t border-[#c9a84c]/50">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-[#c9a84c]/50">
                    {STATS.map((stat) => (
                        <div key={stat.label} className="text-center py-8 px-4">
                            <div className="text-3xl font-extrabold text-[#c9a84c] mb-1">
                                {stat.value}
                            </div>
                            <div className="text-[11px] tracking-widest text-gray-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
