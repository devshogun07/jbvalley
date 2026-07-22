export default function Hero7() {
    return (
        <div
            id="contact"
            className="relative bg-cover bg-center"
            style={{ backgroundImage: "url(/cta-bg.jpg)" }}
        >
            <div className="absolute inset-0 bg-[#0D192B]/85" />

            <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-start">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-10 h-px bg-[#c9a84c]" />
                        <span className="text-[#c9a84c] text-xs tracking-[0.2em] font-semibold">
                            ENQUIRY
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                        Request the Investor Dossier
                    </h2>

                    <p className="text-gray-300 text-lg max-w-md mb-10">
                        Shared under non-disclosure with institutional and
                        private investors, land partners and co-developers.
                        This is not a sales enquiry channel and no units are
                        offered.
                    </p>

                    <div className="space-y-4 text-sm">
                        <div>
                            <span className="block text-[#c9a84c] font-semibold mb-1">
                                Office
                            </span>
                            <span className="text-gray-400">
                                Villa No. 253, Splendid Aparna Palm Meadows,
                                Kompally, Medchal–Nagpur Road (NH-44),
                                Hyderabad, Telangana
                            </span>
                        </div>
                        <div>
                            <span className="block text-[#c9a84c] font-semibold mb-1">
                                Email
                            </span>
                            <a
                                href="mailto:jbhomesinfra@gmail.com"
                                className="text-gray-400 hover:text-white"
                            >
                                jbhomesinfra@gmail.com
                            </a>
                        </div>
                        <div>
                            <span className="block text-[#c9a84c] font-semibold mb-1">
                                Phone
                            </span>
                            <a
                                href="tel:+916309601850"
                                className="text-gray-400 hover:text-white"
                            >
                                +91 63096 01850
                            </a>{" "}
                            ·{" "}
                            <a
                                href="tel:+919502076876"
                                className="text-gray-400 hover:text-white"
                            >
                                +91 95020 76876
                            </a>
                        </div>
                        <div>
                            <span className="block text-[#c9a84c] font-semibold mb-1">
                                Entity
                            </span>
                            <span className="text-gray-400">
                                JB Valley Homes Infra LLP
                            </span>
                        </div>
                    </div>
                </div>

                <form className="bg-[#111f38] rounded-sm p-8">
                    <h3 className="text-white font-bold text-xl mb-6">
                        Dossier Request
                    </h3>

                    <div className="space-y-4 mb-6">
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            className="w-full bg-[#0D192B] border border-white/15 rounded-sm px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#c9a84c]"
                        />
                        <input
                            type="text"
                            placeholder="Organisation"
                            className="w-full bg-[#0D192B] border border-white/15 rounded-sm px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#c9a84c]"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            className="w-full bg-[#0D192B] border border-white/15 rounded-sm px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#c9a84c]"
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full bg-[#0D192B] border border-white/15 rounded-sm px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#c9a84c]"
                        />
                        <select
                            defaultValue=""
                            className="w-full bg-[#0D192B] border border-white/15 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a84c]"
                        >
                            <option value="" disabled>
                                Nature of interest
                            </option>
                            <option>Institutional or private investment</option>
                            <option>Land / joint development</option>
                            <option>Co-development or contracting</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <label className="flex items-start gap-3 mb-6 text-xs text-gray-400">
                        <input type="checkbox" required className="mt-1" />
                        I understand that Konkan Valley is not registered under
                        MahaRERA, that nothing here is an offer for sale, and
                        that dossier material is shared under non-disclosure.
                    </label>

                    <button
                        type="submit"
                        className="w-full bg-[#c9a84c] hover:bg-[#d9b45f] text-[#0D192B] rounded-sm font-semibold py-4 text-sm tracking-wide"
                    >
                        SUBMIT REQUEST
                    </button>
                </form>
            </div>
        </div>
    );
}
