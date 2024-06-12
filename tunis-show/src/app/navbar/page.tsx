'use client'
import React, { useState, useRef, useEffect } from "react";
import DesktopNavLinks from "../components/DesktopNavLinks";
import LogoLink from "../components/LogoLink";
import MobileDrawer from "../components/MobileDrawer";
import MobileMenuButton from "../components/MobileMenuButton";
import { gsap } from 'gsap';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const overlay1Ref = useRef<HTMLDivElement>(null);
  const overlay2Ref = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation to reveal the page after the overlay animations complete
    const revealPage = () => {
      const overlay1 = overlay1Ref.current;
      const overlay2 = overlay2Ref.current;
      const welcomeMessage = welcomeRef.current;

      if (overlay1 && overlay2 && welcomeMessage) {
        overlay1.style.display = 'none';
        overlay2.style.display = 'none';
        welcomeMessage.style.display = 'none';
      }
    };

    // Animation for the first overlay going from right to left
    gsap.to(overlay1Ref.current, {
      duration: 1,
      xPercent: -100, // Move from right to left
      ease: 'power3.inOut',
      onComplete: () => {
        // Animation for the second overlay fading in
        gsap.to(welcomeRef.current, {
          duration: 1,
          opacity: 1,
          onComplete: () => {
            // Animation for the welcome message zooming out and fading out
            gsap.to(welcomeRef.current, {
              duration: 1,
              scale: 0.2, // Zoom out effect
              opacity: 0, // Fade out effect
              ease: 'power3.inOut',
              onComplete: () => {
                // Animation for the second overlay going from top to bottom
                gsap.to(overlay2Ref.current, {
                  duration: 1,
                  yPercent: 100, // Move from top to bottom
                  ease: 'power3.inOut',
                  onComplete: revealPage // Reveal the page after the second overlay animation
                });
              }
            });
          }
        });
      }
    });
  }, []);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="relative">
      {/* Overlay covering the page */}
      <div ref={overlay1Ref} className="fixed w-full h-full z-50 left-0 top-0 bg-black" />
      <div ref={overlay2Ref} className="fixed w-full h-full z-50 left-0 top-0 bg-black" />
      <div ref={welcomeRef} className="fixed w-full h-full z-50 left-0 top-0 flex items-center justify-center bg-white opacity-0">
        <h1 className="text-xl sm:text-9xl font-bold font">Welcome</h1>
      </div>

      <div className="hidden relative justify-around mx-32 py-6 sm:flex flex-col">
        <LogoLink />
        <DesktopNavLinks />
      </div>
      <div className="sm:hidden relative flex flex-row my-4">
        <LogoLink />
        <MobileMenuButton onClick={handleDrawerToggle} />
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </div>
    </div>
  );
}
