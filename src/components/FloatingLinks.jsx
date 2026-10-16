
import {
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";

// import { contactData } from "@/src/db/main"

const links = [
  {
    label: "GitHub",
    href: "https://github.com/MLaurenceMC",
    Icon: GithubLogo,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/castillo-mlaurence",
    Icon: LinkedinLogo,
  },
  {
    label: "Email",
    href: "mailto:castillo.mlaurence.jobs@gmail.com",
    Icon: EnvelopeSimple,
  },
];

export const FloatingLinks = () => {
  return (
    <nav
      aria-label="Quick links"
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
    >
      {links.map(({ label, href, Icon }) => (
        <Button
          key={label}
          variant="secondary"
          size="icon"
          className="rounded-full shadow-lg"
          asChild
        >
          <a
            href={href}
            aria-label={label}
            title={label}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
          >
            <Icon size={22} weight="regular" />
          </a>
        </Button>
      ))}
    </nav>
  );
}
