export default function Hero7() {
    return (
        <div
            className="relative bg-cover bg-center"
            style={{ backgroundImage: "url(/hero-img.jpg)" }}
        >
            <div className="absolute inset-0 bg-[#0D192B]/85" />

            <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-10 h-px bg-[#c9a84c]" />
                        <span className="text-[#c9a84c] text-xs tracking-[0.2em] font-semibold">
                            GET STARTED
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                        Let&apos;s Build the Future Together
                    </h2>

                    <p className="text-gray-300 text-lg max-w-md">
                        Ready to invest in your next landmark property? Our
                        advisors are available to walk you through opportunities
                        that match your goals and budget.
                    </p>
                </div>

                <form className="bg-[#111f38] rounded-sm p-8">
                    <h3 className="text-white font-bold text-xl mb-6">
                        Request a Free Consultation
                    </h3>

                    <div className="space-y-4 mb-6">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full bg-[#0D192B] border border-white/15 rounded-sm px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#c9a84c]"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full bg-[#0D192B] border border-white/15 rounded-sm px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#c9a84c]"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full bg-[#0D192B] border border-white/15 rounded-sm px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#c9a84c]"
                        />
                        <input
                            type="text"
                            placeholder="Interested In..."
                            className="w-full bg-[#0D192B] border border-white/15 rounded-sm px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#c9a84c]"
                        />
                    </div>

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
