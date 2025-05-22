
import React, { useEffect, useState } from "react";
import { Star, Youtube, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

// YouTube-focused testimonial data
const testimonials = [
  {
    id: 1,
    name: "Emily Andersen",
    handle: "@EmilyCreates",
    avatar: "/lovable-uploads/b0b8aa2e-b655-45bc-9f64-bbcfa0a039df.png",
    rating: 5,
    shortReview: "My channel's growth exploded after implementing your SEO strategies! From 2K to 40K subscribers in just 3 months.",
    fullReview: "My channel's growth exploded after implementing your SEO strategies! From 2K to 40K subscribers in just 3 months. Your keyword research and title optimization made all the difference. My videos now rank on the first page for competitive terms, and my CTR increased from 3.2% to 8.7%. I've secured two brand deals since working with you. I cannot recommend your services enough!",
    metrics: {
      subscribers: "+38K",
      views: "1.2M",
      ctr: "8.7%"
    },
    channelType: "Lifestyle & DIY"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    handle: "@TechWithMarcus",
    avatar: "/lovable-uploads/b0b8aa2e-b655-45bc-9f64-bbcfa0a039df.png",
    rating: 5,
    shortReview: "The thumbnail redesign completely transformed my channel. Click-through rate jumped from 4.1% to 9.5%!",
    fullReview: "The thumbnail redesign completely transformed my channel. Click-through rate jumped from 4.1% to 9.5%! I was struggling to stand out in the tech niche, but your vibrant designs and strategic text placement made my content impossible to ignore. Analytics show that new viewers are subscribing at twice the previous rate. The investment paid for itself within the first week with increased ad revenue.",
    metrics: {
      ctr: "9.5%",
      newSubs: "+15K",
      revenue: "+127%"
    },
    channelType: "Tech Reviews"
  },
  {
    id: 3,
    name: "Sophia Williams",
    handle: "@SophiaCooks",
    avatar: "/lovable-uploads/b0b8aa2e-b655-45bc-9f64-bbcfa0a039df.png",
    rating: 5,
    shortReview: "Your video editing services saved me 20+ hours each week. Now I can focus on recipe development while my content quality improved!",
    fullReview: "Your video editing services saved me 20+ hours each week. Now I can focus on recipe development while my content quality improved! The smooth transitions, color grading, and sound design are all professional-grade. My audience retention increased from 3:24 to 6:17 per video, and comments about production quality have been overwhelmingly positive. My cooking channel has never looked better!",
    metrics: {
      retention: "6:17",
      engagement: "+78%",
      timeSaved: "20hrs/week"
    },
    channelType: "Cooking"
  },
  {
    id: 4,
    name: "Alex Rivera",
    handle: "@GamingWithAlex",
    avatar: "/lovable-uploads/b0b8aa2e-b655-45bc-9f64-bbcfa0a039df.png",
    rating: 5,
    shortReview: "Going viral was just a dream until I hired you. Your social media strategy got my gaming clips on TikTok and Instagram with millions of views!",
    fullReview: "Going viral was just a dream until I hired you. Your social media strategy got my gaming clips on TikTok and Instagram with millions of views! The cross-platform approach helped me grow on YouTube from 5K to 75K subscribers in just two months. The edited shorts and perfectly timed posts created a snowball effect of growth. Now I'm getting sponsorship offers weekly. Best investment for my channel ever!",
    metrics: {
      growth: "+70K subs",
      viral: "12M+ views",
      sponsors: "6 deals"
    },
    channelType: "Gaming"
  },
];

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-4 w-4 ${i < rating ? "fill-red-500 text-red-500" : "text-gray-300"}`} 
        />
      ))}
    </div>
  );
};

// Metrics Badge component
const MetricBadge = ({ label, value }: { label: string, value: string }) => (
  <div className="bg-black/30 backdrop-blur-sm p-2 rounded text-center min-w-[80px]">
    <p className="text-xs text-gray-300 mb-1">{label}</p>
    <p className="text-sm font-bold text-white">{value}</p>
  </div>
);

const Testimonials = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    // This ensures we're rendering on the client side
    setIsClient(true);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-black text-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Creator Success Stories</h2>
          <div className="h-1 w-20 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-300">
            See how our YouTube services have transformed channels and helped creators achieve remarkable growth in views, subscribers, and revenue.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Collapsible key={testimonial.id} className="animate-fade-in">
                <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-red-500/30 transition-all duration-300">
                  <CardHeader className="pb-0">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-red-500">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-red-500/20 text-red-200">
                          {testimonial.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-bold text-white">{testimonial.name}</div>
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <Youtube className="h-3 w-3 text-red-500" /> {testimonial.handle}
                        </div>
                      </div>
                      <div className="ml-auto">
                        <Badge variant="outline" className="bg-zinc-800 text-gray-300 border-zinc-700">
                          {testimonial.channelType}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-4">
                    <div className="mb-4">
                      <StarRating rating={testimonial.rating} />
                    </div>
                    
                    <p className="text-gray-300 mb-4">"{testimonial.shortReview}"</p>
                    
                    <CollapsibleContent className="text-gray-400 text-sm border-t border-zinc-800 pt-3 mt-3 animate-fade-in">
                      <p>{testimonial.fullReview}</p>
                    </CollapsibleContent>
                    
                    <div className="flex flex-wrap gap-3 mt-4">
                      {Object.entries(testimonial.metrics).map(([key, value]) => (
                        <MetricBadge 
                          key={key} 
                          label={key.charAt(0).toUpperCase() + key.slice(1)} 
                          value={value} 
                        />
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="border-t border-zinc-800 pt-3">
                    <CollapsibleTrigger asChild className="w-full">
                      <Button variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-500/10 w-full justify-between">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                  </CardFooter>
                </Card>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
