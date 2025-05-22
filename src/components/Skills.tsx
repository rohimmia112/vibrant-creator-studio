
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ChartContainer } from "@/components/ui/chart";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type Skill = {
  name: string;
  percentage: number;
};

// Result Card Data
const resultCards = [
  {
    tag: "GamerPro",
    tagColor: "bg-purple-100 text-purple-800",
    title: "200% Subscriber Growth",
    period: "3 Months",
    metrics: [
      { label: "Views", value: "1.2M" },
      { label: "Subscribers", value: "+14K" },
      { label: "Growth", value: "+200%" },
    ],
    chartColor: "#9333ea",
    chartData: [
      { month: "Jan", value: 2500 },
      { month: "Feb", value: 3200 },
      { month: "Mar", value: 3800 },
      { month: "Apr", value: 5200 },
      { month: "May", value: 4800 },
      { month: "Jun", value: 6000 },
    ]
  },
  {
    tag: "LifeStyler",
    tagColor: "bg-red-100 text-red-800",
    title: "CTR Increase to 9.5%",
    period: "2 Months",
    metrics: [
      { label: "Thumbnails", value: "50+" },
      { label: "CTR", value: "9.5%" },
      { label: "Improvement", value: "+137%" },
    ],
    chartColor: "#e11d48",
    chartData: [
      { month: "Jan", value: 120 },
      { month: "Feb", value: 180 },
      { month: "Mar", value: 240 },
      { month: "Apr", value: 320 },
      { month: "May", value: 380 },
      { month: "Jun", value: 450 },
    ]
  },
  {
    tag: "CookMaster",
    tagColor: "bg-amber-100 text-amber-800",
    title: "85% Watch Time Increase",
    period: "4 Months",
    metrics: [
      { label: "Retention", value: "6:17" },
      { label: "Engagement", value: "+78%" },
      { label: "Revenue", value: "+92%" },
    ],
    chartColor: "#f59e0b",
    chartData: [
      { month: "Jan", value: 210 },
      { month: "Feb", value: 290 },
      { month: "Mar", value: 350 },
      { month: "Apr", value: 410 },
      { month: "May", value: 490 },
      { month: "Jun", value: 580 },
    ]
  },
  {
    tag: "TechReviewer",
    tagColor: "bg-blue-100 text-blue-800",
    title: "10K New Subscribers",
    period: "2 Months",
    metrics: [
      { label: "Videos", value: "12" },
      { label: "Avg. Views", value: "85K" },
      { label: "Revenue", value: "+175%" },
    ],
    chartColor: "#3b82f6",
    chartData: [
      { month: "Jan", value: 150 },
      { month: "Feb", value: 220 },
      { month: "Mar", value: 320 },
      { month: "Apr", value: 380 },
      { month: "May", value: 490 },
      { month: "Jun", value: 620 },
    ]
  }
];

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
      className="py-24 bg-black text-white"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Expertise</h2>
          <div className="h-1 w-20 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-300">
            Years of experience have honed my skills in these areas, allowing me to deliver
            top-quality results for all your content creation needs.
          </p>
        </div>

        {/* Results Carousel */}
        <div className="max-w-5xl mx-auto mb-20">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {resultCards.map((card, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="border border-zinc-800 bg-zinc-900/80 backdrop-blur shadow-lg h-full">
                    <CardContent className="p-6">
                      <div className="mb-4 flex justify-between items-center">
                        <Badge variant="outline" className={cn("font-medium", card.tagColor)}>
                          {card.tag}
                        </Badge>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-1">{card.title}</h3>
                      <p className="text-sm text-gray-400 mb-4">{card.period}</p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {card.metrics.map((metric, i) => (
                          <div key={i} className="text-center">
                            <p className="text-sm text-gray-400 mb-1">{metric.label}</p>
                            <p className="text-lg font-bold" style={{ color: card.chartColor }}>{metric.value}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="h-40 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={card.chartData}>
                            <XAxis 
                              dataKey="month" 
                              tick={{ fontSize: 10, fill: '#6b7280' }}
                              axisLine={false}
                              tickLine={false}
                            />
                            <YAxis hide />
                            <Tooltip 
                              content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                  return (
                                    <div className="bg-zinc-950 border border-zinc-800 p-2 rounded shadow-lg">
                                      <p className="text-xs">{`${payload[0].payload.month}: ${payload[0].value}`}</p>
                                    </div>
                                  );
                                }
                                return null;
                              }}
                            />
                            <Line 
                              type="monotone" 
                              dataKey="value" 
                              stroke={card.chartColor}
                              strokeWidth={2}
                              dot={{ r: 3, strokeWidth: 1, fill: card.chartColor }}
                              activeDot={{ r: 5, stroke: card.chartColor }}
                              fillOpacity={0.2}
                              fill={`url(#color${index})`}
                            />
                            <defs>
                              <linearGradient id={`color${index}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={card.chartColor} stopOpacity={0.4}/>
                                <stop offset="100%" stopColor={card.chartColor} stopOpacity={0.05}/>
                              </linearGradient>
                            </defs>
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-zinc-800 hover:bg-zinc-700 border-zinc-700" />
              <CarouselNext className="relative inset-0 translate-y-0 bg-zinc-800 hover:bg-zinc-700 border-zinc-700" />
            </div>
          </Carousel>
        </div>

        {/* Skills List */}
        <div className="max-w-3xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <div className="flex items-center">
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
      </div>
    </section>
  );
};

export default Skills;
