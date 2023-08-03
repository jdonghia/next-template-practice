interface Props {
  text: string;
  color?: string;
}

export function CustomTitle({ text, color = "text-white" }: Props) {
  return (
    <p className={`${color} flex items-center gap-2 font-semibold`}>
      <span className="block h-3 w-3 bg-custom-blue"></span>
      {text}
    </p>
  );
}
