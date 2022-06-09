import * as VictoryCore from "victory-core";

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/named */ // We don't need eslint to validate imports; TypeScript handles that for us.

// Import EVERYTHING from 'victory-core' to ensure it's getting exported correctly:
import {
  // @ts-expect-error TEST_EXPORTS should not be defined, so it should error!
  TEST_EXPORTS,
  AnimatePropTypeInterface,
  AnimationData,
  AnimationEasing,
  AnimationInfo,
  AnimationStyle,
  Arc,
  ArcProps,
  Axis,
  Background,
  BackgroundProps,
  BlockProps,
  Border,
  BorderProps,
  Box,
  CallbackArgs,
  CategoryPropType,
  Circle,
  ClipPath,
  ClipPathProps,
  Collection,
  ColorScalePropType,
  CommonProps,
  CoordinatesPropType,
  D3Scale,
  Data,
  DataGetterPropType,
  DefaultTransitions,
  Domain,
  DomainPaddingPropType,
  DomainPropObjectType,
  DomainPropType,
  DomainTuple,
  EventCallbackInterface,
  EventPropTypeInterface,
  Events,
  Helpers,
  Hooks,
  Immutable,
  InterpolationPropType,
  LabelHelpers,
  LabelOrientationType,
  LabelProps,
  Line,
  LineHelpers,
  LineSegment,
  LineSegmentProps,
  Log,
  NumberOrCallback,
  OrientationOrCallback,
  OrientationTypes,
  OriginType,
  PaddingOrCallback,
  PaddingProps,
  PaddingType,
  Path,
  Point,
  PointPathHelpers,
  PointProps,
  Portal,
  PortalContext,
  PortalContextValue,
  PortalProps,
  PropTypes,
  RangePropType,
  RangeTuple,
  Rect,
  SVGCoordinateBounds,
  SVGCoordinateType,
  Scale,
  ScaleName,
  ScalePropType,
  ScaleXYPropType,
  ScatterSymbolType,
  Selection,
  SliceNumberOrCallback,
  SortOrderPropType,
  StringOrCallback,
  StringOrNumberOrCallback,
  StringOrNumberOrList,
  Style,
  TSpan,
  Text,
  TextAnchorType,
  TextProps,
  TextSize,
  TextSizeStyleInterface,
  TickProps,
  Timer,
  TimerContext,
  Transitions,
  UserProps,
  VerticalAnchorType,
  VictoryAccessibleGroup,
  VictoryAccessibleGroupProps,
  VictoryAnimation,
  VictoryAnimationProps,
  VictoryAnimationState,
  VictoryAxisCommonProps,
  VictoryClipContainer,
  VictoryClipContainerProps,
  VictoryCommonPrimitiveProps,
  VictoryCommonProps,
  VictoryCommonThemeProps,
  VictoryContainer,
  VictoryContainerProps,
  VictoryDatableProps,
  VictoryLabel,
  VictoryLabelProps,
  VictoryLabelStyleObject,
  VictoryLabelableProps,
  VictoryMultiLabelableProps,
  VictoryNumberCallback,
  VictoryOrientationCallback,
  VictoryPaddingCallback,
  VictoryPortal,
  VictoryPortalProps,
  VictoryPrimitiveShapeProps,
  VictorySingleLabelableProps,
  VictoryStringCallback,
  VictoryStringOrNumberCallback,
  VictoryStyleInterface,
  VictoryStyleObject,
  VictoryTheme,
  VictoryThemeDefinition,
  VictoryTickStyleObject,
  VictoryTransition,
  Whisker,
  WhiskerAxes,
  WhiskerProps,
  Wrapper,
  addEvents
} from "victory-core";

describe("victory-core", () => {
  it("exports addEvents", () => {
    // This test exists to ensure we don't have an "unused import" error
    expect(addEvents).toBeInstanceOf(Function);
  });
  it("should export everything", () => {
    expect(Object.keys(VictoryCore).sort()).toMatchInlineSnapshot(`
      Array [
        "Arc",
        "Axis",
        "Background",
        "Border",
        "Box",
        "Circle",
        "ClipPath",
        "Collection",
        "CommonProps",
        "Data",
        "DefaultTransitions",
        "Domain",
        "Events",
        "Helpers",
        "Hooks",
        "Immutable",
        "LabelHelpers",
        "Line",
        "LineHelpers",
        "LineSegment",
        "Log",
        "Path",
        "Point",
        "PointPathHelpers",
        "Portal",
        "PortalContext",
        "PropTypes",
        "Rect",
        "Scale",
        "Selection",
        "Style",
        "TSpan",
        "Text",
        "TextSize",
        "Timer",
        "TimerContext",
        "Transitions",
        "UserProps",
        "VictoryAccessibleGroup",
        "VictoryAnimation",
        "VictoryClipContainer",
        "VictoryContainer",
        "VictoryLabel",
        "VictoryPortal",
        "VictoryProvider",
        "VictoryTheme",
        "VictoryTransition",
        "Whisker",
        "Wrapper",
        "addEvents",
        "useData",
        "useDomain",
        "useRange",
        "useScale",
        "useVictoryContext",
      ]
    `);
  });
});
