/**
 * External link component for the About dialog.
 * Updated: links now point to Manpreet Singh / SyncPad repo.
 *
 * By Dulapah Vibulsanti (https://dulapahv.dev)
 * Updated by Manpreet Singh
 */

import { Send } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  CONTACT_URL,
  GITHUB_URL,
  PORTFOLIO_URL,
  REPO_URL,
} from "@/lib/constants";

interface ExternalLinkProps {
  forceDark?: boolean;
}

const ExternalLink = ({ forceDark = false }: ExternalLinkProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <Button asChild size="sm" variant="outline">
        <a
          aria-label="Visit GitHub profile (opens in new tab)"
          href={PORTFOLIO_URL}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            alt="GitHub logo"
            className="mr-2"
            height={16}
            src={`/images/${resolvedTheme === "light" && !forceDark ? "octocat" : "octocat-white"}.svg`}
            width={16}
          />
          My GitHub
        </a>
      </Button>
      <Button asChild size="sm" variant="outline">
        <a
          aria-label="Visit SyncPad GitHub repository (opens in new tab)"
          href={REPO_URL}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            alt="GitHub logo"
            className="mr-2"
            height={16}
            src={`/images/${resolvedTheme === "light" && !forceDark ? "octocat" : "octocat-white"}.svg`}
            width={16}
          />
          SyncPad Repo
        </a>
      </Button>
      <Button asChild size="sm" variant="outline">
        <a
          aria-label="View GitHub profile (opens in new tab)"
          href={GITHUB_URL}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            alt="GitHub logo"
            className="mr-2"
            height={16}
            src={`/images/${resolvedTheme === "light" && !forceDark ? "octocat" : "octocat-white"}.svg`}
            width={16}
          />
          GitHub Profile
        </a>
      </Button>
      <Button asChild size="sm" variant="outline">
        <a
          aria-label="Contact me (opens in new tab)"
          href={CONTACT_URL}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Send className="mr-2 size-4" />
          Contact Me
        </a>
      </Button>
    </>
  );
};

export { ExternalLink };
