interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'number' | 'operator' | 'action' | 'equals';
  className?: string;
}

const variantStyles: Record<string, string> = {
  number:   'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700',
  operator: 'bg-blue-950 hover:bg-blue-900 text-blue-300 border border-blue-800',
  action:   'bg-slate-800 hover:bg-slate-700 text-slate-400 border border-slate-600',
  equals:   'bg-amber-700 hover:bg-amber-600 text-white border border-amber-500 arc-glow',
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
