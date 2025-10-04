import { Icon } from "@phosphor-icons/react/dist/lib/types";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

interface ContactButtonProps {
  Icon: Icon;
  link: string;
  disabled: boolean;
}

export function ContactButton({ Icon, link, disabled }: ContactButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      className={cn(
        "bg-primary hover:bg-primary/90 text-light flex w-fit gap-3 rounded-md px-3 py-1.5 duration-150 hover:-rotate-3",
        disabled && "pointer-events-none opacity-50",
      )}
    >
      <Icon size={20} />
      <ArrowUpRightIcon size={20} />
    </a>
  );
}
