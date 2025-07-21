// Modern, Bold, and Conversion-Optimized Landing Page for DevConnect

import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-[#0D0D0D] text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-br from-[#0D1A2D] via-[#0D0D0D] to-black">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl bg-gradient-to-r from-[#82D9D9] to-[#6ECACA] text-transparent bg-clip-text">
          Connect. Collaborate. Create.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-xl">
          DevConnect is the digital playground where developers unite to build, learn, and grow together.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <Link to="/register" className="px-6 py-3 bg-[#82D9D9] text-black font-semibold rounded-lg shadow-lg hover:bg-[#5fc6c6] transition-transform transform hover:-translate-y-1">
            Join the Community
          </Link>
          <Link to="/login" className="px-6 py-3 border-2 border-[#82D9D9] text-white font-semibold rounded-lg hover:bg-[#82D9D9]/10 transition-transform transform hover:-translate-y-1">
            Explore First
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Everything Developers Need</h2>
        <p className="text-center text-lg text-gray-400 mb-16 max-w-2xl mx-auto">
          One platform. Infinite possibilities. DevConnect empowers developers to thrive.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: '💬', title: 'Group Chats', desc: 'Chat in real-time on tech topics, frameworks, or memes.' },
            { icon: '📨', title: '1-on-1 Messages', desc: 'Have private discussions and mentorship conversations.' },
            { icon: '📝', title: 'Micro-Blogs', desc: 'Publish short dev insights, tips, or your daily learnings.' },
            { icon: '🧠', title: 'Think Tanks', desc: 'Brainstorm-only spaces where devs bounce ideas, give feedback, and nurture product concepts together.' },
          ].map((f, i) => (
            <div key={i} className="bg-[#1E1E1E] rounded-xl p-6 text-center shadow-xl hover:-translate-y-1 transition-transform">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#121212] py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Loved by the Devs</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          <div className="bg-[#1E1E1E] rounded-xl p-6 shadow-md">
            <p className="italic text-lg text-gray-300">“If this works the way it's pitched, it’ll replace my dev Discord groups.”</p>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-3xl">👨‍💻</span>
              <div>
                <div className="font-semibold">Soon-to-be User</div>
                <div className="text-sm text-gray-400">Full Stack Developer</div>
              </div>
            </div>
          </div>
          <div className="bg-[#1E1E1E] rounded-xl p-6 shadow-md">
            <p className="italic text-lg text-gray-300">“This could be the space where I finally find consistent teammates for side projects.”</p>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-3xl">👩‍💻</span>
              <div>
                <div className="font-semibold">Future DevConnect Member</div>
                <div className="text-sm text-gray-400">Software Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-20 px-4 bg-gradient-to-br from-[#0D1A2D] to-[#0D0D0D]">
        <h2 className="text-4xl font-bold mb-4">Ready to Build with the Best?</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
          Start connecting with global developers who are building the future.
        </p>
        <Link to="/register" className="px-8 py-4 text-lg font-bold rounded-xl bg-[#82D9D9] text-black hover:bg-[#5fc6c6] transition-all shadow-lg">
          Join DevConnect Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D0D0D] py-12 border-t border-gray-800 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#82D9D9] to-[#6ECACA] text-transparent bg-clip-text mb-2">DevConnect</h3>
            <p className="text-gray-400 text-sm">Empowering devs to connect, code, and create together.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li><a href="#" className="hover:text-[#82D9D9]">Features</a></li>
              <li><a href="#" className="hover:text-[#82D9D9]">Blog</a></li>
              <li><a href="#" className="hover:text-[#82D9D9]">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Connect</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li><a href="#" className="hover:text-[#82D9D9]">Contact</a></li>
              <li><a href="#" className="hover:text-[#82D9D9]">Community</a></li>
              <li><a href="#" className="hover:text-[#82D9D9]">GitHub</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-12">© 2025 DevConnect. Built with ❤️ for developers worldwide.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
