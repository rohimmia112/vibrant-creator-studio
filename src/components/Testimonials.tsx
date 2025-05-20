
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChartLine, ChartBar } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area,
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  ResponsiveContainer,
  CartesianGrid,
  Tooltip
} from "recharts";

// Sample data for the charts
const viewsData = [
  { month: "Jan", views: 2800 },
  { month: "Feb", views: 3200 },
  { month: "Mar", views: 3600 },
  { month: "Apr", views: 5400 },
  { month: "May", views: 4800 },
  { month: "Jun", views: 6200 },
];

const subscribersData = [
  { month: "Jan", subscribers: 120 },
  { month: "Feb", subscribers: 160 },
  { month: "Mar", subscribers: 220 },
  { month: "Apr", subscribers: 340 },
  { month: "May", subscribers: 380 },
  { month: "Jun", subscribers: 460 },
];

const revenueData = [
  { month: "Jan", revenue: 1200 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2400 },
  { month: "Apr", revenue: 3000 },
  { month: "May", revenue: 4600 },
  { month: "Jun", revenue: 5800 },
];

const testimonialItems = [
  {
    id: 1,
    client: "GamerPro",
    title: "200% Subscriber Growth",
    metrics: [
      { label: "Views", value: "1.2M" },
      { label: "Subscribers", value: "+14K" },
      { label: "Growth", value: "+200%" },
    ],
    duration: "3 Months",
    chartData: viewsData,
    chartType: "area",
    color: "#8B5CF6"
  },
  {
    id: 2,
    client: "LifeStyler",
    title: "CTR Increase to 9.5%",
    metrics: [
      { label: "Thumbnails", value: "50+" },
      { label: "CTR", value: "9.5%" },
      { label: "Improvement", value: "+137%" },
    ],
    duration: "2 Months",
    chartData: subscribersData,
    chartType: "line",
    color: "#EC4899"
  },
  {
    id: 3,
    client: "TechReviewer",
    title: "40% Production Time Reduction",
    metrics: [
      { label: "Videos", value: "24" },
      { label: "Time Saved", value: "72hrs" },
      { label: "ROI", value: "+85%" },
    ],
    duration: "6 Months",
    chartData: revenueData,
    chartType: "bar",
    color: "#3B82F6"
  },
  {
    id: 4,
    client: "ChefMaster",
    title: "10K Subscribers in First Month",
    metrics: [
      { label: "Subscribers", value: "10K+" },
      { label: "Engagement", value: "12%" },
      { label: "Retention", value: "5:42" },
    ],
    duration: "1 Month",
    chartData: subscribersData,
    chartType: "area",
    color: "#10B981"
  },
];

const ChartComponent = ({ data, type, color }: { data: any[], type: string, color: string }) => {
  if (type === "line") {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id={`colorGradient-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={color} stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 10 }} stroke="#9CA3AF" />
          <YAxis tick={{ fontSize: 10 }} stroke="#9CA3AF" />
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md text-xs">
                    <p>{`${payload[0].name}: ${payload[0].value}`}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Line 
            type="monotone" 
            dataKey={Object.keys(data[0])[1]} 
            stroke={color} 
            strokeWidth={2} 
            dot={{ r: 3 }} 
            animationDuration={1500}
            animationBegin={300}
            animationEasing="ease-out"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
  
  if (type === "area") {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id={`colorGradient-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={color} stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 10 }} stroke="#9CA3AF" />
          <YAxis tick={{ fontSize: 10 }} stroke="#9CA3AF" />
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md text-xs">
                    <p>{`${payload[0].name}: ${payload[0].value}`}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Area 
            type="monotone" 
            dataKey={Object.keys(data[0])[1]} 
            stroke={color} 
            strokeWidth={2}
            fillOpacity={1} 
            fill={`url(#colorGradient-${color.replace('#', '')})`} 
            animationDuration={1500}
            animationBegin={300}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

  if (type === "bar") {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id={`colorGradient-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={color} stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 10 }} stroke="#9CA3AF" />
          <YAxis tick={{ fontSize: 10 }} stroke="#9CA3AF" />
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md text-xs">
                    <p>{`${payload[0].name}: ${payload[0].value}`}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar 
            dataKey={Object.keys(data[0])[1]} 
            fill={`url(#colorGradient-${color.replace('#', '')})`} 
            animationDuration={1500}
            animationBegin={300}
            animationEasing="ease-out"
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
  
  return null;
};

const Testimonials = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    // This ensures we're rendering on the client side
    setIsClient(true);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Real results from real clients. See how my services have helped channels grow,
            increase engagement, and boost revenue.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {isClient && (
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonialItems.map((item) => (
                  <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                    <Card className="overflow-hidden border border-purple-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-[360px] animate-scale-in">
                      <CardContent className="p-6">
                        <div className="flex flex-col h-full">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 mb-2">
                                {item.client}
                              </Badge>
                              <h3 className="text-lg font-bold">{item.title}</h3>
                              <p className="text-sm text-gray-500">{item.duration}</p>
                            </div>
                            <div className="flex items-center">
                              {item.chartType === 'line' && <ChartLine size={20} className="text-purple-500" />}
                              {item.chartType === 'bar' && <ChartBar size={20} className="text-purple-500" />}
                              {item.chartType === 'area' && <ChartLine size={20} className="text-purple-500" />}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4 mb-6">
                            {item.metrics.map((metric, index) => (
                              <div key={index} className="bg-gray-50 rounded-lg p-3 min-w-[80px] hover-scale">
                                <p className="text-xs text-gray-500 mb-1">{metric.label}</p>
                                <p className="text-lg font-bold text-purple-700">{metric.value}</p>
                              </div>
                            ))}
                          </div>

                          <div className="mt-auto h-[160px]">
                            <ChartComponent 
                              data={item.chartData} 
                              type={item.chartType} 
                              color={item.color} 
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-8">
                <CarouselPrevious className="relative inset-0 translate-y-0 animate-fade-in" />
                <CarouselNext className="relative inset-0 translate-y-0 animate-fade-in" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
