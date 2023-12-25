/**
 * Allows to constraint max and min value of target.
 *
 * @param target
 * @param minValue
 * @param maxValue
 *
 * @example
 * const num = constraintNumber(-1, { minValue: 0, maxValue: 3 }); // 0
 * const num = constraintNumber(4, { minValue: 0, maxValue: 3 }); // 3
 */
export const constraintNumber = (
  target: number,
  { minValue, maxValue }: { minValue?: number; maxValue?: number }
): number => {
  let result: number = target;

  if (minValue !== undefined && target <= minValue) {
    result = minValue;
  }

  if (maxValue !== undefined && target >= maxValue) {
    result = maxValue;
  }

  return result;
};
