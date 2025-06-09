export interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

export const skips: Skip[] = [
    { id: 17933, size: 4, hire_period_days: 7, price_before_vat: 227, vat: 20, allowed_on_road: true, allows_heavy_waste: true },
    { id: 17934, size: 6, hire_period_days: 14, price_before_vat: 300, vat: 20, allowed_on_road: true, allows_heavy_waste: true },
    { id: 17935, size: 8, hire_period_days: 7, price_before_vat: 325, vat: 20, allowed_on_road: true, allows_heavy_waste: true },
    { id: 17936, size: 10, hire_period_days: 7, price_before_vat: 350, vat: 20, allowed_on_road: false, allows_heavy_waste: false },
    { id: 17937, size: 12, hire_period_days: 7, price_before_vat: 375, vat: 20, allowed_on_road: false, allows_heavy_waste: false },
    { id: 17938, size: 14, hire_period_days: 7, price_before_vat: 400, vat: 20, allowed_on_road: false, allows_heavy_waste: false },
    { id: 17939, size: 16, hire_period_days: 7, price_before_vat: 425, vat: 20, allowed_on_road: false, allows_heavy_waste: false },
    { id: 15124, size: 20, hire_period_days: 14, price_before_vat: 992, vat: 20, allowed_on_road: false, allows_heavy_waste: true },
    { id: 15125, size: 40, hire_period_days: 14, price_before_vat: 992, vat: 20, allowed_on_road: false, allows_heavy_waste: false },
  ];

 