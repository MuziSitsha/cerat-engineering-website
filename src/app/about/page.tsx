export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-6 text-white">About Cerat</h1>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Founded in 2017, Cerat Pty Ltd has grown to become a leading multidisciplinary 
              engineering company dedicated to delivering innovative, efficient, and sustainable 
              solutions across mechanical, electrical, and civil engineering sectors.
            </p>
            <p className="text-gray-300 mb-4">
              With a strong foundation built on technical excellence and a commitment to quality, 
              we provide comprehensive engineering services tailored to meet the unique needs of 
              each project and client.
            </p>
            <p className="text-gray-300">
              Operating throughout South Africa and eSwatini, we specialize in serving a diverse 
              range of sectors including mining, construction, energy, and industrial facilities.
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              To set the benchmark for excellence in engineering by leading with innovation, 
              shaping industry standards, and becoming the partner of choice for complex projects.
            </p>
            <h2 className="text-2xl font-bold mb-6 text-white">Our Vision</h2>
            <p className="text-gray-300">
              To become the fastest-growing provider of engineering solutions by consistently 
              delivering value-driven, innovative, and sustainable services.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-2 text-white">Fulufhelo Ndou</h3>
              <p className="text-orange-500 mb-3">General Engineering Manager</p>
              <p className="text-gray-400 text-sm">Mechanical Engineering</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-2 text-white">Andani Mesare</h3>
              <p className="text-orange-500 mb-3">Operations Manager</p>
              <p className="text-gray-400 text-sm">Civil Engineering</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-2 text-white">Mpho Mbara</h3>
              <p className="text-orange-500 mb-3">Production Manager</p>
              <p className="text-gray-400 text-sm">Metallurgy</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-2 text-white">Mmathapelo Moliwagothe</h3>
              <p className="text-orange-500 mb-3">Safety Officer</p>
              <p className="text-gray-400 text-sm">Health & Environment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
