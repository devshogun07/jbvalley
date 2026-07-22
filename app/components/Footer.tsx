import Link from "next/link";
import { Play } from "lucide-react";

const COLUMNS = [
    {
        title: "ABOUT US",
        links: ["Our Story", "Leadership Team", "Awards & Recognition", "Careers", "Press Room"],
    },
    {
        title: "PROJECT TYPES",
        links: ["Luxury Residences", "Urban Living", "Waterfront Homes", "Commercial Spaces", "Plotted Development"],
    },
    {
        title: "INVESTOR INFO",
        links: ["Investment Models", "RERA Compliance", "Financial Reports", "FAQs", "Brochure Downloads"],
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#060F1E] px-6 pt-20 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
                <div>
                    <Link href="/" className="flex items-center gap-3 mb-6">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9a84c] text-[#c9a84c] font-semibold">
                            J
                        </span>
                        <span className="leading-tight">
                            <span className="block text-lg font-bold tracking-wide text-white">
                                JBVALLEY
                            </span>
                            <span className="block text-[10px] tracking-[0.2em] text-[#c9a84c]">
                                REAL ESTATE
                            </span>
                        </span>
                    </Link>

                    <p className="text-gray-400 text-sm mb-6">
                        Building vibrant communities that stand as benchmarks of
                        quality, design, and trust across every Indian city we
                        enter.
                    </p>

                    <div className="flex gap-3">
                        <a
                            href="#"
                            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white text-xs font-bold hover:border-[#c9a84c] hover:text-[#c9a84c]"
                        >
                            X
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#c9a84c] text-xs font-bold hover:border-[#c9a84c]"
                        >
                            in
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white text-sm font-bold hover:border-[#c9a84c] hover:text-[#c9a84c]"
                        >
                            f
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#c9a84c] hover:border-[#c9a84c]"
                        >
                            <Play className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {COLUMNS.map((col) => (
                    <div key={col.title}>
                        <h3 className="text-white text-sm font-bold tracking-wide mb-6">
                            {col.title}
                        </h3>
                        <ul className="space-y-4">
                            {col.links.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-gray-400 text-sm hover:text-white"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-500 text-sm">
                    © 2026 JBvalley Real Estate Pvt. Ltd. All rights reserved. RERA
                    Registered.
                </p>
                <div className="flex gap-6">
                    <a href="#" className="text-gray-500 text-sm hover:text-white">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-gray-500 text-sm hover:text-white">
                        Terms of Use
                    </a>
                    <a href="#" className="text-gray-500 text-sm hover:text-white">
                        Cookie Policy
                    </a>
                </div>
            </div>
        </footer>
    );
}
