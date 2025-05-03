import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const BotAvatar = () => {
  return (
    <Avatar className="w-10 h-12 bg-amber-100 border-none">
      <AvatarImage src="/logo.png" className="object-cover border-none" />
    </Avatar>
  );
};

export default BotAvatar;
