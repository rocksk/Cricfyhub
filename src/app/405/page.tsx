import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "405 Method Not Allowed - CricFyHub",
  description: "The HTTP request method used is not supported for this resource on CricFyHub.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MethodNotAllowedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f1115] text-gray-100 px-4 text-center">
      <Link href="/" className="inline-flex items-center gap-2.5 mb-8">
        <Image
          src="/cricfy-logo.png"
          alt="CricFy Logo"
          width={40}
          height={40}
          className="rounded-full shadow-lg"
        />
        <span className="font-extrabold text-xl tracking-tight text-white">
          CRICFY<span className="text-red-500">HUB</span><span className="text-xs text-gray-400">.com</span>
        </span>
      </Link>

      <div className="max-w-md w-full bg-[#181b22] border border-[#2b3240] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-orange-600/10 rounded-full blur-2xl"></div>
        <div className="text-6xl font-black text-orange-500 mb-2">405</div>
        <h1 className="text-2xl font-bold text-white mb-3">Method Not Allowed</h1>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          The HTTP method sent in your request is not supported for this URL endpoint on CricFyHub. Please navigate using standard GET requests.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm px-6 py-3 rounded-lg shadow-lg shadow-red-900/40 transition-colors"
          >
            &larr; Return to Homepage
          </Link>
          <a
            href="/Cricfyhub.apk"
            download="Cricfyhub.apk"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#262c38] hover:bg-[#323948] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors border border-[#2b3240]"
          >
            Download v7.4 APK
          </a>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-8">
        &copy; 2026 CricFyHub.com &bull; All Rights Reserved
      </p>
    </div>
  );
}
