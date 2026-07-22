import Link from "next/link";

const NAV_LINKS = [
  { href: "#overview", label: "Overview" },
  { href: "#ventures", label: "Track Record" },
  { href: "#engineering", label: "Engineering" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Konkan Valley" },
  { href: "#contact", label: "Governance" },
];

export default function Navbar() {
  return (
    <header className="bg-[#0a1628] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-3 px-6">
        <Link href="#overview" className="flex items-center gap-3">
          <img src="/jblogo.png" alt="" className="h-12" />
        </Link>

        <div className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded bg-[#c9a84c] px-5 py-2 text-sm font-semibold text-[#0a1628] hover:bg-[#d9b45f]"
          >
            INSTITUTIONAL ENQUIRY
          </Link>
        </div>
      </nav>
    </header>
  );
}
