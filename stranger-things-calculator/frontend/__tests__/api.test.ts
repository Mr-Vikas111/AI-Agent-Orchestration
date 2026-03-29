import { calculate } from '@/lib/api';

global.fetch = jest.fn();

describe('calculate', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('sends correct POST request and returns result', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ result: 10, operation: 'add', a: 4, b: 6 }),
    });

    const result = await calculate({ operation: 'add', a: 4, b: 6 });
    expect(result.result).toBe(10);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('/api/calculate'),
      expect.objectContaining({ method: 'POST' })
    );
  });

  it('throws error when response is not ok', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ detail: 'Division by zero' }),
    });

    await expect(calculate({ operation: 'divide', a: 5, b: 0 })).rejects.toThrow('Division by zero');
  });

  it('throws fallback error when detail is missing', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({}),
    });

    await expect(calculate({ operation: 'divide', a: 1, b: 0 })).rejects.toThrow(
      'Calculation failed in the Upside Down'
    );
  });
});
