const STATS = [
    { value: "20%+", label: "AVERAGE ANNUAL RETURNS" },
    { value: "2.1B", label: "ASSETS UNDER MANAGEMENT" },
    { value: "100%", label: "PROJECT COMPLETION RATE" },
    { value: "15+", label: "YEARS OF EXCELLENCE" },
];

export default function Hero1() {
    return (
        <div
            className="relative bg-cover bg-center"
            style={{ backgroundImage: "url(/hero-img.jpg)" }}
        >
            <div className="absolute inset-0 bg-[#0D192B]/80" />

            <div className="relative px-6 pt-32 pb-40 max-w-3xl mx-auto md:mx-0 md:pl-24">
                <span className="inline-block border border-[#c9a84c] rounded-sm text-[#c9a84c] bg-[#c9a84c]/10 text-xs tracking-[0.2em] px-4 py-2 mb-6">
                    • PREMIER REAL ESTATE DEVELOPMENT
                </span>

                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                    <span className="block text-white">Modern Living</span>
                    <span className="block text-[#c9a84c]">Starts Here.</span>
                </h1>

                <p className="text-gray-300 text-lg mb-8 max-w-xl">
                    Discover premium new residential communities designed for
                    contemporary living. Partner with us to develop truly
                    spectacular properties.
                </p>

                <div className="flex gap-4">
                    <button className="bg-[#c9a84c] hover:bg-[#d9b45f] text-[#0D192B] rounded-sm font-semibold px-8 py-4 text-sm tracking-wide">
                        VIEW PROPERTIES
                    </button>
                    <button className="border border-gray-400 text-white rounded-sm font-semibold px-8 py-4 text-sm tracking-wide">
                        REQUEST INFO
                    </button>
                </div>
            </div>

            <div className="relative bg-[#c9a84c]/10 border-t border-[#c9a84c]/50">
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
