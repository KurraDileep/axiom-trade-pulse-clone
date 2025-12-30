type Props = {
  name: string;
};

export default function LetterAvatar({ name }: Props) {
  return (
    <div
      className="
        w-10 h-10
        rounded-lg
        flex items-center justify-center
        font-semibold
        text-sm
        bg-neutral-900
        border border-neutral-700
        text-white
      "
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}
