"use client";

import { useSession } from "@/app/(main)/session-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import UserAvatar from "./user-avatar";
import Link from "next/link";
import { LogOutIcon, UserIcon } from "lucide-react";
import { logout } from "@/app/(auth)/actions";
import { cn } from "@/lib/utils";

export interface UserButtonProps {
  className?: string;
}

export default function UserButton({ className }: UserButtonProps) {
  const { user } = useSession();
  console.log(user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={cn("flex-none rounded-full", className)}>
          <UserAvatar url={user.avatarUrl} size={40} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Log in as @{user.username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={`/users/${user.username}`}>
          <DropdownMenuItem>
            <UserIcon className="mr-2 size-4" />
            Profile
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            logout();
          }}
        >
          <LogOutIcon className="mr-2 size-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
