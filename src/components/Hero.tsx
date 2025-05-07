
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
      <div className="absolute inset-0 animated-gradient -z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 md:pr-8 text-white mb-12 md:mb-0">
          <div className="mb-6 animate-fade-in">
            <p className="text-lg mb-2 font-medium opacity-80">Welcome to my digital studio</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professional{" "}
              <span className="text-white relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white/50">
                {typedText}
              </span>
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              I help content creators boost their YouTube presence with expert SEO, stunning thumbnails,
              professional video editing, and complete social media management.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-white text-purple-800 hover:bg-purple-100 font-semibold px-6 py-6 text-lg rounded-md">
              View My Work
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-semibold px-6 py-6 text-lg rounded-md">
              Contact Me
            </Button>
          </div>

          {/* Volume bars animation */}
          <div className="flex items-end h-12 mt-10">
            <div className="text-sm font-medium mr-3 opacity-80">Services</div>
            <div className="flex items-end">
              {[30, 45, 60, 45, 30].map((height, index) => (
                <div 
                  key={index} 
                  className="volume-bar" 
                  style={{ height: `${height}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="bg-purple-700/20 backdrop-blur-lg rounded-lg p-6 md:p-8 shadow-xl animate-bounce-slight">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Content Creation Setup"
                className="rounded-md shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <div className="text-lg font-bold text-purple-800">YouTube Pro Package</div>
                <div className="flex items-center mt-1">
                  <div className="mr-2 text-sm font-medium text-gray-500">SEO + Thumbnail + Editing</div>
                  <div className="flex">
                    <div className="h-2 w-2 rounded-full bg-purple-500 mr-1 opacity-80 animate-pulse"></div>
                    <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></div>
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
