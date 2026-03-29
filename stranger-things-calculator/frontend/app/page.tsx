import Calculator from '@/components/Calculator';

export default function Home() {
  return (
    <div className="scanlines">
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="flicker text-4xl font-bold uppercase tracking-[0.3em] text-red-600 mb-2">
          Stranger Things
        </h1>
        <p className="text-zinc-600 uppercase tracking-widest text-xs mb-8">
          Calculator from the Upside Down
        </p>
        <Calculator />
      </main>
    </div>
  );
}
