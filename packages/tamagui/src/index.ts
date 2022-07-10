import './polyfills'

export * from '@tamagui/avatar'
export * from '@tamagui/button'
export * from '@tamagui/dialog'
export * from '@tamagui/card'
export * from '@tamagui/compose-refs'
export * from '@tamagui/create-context'
export * from '@tamagui/font-size'
export * from '@tamagui/helpers'
export * from '@tamagui/list-item'
export * from '@tamagui/popover'
export * from '@tamagui/popper'
export * from '@tamagui/progress'
export * from '@tamagui/select'
export * from '@tamagui/separator'
export * from '@tamagui/shapes'
export * from '@tamagui/slider'
export * from '@tamagui/image'
export * from '@tamagui/stacks'
export * from '@tamagui/text'
export * from '@tamagui/tooltip'
export * from '@tamagui/use-controllable-state'
export * from '@tamagui/use-debounce'
export * from '@tamagui/use-force-update'
export * from '@tamagui/portal'

// since we overlap with StackProps and potentially others
// lets be explicit on what gets exported
export type {
  AnimationKeys,
  ColorTokens,
  CreateTamaguiConfig,
  CreateTamaguiProps,
  FontColorTokens,
  FontLetterSpacingTokens,
  FontLineHeightTokens,
  FontSizeTokens,
  FontStyleTokens,
  FontTokens,
  FontTransformTokens,
  FontWeightTokens,
  GenericFont,
  GenericTamaguiConfig,
  GetAnimationKeys,
  GetProps,
  GetVariantProps,
  GenericTextVariants,
  GenericStackVariants,
  Media,
  MediaKeys,
  MediaPropKeys,
  MediaQueries,
  mediaQueryConfig,
  MediaQueryState,
  RNWTextProps,
  RNWViewProps,
  Shorthands,
  SizeTokens,
  SpaceTokens,
  StackPropsBase,
  StackPropsBaseShared,
  StaticConfig,
  StaticConfigParsed,
  TamaguiBaseTheme,
  TamaguiComponent,
  TamaguiComponentPropsBase,
  TamaguiConfig,
  TamaguiCustomConfig,
  TamaguiInternalConfig,
  TamaguiProviderProps,
  TextProps,
  TextPropsBase,
  TextPropsBaseShared,
  ThemeKeys,
  ThemeName,
  ThemeObject,
  ThemeProps,
  Themes,
  ThemeValueFallback,
  Tokens,
  TransformStyleProps,
  VariantSpreadExtras,
  VariantSpreadFunction,
  ZIndexTokens,
} from '@tamagui/core'

export {
  // components
  Spacer,
  Stack,
  Text,
  Theme,
  ThemeInverse,
  ThemeReset,
  Unspaced,
  // context,
  TextAncestorContext,
  // constants
  isChrome,
  isSSR,
  isTouchable,
  isWeb,
  isWebTouchable,
  // helpers
  calc,
  addMediaQueryListener,
  createComponent,
  createFont,
  createShorthands,
  createTheme,
  createTokens,
  createVariable,
  getConfig,
  getHasConfigured,
  getMedia,
  getStylesAtomic,
  getThemes,
  getTokens,
  getVariableValue,
  getVariableName,
  insertFont,
  isObj,
  isTamaguiElement,
  isTamaguiComponent,
  isVariable,
  matchMedia,
  mediaObjectToString,
  mediaState,
  spacedChildren,
  styled,
  themeable,
  Variable,
  withStaticProperties,
  // hooks
  useConstant,
  useGet,
  useEvent,
  useDefaultThemeName,
  useIsMounted,
  useIsomorphicLayoutEffect,
  useIsTouchDevice,
  useMedia,
  usePressable,
  useTheme,
  useThemeName,
  useUnmountEffect,
} from '@tamagui/core'

export * from './createTamagui'
export * from './viewTypes'

export * from './hooks/useKeyboardDismissable'

export * from './views/Anchor'
export * from './views/BlurView'
export * from './views/EnsureFlexed'
export * from './views/Fieldset'
export * from './views/Form'
export * from './views/Grid'
export * from './views/Hoverable'
export * from './views/Input'
export * from './views/Group'
export * from './views/Label'
export * from './views/Layouts'
export * from './views/LinearGradient'
// export * from './views/Skeleton'
export * from './views/Spinner'
export * from './views/Switch'
export * from './views/Table'
export * from './views/TextArea'
export * from './views/Toast'
export * from './views/VisuallyHidden'

export * from './helpers/prevent'