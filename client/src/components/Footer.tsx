// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <h2 className="text-2xl font-bold">Halilaj</h2>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Distributor i Autorizuar i SKF-së. Operojmë në treg që nga viti 2003, 
              duke plotësuar kërkesat e konsumatorëve me cilësi dhe besueshmëri.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 mb-6">
              <a 
                href={import.meta.env.VITE_FACEBOOK_URL || "https://www.facebook.com/Halilaj"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Vizitoni faqen tonë në Facebook"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <a 
                href={import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/halilaj"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Vizitoni faqen tonë në Instagram"
              >
                <span className="text-sm font-bold">ig</span>
              </a>
            </div>

            {/* Business Certifications */}
            <div className="text-sm text-gray-400">
              <p className="mb-1">Distributor i Autorizuar SKF</p>
              <p className="mb-1">Më shumë se 20 vjet përvojë</p>
              <p>Cilësi dhe Besueshmëri</p>
            </div>
          </div>
          
          {/* Products/Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kategoritë</h3>
            <nav aria-label="Kategoritë e produkteve">
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link 
                    to="/kategori/kushineta" 
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Kushineta
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/kategori/permistopa" 
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Permistopa
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/kategori/rripa-transmisioni" 
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Rripa transmisioni
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/kategori" 
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Të gjitha kategoritë
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/produktet" 
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Produktet
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/aplikime" 
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Aplikime
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Lidhjet e Shpejta</h3>
            <nav aria-label="Lidhjet e shpejta">
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link 
                    to="/rreth-nesh" 
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Rreth nesh
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/produktet" 
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Produktet
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/aplikime" 
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Aplikime
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/kontakt" 
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    Kontakt
                  </Link>
                </li>
                <li>
                  <a 
                    href="/sitemap.xml" 
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-flex items-center gap-1"
                    target="_blank"
                    rel="noopener"
                  >
                    Sitemap
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Informacioni i Kontaktit</h3>
            <div className="space-y-4 text-gray-300" itemScope itemType="https://schema.org/LocalBusiness">
              <div className="flex items-start group">
                <Phone className="h-4 w-4 mr-3 mt-1 text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0" aria-hidden="true" />
                <div>
                  <div className="text-sm text-gray-400 mb-1">Na telefononi sot</div>
                  <a 
                    href="tel:+355042226308"
                    className="hover:text-white transition-colors font-medium"
                    itemProp="telephone"
                  >
                    +355 04 222 63 08
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <Mail className="h-4 w-4 mr-3 mt-1 text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0" aria-hidden="true" />
                <div>
                  <div className="text-sm text-gray-400 mb-1">Na shkruani</div>
                  <a 
                    href="mailto:support@halilaj.com.al"
                    className="hover:text-white transition-colors"
                    itemProp="email"
                  >
                    support@halilaj.com.al
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <MapPin className="h-4 w-4 mr-3 mt-1 text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0" aria-hidden="true" />
                <div>
                  <div className="text-sm text-gray-400 mb-1">Na vizitoni</div>
                  <address className="not-italic" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp="addressLocality">Tiranë</span>, <span itemProp="addressCountry">Shqipëri</span>
                  </address>
                </div>
              </div>

              <div className="flex items-start group">
                <Clock className="h-4 w-4 mr-3 mt-1 text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0" aria-hidden="true" />
                <div>
                  <div className="text-sm text-gray-400 mb-1">Orari i Punës</div>
                  <div className="text-sm">
                    <div>Hën-Pre: 8:00 - 17:00</div>
                    <div>Sht: 9:00 - 13:00</div>
                    <div>Die: Mbyllur</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Highlight */}
            <div className="mt-6 p-3 bg-blue-900/30 rounded-lg border border-blue-800">
              <div className="text-sm font-semibold text-blue-200 mb-1">Distributor i Autorizuar</div>
              <div className="text-xs text-blue-300">SKF produkte origjinale dhe të certifikuara</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm text-center md:text-left">
              <p>
                Halilaj.com.al &copy; {currentYear} Të gjitha të drejtat e rezervuara. | 
                <Link to="/politika-e-privatësisë" className="hover:text-white ml-1">Politika e Privatësisë</Link> | 
                <Link to="/kushtet-e-shërbimit" className="hover:text-white ml-1">Kushtet e Shërbimit</Link>
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Që nga viti 2003</span>
              <div className="flex items-center gap-1">
                <span>⭐</span>
                <span>Cilësi e garantuar</span>
              </div>
            </div>
          </div>
          
          {/* Schema.org structured data for footer */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WPFooter",
              "copyrightYear": currentYear,
              "copyrightHolder": {
                "@type": "Organization",
                "name": "Halilaj"
              }
            })}
          </script>
        </div>
      </div>
    </footer>
  );
};

export default Footer;