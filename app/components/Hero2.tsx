import { HardHat, Building2, Award, GraduationCap } from "lucide-react";

const FEATURES = [
    {
        icon: HardHat,
        title: "16 Years — Public Service",
        desc: "Assistant Executive Engineer, AP Panchayat Raj Department (Rural Water Infrastructure).",
    },
    {
        icon: Building2,
        title: "25 Years — Township Development",
        desc: "Independent land assembly, layout sanctioning, and project execution.",
    },
    {
        icon: Award,
        title: "Founder & Designated Partner",
        desc: "JB Valley Homes Infra LLP · Incorporated Enterprise.",
    },
    {
        icon: GraduationCap,
        title: "Engineering Background",
        desc: "Civil Engineering Discipline & Municipal Infrastructure Expertise.",
    },
];

export default function Hero2() {
    return (
        <div id="leadership" className="bg-[#0b1628] px-6 py-24">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-px bg-[#c9a84c]" />
                        <span className="text-[#c9a84c] text-xs tracking-[0.2em] font-semibold">
                            PROMOTER LEADERSHIP
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-4xl font-extrabold text-white leading-tight mb-6">
                        Four Decades of Engineering Leadership
                    </h2>

                    <p className="text-gray-400 text-lg mb-4">
                        Er. Papeshwar Rao Berelli began his career in government
                        service, spending sixteen years as an Assistant Executive
                        Engineer with the Andhra Pradesh Panchayat Raj Department,
                        directing rural water supply and large-scale public civil
                        infrastructure across district administrations.
                    </p>

                    <p className="text-gray-400 text-lg mb-8">
                        Over the twenty-five years since, he has conceptualised,
                        acquired, and executed nine private township
                        developments — concentrating on multi-parcel land
                        assembly, boundary consolidation, and carrying layouts
                        through statutory sanction. He is Founder and Designated
                        Partner of JB Valley Homes Infra LLP.
                    </p>

                    <a
                        href="#contact"
                        className="inline-block bg-[#c9a84c] hover:bg-[#d9b45f] text-[#0D192B] rounded-sm font-semibold px-8 py-4 text-sm tracking-wide mb-12"
                    >
                        INSTITUTIONAL ENQUIRY
                    </a>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        {FEATURES.map((feature) => (
                            <div key={feature.title} className="flex gap-3">
                                <feature.icon className="w-6 h-6 text-[#c9a84c] shrink-0" />
                                <div>
                                    <div className="text-white font-semibold mb-1">
                                        {feature.title}
                                    </div>
                                    <div className="text-gray-400 text-sm">
                                        {feature.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 border border-[#c9a84c]/30 rounded-sm translate-x-4 translate-y-4" />
                    <img
                        src="/papeshwar-rao-berelli.jpg"
                        alt="Er. Papeshwar Rao Berelli, Founder & Designated Partner, JB Valley Homes Infra LLP"
                        className="relative w-full h-125 object-cover rounded-sm"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-[#c9a84c] rounded-sm px-8 py-5 text-center">
                        <div className="text-3xl font-extrabold text-[#0D192B]">
                            41
                        </div>
                        <div className="text-[11px] font-semibold tracking-widest text-[#0D192B]">
                            YEARS PRACTICE
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
