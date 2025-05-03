"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code,
  Image,
  MessageSquare,
  Music,
  Video,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const tools = [
  {
    href: "/conversation",
    icon: MessageSquare,
    label: "Conversation",
    bgColor: "bg-violet-500/10",
    color: "text-violet-500",
  },
  {
    href: "/music",
    icon: Music,
    label: "Music Generation",
    bgColor: "bg-emerald-500/10",
    color: "text-emerald-500",
  },
  {
    href: "/image",
    icon: Image,
    label: "Image Generation",
    bgColor: "bg-pink-700/10",
    color: "text-pink-700",
  },
  {
    href: "/video",
    icon: Video,
    label: "Video Generation",
    bgColor: "bg-orange-700/10",
    color: "text-orange-700",
  },
  {
    href: "/code",
    icon: Code,
    label: "Code Generation",
    bgColor: "bg-green-700/10",
    color: "text-green-700",
  },
];

const DashboardPage = () => {
  const router = useRouter();

  const [isMounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <div className="space-y-4 mb-8">
        <h2 className="font-bold text-2xl md:text-4xl text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            key={tool.href}
            className="p-4 flex flex-row items-center justify-between border-black/5 hover:shadow-md cursor-pointer transition duration-500 w-full"
            onClick={() => router.push(tool.href)}
          >
            <div className="flex  gap-x-4 items-center ">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-bold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
