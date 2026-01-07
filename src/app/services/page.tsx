export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-6 text-white">Our Services</h1>
        <p className="text-xl text-gray-300 mb-8">
          Comprehensive engineering solutions since 2017.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-white">Mining Solutions</h2>
            <ul className="text-gray-400 space-y-2">
              <li>• EPCM Services</li>
              <li>• Plant Optimization</li>
              <li>• Mine Infrastructure</li>
              <li>• Process Engineering</li>
              <li>• Mechanical Maintenance</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-white">Building Services</h2>
            <ul className="text-gray-400 space-y-2">
              <li>• Mechanical Systems</li>
              <li>• Electrical Systems</li>
              <li>• Construction</li>
              <li>• HVAC Systems</li>
              <li>• Plumbing Services</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-white">Energy Solutions</h2>
            <ul className="text-gray-400 space-y-2">
              <li>• Solar PV Installation</li>
              <li>• Energy Audits</li>
              <li>• LED Upgrades</li>
              <li>• Power Quality Analysis</li>
              <li>• Renewable Energy Systems</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-white">Mobile Crushing</h2>
            <ul className="text-gray-400 space-y-2">
              <li>• 200 TPH Plant</li>
              <li>• Contract Crushing</li>
              <li>• Aggregate Supply</li>
              <li>• Site Establishment</li>
              <li>• Maintenance Services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
