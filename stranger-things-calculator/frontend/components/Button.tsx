interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'number' | 'operator' | 'action' | 'equals';
  className?: string;
}

const variantStyles: Record<string, string> = {
  number: 'bg-zinc-900 hover:bg-zinc-800 text-gray-200 border border-zinc-700',
  operator: 'bg-red-950 hover:bg-red-900 text-red-300 border border-red-800',
  action: 'bg-zinc-800 hover:bg-zinc-700 text-gray-400 border border-zinc-600',
  equals: 'bg-red-800 hover:bg-red-700 text-white border border-red-600 glow-border',
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
