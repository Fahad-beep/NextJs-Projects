import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";
interface HeaderProps {
  title: string;
  icon: LucideIcon;
  description: string;
  iconColor?: string;
  bgColor?: string;
}
const Header = ({
  title,
  icon: Icon,
  description,
  iconColor,
  bgColor,
}: HeaderProps) => {
  return (
    <div className="flex items-center p-4 lg:px-8 mb-8 gap-x-3">
      <div className={cn("p-2 w-fit rounded-md", bgColor)}>
        <Icon className={cn("w-10 h-10", iconColor)} />
      </div>
      <div>
        <h2 className="font-bold text-3xl">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default Header;
