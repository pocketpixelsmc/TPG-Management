import OptimizedImage from "@/components/ui/OptimizedImage";
import Link from "next/link";

export default function Footer() {
  return (
    <footer 
      className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 py-12 px-4 w-screen"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="w-full">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-8 mb-12 max-w-3xl mx-auto">
          <div className="bg-white/90 p-4 rounded-lg hover:bg-white transition-colors duration-200 w-[160px] h-[160px] flex items-center justify-center mx-auto">
            <Link href="/" aria-label="Return to TPG Management homepage">
              <OptimizedImage 
                src="/logo.png" 
                width={120} 
                height={120} 
                alt="TPG Management Logo" 
                className="object-contain"
                priority 
              />
            </Link>
          </div>
          <div className="bg-white/90 p-4 rounded-lg hover:bg-white transition-colors duration-200 w-[160px] h-[160px] flex items-center justify-center mx-auto">
            <OptimizedImage 
              src="/narpm.png" 
              width={120} 
              height={120} 
              alt="National Association of Residential Property Managers Logo" 
              className="object-contain"
            />
          </div>
          <div className="bg-white/90 p-4 rounded-lg hover:bg-white transition-colors duration-200 w-[160px] h-[160px] flex items-center justify-center mx-auto">
            <OptimizedImage 
              src="/equal.png" 
              width={120} 
              height={120} 
              alt="National Association of Home Builders Logo" 
              className="object-contain"
            />
          </div>
        </div>

        <nav 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12"
          aria-label="Footer navigation"
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-white mb-2">Property Management</h3>
            <ul className="space-y-2">
              {[
                { href: "/services", icon: "services.svg", label: "Services" },
                { href: "/pricing", icon: "about.svg", label: "Pricing" },
                { href: "/faq", icon: "about.svg", label: "Owner FAQs" },
                { href: "/referral", icon: "about.svg", label: "Referral Program" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link group">
                    <OptimizedImage 
                      src={`/footer/${item.icon}`} 
                      width={20} 
                      height={20} 
                      alt="" 
                      aria-hidden="true"
                      className="group-hover:opacity-80"
                    />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-white mb-2">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", icon: "about.svg", label: "Home" },
                { href: "/about", icon: "about.svg", label: "About" },
                { href: "/contact", icon: "contact.svg", label: "Contact Us" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link group">
                    <OptimizedImage 
                      src={`/footer/${item.icon}`} 
                      width={20} 
                      height={20} 
                      alt="" 
                      aria-hidden="true"
                      className="group-hover:opacity-80"
                    />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-white mb-2">Portals</h3>
            <ul className="space-y-2">
              {[
                { 
                  href: "https://tpgcompanies.managebuilding.com/Resident/public/rentals",
                  icon: "services.svg",
                  label: "Available Properties"
                },
                {
                  href: "https://tpgcompanies.managebuilding.com/Resident/portal/login",
                  icon: "rLogin.svg",
                  label: "Resident Login"
                },
                {
                  href: "https://tpgcompanies.managebuilding.com/manager",
                  icon: "about.svg",
                  label: "Owner Login"
                },
              ].map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link group"
                  >
                    <OptimizedImage 
                      src={`/footer/${item.icon}`} 
                      width={20} 
                      height={20} 
                      alt="" 
                      aria-hidden="true"
                      className="group-hover:opacity-80"
                    />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <address className="border-t border-gray-700 pt-8 text-center not-italic">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg mb-8">
            <p>
              <span className="sr-only">Business hours: </span>
              Monday-Friday 9am-5pm
            </p>
            <p>
              <span className="sr-only">Phone: </span>
              <a href="tel:732-978-9390" className="hover:text-blue-400 transition-colors">
                (732) 978-9390
              </a>
            </p>
            <p>
              <span className="sr-only">Email: </span>
              <a href="mailto:leasing@tpgmanagement.net" className="hover:text-blue-400 transition-colors">
                leasing@tpgmanagement.net
              </a>
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-6">Areas We Serve</h3>
            <ul className="flex flex-wrap justify-center gap-8" role="list">
              {["Monmouth", "Middlesex", "Union", "Somerset", "Essex", "Hudson"].map((area) => (
                <li key={area} className="text-lg font-medium">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </address>
      </div>
    </footer>
  );
}
