
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-purple-700">
          CreativeYT
        </a>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Menu</span>
          <div className="w-6 flex flex-col gap-1">
            <span
              className={cn(
                "block h-0.5 bg-foreground transition-all",
                menuOpen && "rotate-45 translate-y-1.5"
              )}
            ></span>
            <span
              className={cn(
                "block h-0.5 bg-foreground transition-all",
                menuOpen && "opacity-0"
              )}
            ></span>
            <span
              className={cn(
                "block h-0.5 bg-foreground transition-all",
                menuOpen && "-rotate-45 -translate-y-1.5"
              )}
            ></span>
          </div>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#home" className="font-medium hover:text-purple-600 transition-colors">Home</a>
          <a href="#services" className="font-medium hover:text-purple-600 transition-colors">Services</a>
          <a href="#skills" className="font-medium hover:text-purple-600 transition-colors">Skills</a>
          <a href="#portfolio" className="font-medium hover:text-purple-600 transition-colors">Portfolio</a>
          <a href="#contact" className="font-medium hover:text-purple-600 transition-colors">Contact</a>
          <Button className="bg-purple-600 hover:bg-purple-700">Hire Me</Button>
        </nav>

        {/* Mobile navigation */}
        <div
          className={cn(
            "absolute top-full left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 overflow-hidden",
            menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="container py-4 flex flex-col gap-4">
            <a href="#home" className="font-medium" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#services" className="font-medium" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#skills" className="font-medium" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#portfolio" className="font-medium" onClick={() => setMenuOpen(false)}>Portfolio</a>
            <a href="#contact" className="font-medium" onClick={() => setMenuOpen(false)}>Contact</a>
            <Button className="bg-purple-600 hover:bg-purple-700 w-full">Hire Me</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
