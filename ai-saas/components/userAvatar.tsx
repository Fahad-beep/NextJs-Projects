import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
const UserAvatar = () => {
  const { user } = useUser();

  return (
    <Avatar className="bg-muted-foreground-700 w-10 h-10">
      <AvatarImage src={user?.imageUrl} />
      <AvatarFallback>
        {user?.firstName?.charAt(0)}
        {user?.lastName?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
