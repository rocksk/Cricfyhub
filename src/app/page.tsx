import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f1115] text-gray-100 font-sans">
      
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#0f1115]/90 backdrop-blur-md border-b border-[#2b3240]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/cricfy-logo.png"
              alt="CricFy Logo"
              width={34}
              height={34}
              className="rounded-full shadow-md group-hover:scale-105 transition-transform"
            />
            <span className="font-extrabold text-lg md:text-xl tracking-tight text-white">
              CRICFY<span className="text-red-500">HUB</span><span className="text-xs text-gray-400">.com</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <a href="#features" className="hover:text-white transition-colors">Key Features</a>
            <a href="#download-zone" className="hover:text-white transition-colors">Download</a>
            <a href="#guide" className="hover:text-white transition-colors">Install Guide</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          <a
            href="#download-zone"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold text-xs md:text-sm px-4 py-2 rounded-full shadow-lg shadow-red-900/40 transition-transform hover:-translate-y-0.5"
          >
            Download v7.4
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading, description, CTA */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
                <span className="w-2 h-2 rounded-full bg-red-500 pulse-dot"></span>
                <span>2026 Enhanced Build: CricFy TV v7.4 Ready</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-4 text-white">
                CricFy TV APK Download{" "}
                <span className="bg-gradient-to-r from-red-500 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Latest Version Free
                </span>{" "}
                for Android 2026
              </h1>

              <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
                Stream non-stop live cricket tournaments, IPL 2026, ICC world championships, football leagues, and over 600+ premium satellite channels straight to your Android smartphone, tablet, or Smart TV in ultra-clear Full HD.
              </p>

              {/* Quick Spec Badges */}
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 bg-[#181b22] border border-[#2b3240] rounded-xl mb-6 text-xs text-gray-400">
                <div>📦 <strong className="text-gray-200">Size:</strong> 18.3 MB</div>
                <div>⚡ <strong className="text-gray-200">Version:</strong> v7.4 (2026)</div>
                <div>🛡️ <strong className="text-gray-200">Security:</strong> Verified Safe</div>
                <div>💰 <strong className="text-gray-200">Price:</strong> 100% Free</div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#recommended-download"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-base px-7 py-3.5 rounded-full shadow-xl shadow-red-900/50 transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                  Download APK (v7.4)
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 bg-[#1f242e] hover:bg-[#282f3d] text-gray-200 font-semibold text-sm px-6 py-3.5 rounded-full border border-[#2b3240] transition-colors"
                >
                  Explore Features &rarr;
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Phone Preview Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-72 bg-gradient-to-b from-[#1f242e] to-[#12141a] border-4 border-[#2f3747] rounded-[38px] p-4 shadow-2xl shadow-red-950/40 relative">
                <div className="w-20 h-3 bg-[#111] mx-auto rounded-b-lg mb-3"></div>
                
                <div className="bg-[#0d0f14] rounded-2xl p-3 border border-white/5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-red-500 flex items-center gap-1.5">
                      🏏 CricFy TV
                    </span>
                    <span className="bg-red-600 text-[10px] text-white px-2 py-0.5 rounded font-black tracking-wider">
                      LIVE 4K
                    </span>
                  </div>

                  <div className="h-32 rounded-xl bg-gradient-to-br from-blue-900 to-indigo-950 p-3 flex flex-col justify-end relative overflow-hidden border border-white/10">
                    <span className="absolute top-2 left-2 bg-black/60 text-[10px] text-yellow-400 font-semibold px-2 py-0.5 rounded">
                      IPL 2026 MATCH
                    </span>
                    <div className="text-white text-xs font-bold">Mumbai vs Chennai</div>
                    <div className="text-gray-300 text-[10px]">Server 1 &bull; 60 FPS Ultra HD</div>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 text-[10px] text-center font-semibold">
                    <div className="bg-[#191d26] p-2 rounded border border-[#2b3240] text-gray-300">📺 Sports 1</div>
                    <div className="bg-[#191d26] p-2 rounded border border-[#2b3240] text-gray-300">🏏 Willow TV</div>
                    <div className="bg-[#191d26] p-2 rounded border border-[#2b3240] text-gray-300">⚽ Sky Sports</div>
                    <div className="bg-[#191d26] p-2 rounded border border-[#2b3240] text-gray-300">⚡ Star Sports</div>
                    <div className="bg-[#191d26] p-2 rounded border border-[#2b3240] text-gray-300">🏆 SuperSport</div>
                    <div className="bg-[#191d26] p-2 rounded border border-[#2b3240] text-gray-300">🌐 Sony Ten</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Multiple Download Buttons Section */}
        <section className="max-w-6xl mx-auto px-4 my-8" id="download-zone">
          <div className="bg-gradient-to-b from-[#181b22] to-[#12141a] border border-[#2b3240] rounded-2xl p-6 md:p-10 relative shadow-2xl">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="inline-block bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
                Fast &amp; Verified Mirrors
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                Multiple CricFy APK Download Links
              </h2>
              <p className="text-sm text-gray-400">
                Choose the best download server for your device. All files are tested and 100% clean.
              </p>
            </div>

            {/* Multiple Download Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              
              {/* Button / Card 1: Latest Version */}
              <div id="recommended-download" className="scroll-mt-24 bg-[#1e222b] border-2 border-red-600 rounded-xl p-6 flex flex-col justify-between relative shadow-lg shadow-red-950/30">
                <span className="absolute -top-3 right-4 bg-red-600 text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                  Recommended
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center text-xl">
                      ⚡
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">CricFy TV v7.4</h3>
                      <p className="text-xs text-gray-400">Latest 2026 Official Build</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 text-xs text-gray-300 border-t border-gray-700/60 pt-3 mb-5">
                    <div className="flex justify-between"><span>File Size:</span> <strong>18.3 MB</strong></div>
                    <div className="flex justify-between"><span>Android:</span> <strong>5.0+ / Smart TV</strong></div>
                    <div className="flex justify-between"><span>Safety:</span> <strong className="text-emerald-400">VirusTotal Verified</strong></div>
                  </div>
                </div>
                <a
                  href="/Cricfyhub.apk"
                  download="Cricfyhub.apk"
                  className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-3 rounded-lg transition-colors shadow-md"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"/><path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"/></svg>
                  Download APK (v7.4 Direct)
                </a>
              </div>

              {/* Button / Card 2: Server 2 Mirror */}
              <div className="bg-[#181b22] border border-[#2b3240] hover:border-gray-600 rounded-xl p-6 flex flex-col justify-between transition-colors">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-600/20 text-orange-400 flex items-center justify-center text-xl">
                      🚀
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">CricFy TV (Server 2)</h3>
                      <p className="text-xs text-gray-400">High-Speed CDN Mirror</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 text-xs text-gray-300 border-t border-gray-700/60 pt-3 mb-5">
                    <div className="flex justify-between"><span>File Size:</span> <strong>18.5 MB</strong></div>
                    <div className="flex justify-between"><span>Bandwidth:</span> <strong>Multi-Threaded CDN</strong></div>
                    <div className="flex justify-between"><span>Ad Experience:</span> <strong className="text-emerald-400">Ad-Free Stream</strong></div>
                  </div>
                </div>
                <a
                  href="#server-2-download"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#262c38] hover:bg-[#323948] text-white font-bold text-sm py-3 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"/><path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"/></svg>
                  Download Server 2 (Mirror)
                </a>
              </div>

              {/* Button / Card 3: Previous Stable Version */}
              <div className="bg-[#181b22] border border-[#2b3240] hover:border-gray-600 rounded-xl p-6 flex flex-col justify-between transition-colors">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center text-xl">
                      📦
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">CricFy TV v5.8</h3>
                      <p className="text-xs text-gray-400">Legacy / Low-Spec Build</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 text-xs text-gray-300 border-t border-gray-700/60 pt-3 mb-5">
                    <div className="flex justify-between"><span>File Size:</span> <strong>16.8 MB</strong></div>
                    <div className="flex justify-between"><span>Android:</span> <strong>Android 4.4+ Older Devices</strong></div>
                    <div className="flex justify-between"><span>Stability:</span> <strong className="text-emerald-400">Tested &amp; Lightweight</strong></div>
                  </div>
                </div>
                <a
                  href="#server-legacy-download"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#262c38] hover:bg-[#323948] text-white font-bold text-sm py-3 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"/><path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"/></svg>
                  Download v5.8 (Legacy)
                </a>
              </div>

            </div>

            {/* Security Badges */}
            <div className="pt-4 border-t border-[#2b3240] flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                🛡️ Google Play Protect Safe
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                🔒 SSL Encrypted Download
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                🚫 No Root Access Required
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                ✨ Zero Adware / Spyware
              </span>
            </div>
          </div>
        </section>

        {/* Technical Specification Table */}
        <section className="max-w-6xl mx-auto px-4 my-8" id="specs">
          <div className="bg-[#181b22] border border-[#2b3240] rounded-xl overflow-hidden">
            <div className="bg-[#1f242e] px-6 py-4 border-b border-[#2b3240] font-bold text-white text-base flex items-center gap-2">
              📋 CricFy TV APK Technical Specifications
            </div>
            <div className="divide-y divide-[#2b3240] text-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 px-6 py-3.5 bg-white/[0.01]">
                <span className="text-gray-400 font-medium">Application Name</span>
                <span className="md:col-span-2 text-white font-semibold">CricFy TV</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 px-6 py-3.5">
                <span className="text-gray-400 font-medium">Release Version</span>
                <span className="md:col-span-2 text-white font-semibold">v7.4 (2026 Enhanced Build)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 px-6 py-3.5 bg-white/[0.01]">
                <span className="text-gray-400 font-medium">Package Size</span>
                <span className="md:col-span-2 text-white font-semibold">18.3 MB</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 px-6 py-3.5">
                <span className="text-gray-400 font-medium">Minimum OS Required</span>
                <span className="md:col-span-2 text-white font-semibold">Android 5.0 (Lollipop) and higher</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 px-6 py-3.5 bg-white/[0.01]">
                <span className="text-gray-400 font-medium">Primary Category</span>
                <span className="md:col-span-2 text-white font-semibold">Sports Streaming &amp; Live Satellite TV</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 px-6 py-3.5">
                <span className="text-gray-400 font-medium">Compatible Hardware</span>
                <span className="md:col-span-2 text-white font-semibold">Android Phones, Tablets, FireStick, Smart TVs, Android Box</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 px-6 py-3.5 bg-white/[0.01]">
                <span className="text-gray-400 font-medium">Access Cost</span>
                <span className="md:col-span-2 text-emerald-400 font-semibold">100% Free / No In-App Subscription</span>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content & Features */}
        <article className="max-w-6xl mx-auto px-4 my-12 text-gray-300 space-y-8" id="about">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              What is CricFy TV APK?
            </h2>
            <p className="leading-relaxed mb-4">
              <strong>CricFy TV APK</strong> is a leading third-party live sports streaming application tailored specifically for cricket enthusiasts around the globe. By bypassing expensive paywalls, region-locked broadcasts, and cumbersome subscription logins, CricFy TV delivers seamless access to hundreds of high-definition satellite TV feeds through an elegant and responsive interface.
            </p>
            <p className="leading-relaxed">
              Whether you are tuning into high-voltage Indian Premier League (IPL) clashes, ICC World Cups, the Ashes, Big Bash League (BBL), or top European football leagues including the English Premier League and UEFA Champions League, CricFy TV ensures crystal-clear playback with multiple backup mirrors.
            </p>
          </div>

          {/* Key Feature Cards */}
          <div id="features">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
              Key Features of CricFy TV APK (2026 Edition)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              <div className="bg-[#181b22] border border-[#2b3240] rounded-xl p-5 hover:border-red-500/40 transition-colors">
                <div className="text-2xl mb-2">🏏</div>
                <h3 className="font-bold text-white text-lg mb-2">Non-Stop Live Cricket</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Real-time ball-by-ball streaming of every Test, ODI, and T20 contest worldwide without geo-restrictions.
                </p>
              </div>

              <div className="bg-[#181b22] border border-[#2b3240] rounded-xl p-5 hover:border-red-500/40 transition-colors">
                <div className="text-2xl mb-2">📺</div>
                <h3 className="font-bold text-white text-lg mb-2">600+ Satellite TV Channels</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Direct access to premier sports channels from India, the UK, USA, Australia, and Pakistan covering cricket, football, tennis, and MMA.
                </p>
              </div>

              <div className="bg-[#181b22] border border-[#2b3240] rounded-xl p-5 hover:border-red-500/40 transition-colors">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-bold text-white text-lg mb-2">Multi-Server Redundancy</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Each match includes 3 to 4 independent live stream mirrors so you never get interrupted if one server gets crowded.
                </p>
              </div>

              <div className="bg-[#181b22] border border-[#2b3240] rounded-xl p-5 hover:border-red-500/40 transition-colors">
                <div className="text-2xl mb-2">📺</div>
                <h3 className="font-bold text-white text-lg mb-2">Smart TV &amp; FireStick Ready</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Engineered with D-Pad and remote control support, allowing effortless sideloading on Amazon Fire TV, Android TV, and Mi Box.
                </p>
              </div>

              <div className="bg-[#181b22] border border-[#2b3240] rounded-xl p-5 hover:border-red-500/40 transition-colors">
                <div className="text-2xl mb-2">🎧</div>
                <h3 className="font-bold text-white text-lg mb-2">Multi-Language Audio</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Toggle commentary tracks easily between English, Hindi, Tamil, Telugu, and Bengali on supported fixtures.
                </p>
              </div>

              <div className="bg-[#181b22] border border-[#2b3240] rounded-xl p-5 hover:border-red-500/40 transition-colors">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="font-bold text-white text-lg mb-2">Adaptive Resolution</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Smoothly switch between 480p, 720p HD, and 1080p FHD or let the app automatically optimize for your 4G/5G connection.
                </p>
              </div>

            </div>
          </div>

          {/* Comparison Table */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              CricFy TV APK vs. Traditional Streaming
            </h2>
            <div className="overflow-x-auto bg-[#181b22] border border-[#2b3240] rounded-xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#1f242e] text-white">
                  <tr>
                    <th className="p-4">Feature / Metric</th>
                    <th className="p-4 text-emerald-400 font-bold">CricFy TV APK</th>
                    <th className="p-4">Cable / DTH Dish</th>
                    <th className="p-4">OTT Subscriptions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2b3240] text-gray-300">
                  <tr>
                    <td className="p-4 font-medium text-white">Monthly Cost</td>
                    <td className="p-4 text-emerald-400 font-bold">100% Free</td>
                    <td className="p-4">$30 - $70 / mo</td>
                    <td className="p-4">$10 - $25 / mo</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-white">Live Backup Servers</td>
                    <td className="p-4 text-emerald-400 font-bold">Multiple Active Mirrors</td>
                    <td className="p-4">Single Channel Feed</td>
                    <td className="p-4">Single Official Server</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-white">Sign-Up / KYC</td>
                    <td className="p-4 text-emerald-400 font-bold">None (Instant Stream)</td>
                    <td className="p-4">Contract Required</td>
                    <td className="p-4">Mandatory Account</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-white">FireStick &amp; TV Support</td>
                    <td className="p-4 text-emerald-400 font-bold">Yes (Direct APK)</td>
                    <td className="p-4">Set-top Box Only</td>
                    <td className="p-4">Region Dependent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Step-by-Step Installation Guide */}
          <div id="guide">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              How to Download and Install CricFy TV APK on Android
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="bg-[#181b22] border border-[#2b3240] rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white font-black flex items-center justify-center text-sm mb-3">
                  1
                </div>
                <h4 className="font-bold text-white text-base mb-1">Download APK</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Click the verified download button above to save the latest CricFy TV APK package to your Android device.
                </p>
              </div>

              <div className="bg-[#181b22] border border-[#2b3240] rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white font-black flex items-center justify-center text-sm mb-3">
                  2
                </div>
                <h4 className="font-bold text-white text-base mb-1">Allow Unknown Apps</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Navigate to <em>Settings &gt; Security &gt; Install Unknown Apps</em> and grant permission to your browser or file manager.
                </p>
              </div>

              <div className="bg-[#181b22] border border-[#2b3240] rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white font-black flex items-center justify-center text-sm mb-3">
                  3
                </div>
                <h4 className="font-bold text-white text-base mb-1">Run Installation</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Tap the downloaded APK file in your notification bar or Downloads folder and click <strong>Install</strong>.
                </p>
              </div>

              <div className="bg-[#181b22] border border-[#2b3240] rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white font-black flex items-center justify-center text-sm mb-3">
                  4
                </div>
                <h4 className="font-bold text-white text-base mb-1">Launch &amp; Enjoy</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Open CricFy TV from your app drawer, select your cricket fixture, and begin watching immediately in HD!
                </p>
              </div>

            </div>
          </div>

          {/* Interactive FAQ Section */}
          <div id="faq">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Got questions about CricFy TV APK? Find everything you need below.
            </p>
            <FAQAccordion />
          </div>

        </article>

      </main>

      {/* Footer */}
      <footer className="bg-[#0b0c10] border-t border-[#2b3240] pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2.5 mb-3">
                <Image
                  src="/cricfy-logo.png"
                  alt="CricFy Logo"
                  width={28}
                  height={28}
                  className="rounded-full shadow-md"
                />
                <span className="font-extrabold text-lg text-white">
                  CRICFY<span className="text-red-500">HUB</span><span className="text-xs text-gray-400">.com</span>
                </span>
              </Link>
              <p className="text-xs text-gray-400 leading-relaxed max-w-md">
                CricFyHub.com is an independent community portal providing the latest information, guides, and direct APK download links for CricFy TV. Stream your favorite cricket tournaments and sports matches with zero fees.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white mb-3">Quick Navigation</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><a href="#about" className="hover:text-red-400 transition-colors">About CricFy TV</a></li>
                <li><a href="#features" className="hover:text-red-400 transition-colors">Key Features</a></li>
                <li><a href="#download-zone" className="hover:text-red-400 transition-colors">Download Options</a></li>
                <li><a href="#specs" className="hover:text-red-400 transition-colors">Technical Specs</a></li>
                <li><a href="#faq" className="hover:text-red-400 transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white mb-3">Legal &amp; Policy</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">DMCA Disclaimer</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Contact Support</a></li>
              </ul>
            </div>

          </div>

          <div className="bg-white/[0.02] border border-[#232833] rounded-lg p-4 text-[11px] text-gray-400 leading-relaxed mb-6">
            <strong>DMCA &amp; Content Disclaimer:</strong> CricFyHub.com is an educational and informational community website. We are not officially affiliated with or endorsed by the developers of CricFy TV, the BCCI, ICC, or television broadcasters. We do not host or broadcast copyrighted video content directly on our servers. All trademarks and brand names belong to their respective copyright holders.
          </div>

          <div className="text-center text-xs text-gray-400 border-t border-[#1a1e27] pt-6">
            &copy; 2026 CricFyHub.com
          </div>
        </div>
      </footer>

    </div>
  );
}
