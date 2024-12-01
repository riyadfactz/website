export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glow-effect">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Full Stack Developer
            </h2>
            <p className="text-xl text-emerald-100/70 mb-8">
              Passionate about creating elegant solutions to complex problems. With 5+ years
              of experience in web development, I specialize in building scalable
              applications using modern technologies.
            </p>
            <a
              href="#contact"
              className="inline-block bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 
                border border-emerald-500/30 px-8 py-3 rounded-2xl transition-colors font-medium
                backdrop-blur-sm"
            >
              Get in Touch
            </a>
          </div>
          <div className="relative glow-effect">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Profile"
              className="rounded-3xl shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}