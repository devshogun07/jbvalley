const STATS = [
    { value: "100%", label: "ON-TIME DELIVERY" },
    { value: "40+", label: "PROJECTS DELIVERED" },
    { value: "₹4500 Cr+", label: "TOTAL VALUE DEVELOPED" },
    { value: "Zero", label: "LEGAL DISPUTES" },
    { value: "Dedicated", label: "CUSTOMER SUPPORT" },
];

export default function Hero5() {
    return (
        <div className="bg-[#c9a84c] py-16">
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
        </div>
    );
}
