import { Icon } from "@phosphor-icons/react/dist/lib/types";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

interface ContactButtonProps {
  Icon: Icon;
  link: string;
}

export function ContactButton({ Icon, link }: ContactButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="bg-primary hover:bg-primary/90 text-light flex w-fit gap-3 rounded-md px-3 py-1.5 duration-150 hover:-rotate-3"
    >
      <Icon size={20} />
      <ArrowUpRightIcon size={20} />
    </a>
  );
}
