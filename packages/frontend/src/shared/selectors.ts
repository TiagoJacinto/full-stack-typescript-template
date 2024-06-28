export const selectors = {} as const;

export function toClass(input: string): string {
  if (!input.startsWith('.')) {
    throw new Error('Input string must start with a dot symbol (.)');
  }

  return input.slice(1).replace(/\./g, ' ');
}

export function toId(input: string): string {
  if (!input.startsWith('#')) {
    throw new Error('Input string must start with a hash symbol (#)');
  }

  return input.slice(1);
}
