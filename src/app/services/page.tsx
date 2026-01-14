export default function ServicesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="min-h-[40vh] pt-32 pb-20 flex items-center" style={{backgroundColor: '#255849'}}>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-100">Comprehensive engineering solutions since 2017.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2" style={{borderTop: '4px solid #255849'}}>
              <h2 className="text-2xl font-bold mb-6" style={{color: '#255849'}}>Mining Solutions</h2>
              <ul className="text-gray-600 space-y-3 text-lg">
                <li className="flex items-center"><span className="text-orange-500 mr-3 text-xl">•</span>EPCM Services</li>
                <li className="flex items-center"><span className="text-orange-500 mr-3 text-xl">•</span>Plant Optimization</li>
                <li className="flex items-center"><span className="text-orange-500 mr-3 text-xl">•</span>Mine Infrastructure</li>
                <li className="flex items-center"><span className="text-orange-500 mr-3 text-xl">•</span>Process Engineering</li>
                <li className="flex items-center"><span className="text-orange-500 mr-3 text-xl">•</span>Mechanical Maintenance</li>
              </ul>
            </div>
            
            <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2" style={{borderTop: '4px solid #ff7500'}}>
              <h2 className="text-2xl font-bold mb-6" style={{color: '#255849'}}>Building Services</h2>
              <ul className="text-gray-600 space-y-3 text-lg">
                <li className="flex items-center"><span className="text-orange-500 mr-3 text-xl">•</span>Mechanical Systems</li>
                <li className="flex items-center"><span className="text-orange-500 mr-3 text-xl">•</span>Electrical Systems</li>
                <li className="flex items-center"><span className="text-orange-500 mr-3 text-xl">•</span>Construction</li>
                <li className="flex items-center"><span className="text-orange-500 mr-3 text-xl">•</span>HVAC Systems</li>
                <li className="flex items-center"><span className="text-orange-500 mr-3 text-xl">•</span>Plumbing Services</li>
              </ul>
            </div>
            
            <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2" style={{borderTop: '4px solid #255849'}}>
              <h2 className="text-2xl font-bold mb-6" style={{color: '#255849'}}>Energy Solutions</h2>
              <ul className="text-gray-600 space-y-3 text-lg">
                <li className="flex items-center"><span className="text-orange-500 mr-3 text-xl">•</span>Solar PV Installation</li>
                <li className="flex items-center"><span className="text-orange-500 mr-3 text-xl">•</span>Energy Audits</li>
                <li className="flex items-center"><span className="text-orange-500 mr-3 text-xl">•</span>LED Upgrades</li>
                <li className="flex items-center"><span className="text-orange-500 mr-3 text-xl">•</span>Power Quality Analysis</li>
                <li className="flex items-center"><span className="text-orange-500 mr-3 text-xl">•</span>Renewable Energy Systems</li>
              </ul>
            </div>
            
            <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2" style={{borderTop: '4px solid #ff7500'}}>
              <h2 className="text-2xl font-bold mb-6" style={{color: '#255849'}}>Mobile Crushing</h2>
              <ul className="text-gray-600 space-y-3 text-lg">
                <li className="flex items-center"><span className="text-orange-500 mr-3 text-xl">•</span>200 TPH Plant</li>
                <li className="flex items-center"><span className="text-orange-500 mr-3 text-xl">•</span>Contract Crushing</li>
                <li className="flex items-center"><span className="text-orange-500 mr-3 text-xl">•</span>Aggregate Supply</li>
                <li className="flex items-center"><span className="text-orange-500 mr-3 text-xl">•</span>Site Establishment</li>
                <li className="flex items-center"><span className="text-orange-500 mr-3 text-xl">•</span>Maintenance Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
