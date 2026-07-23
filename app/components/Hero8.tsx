const GALLERY = [
    { image: "/render-01.jpg", title: "Riverside Promenade", tag: "Master Township Entry" },
    { image: "/render-02.jpg", title: "Waterfront Walkway", tag: "Pedestrian Bridge Zone" },
    { image: "/render-03.jpg", title: "Aerial Master Plan", tag: "Green Belt & Canals" },
    { image: "/render-04.jpg", title: "Transit Gateway", tag: "Iconic Cable Bridge" },
    { image: "/render-05.jpg", title: "Business District", tag: "Commercial & Office Hub" },
    { image: "/render-06.jpg", title: "Civic Plaza", tag: "Financial Corridor" },
    { image: "/render-07.jpg", title: "Marina Boulevard", tag: "Waterfront Retail" },
    { image: "/render-08.jpg", title: "Civic Complex", tag: "Sports & Leisure Zone" },
    { image: "/render-09.jpg", title: "Eco Residential", tag: "Parkside Enclaves" },
    { image: "/render-10.jpg", title: "Convention Hub", tag: "Cultural & Expo Area" },
    { image: "/render-11.jpg", title: "Hillside Villas", tag: "Luxury Residences" },
    { image: "/render-12.jpg", title: "Smart Infrastructure", tag: "Eco Transit & Power Grid" },
];

export default function Hero8() {
    return (
        <div id="konkan" className="bg-[#0D192B] px-6 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-10 h-px bg-[#c9a84c]" />
                    <span className="text-[#c9a84c] text-xs tracking-[0.2em] font-semibold">
                        MASTER VISION
                    </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                    Konkan Valley Integrated Township
                </h2>
                <p className="text-gray-400 max-w-2xl mb-16">
                    Phased master plan spanning residential, commercial,
                    educational, and hospitality sectors.
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {GALLERY.map((item) => (
                        <figure
                            key={item.image}
                            className="relative rounded-sm overflow-hidden group"
                        >
                            <img
                                src={item.image}
                                alt={`${item.title} — ${item.tag}`}
                                loading="lazy"
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0D192B] to-transparent p-5">
                                <h4 className="text-white font-bold">
                                    {item.title}
                                </h4>
                                <span className="text-gray-300 text-sm">
                                    {item.tag}
                                </span>
                            </figcaption>
                        </figure>
                    ))}
                </div>

                <p className="text-gray-500 text-xs text-center mt-8">
                    All visuals are artistic impressions of a proposed
                    development. They do not depict constructed or sanctioned
                    works.
                </p>
            </div>
        </div>
    );
}
