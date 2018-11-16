function computeGoldenRatio(spacingFactor, exp) {
  return Math.floor(((spacingFactor * 1.618 ** exp) / 16) * 100) / 100;
}

const spacingFactor = 9;

const spacing = {
  space0: `${computeGoldenRatio(spacingFactor, 0)}rem`, // 8
  space1: `${computeGoldenRatio(spacingFactor, 1)}rem`, // 13
  space2: `${computeGoldenRatio(spacingFactor, 2)}rem`, // 21
  space3: `${computeGoldenRatio(spacingFactor, 3)}rem`, // 34
  space4: `${computeGoldenRatio(spacingFactor, 4)}rem`, // 55
  space5: `${computeGoldenRatio(spacingFactor, 5)}rem` // 89
};

export default spacing;
