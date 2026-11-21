"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is CricFy TV APK completely free?",
    answer:
      "Yes. CricFy TV requires no monthly payment, no credit card details, and no account registration. All sports channels and live streaming servers are accessible free of charge.",
  },
  {
    question: "Is it safe to download CricFy TV APK from CricFyHub?",
    answer:
      "Absolutely. Every APK package hosted on CricFyHub is scanned against VirusTotal and Google Play Protect to ensure it is 100% clean, virus-free, and malware-free before being published.",
  },
  {
    question: "Can I watch IPL 2026 matches live on CricFy TV?",
    answer:
      "Yes! CricFy TV offers multiple uninterrupted HD servers covering all matches of IPL 2026, alongside multi-language commentary in Hindi, English, Tamil, Telugu, and more.",
  },
  {
    question: "Why is the live stream loading slowly or buffering?",
    answer:
      "Buffering typically happens when millions of fans access the exact same mirror simultaneously. In the video player, switch between Server 1, Server 2, or Server 3, or set playback resolution to 720p or 480p.",
  },
  {
    question: "Do I need a VPN to use CricFy TV?",
    answer:
      "CricFy TV functions seamlessly in most regions without a VPN. However, if your local ISP implements bandwidth throttling or restricts sports streaming protocols, connecting via a reliable VPN guarantees uninterrupted playback.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col gap-3 my-8">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="bg-[#181b22] border border-[#2b3240] rounded-xl overflow-hidden transition-colors hover:border-red-500/40"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left px-6 py-4 flex items-center justify-between text-gray-100 font-bold text-base md:text-lg focus:outline-none"
            >
              <span>{faq.question}</span>
              <span
                className={`text-red-500 text-xl font-bold transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 pt-1 text-gray-400 text-sm md:text-base leading-relaxed border-t border-[#2b3240]/50">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
