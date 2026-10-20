import { useState } from "react";
import {
  MagnifyingGlass,
  ArrowUpRight,
  UserCircle,
} from "@phosphor-icons/react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-3">
        // Nav left content 
        <div className="flex min-w-0 flex-1 items-center gap-4">
        // Name card 
          <a href="#home" className="flex shrink-0 items-center gap-2">
            <UserCircle size={34} weight="regular" />

            <div className="hidden sm:block">
              <p className="text-sm font-semibold leading-tight">
                Mark Castillo
              </p>
              <p className="text-xs text-muted-foreground">
                Software Developer
              </p>
            </div>
          </a>

        // Search bar 
          {/* <form onSubmit={handleSearch} className="w-full max-w-xs">
            <div className="relative">
              <MagnifyingGlass
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />

              <Input
                type="search"
                placeholder="Search portfolio..."
                aria-label="Search portfolio"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="pl-9"
              />
            </div>
          </form> */}
        </div>

        // Nav right content 
        <div className="flex shrink-0 items-center gap-5">

        // Resume 
          <Button asChild size="sm">
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
              <ArrowUpRight size={16} />
            </a>
          </Button>
        </div>
      </nav>
    </header>
    )
}

/*

import { useState } from "react";
import {
  MagnifyingGlass,
  ArrowUpRight,
  UserCircle,
} from "@phosphor-icons/react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    event.preventDefault();

    const query = search.trim().toLowerCase();
    if (!query) return;

    const sections = document.querySelectorAll("main section");

    const match = [...sections].find((section) =>
      section.textContent.toLowerCase().includes(query)
    );

    match?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-3">
        // {/* Nav left content 
        <div className="flex min-w-0 flex-1 items-center gap-4">
        //   {/* Name card 
          <a href="#home" className="flex shrink-0 items-center gap-2">
            <UserCircle size={34} weight="regular" />

            <div className="hidden sm:block">
              <p className="text-sm font-semibold leading-tight">
                Mark Castillo
              </p>
              <p className="text-xs text-muted-foreground">
                Software Developer
              </p>
            </div>
          </a>

        //   {/* Search bar 
          <form onSubmit={handleSearch} className="w-full max-w-xs">
            <div className="relative">
              <MagnifyingGlass
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />

              <Input
                type="search"
                placeholder="Search portfolio..."
                aria-label="Search portfolio"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="pl-9"
              />
            </div>
          </form>
        </div>

        // {/* Nav right content 
        <div className="flex shrink-0 items-center gap-5">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}

        //   {/* Resume 
          <Button asChild size="sm">
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
              <ArrowUpRight size={16} />
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
};


name

search bar functions like ctrl F

about

skills

projects
-

contact

resume

*/
