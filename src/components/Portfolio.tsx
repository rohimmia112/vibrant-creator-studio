
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Image } from "lucide-react";

// Project type definition
type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  client: string;
  description: string;
};

const Portfolio = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Gaming Channel Growth",
      category: "youtube-seo",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      client: "GamerPro",
      description: "Optimized channel SEO resulting in 200% subscriber growth and 150% increase in views over 3 months."
    },
    {
      id: 2,
      title: "Lifestyle Vlogger Rebrand",
      category: "thumbnail",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      client: "LifeStyler",
      description: "Complete thumbnail redesign across 50+ videos, increasing CTR from 4% to 9.5%."
    },
    {
      id: 3,
      title: "Tech Review Channel",
      category: "video-editing",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      client: "TechReviewer",
      description: "Created professional intro/outro sequences and editing templates that reduced production time by 40%."
    },
    {
      id: 4,
      title: "Cooking Channel Launch",
      category: "social-media",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      client: "ChefMaster",
      description: "Managed cross-platform promotion campaign resulting in 10k subscribers in first month."
    },
    {
      id: 5,
      title: "Educational Content Optimization",
      category: "youtube-seo",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      client: "LearnDaily",
      description: "Enhanced discoverability with topic cluster strategy, increasing organic traffic by 85%."
    },
    {
      id: 6,
      title: "Music Promotion Campaign",
      category: "thumbnail",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      client: "MusicProducer",
      description: "Created consistent branded thumbnails for music release campaign, increasing average views by 70%."
    },
    {
      id: 7,
      title: "Travel Vlog Series",
      category: "video-editing",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      client: "WorldTraveler",
      description: "Edited 12-part travel series with custom transitions and visual effects, maintaining 75% audience retention."
    },
    {
      id: 8,
      title: "Fitness Brand Expansion",
      category: "social-media",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      client: "FitLife",
      description: "Coordinated content strategy across YouTube, Instagram and TikTok, growing total following by 125k in 6 months."
    }
  ]);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Portfolio</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Browse through my previous projects and see the results I've achieved for clients
            across different industries and content categories.
          </p>
        </div>

        <Tabs defaultValue="all" className="max-w-4xl mx-auto">
          <TabsList className="mb-8 flex justify-center w-full overflow-x-auto">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="youtube-seo">YouTube SEO</TabsTrigger>
            <TabsTrigger value="thumbnail">Thumbnails</TabsTrigger>
            <TabsTrigger value="video-editing">Video Editing</TabsTrigger>
            <TabsTrigger value="social-media">Social Media</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </TabsContent>

          {["youtube-seo", "thumbnail", "video-editing", "social-media"].map((category) => (
            <TabsContent 
              key={category} 
              value={category}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects
                .filter((project) => project.category === category)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
          <div className="relative overflow-hidden pt-[60%]">
            <img
              src={project.image}
              alt={project.title}
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 w-full">
                <div className="inline-flex items-center gap-1 bg-purple-600 px-2 py-1 rounded text-xs text-white font-medium">
                  <Image size={12} />
                  <span>View Details</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-medium text-lg mb-1">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-2">Client: {project.client}</p>
            <p className="text-sm line-clamp-2 text-gray-600 flex-grow">{project.description}</p>
            <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
              <span className={cn(
                "text-xs font-medium px-2 py-1 rounded",
                project.category === "youtube-seo" && "bg-blue-100 text-blue-700",
                project.category === "thumbnail" && "bg-amber-100 text-amber-700",
                project.category === "video-editing" && "bg-green-100 text-green-700", 
                project.category === "social-media" && "bg-purple-100 text-purple-700"
              )}>
                {project.category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              </span>
              <div className="flex space-x-0.5">
                {[1, 2, 3].map((bar) => (
                  <div 
                    key={bar} 
                    className="h-3 w-0.5 bg-purple-300 rounded-full"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>Client: {project.client}</DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <div className="aspect-video overflow-hidden rounded-md">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-medium text-sm text-gray-500 mb-1">Description</h4>
            <p>{project.description}</p>
          </div>
          <div>
            <h4 className="font-medium text-sm text-gray-500 mb-1">Service Category</h4>
            <div className={cn(
              "inline-block text-sm font-medium px-2 py-1 rounded",
              project.category === "youtube-seo" && "bg-blue-100 text-blue-700",
              project.category === "thumbnail" && "bg-amber-100 text-amber-700",
              project.category === "video-editing" && "bg-green-100 text-green-700", 
              project.category === "social-media" && "bg-purple-100 text-purple-700"
            )}>
              {project.category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Portfolio;
