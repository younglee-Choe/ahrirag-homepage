'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'values', 'features', 'pricing'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 px-5">
      <div className="flex h-15 md:h-30 items-center justify-between px-0 md:container md:mx-auto">
        <div className="flex items-center">
          <button onClick={() => scrollToSection('hero')} className="cursor-pointer">
            <div className="block md:hidden flex flex-row items-center justify-center gap-1 ml-0 md:ml-0">
              <img
                src="/AhriSure/images/ahrisure-icon2.png"
                className="w-13 h-13 object-fill"
                alt="AhriSure Icon"
              />
              <img
                src="/AhriSure/images/ahrisure-text2.png"
                className="w-20 h-15 object-fill"
                alt="AhriSure Text"
              />
            </div>
            <div className="hidden md:block">
              <img
                src="/AhriSure/images/ahrisure-logo2.png"
                className="w-25 h-25 object-fill"
                alt="AhriSure Icon"
              />
            </div>
          </button>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('values')}
            className={`text-sm font-bold transition-colors cursor-pointer ${
              activeSection === 'values' ? 'text-[#3d9b8f]' : 'text-gray-700 hover:text-[#3d9b8f]'
            }`}
          >
            서비스 가치
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className={`text-sm font-bold transition-colors cursor-pointer ${
              activeSection === 'features' ? 'text-[#3d9b8f]' : 'text-gray-700 hover:text-[#3d9b8f]'
            }`}
          >
            주요 기능
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className={`text-sm font-bold transition-colors cursor-pointer ${
              activeSection === 'pricing' ? 'text-[#3d9b8f]' : 'text-gray-700 hover:text-[#3d9b8f]'
            }`}
          >
            요금 안내
          </button>
        </nav>
        <Button className="bg-[#3d9b8f] hover:bg-[#2d8b7f] shadow-lg text-white rounded-full px-6 cursor-pointer select-none">
          <span>고객용</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </Button>
      </div>
    </header>
  );
}
