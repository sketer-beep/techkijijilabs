export default function TechKijijiHomepage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-blue-500/20">
        <div className="text-3xl font-bold text-orange-400">
          Tech<span className="text-white">Kijiji</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#" className="hover:text-orange-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            Learn
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            Chess
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            Innovation
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            Community
          </a>
        </div>

        <button className="bg-blue-500 hover:bg-orange-500 transition px-5 py-2 rounded-xl font-semibold shadow-lg shadow-orange-500/20">
          Join Us
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/10 blur-3xl"></div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight relative z-10">
          Building Kenya’s <span className="text-orange-400">Digital Future</span>
        </h1>

        <p className="mt-8 text-lg text-gray-300 max-w-3xl mx-auto relative z-10">
          TechKijiji combines coding, chess, innovation, and digital learning to empower the next generation of Kenyan creators, developers, and thinkers.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center relative z-10">
          <button className="bg-blue-500 hover:bg-orange-500 transition px-8 py-3 rounded-2xl font-bold shadow-lg shadow-orange-500/20">
            Learn Coding
          </button>

          <button className="border border-blue-500 hover:bg-blue-500/10 transition px-8 py-3 rounded-2xl font-bold">
            Join Chess Club
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white/5 border border-blue-500/20 rounded-3xl p-6 hover:scale-105 transition duration-300 backdrop-blur-md">
          <div className="text-5xl mb-4">💻</div>
          <h2 className="text-2xl font-bold text-orange-400">Tech Learning</h2>
          <p className="mt-4 text-gray-300">
            Learn web development, design, AI, data science, and cybersecurity with practical projects.
          </p>
        </div>

        <div className="bg-white/5 border border-blue-500/20 rounded-3xl p-6 hover:scale-105 transition duration-300 backdrop-blur-md">
          <div className="text-5xl mb-4">♟️</div>
          <h2 className="text-2xl font-bold text-orange-400">Chess & Strategy</h2>
          <p className="mt-4 text-gray-300">
            Build critical thinking and strategic skills through chess tournaments and training.
          </p>
        </div>

        <div className="bg-white/5 border border-blue-500/20 rounded-3xl p-6 hover:scale-105 transition duration-300 backdrop-blur-md">
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-2xl font-bold text-orange-400">Innovation Hub</h2>
          <p className="mt-4 text-gray-300">
            Showcase Kenyan startups, youth innovation, hackathons, and community projects.
          </p>
        </div>

        <div className="bg-white/5 border border-blue-500/20 rounded-3xl p-6 hover:scale-105 transition duration-300 backdrop-blur-md">
          <div className="text-5xl mb-4">🌍</div>
          <h2 className="text-2xl font-bold text-orange-400">Community</h2>
          <p className="mt-4 text-gray-300">
            Connect with developers, designers, students, mentors, and tech enthusiasts across Kenya.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-8 py-20 bg-white/5 border-y border-blue-500/10">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-5xl font-extrabold text-orange-400">1000+</h3>
            <p className="mt-3 text-gray-300">Students Reached</p>
          </div>

          <div>
            <h3 className="text-5xl font-extrabold text-orange-400">50+</h3>
            <p className="mt-3 text-gray-300">Tech Projects</p>
          </div>

          <div>
            <h3 className="text-5xl font-extrabold text-orange-400">20+</h3>
            <p className="mt-3 text-gray-300">Community Events</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent blur-3xl"></div>

        <h2 className="text-4xl md:text-5xl font-bold relative z-10">
          Join Kenya’s Growing Tech Community
        </h2>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto relative z-10">
          Learn, collaborate, innovate, and grow your future with TechKijiji.
        </p>

        <button className="mt-10 bg-blue-500 hover:bg-orange-500 transition px-10 py-4 rounded-2xl text-lg font-bold shadow-[0_0_30px_rgba(249,115,22,0.5)] relative z-10">
          Get Started
        </button>
      </section>

      {/* Contact & Map Section */}
      <section className="px-8 py-20 bg-gradient-to-b from-black to-blue-950/20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white/5 border border-blue-500/20 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
            <h2 className="text-4xl font-bold text-orange-400 mb-6">
              Contact TechKijiji
            </h2>

            <div className="space-y-6 text-lg">
              <div className="bg-black/40 border border-blue-500/10 rounded-2xl p-5">
                <p className="text-orange-400 font-semibold">Email</p>
                <p className="text-gray-300 mt-2">
                  techkijijijkenya@gmail.com
                </p>
              </div>

              <div className="bg-black/40 border border-blue-500/10 rounded-2xl p-5">
                <p className="text-orange-400 font-semibold">Phone</p>
                <p className="text-gray-300 mt-2">0717414228</p>
              </div>

              <div className="bg-black/40 border border-blue-500/10 rounded-2xl p-5">
                <p className="text-orange-400 font-semibold">Location</p>
                <p className="text-gray-300 mt-2">Nairobi, Kenya</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-blue-500/20 shadow-2xl h-[450px]">
            <iframe
              title="TechKijiji Location"
              src="https://www.google.com/maps?q=Nairobi,Kenya&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 px-8 py-8 text-center text-gray-400 bg-black">
        <div className="mb-6 space-y-2 text-sm">
          <p>Email: techkijijijkenya@gmail.com</p>
          <p>Phone: 0717414228</p>
        </div>

        <p>© 2026 TechKijiji. All rights reserved.</p>
        <p className="mt-2 text-sm">Code. Think. Innovate.</p>
      </footer>
    </div>
  );
}
