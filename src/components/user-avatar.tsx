import Image from "next/image";

import avatarPlaceholder from "@/assets/avatar-placeholder.png";
import { cn } from "@/lib/utils";

export interface UserAvatarProps {
  url: string | null | undefined;
  size?: number;
  className?: string;
}

export default function UserAvatar({
  url,
  size = 48,
  className,
}: UserAvatarProps) {
  return (
    <div className={className}>
      <Image
        src={url || avatarPlaceholder}
        alt="User avatar"
        width={size}
        height={size}
        className={cn(
          "h-fot aspect-square flex-none rounded-full bg-secondary object-cover",
          className,
        )}
      />
    </div>
  );
}
