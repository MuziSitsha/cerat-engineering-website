export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="min-h-[40vh] pt-32 pb-20 flex items-center" style={{backgroundColor: '#255849'}}>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">About Cerat</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{color: '#255849'}}>Our Story</h2>
              <div className="w-16 h-1 bg-orange-500 rounded-full mb-8"></div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Founded in 2017, Cerat Pty Ltd has grown to become a leading multidisciplinary 
                engineering company dedicated to delivering innovative, efficient, and sustainable 
                solutions across mechanical, electrical, and civil engineering sectors.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                With a strong foundation built on technical excellence and a commitment to quality, 
                we provide comprehensive engineering services tailored to meet the unique needs of 
                each project and client.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Operating throughout South Africa and eSwatini, we specialize in serving a diverse 
                range of sectors including mining, construction, energy, and industrial facilities.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="p-8 rounded-xl shadow-lg" style={{backgroundColor: '#f8f9fa', borderLeft: '4px solid #255849'}}>
                <h2 className="text-2xl font-bold mb-4" style={{color: '#255849'}}>Our Mission</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To set the benchmark for excellence in engineering by leading with innovation, 
                  shaping industry standards, and becoming the partner of choice for complex projects.
                </p>
              </div>
              
              <div className="p-8 rounded-xl shadow-lg" style={{backgroundColor: '#f8f9fa', borderLeft: '4px solid #ff7500'}}>
                <h2 className="text-2xl font-bold mb-4" style={{color: '#255849'}}>Our Vision</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To become the fastest-growing provider of engineering solutions by consistently 
                  delivering value-driven, innovative, and sustainable services.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div>
            <h2 className="text-4xl font-bold mb-4" style={{color: '#255849'}}>Leadership Team</h2>
            <div className="w-16 h-1 bg-orange-500 rounded-full mb-12"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center bg-white" style={{borderTop: '4px solid #255849'}}>
                <h3 className="text-xl font-bold mb-2" style={{color: '#255849'}}>Fulufhelo Ndou</h3>
                <p className="text-orange-500 font-semibold mb-3">General Engineering Manager</p>
                <p className="text-gray-600 text-sm">Mechanical Engineering</p>
              </div>
              
              <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center bg-white" style={{borderTop: '4px solid #ff7500'}}>
                <h3 className="text-xl font-bold mb-2" style={{color: '#255849'}}>Andani Mesare</h3>
                <p className="text-orange-500 font-semibold mb-3">Operations Manager</p>
                <p className="text-gray-600 text-sm">Civil Engineering</p>
              </div>
              
              <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center bg-white" style={{borderTop: '4px solid #255849'}}>
                <h3 className="text-xl font-bold mb-2" style={{color: '#255849'}}>Mpho Mbara</h3>
                <p className="text-orange-500 font-semibold mb-3">Production Manager</p>
                <p className="text-gray-600 text-sm">Metallurgy</p>
              </div>
              
              <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center bg-white" style={{borderTop: '4px solid #ff7500'}}>
                <h3 className="text-xl font-bold mb-2" style={{color: '#255849'}}>Mmathapelo Moliwagothe</h3>
                <p className="text-orange-500 font-semibold mb-3">Safety Officer</p>
                <p className="text-gray-600 text-sm">Health & Environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
