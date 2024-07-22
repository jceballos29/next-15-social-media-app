import SearchField from "@/components/search-filed";
import UserButton from "@/components/user-button";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
      <nav className="max-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-3">
        <Link href="/" className="text-2xl font-bold text-primary">
          bugbook
        </Link>
        <SearchField />
        <UserButton />
      </nav>
    </header>
  );
}
