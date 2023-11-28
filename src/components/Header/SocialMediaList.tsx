import { ElementType } from "react";

interface Props {
  icons: ElementType[];
}

export default function SocialMediaList({ icons }: Props) {
  return (
    <ul className="flex items-center gap-3">
      {icons.map((Icon) => (
        <li key={Icon as string}>
          <Icon className="text-xl" />
        </li>
      ))}
    </ul>
  );
}
