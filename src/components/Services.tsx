
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "YouTube SEO",
      description: "Boost your video visibility with expert keyword research, optimized titles, descriptions, and tags that help your content rank higher.",
      features: [
        "Keyword Research & Analysis",
        "Title & Description Optimization",
        "Tags & Metadata Enhancement",
        "Competitor Research",
        "Analytics & Performance Tracking"
      ],
      icon: "🔍"
    },
    {
      title: "Thumbnail Design",
      description: "Capture more clicks with eye-catching, professional thumbnails that stand out in search results and recommended feeds.",
      features: [
        "Custom Graphic Design",
        "Text Overlay Optimization",
        "Color Psychology Application",
        "Branded Elements Integration",
        "A/B Testing Options"
      ],
      icon: "🎨"
    },
    {
      title: "Video Editing",
      description: "Transform your raw footage into polished, engaging content with professional editing that keeps viewers watching longer.",
      features: [
        "Cut & Transition Editing",
        "Audio Enhancement",
        "Color Grading & Correction",
        "Motion Graphics & Effects",
        "Intro & Outro Creation"
      ],
      icon: "🎬"
    },
    {
      title: "Social Media Management",
      description: "Expand your reach across platforms with coordinated posting, engagement strategies, and cross-promotion of your content.",
      features: [
        "Content Calendar Creation",
        "Cross-Platform Posting",
        "Audience Engagement",
        "Growth Strategy Implementation",
        "Performance Analytics & Reporting"
      ],
      icon: "📱"
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Services</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            I offer comprehensive services to boost your YouTube presence and
            social media impact. Each service can be customized to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-purple-500 h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="mt-2">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-5 h-5 mr-2 text-xs bg-purple-100 text-purple-800 rounded-full flex items-center justify-center font-bold">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-4 border-purple-400 text-purple-700 hover:bg-purple-50">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
