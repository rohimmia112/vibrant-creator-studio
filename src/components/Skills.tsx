
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Skill = {
  name: string;
  percentage: number;
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    { name: "YouTube SEO", percentage: 95 },
    { name: "Thumbnail Design", percentage: 90 },
    { name: "Video Editing", percentage: 85 },
    { name: "Social Media Management", percentage: 92 },
    { name: "Content Strategy", percentage: 88 },
    { name: "Channel Growth", percentage: 93 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-gray-50"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Expertise</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Years of experience have honed my skills in these areas, allowing me to deliver
            top-quality results for all your content creation needs.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <div className="flex items-center">
                  <div className="flex space-x-0.5 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className={cn(
                          "w-1 h-4 rounded-full",
                          i < Math.ceil(skill.percentage / 20) 
                            ? "bg-purple-500" 
                            : "bg-gray-200"
                        )}
                      ></div>
                    ))}
                  </div>
                  <span className="font-bold text-sm">
                    {isVisible ? skill.percentage : 0}%
                  </span>
                </div>
              </div>
              <div className="progress-bar">
                <div 
                  className={cn(
                    "progress-bar-fill",
                    isVisible && "animate-progress-fill"
                  )}
                  style={isVisible ? {"--progress-width": `${skill.percentage}%`} as React.CSSProperties : undefined}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Volume slider styled component */}
        <div className="max-w-xl mx-auto mt-20">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-lg font-medium mb-4 text-center">Adjust Your Preferred Service Level</h4>
            <div className="space-y-6">
              {["YouTube SEO", "Thumbnail Quality", "Video Editing"].map((service, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium text-gray-600">{service}</label>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3].map((bar) => (
                        <div 
                          key={bar} 
                          className="h-3 w-0.5 bg-purple-400 rounded-full animate-volume-wave"
                          style={{ animationDelay: `${(index * 0.3) + (bar * 0.1)}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <input 
                    type="range" 
                    className="volume-slider w-full" 
                    min="1" 
                    max="10"
                    defaultValue={7 + index} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
