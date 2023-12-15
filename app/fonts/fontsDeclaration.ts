type WithItalic<T extends string> = T | `${T}Italic`;

type FontWeights = Record<
  | WithItalic<'Ultralight'>
  | WithItalic<'Thin'>
  | WithItalic<'Light'>
  | WithItalic<'Regular'>
  | WithItalic<'Medium'>
  | WithItalic<'Semibold'>
  | WithItalic<'Bold'>
  | WithItalic<'Heavy'>
  | WithItalic<'Black'>,
  string
>;

type FontDeclaration = Record<string, Partial<FontWeights> | string>;

/**
 * Get names of each style for each font in project.
 *
 * @example
 *  <Text
 *   className={'text-white'}
 *   style={{
 *     fontFamily: fontsDeclaration.Kalnia,
 *     fontSize: 30,
 *   }}
 * >
 *   Kalnia font
 * </Text>
 */
const fontsDeclaration = {
  Kalnia: 'Kalnia',

  SFProDisplay: {
    Regular: 'SF-Pro-Display-Regular',
    RegularItalic: 'SF-Pro-Display-Regular-Italic',
    Medium: 'SF-Pro-Display-Medium',
    MediumItalic: 'SF-Pro-Display-Medium-Italic',
    Bold: 'SF-Pro-Display-Bold',
    BoldItalic: 'SF-Pro-Display-Bold-Italic',
  },
} satisfies FontDeclaration;

export default fontsDeclaration;
