import Calculator from '@/components/Calculator';

export default function Home() {
  return (
    <div className="scanlines">
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <p className="text-amber-600 uppercase tracking-[0.5em] text-xs mb-1 font-bold">
          Stark Industries
        </p>
        <h1 className="avengers-title text-5xl font-black uppercase text-amber-400 mb-1">
          Avengers
        </h1>
        <p className="text-blue-500 uppercase tracking-[0.4em] text-xs mb-8">
          Mark XLVII — Combat Calculator
        </p>
        <Calculator />
      </main>
    </div>
  );
}
