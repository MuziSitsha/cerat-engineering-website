export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-6 text-white">Our Projects</h1>
        <p className="text-xl text-gray-300 mb-8">
          Explore our portfolio of successful engineering projects.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-3 text-white">Dwarsrivier Chrome Mine</h2>
            <p className="text-gray-400 mb-4">Process plant upgrade increasing throughput to 270,000 t/m</p>
            <span className="text-orange-500 text-sm">Mining</span>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-3 text-white">Makhado CHPP</h2>
            <p className="text-gray-400 mb-4">Coal handling plant with 1.8 million tpa capacity</p>
            <span className="text-orange-500 text-sm">Mining</span>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-3 text-white">200 TPH Mobile Crushing</h2>
            <p className="text-gray-400 mb-4">Mobile granite crushing plant for construction aggregates</p>
            <span className="text-orange-500 text-sm">Crushing</span>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-3 text-white">Jindal Chirodzi Coal Plant</h2>
            <p className="text-gray-400 mb-4">Coal processing plant in Mozambique</p>
            <span className="text-orange-500 text-sm">Mining</span>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-3 text-white">Commercial Building Services</h2>
            <p className="text-gray-400 mb-4">Mechanical and electrical services for office buildings</p>
            <span className="text-orange-500 text-sm">Building</span>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-3 text-white">Industrial Solar Installation</h2>
            <p className="text-gray-400 mb-4">Solar PV system for industrial facility</p>
            <span className="text-orange-500 text-sm">Energy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
