import { cn } from "@/lib/utils";

interface MinCardProps {
  title: string;
  text: string;

  variant?: "default" | "fill";
}

export function MinCard({ title, text, variant = "default" }: MinCardProps) {
  return (
    <div
      className={cn(
        "border-primary text-dark w-fit rounded-md border px-4 py-2.5 duration-200 hover:scale-110",
        variant === "fill" && "bg-secondary",
      )}
    >
      <div className="text-lg font-bold">{title}</div>
      <p>{text}</p>
    </div>
  );
}
