interface DisplayProps {
  expression: string;
  result: string;
  error: string;
}

export default function Display({ expression, result, error }: DisplayProps) {
  return (
    <div className="bg-slate-950 border border-blue-900 rounded p-4 mb-4 min-h-[90px] arc-blue">
      <div className="text-slate-500 text-sm text-right uppercase tracking-widest min-h-[20px]">
        {expression}
      </div>
      {error ? (
        <div className="text-red-400 text-right text-base mt-1 uppercase tracking-wide">
          {error}
        </div>
      ) : (
        <div className="text-amber-400 text-right text-3xl font-bold mt-1 tracking-widest">
          {result || '0'}
        </div>
      )}
    </div>
  );
}
