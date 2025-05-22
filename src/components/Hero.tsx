
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const textOptions = ["YouTube SEO", "Thumbnail Design", "Video Editing", "Social Media Management"];
  
  // Typing effect
  useEffect(() => {
    const targetText = textOptions[currentIndex];
    let typingInterval: number | undefined;
    let currentChar = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let pauseTime = 1500;

    const typeText = () => {
      const currentText = targetText.substring(0, currentChar);
      setTypedText(currentText);

      // If deleting text
      if (isDeleting) {
        currentChar--;
        typingSpeed = 50; // Delete faster
      } 
      // If done typing the word
      else if (currentChar === targetText.length) {
        isDeleting = true;
        typingSpeed = pauseTime; // Pause before deleting
      } 
      // If typing text
      else {
        currentChar++;
        typingSpeed = 100 + Math.random() * 50; // Variable typing speed
      }

      // If done deleting
      if (isDeleting && currentChar === 0) {
        isDeleting = false;
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
        typingSpeed = 500; // Pause before typing next word
      }

      typingInterval = window.setTimeout(typeText, typingSpeed);
    };

    typingInterval = window.setTimeout(typeText, typingSpeed);

    return () => {
      clearTimeout(typingInterval);
    };
  }, [currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background animation */}
      <div className="absolute inset-0 bg-black -z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 md:pr-8 text-white mb-12 md:mb-0">
          <div className="mb-6 animate-fade-in">
            <div className="flex items-center gap-2 mb-2">
              <Youtube className="h-5 w-5 text-red-500" />
              <p className="text-lg font-medium text-red-400">Your YouTube Growth Partner</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professional{" "}
              <span className="text-red-500 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-red-500/50">
                {typedText}
              </span>
              <span className="animate-pulse text-red-500">|</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-300">
              I help content creators boost their YouTube presence with expert SEO, stunning thumbnails,
              professional video editing, and complete social media management.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-6 text-lg rounded-md border-0">
              View My Work
            </Button>
            <Button variant="outline" className="bg-transparent border-red-500 text-red-500 hover:bg-red-500/10 font-semibold px-6 py-6 text-lg rounded-md">
              Contact Me
            </Button>
          </div>

          {/* Volume bars animation */}
          <div className="flex items-end h-12 mt-10">
            <div className="text-sm font-medium mr-3 text-red-400">Services</div>
            <div className="flex items-end">
              {[30, 45, 60, 45, 30].map((height, index) => (
                <div 
                  key={index} 
                  className="volume-bar" 
                  style={{ height: `${height}px`, backgroundColor: '#ef4444' }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="bg-zinc-900/80 backdrop-blur-lg rounded-lg p-6 md:p-8 shadow-xl animate-bounce-slight border border-zinc-800">
              <img
                src="/lovable-uploads/b0b8aa2e-b655-45bc-9f64-bbcfa0a039df.png"
                alt="Content Creator Profile"
                className="rounded-md shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-black/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-zinc-800">
                <div className="text-lg font-bold text-red-500">YouTube Pro Package</div>
                <div className="flex items-center mt-1">
                  <div className="mr-2 text-sm font-medium text-gray-300">SEO + Thumbnail + Editing</div>
                  <div className="flex">
                    <div className="h-2 w-2 rounded-full bg-red-500 mr-1 opacity-80 animate-pulse"></div>
                    <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
