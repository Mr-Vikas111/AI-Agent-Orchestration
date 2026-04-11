interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'number' | 'operator' | 'action' | 'equals';
  className?: string;
}

const variantStyles: Record<string, string> = {
  number:   'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700',
  operator: 'bg-zinc-950 hover:bg-zinc-800 text-yellow-400 border border-zinc-700',
  action:   'bg-zinc-800 hover:bg-zinc-700 text-zinc-400 border border-zinc-600',
  equals:   'bg-yellow-500 hover:bg-yellow-400 text-black border border-yellow-300 arc-glow',
};

export default function Button({ label, onClick, variant = 'number', className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        ${variantStyles[variant]}
        rounded p-3 text-lg font-bold uppercase tracking-widest
        transition-all duration-150 active:scale-95
        ${className}
      `}
    >
      {label}
    </button>
  );
}
