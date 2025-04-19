import logo from '../assets/baaztechno.png';

const About = () => {
  return (
    <>
      <div>
        <title>About BaazTechno Blogs | Tech Insights & Tutorials</title>
        <meta name="description" content="Learn about BaazTechno's blog platform - sharing tech insights, tutorials, and industry perspectives from our team of experts." />
      </div>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-cover opacity-10"></div>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                <img src={logo} alt="BaazTechno Logo" className="h-16 w-auto" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-300">
              About BaazTechno Blogs
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto transition-opacity duration-300">
              The official knowledge hub where we share tech insights, tutorials, and industry perspectives.
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
          {/* About Section */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-primary/30 transition-all duration-300">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
              About BaazTechno
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>BaazTechno is a premier technology solutions company specializing in digital transformation and innovative software development.</p>
              <p>Founded with the vision to revolutionize how businesses leverage technology, we've consistently delivered cutting-edge solutions to global clients, helping them stay ahead in the digital landscape.</p>
            </div>
          </div>

          {/* Blog Mission */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-primary/30 transition-all duration-300">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></span>
              Our Blog Mission
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>The BaazTechno Blogs platform was created to democratize tech knowledge. We're committed to sharing what we learn in the field with the wider community.</p>
              <ul className="grid md:grid-cols-2 gap-4 mt-6">
                {[
                  "In-depth technical tutorials",
                  "Emerging technology trends",
                  "Real-world case studies",
                  "Expert thought leadership",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Blog Uniqueness */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-primary/30 transition-all duration-300">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
              Why Our Blog Stands Out
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>Our content is battle-tested in real-world enterprise environments. We share practical knowledge gained from solving complex problems, not just theoretical concepts.</p>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-gray-700/30 p-4 rounded-lg border-l-4 border-primary">
                  <h3 className="font-semibold text-white mb-2">For Developers</h3>
                  <p className="text-sm">Deep dives into technologies we use daily, with code samples and best practices.</p>
                </div>
                <div className="bg-gray-700/30 p-4 rounded-lg border-l-4 border-cyan-400">
                  <h3 className="font-semibold text-white mb-2">For Business Leaders</h3>
                  <p className="text-sm">Insights on technology strategy and digital transformation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl hover:shadow-primary/10 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay tuned for more insights from the BaazTechno team!</h3>
            <p className="text-gray-300">Follow our journey and never miss an update.</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
