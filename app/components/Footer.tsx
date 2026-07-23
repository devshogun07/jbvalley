import Link from "next/link";

const COLUMNS = [
    {
        title: "PROFILE",
        links: [
            { label: "Leadership", href: "#contact" },
            { label: "Engineering framework", href: "#contact" },
            { label: "Track record", href: "#contact" },
        ],
    },
    {
        title: "KONKAN VALLEY",
        links: [
            { label: "Flagship proposal", href: "#contact" },
            { label: "Approvals & status", href: "#contact" },
            { label: "Institutional enquiry", href: "#contact" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#060F1E] px-6 pt-16 md:pt-20 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
                <div>
                    <Link href="#contact" className="flex items-center gap-3 mb-6">
                        <img src="/jblogo.png" alt="" className="h-15" />
                    </Link>

                    <p className="text-gray-400 text-sm">
                        Forty-one years across public civil infrastructure and
                        private township development. Founder and designated
                        partner, JB Valley Homes Infra LLP.
                    </p>
                </div>

                {COLUMNS.map((col) => (
                    <div key={col.title}>
                        <h3 className="text-white text-sm font-bold tracking-wide mb-6">
                            {col.title}
                        </h3>
                        <ul className="space-y-4">
                            {col.links.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 text-sm hover:text-white"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div>
                    <h3 className="text-white text-sm font-bold tracking-wide mb-6">
                        CONTACT
                    </h3>
                    <ul className="space-y-4 text-sm">
                        <li>
                            <a
                                href="mailto:jbhomesinfra@gmail.com"
                                className="text-gray-400 hover:text-white"
                            >
                                jbhomesinfra@gmail.com
                            </a>
                        </li>
                        <li>
                            <a
                                href="tel:+916309601850"
                                className="text-gray-400 hover:text-white"
                            >
                                +91 63096 01850
                            </a>
                        </li>
                        <li className="text-gray-400">Hyderabad, Telangana</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8">
                <p className="text-gray-500 text-xs leading-relaxed mb-6">
                    Konkan Valley is not registered under the Real Estate
                    (Regulation and Development) Act, 2016. Nothing on this
                    website is an offer, invitation or solicitation to
                    purchase any plot, apartment or building, and no booking
                    amount or payment is accepted. All visuals are artistic
                    impressions of a proposed development and do not depict
                    constructed or sanctioned works. Areas, phasing,
                    investment and programme figures are indicative and
                    remain subject to statutory approval.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2026 JB Valley Homes Infra LLP. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a
                            href="#contact"
                            className="text-gray-500 text-sm hover:text-white"
                        >
                            Approvals & Status
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-500 text-sm hover:text-white"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
