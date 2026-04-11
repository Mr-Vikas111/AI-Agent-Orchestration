import Calculator from '@/components/Calculator';

export default function Home() {
  return (
    <div className="scanlines">
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <p className="text-yellow-600 uppercase tracking-[0.5em] text-xs mb-1 font-bold">
          Wayne Enterprises
        </p>
        <h1 className="avengers-title text-5xl font-black uppercase text-yellow-400 mb-1">
          Batman
        </h1>
        <p className="text-purple-400 uppercase tracking-[0.4em] text-xs mb-8">
          Gotham City — Dark Knight Calculator
        </p>
        <Calculator />
      </main>
    </div>
  );
}
