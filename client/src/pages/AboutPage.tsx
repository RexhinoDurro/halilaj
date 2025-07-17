// src/pages/AboutPage.tsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Users, Clock, Shield, Star, Heart, Target, Lightbulb } from 'lucide-react';
import SEO from '../components/SEO';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import { teamMembers } from '../data/team';


const AboutPage: React.FC = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Halilaj",
      "foundingDate": "2003",
      "founder": {
        "@type": "Person",
        "name": "Halilaj Family"
      },
      "description": "Distributor i Autorizuar i SKF-së dhe Distributor Ekskuziv për PiBelt & PiChain nga Pizzirani. Lideri në tregun shqiptar që nga viti 2003.",
      "numberOfEmployees": "25+",
      "slogan": "Zgjidhje industriale me cilësi të garantuar",
      "knowsAbout": [
        "Kushineta",
        "Permistopa", 
        "Rripa Transmisioni",
        "Gomina Alkoli",
        "Makineri Industriale",
        "Riparime Automjetesh",
        "Sistem Frenash"
      ]
    }
  };

  const breadcrumbItems = [
    { name: "Kryefaqja", url: "https://halilaj.com.al" },
    { name: "Rreth Nesh", url: "https://halilaj.com.al/rreth-nesh" }
  ];

  return (
    <>
      <SEO 
        title="Rreth Halilaj - 20+ Vjet Lider në Tregun Shqiptar | Historia & Ekipi Ynë"
        description="Zbuloni historinë e Halilaj - kompani familjare që nga 2003. Distributor i Autorizuar SKF dhe Ekskuziv Pizzirani. Takoni ekipin tonë ekspert dhe vlerat që na udhëheqin."
        keywords="rreth halilaj, distributor skf, pizzirani shqiperi, kushineta permistopa, kompani familjare, eksperience industriale"
        url="https://halilaj.com.al/rreth-nesh"
        schemaData={aboutSchema}
      />
      
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h1 className="text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">Rreth Nesh</h1>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slideInUp">
                <strong>Lideri absolut në tregun shqiptar</strong> që nga viti 2003. 
                Jemi më shumë se një distributor—jemi partneri juaj strategjik për zgjidhje industriale 
                me cilësi të garantuar dhe besueshmëri të provuar në çdo sektor.
              </p>
            </header>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-slideInUp">
              <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl font-bold text-blue-600 mb-2" itemProp="numberOfEmployees">5,000+</div>
                <div className="text-gray-600 font-medium">Klientë të Kënaqur</div>
              </div>
              <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-600 font-medium">Vjet Dominimi</div>
              </div>
              <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
                <div className="text-gray-600 font-medium">Kënaqësi Klientësh</div>
              </div>
              <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Suport Teknik</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20" aria-labelledby="story-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slideInLeft">
                <h2 id="story-heading" className="text-4xl font-bold text-gray-900 mb-6">Historia Jonë e Suksesit</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Nga një dyqan modest në rrugën "Kavajes" në vitin 2003, <strong>Halilaj</strong> është transformuar në 
                    <span className="font-bold text-blue-600"> liderin e pakontestueshëm</span> të tregjeve industriale në Shqipëri. 
                    Ne nuk jemi thjesht një distributor—jemi <strong>arkitekti i zgjidheve industriale</strong> që kanë revolucionuar sektorë të tërë.
                  </p>
                  <p>
                    Si <strong>Distributor i Autorizuar i SKF-së</strong> dhe <strong>Distributor Ekskuziv për PiBelt & PiChain nga Pizzirani</strong>, 
                    ne kemi vendosur standardet e cilësisë që industria shqiptare ndjek. Çdo produkt që dalim në treg është 
                    <span className="font-bold text-green-600">garanci për përformancë superiore</span>.
                  </p>
                  <p>
                    Sot, me <strong>zyra në Tiranë dhe Durrës</strong>, ne shërbejmë gjithë spektrin industrial: 
                    nga përpunimi i drurit dhe gurit, deri tek makineria bujqësore dhe ashensorët. 
                    <span className="font-bold">Ne nuk thjesht shesim produkte—ne ndërtojmë partneritete të përhershme</span>.
                  </p>
                </div>
                
                <div className="mt-8 flex items-center space-x-6">
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-blue-600 mr-2" aria-hidden="true" />
                    <span className="text-gray-700 font-bold">Distributor i Autorizuar SKF</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-6 w-6 text-blue-600 mr-2" aria-hidden="true" />
                    <span className="text-gray-700 font-bold">Ekskuziv Pizzirani</span>
                  </div>
                </div>
              </div>
              
              <div className="animate-slideInRight">
                <TeamSlider />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50" aria-labelledby="values-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2 id="values-heading" className="text-4xl font-bold text-gray-900 mb-6">Fuqia që na Drejton</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                <strong>Vlerat tona janë themeli i supremacisë</strong> që kemi arritur në treg. 
                Këto principe kanë formuar kulturën tonë fituese dhe kanë fituar besimin e padiskutueshëm të klientëve.
              </p>
            </header>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: "Precizion Absolut",
                  description: "Çdo zgjidhje, çdo rekomandim, çdo shërbim dorëzohet me precizion matematikor. Mediokriteti nuk është opsion për ne."
                },
                {
                  icon: Heart,
                  title: "Obsesion për Klientin", 
                  description: "Kënaqësia juaj nuk është thjesht qëllimi ynë—është obsesioni ynë. Ne dëgjojmë, veprojmë dhe tejkalojmë çdo pritje."
                },
                {
                  icon: Shield,
                  title: "Cilësi e Paprekshme",
                  description: "Përdorim vetëm materiale premium dhe teknika të provuara. Cilësia nuk është e negociueshme—është ADN-ja jonë."
                },
                {
                  icon: Lightbulb,
                  title: "Inovacion i Vazhdueshëm",
                  description: "Ne jemi në krye të trendeve industriale dhe inovojmë vazhdimisht për të ofruar zgjidhje revolucionare për çdo sfidë."
                }
              ].map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <article 
                    key={index}
                    className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                  >
                    <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                      <IconComponent className="h-12 w-12 text-blue-600 mx-auto" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20" aria-labelledby="mission-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="mission-heading" className="text-4xl font-bold text-gray-900 mb-8">Misioni Ynë i Fuqishëm</h2>
            <blockquote className="text-2xl text-gray-700 leading-relaxed italic font-light" itemProp="slogan">
              "Të <strong>revolucionojmë industrinë shqiptare</strong> përmes teknologjive më të avancuara, 
              partneriteteve strategjike dhe një përkushtimi të palëkundur ndaj përsosmërisë. 
              Ne besojmë se çdo industri ka potencialin të arrijë shkallë të reja të përsosësisë, 
              dhe ne jemi <span className='font-bold text-blue-600'>pionierët që e bëjnë këtë realitet</span>."
            </blockquote>
            <footer className="mt-8 text-gray-600 font-medium">- Familja Halilaj, Themeluesit</footer>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700" aria-labelledby="why-choose-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2 id="why-choose-heading" className="text-4xl font-bold text-white mb-6">Pse Halilaj Dominon?</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Kur zgjidhni ne, nuk po kontraktoni thjesht një furnitor—po partneridheni me 
                <strong> maestrat e industrisë</strong> që e trajtojnë projektin tuaj si misionin e tyre personal.
              </p>
            </header>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Ekspertë të Pakrahasueshëm",
                  description: "Ekipi ynë i certifikuar sjell dekada përvojë të kombinuar dhe trajnim të vazhdueshëm për të garantuar standardet më të larta të shërbimit."
                },
                {
                  icon: Clock,
                  title: "Besueshmëri e Hekurt",
                  description: "Ne respektojmë kohën dhe angazhimet tuaja. Planifikimi ynë i detajuar garanton përmbushjen e çdo afati, çdo herë."
                },
                {
                  icon: Star,
                  title: "Partneritet për Jetë",
                  description: "Marrëdhënia jonë nuk mbaron kur përfundon shitja. Ne ofrojmë mbështetje të vazhdueshme, këshilla mirëmbajtjeje dhe jemi gjithmonë këtu kur na nevojiteni."
                }
              ].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center text-white">
                    <IconComponent className="h-16 w-16 mx-auto mb-6 text-blue-200" aria-hidden="true" />
                    <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

// Team Slider Component
const TeamSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentMember = teamMembers[currentSlide];

  return (
    <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden" itemScope itemType="https://schema.org/Person">
      {/* Team Member Card */}
      <div className="p-8">
        <div className="text-center mb-6">
          <div className="relative mx-auto mb-6">
            <img 
              src={currentMember.image} 
              alt={`${currentMember.name} - ${currentMember.position} në Halilaj`}
              className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-blue-100"
              itemProp="image"
              width="128"
              height="128"
            />
            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
              {currentMember.experience}
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-1" itemProp="name">
            {currentMember.name}
          </h3>
          <p className="text-blue-600 font-semibold mb-4" itemProp="jobTitle">
            {currentMember.position}
          </p>
          
          <blockquote className="text-gray-600 italic mb-6 text-sm leading-relaxed">
            "{currentMember.quote}"
          </blockquote>
        </div>
        
        <div className="text-left">
          <p className="text-gray-700 text-sm leading-relaxed mb-4" itemProp="description">
            {currentMember.bio}
          </p>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 text-sm">Specialitetet:</h4>
            <div className="flex flex-wrap gap-2">
              {currentMember.specialties.map((specialty, index) => (
                <span 
                  key={index}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                  itemProp="knowsAbout"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Anëtari i mëparshëm i ekipit"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Anëtari i radhës i ekipit"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Shko tek anëtari i ekipit ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;