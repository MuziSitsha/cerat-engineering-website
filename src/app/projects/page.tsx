export default function ProjectsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="min-h-[40vh] pt-32 pb-20 flex items-center" style={{backgroundColor: '#255849'}}>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-lg md:text-xl text-gray-100">Explore our portfolio of successful engineering projects.</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2" style={{borderTop: '4px solid #255849'}}>
              <h2 className="text-xl font-bold mb-3" style={{color: '#255849'}}>Dwarsrivier Chrome Mine</h2>
              <p className="text-gray-600 mb-4">Process plant upgrade increasing throughput to 270,000 t/m</p>
              <span className="inline-block bg-orange-100 text-orange-600 font-semibold px-3 py-1 rounded-full text-sm">Mining</span>
            </div>
            
            <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2" style={{borderTop: '4px solid #255849'}}>
              <h2 className="text-xl font-bold mb-3" style={{color: '#255849'}}>Makhado CHPP</h2>
              <p className="text-gray-600 mb-4">Coal handling plant with 1.8 million tpa capacity</p>
              <span className="inline-block bg-orange-100 text-orange-600 font-semibold px-3 py-1 rounded-full text-sm">Mining</span>
            </div>
            
            <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2" style={{borderTop: '4px solid #ff7500'}}>
              <h2 className="text-xl font-bold mb-3" style={{color: '#255849'}}>200 TPH Mobile Crushing</h2>
              <p className="text-gray-600 mb-4">Mobile granite crushing plant for construction aggregates</p>
              <span className="inline-block bg-orange-100 text-orange-600 font-semibold px-3 py-1 rounded-full text-sm">Crushing</span>
            </div>

            <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2" style={{borderTop: '4px solid #255849'}}>
              <h2 className="text-xl font-bold mb-3" style={{color: '#255849'}}>Jindal Chirodzi Coal Plant</h2>
              <p className="text-gray-600 mb-4">Coal processing plant in Mozambique</p>
              <span className="inline-block bg-orange-100 text-orange-600 font-semibold px-3 py-1 rounded-full text-sm">Mining</span>
            </div>

            <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2" style={{borderTop: '4px solid #ff7500'}}>
              <h2 className="text-xl font-bold mb-3" style={{color: '#255849'}}>Commercial Building Services</h2>
              <p className="text-gray-600 mb-4">Mechanical and electrical services for office buildings</p>
              <span className="inline-block bg-orange-100 text-orange-600 font-semibold px-3 py-1 rounded-full text-sm">Building</span>
            </div>

            <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2" style={{borderTop: '4px solid #255849'}}>
              <h2 className="text-xl font-bold mb-3" style={{color: '#255849'}}>Industrial Solar Installation</h2>
              <p className="text-gray-600 mb-4">Solar PV system for industrial facility</p>
              <span className="inline-block bg-orange-100 text-orange-600 font-semibold px-3 py-1 rounded-full text-sm">Energy</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
