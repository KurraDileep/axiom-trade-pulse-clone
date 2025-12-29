type UserAvatarProps = {
  letter: string;
};

export default function UserAvatar({ letter }: UserAvatarProps) {
  return (
    <div
      className="
        w-6 h-6
        rounded-full
        bg-neutral-800
        border border-neutral-700
        flex items-center justify-center
        text-[11px]
        font-semibold
        text-white
      "
      title={letter}
    >
      {letter}
    </div>
  );
}
