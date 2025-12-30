export default function LetterAvatar({ name }: { name: string }) {
  const letter = name.charAt(0).toUpperCase();

  return (
    <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white font-semibold">
      {letter}
    </div>
  );
}
