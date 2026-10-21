"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

interface CopyEmailButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function CopyEmailButton({
  className,
  variant = "secondary",
  size = "md",
  showLabel = true,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback si navigator.clipboard non disponible
      const textarea = document.createElement("textarea");
      textarea.value = profile.email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const sizeClasses = {
    sm: "h-9 px-3 text-xs gap-1.5",
    md: "h-11 px-4 text-sm gap-2",
    lg: "h-12 px-5 text-base gap-2.5",
  }[size];

  return (
    <button
      type="button"
      onClick={handleCopy}
      title="Copier l'adresse e-mail"
      aria-label="Copier l'adresse e-mail"
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80",
        copied
          ? "border border-emerald-400/50 bg-emerald-500/15 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
          : variant === "primary"
            ? "border border-cyan-400/40 bg-cyan-400/15 text-cyan-200 hover:bg-cyan-400/25"
            : "border border-white/15 bg-white/5 text-foreground hover:bg-white/10 hover:border-white/25",
        sizeClasses,
        className,
      )}
    >
      {copied ? (
        <>
          <Check size={16} className="text-emerald-400" />
          <span>{showLabel ? "Copié !" : ""}</span>
        </>
      ) : (
        <>
          <Copy size={16} className="text-cyan-400" />
          <span>{showLabel ? "Copier l'email" : ""}</span>
        </>
      )}
    </button>
  );
}
