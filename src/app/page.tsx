export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-gray-900 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Engineering Excellence
            <span className="block text-orange-400">Since 2017</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading professional Mechanical, Electrical and Building Services 
            business operating throughout South Africa and eSwatini.
          </p>
          <div className="space-x-4">
            <a 
              href="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg text-lg inline-block"
            >
              Start Your Project
            </a>
            <a 
              href="/services" 
              className="border border-white text-white py-3 px-8 rounded-lg hover:bg-white hover:text-black inline-block"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Core Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mining */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2 text-white">Mining Solutions</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• EPCM Services</li>
                <li>• Plant Optimization</li>
                <li>• Mine Infrastructure</li>
              </ul>
            </div>

            {/* Building */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-orange-600 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2 text-white">Building Services</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Mechanical Systems</li>
                <li>• Electrical Systems</li>
                <li>• Construction</li>
              </ul>
            </div>

            {/* Energy */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-green-600 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2 text-white">Energy Solutions</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Solar PV Installation</li>
                <li>• Energy Audits</li>
                <li>• LED Upgrades</li>
              </ul>
            </div>

            {/* Crushing */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-gray-600 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2 text-white">Mobile Crushing</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• 200 TPH Plant</li>
                <li>• Contract Crushing</li>
                <li>• Aggregate Supply</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">150+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">7+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-gray-400">Expert Engineers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
