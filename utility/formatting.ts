/**
 * Format prices in USD
 */
export function formatPrice(num: number, decimals = 0): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals || 0,
    maximumFractionDigits: decimals || 0,
  });

  return formatter.format(num);
}
