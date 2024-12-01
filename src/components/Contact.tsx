import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-emerald-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-emerald-100 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-emerald-800/30 border border-emerald-700/30 rounded-2xl
                    text-white placeholder-emerald-200/50 focus:ring-2 focus:ring-emerald-500/50
                    focus:border-transparent backdrop-blur-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-emerald-100 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-emerald-800/30 border border-emerald-700/30 rounded-2xl
                    text-white placeholder-emerald-200/50 focus:ring-2 focus:ring-emerald-500/50
                    focus:border-transparent backdrop-blur-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-emerald-100 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-emerald-800/30 border border-emerald-700/30 rounded-2xl
                    text-white placeholder-emerald-200/50 focus:ring-2 focus:ring-emerald-500/50
                    focus:border-transparent backdrop-blur-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600/80 text-white px-6 py-3 rounded-2xl
                  hover:bg-emerald-500/80 transition-colors font-medium backdrop-blur-sm"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-emerald-400 mt-1" />
              <div>
                <h3 className="font-medium text-white">Location</h3>
                <p className="text-emerald-100/80">San Francisco, CA</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-emerald-400 mt-1" />
              <div>
                <h3 className="font-medium text-white">Email</h3>
                <p className="text-emerald-100/80">john@example.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-emerald-400 mt-1" />
              <div>
                <h3 className="font-medium text-white">Phone</h3>
                <p className="text-emerald-100/80">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}