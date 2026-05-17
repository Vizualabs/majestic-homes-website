export default function Button({ children, href = "#", variant = "primary" }) {
  const baseClass =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition";
  const variantClass =
    variant === "outline"
      ? "border border-zinc-600 text-zinc-200 hover:border-zinc-300 hover:text-white"
      : "bg-white text-zinc-950 hover:bg-zinc-200";

  return (
    <a href={href} className={`${baseClass} ${variantClass}`}>
      {children}
    </a>
  );
}
