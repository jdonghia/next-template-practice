import { ElementType } from "react";

interface Props {
  icon: ElementType;
  text: string;
}

export default function Info({ text, icon: Icon }: Props) {
  return (
    <p className="flex gap-2">
      <Icon className="text-xl text-custom-blue" />
      {text}
    </p>
  );
}
