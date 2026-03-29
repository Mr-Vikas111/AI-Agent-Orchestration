'use client';

import { useState } from 'react';
import { calculate, Operation } from '@/lib/api';
import Button from './Button';
import Display from './Display';

const opSymbols: Record<Operation, string> = {
  add: '+',
  subtract: '−',
  multiply: '×',
  divide: '÷',
  modulo: '%',
  power: '^',
};

export default function Calculator() {
  const [a, setA] = useState('0');
  const [b, setB] = useState('');
  const [operation, setOperation] = useState<Operation | null>(null);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [expression, setExpression] = useState('');
  const [waitingForB, setWaitingForB] = useState(false);

  const currentValue = waitingForB ? b : a;

  function handleNumber(digit: string) {
    setError('');
    setResult('');
    if (waitingForB) {
      if (digit === '.' && b.includes('.')) return;
      setB(prev => prev === '' || prev === '0' ? (digit === '.' ? '0.' : digit) : prev + digit);
    } else {
      if (digit === '.' && a.includes('.')) return;
      setA(prev => prev === '0' ? (digit === '.' ? '0.' : digit) : prev + digit);
    }
  }

  function handleOperation(op: Operation) {
    setError('');
    if (result) {
      setA(result);
      setResult('');
    }
    setOperation(op);
    setWaitingForB(true);
    setB('');
    const aVal = result || a;
    setExpression(`${aVal} ${opSymbols[op]}`);
  }

  function handleClear() {
    setA('0');
    setB('');
    setOperation(null);
    setResult('');
    setError('');
    setExpression('');
    setWaitingForB(false);
  }

  function handleToggleSign() {
    setError('');
    if (waitingForB) {
      setB(prev => prev.startsWith('-') ? prev.slice(1) : prev ? '-' + prev : prev);
    } else {
      setA(prev => prev === '0' ? '0' : prev.startsWith('-') ? prev.slice(1) : '-' + prev);
    }
  }

  async function handleEquals() {
    if (!operation || b === '') return;
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const expr = `${a} ${opSymbols[operation]} ${b}`;
    setExpression(expr);
    try {
      const res = await calculate({ operation, a: aNum, b: bNum });
      setResult(String(res.result));
      setWaitingForB(false);
      setOperation(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error in the Upside Down');
      setResult('');
    }
  }

  const displayResult = result || (waitingForB ? b : a);

  return (
    <div className="w-72 bg-zinc-950 border border-red-900 rounded-lg p-4 shadow-2xl">
      <Display expression={expression} result={displayResult} error={error} />
      <div className="grid grid-cols-4 gap-2">
        <Button label="C" onClick={handleClear} variant="action" />
        <Button label="±" onClick={handleToggleSign} variant="action" />
        <Button label="%" onClick={() => handleOperation('modulo')} variant="operator" />
        <Button label="÷" onClick={() => handleOperation('divide')} variant="operator" />

        <Button label="7" onClick={() => handleNumber('7')} variant="number" />
        <Button label="8" onClick={() => handleNumber('8')} variant="number" />
        <Button label="9" onClick={() => handleNumber('9')} variant="number" />
        <Button label="×" onClick={() => handleOperation('multiply')} variant="operator" />

        <Button label="4" onClick={() => handleNumber('4')} variant="number" />
        <Button label="5" onClick={() => handleNumber('5')} variant="number" />
        <Button label="6" onClick={() => handleNumber('6')} variant="number" />
        <Button label="−" onClick={() => handleOperation('subtract')} variant="operator" />

        <Button label="1" onClick={() => handleNumber('1')} variant="number" />
        <Button label="2" onClick={() => handleNumber('2')} variant="number" />
        <Button label="3" onClick={() => handleNumber('3')} variant="number" />
        <Button label="+" onClick={() => handleOperation('add')} variant="operator" />

        <Button label="^" onClick={() => handleOperation('power')} variant="operator" />
        <Button label="0" onClick={() => handleNumber('0')} variant="number" />
        <Button label="." onClick={() => handleNumber('.')} variant="number" />
        <Button label="=" onClick={handleEquals} variant="equals" />
      </div>
    </div>
  );
}
