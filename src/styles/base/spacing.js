// @flow
type Spacing = {
  space0: string,
  space1: string,
  space2: string,
  space3: string,
  space4: string,
  space5: string
};
function computeGoldenRatio(spacingFactor, exp) {
  return Math.round((spacingFactor * 1.618 ** exp) / 16);
}

const spacingFactor = 8;

const spacing: Spacing = {
  space0: `${computeGoldenRatio(spacingFactor, 0)}em`, // 8
  space1: `${computeGoldenRatio(spacingFactor, 1)}em`, // 13
  space2: `${computeGoldenRatio(spacingFactor, 2)}em`, // 21
  space3: `${computeGoldenRatio(spacingFactor, 3)}em`, // 34
  space4: `${computeGoldenRatio(spacingFactor, 4)}em`, // 55
  space4L: `${computeGoldenRatio(spacingFactor, 4.75)}em`, // 55
  space5: `${computeGoldenRatio(spacingFactor, 5)}em` // 89
};

export default spacing;
