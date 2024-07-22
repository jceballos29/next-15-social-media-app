"use client";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";


export default function SearchField() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search?q=${query}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center space-x-2"
    >
      <SearchIcon className="size-4" />
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search..."
        className={cn(
          "flex-grow bg-transparent border-none outline-none placeholder-secondary",
          "text-secondary text-sm",
        )}
      />
    </form>
  );
}

