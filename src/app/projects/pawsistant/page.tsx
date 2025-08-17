import Image from "next/image";
import Link from "next/link";

export default function PawsistantPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Image src="/pawsistant-logo.svg" alt="Pawsistant Logo" width={64} height={64} className="w-16 h-16" />
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Pawsistant
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-medium text-orange-600 mb-6">
              AI-Powered Pet Care Assistant
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A revolutionary AI companion that transforms pet care through intelligent voice conversations, 
              real-time health monitoring, and personalized care recommendations. Built with cutting-edge 
              voice AI technology and seamlessly embeddable into any website.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">Voice AI</div>
              <div className="text-sm text-gray-600">Natural Conversations</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-100 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">Real-Time</div>
              <div className="text-sm text-gray-600">Health Monitoring</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100 text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">Embeddable</div>
              <div className="text-sm text-gray-600">Widget SDK</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Available Support</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pawsistant combines advanced AI technology with practical pet care solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎤</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Voice AI Conversations</h3>
              <p className="text-gray-600 leading-relaxed">
                Natural language processing enables pet owners to have real conversations about 
                their pet’s health, behavior, and care needs through voice commands.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Health Monitoring</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered analysis of symptoms, behavior patterns, and health indicators 
                to provide early warning signs and veterinary recommendations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Care Plans</h3>
              <p className="text-gray-600 leading-relaxed">
                Customized feeding schedules, exercise routines, and wellness plans 
                based on pet breed, age, health status, and lifestyle factors.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Response</h3>
              <p className="text-gray-600 leading-relaxed">
                Instant emergency protocols and vet clinic recommendations with 
                GPS integration for immediate professional care when needed.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Behavior Training</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-driven training modules and behavioral analysis to help correct 
                unwanted behaviors and reinforce positive pet habits.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Seamless Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Drop-in widget that integrates with any website, complete with 
                customizable branding and admin dashboard for content management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with cutting-edge technologies for maximum performance and scalability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Frontend</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">Vite</span>
                  <span className="text-gray-600 text-sm">Lightning Fast</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-sm font-medium">Vanilla JS</span>
                  <span className="text-gray-600 text-sm">Lightweight</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-medium">CSS3</span>
                  <span className="text-gray-600 text-sm">Modern Styling</span>
                </div>
              </div>
            </div>

            {/* AI & Voice */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">AI & Voice</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium">VAPI</span>
                  <span className="text-gray-600 text-sm">Voice AI</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium">OpenAI</span>
                  <span className="text-gray-600 text-sm">GPT Integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm font-medium">WebRTC</span>
                  <span className="text-gray-600 text-sm">Real-time Audio</span>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Backend</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium">Node.js</span>
                  <span className="text-gray-600 text-sm">Runtime</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">Express</span>
                  <span className="text-gray-600 text-sm">Web Framework</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">SQLite</span>
                  <span className="text-gray-600 text-sm">Database</span>
                </div>
              </div>
            </div>

            {/* DevOps */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">DevOps</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">Docker</span>
                  <span className="text-gray-600 text-sm">Containerization</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium">Nginx</span>
                  <span className="text-gray-600 text-sm">Reverse Proxy</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium">Vercel</span>
                  <span className="text-gray-600 text-sm">Deployment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Highlights */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Innovation Breakthrough
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Pawsistant represents a paradigm shift in pet care technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">First-to-Market</h3>
              <p className="opacity-90 leading-relaxed">
                Revolutionary voice-first approach to pet care assistance, 
                setting new industry standards for AI-powered pet health solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🧬</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Advanced AI</h3>
              <p className="opacity-90 leading-relaxed">
                Proprietary machine learning algorithms trained on veterinary 
                knowledge base with continuous learning from user interactions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Impact</h3>
              <p className="opacity-90 leading-relaxed">
                Scalable solution addressing the worldwide need for accessible, 
                affordable pet healthcare guidance and emergency response.
              </p>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mt-16 bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-center mb-8">Development Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Integrated multiple AI APIs into cohesive voice experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Built responsive widget SDK for universal web integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Developed comprehensive admin dashboard with real-time analytics</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Implemented secure real-time voice communication protocols</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Created scalable Docker deployment architecture</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Optimized for high-performance static hosting deployment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Interactive Demo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience Pawsistant in action with our live demo
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 text-center border-2 border-dashed border-gray-300">
            <div className="max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-4xl">🎮</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Demo Coming Soon</h3>
              <p className="text-gray-600 mb-6">
                We’re preparing an interactive demo where you can experience Pawsistant’s 
                voice AI capabilities firsthand. Stay tuned for the live preview!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  Voice Interaction
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Real-time Responses
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Pet Health Guidance
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image src="/pawsistant-logo.svg" alt="Pawsistant Logo" width={32} height={32} className="w-8 h-8" />
            <span className="text-xl font-bold">Pawsistant</span>
          </div>
          <p className="text-gray-400">
            Revolutionizing pet care through AI technology
          </p>
        </div>
      </section>
    </div>
  );
}
