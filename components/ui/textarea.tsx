import { cn } from "@/lib/utils";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function Textarea({
  label,
  error,
  id,
  className,
  ...props
}: TextareaProps) {
  const inputId = id ?? props.name;

  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="block text-sm font-medium">
        {label}
      </label>
      <textarea
        id={inputId}
        className={cn(
          "min-h-32 w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20",
          error ? "border-red-400/50" : "border-white/10",
          className,
        )}
        {...props}
      />
      {error ? <p className="text-sm text-red-400">{error}</p> : null}
    </div>
  );
}
