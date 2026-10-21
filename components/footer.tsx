import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";
import { isHttpUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.title}</p>
        </div>
        <div className="flex items-center gap-3">
          {isHttpUrl(profile.githubUrl) ? (
            <a
              href={profile.githubUrl}
              className="rounded-full border border-white/10 p-2 text-muted transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon size={18} />
            </a>
          ) : null}
          {isHttpUrl(profile.linkedinUrl) ? (
            <a
              href={profile.linkedinUrl}
              className="rounded-full border border-white/10 p-2 text-muted transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={18} />
            </a>
          ) : null}
          {profile.email.includes("@") ? (
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-white/10 p-2 text-muted transition-colors hover:text-foreground"
              aria-label="E-mail"
            >
              <Mail size={18} />
            </a>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
