export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export function futureValue(
  fundReturnRate,
  yearsToRetire,
  annualContribNeg,
  currAmtInFundNeg
) {
  if (fundReturnRate === 0) {
    return -(currAmtInFundNeg + yearsToRetire * annualContribNeg);
  }

  const pvif = (1 + fundReturnRate) ** yearsToRetire;

  const fvifa = ((1 + fundReturnRate) ** yearsToRetire - 1) / fundReturnRate;

  return -(currAmtInFundNeg * pvif + annualContribNeg * fvifa);
}
