import { ArrowRight } from "lucide-react";

const VENTURES = [
    {
        chip: "HMDA",
        acres: "742",
        title: "JB's Nature Valley",
        desc: "Vijayawada Highway at Choutuppal, near the Regional Ring Road.",
        status: "Approved layout",
        state: "Telangana",
    },
    {
        chip: "HMDA",
        acres: "650",
        title: "JB's Serene City",
        desc: "Nagarjuna Sagar Highway at Ibrahimpatnam, Fourth City area — 10 km to the ORR.",
        status: "Approved layout",
        state: "Telangana",
    },
    {
        chip: "HMDA",
        acres: "200",
        title: "JB's Serene Resort",
        desc: "Nagarjuna Sagar Highway at Mal, Fourth City area, near the Regional Ring Road.",
        status: "Approved layout",
        state: "Telangana",
    },
    {
        chip: "VUDA",
        acres: "150",
        title: "JB's Vishakha",
        desc: "Visakhapatnam, near the Steel Plant and NTPC. Developed as two parcels (90 + 60 acres).",
        status: "Approved layout",
        state: "Andhra Pradesh",
    },
    {
        chip: "HMDA",
        acres: "48",
        title: "JB's Serene Villas",
        desc: "Villa construction carried out on sanctioned building permission.",
        status: "Built",
        state: "Telangana",
    },
    {
        chip: "HUDA",
        acres: "40",
        title: "JB's Enclave",
        desc: "Nagarjuna Sagar Highway at Bongulur Junction, Outer Ring Road.",
        status: "Approved layout",
        state: "Telangana",
    },
    {
        chip: "HUDA",
        acres: "38",
        title: "JB's Peacock Valley",
        desc: "Nagpur Highway NH-44 at Medchal, Outer Ring Road.",
        status: "Approved layout",
        state: "Telangana",
    },
    {
        chip: "NUDA",
        acres: "1.30",
        title: "JB's Apartments",
        desc: "Apartment construction carried out on sanctioned building permission.",
        status: "Built",
        state: "Andhra Pradesh",
    },
    {
        chip: "NUDA",
        acres: "—",
        title: "JB's Shopping Mall",
        desc: "Commercial complex constructed on sanctioned building permission.",
        status: "Built",
        state: "Andhra Pradesh",
    },
];

export default function Hero3() {
    return (
        <div id="ventures" className="bg-[#0D192B] px-6 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-px bg-[#c9a84c]" />
                            <span className="text-[#c9a84c] text-xs tracking-[0.2em] font-semibold">
                                TRACK RECORD
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
                            Nine Sanctioned Ventures
                        </h2>
                    </div>

                    <a
                        href="contact"
                        className="flex items-center gap-2 border border-[#c9a84c]/60 text-[#c9a84c] rounded-sm font-semibold px-6 py-3 text-sm tracking-wide"
                    >
                        REQUEST APPROVAL DOCUMENTS <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {VENTURES.map((venture) => (
                        <div
                            key={venture.title}
                            className="bg-[#111f38] rounded-sm overflow-hidden border-[0.5px] border-transparent hover:border-[#c9a84c] transition-colors p-6"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="bg-[#0D192B] text-[#c9a84c] text-xs font-semibold tracking-widest px-3 py-1.5 rounded-sm">
                                    {venture.chip}
                                </span>
                                <span
                                    className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-sm ${
                                        venture.status === "Built"
                                            ? "bg-[#c9a84c]/15 text-[#c9a84c]"
                                            : "bg-green-500/15 text-green-400"
                                    }`}
                                >
                                    {venture.status}
                                </span>
                            </div>

                            <div className="text-4xl font-extrabold text-white mb-1">
                                {venture.acres}
                            </div>
                            <div className="text-gray-500 text-xs tracking-widest mb-6">
                                ACRES
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">
                                {venture.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-6">{venture.desc}</p>

                            <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                <span className="text-gray-500 text-sm">
                                    {venture.state}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
