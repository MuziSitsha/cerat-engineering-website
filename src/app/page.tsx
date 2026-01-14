export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center relative overflow-hidden" style={{backgroundColor: '#255849'}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-6 inline-block">
            <span className="text-orange-500 font-semibold text-lg">Welcome to Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Engineering Excellence
            <br />
            <span className="text-orange-500">Since 2017</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Leading professional Mechanical, Electrical and Building Services 
            business operating throughout South Africa and eSwatini.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg text-lg inline-block transition transform hover:scale-105 shadow-lg"
            >
              Start Your Project
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white py-4 px-10 rounded-lg hover:bg-white hover:text-green-900 font-bold inline-block transition transform hover:scale-105"
              style={{borderColor: 'white'}}
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4" style={{color: '#255849'}}>Our Core Services</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-lg mt-4">Comprehensive engineering solutions tailored to your needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Mining */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2" style={{borderTop: '4px solid #255849'}}>
              <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center text-white text-2xl font-bold" style={{backgroundColor: '#255849'}}>⛏</div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#255849'}}>Mining Solutions</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>EPCM Services</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Plant Optimization</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Mine Infrastructure</li>
              </ul>
            </div>

            {/* Building */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2" style={{borderTop: '4px solid #ff7500'}}>
              <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center text-white text-2xl font-bold bg-orange-500">🏗</div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#255849'}}>Building Services</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Mechanical Systems</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Electrical Systems</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Construction</li>
              </ul>
            </div>

            {/* Energy */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2" style={{borderTop: '4px solid #255849'}}>
              <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center text-white text-2xl font-bold" style={{backgroundColor: '#255849'}}>☀</div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#255849'}}>Energy Solutions</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Solar PV Installation</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Energy Audits</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>LED Upgrades</li>
              </ul>
            </div>

            {/* Crushing */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2" style={{borderTop: '4px solid #ff7500'}}>
              <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center text-white text-2xl font-bold bg-orange-500">⚙</div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#255849'}}>Mobile Crushing</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>200 TPH Plant</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Contract Crushing</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Aggregate Supply</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20" style={{backgroundColor: '#255849'}}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-3 group-hover:scale-110 transition transform">150+</div>
              <div className="text-gray-100 font-semibold text-lg">Projects Completed</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-3 group-hover:scale-110 transition transform">7+</div>
              <div className="text-gray-100 font-semibold text-lg">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-3 group-hover:scale-110 transition transform">50+</div>
              <div className="text-gray-100 font-semibold text-lg">Expert Engineers</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-3 group-hover:scale-110 transition transform">24/7</div>
              <div className="text-gray-100 font-semibold text-lg">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
