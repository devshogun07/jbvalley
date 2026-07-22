import { ArrowRight } from "lucide-react";

const PROJECTS = [
    {
        image: "/hero-img.jpg",
        category: "RESIDENTIAL",
        status: { label: "Selling Fast", color: "bg-green-500" },
        title: "Skyline Towers",
        desc: "Sophisticated urban living rising above the city.",
        units: "240 Units",
    },
    {
        image: "/hero-img.jpg",
        category: "URBAN LIVING",
        status: { label: "Under Construction", color: "bg-orange-500" },
        title: "Midtown Lofts",
        desc: "Stylish apartment community in the heart of the metro.",
        units: "180 Units",
    },
    {
        image: "/hero-img.jpg",
        category: "WATERFRONT",
        status: { label: "Pre-Launch", color: "bg-[#c9a84c]" },
        title: "The Shoreline",
        desc: "Waterside luxury lifestyle with private marina access.",
        units: "96 Units",
    },
];

export default function Hero3() {
    return (
        <div className="bg-[#0D192B] px-6 py-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-px bg-[#c9a84c]" />
                            <span className="text-[#c9a84c] text-xs tracking-[0.2em] font-semibold">
                                OUR PORTFOLIO
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            Featured Projects
                        </h2>
                    </div>

                    <button className="flex items-center gap-2 border border-[#c9a84c]/60 text-[#c9a84c] rounded-sm font-semibold px-6 py-3 text-sm tracking-wide">
                        VIEW ALL DEVELOPMENTS <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {PROJECTS.map((project) => (
                        <div
                            key={project.title}
                            className="bg-[#111f38] rounded-sm overflow-hidden border-[0.5px] border-transparent hover:border-gray-700 transition-colors"
                        >
                            <div className="relative h-64">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <span className="absolute top-4 left-4 bg-[#0D192B]/80 text-[#c9a84c] text-xs font-semibold tracking-widest px-3 py-1.5 rounded-sm">
                                    {project.category}
                                </span>
                                <span className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#0D192B]/80 text-white text-xs font-medium px-3 py-1.5 rounded-sm">
                                    <span
                                        className={`w-1.5 h-1.5 rounded-full ${project.status.color}`}
                                    />
                                    {project.status.label}
                                </span>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6">
                                    {project.desc}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 text-sm">
                                        {project.units}
                                    </span>
                                    <a
                                        href="#"
                                        className="flex items-center gap-1.5 text-[#c9a84c] text-sm font-semibold"
                                    >
                                        View Details <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
