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
  addEvents,
} from "victory-core";
import { pick } from "lodash";

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
        "VictoryTheme",
        "VictoryTransition",
        "Whisker",
        "Wrapper",
        "addEvents",
      ]
    `);
  });

  describe("namespaces", () => {
    // These "namespaces" represent when we use `export * as`
    const namespaces = [
      "Axis",
      "Collection",
      "Data",
      "DefaultTransitions",
      "Domain",
      "Events",
      "Helpers",
      "Hooks",
      "Immutable",
      "LabelHelpers",
      "LineHelpers",
      "Log",
      "PointPathHelpers",
      "PropTypes",
      "Scale",
      "Selection",
      "Style",
      "TextSize",
      "Transitions",
      "UserProps",
      "Wrapper",
    ];

    it("should export all namespaces", () => {
      expect(pick(VictoryCore, namespaces)).toMatchInlineSnapshot(`
        Object {
          "Axis": Object {
            "findAxisComponents": [Function],
            "getAxis": [Function],
            "getAxisComponent": [Function],
            "getAxisComponentsWithParent": [Function],
            "getAxisValue": [Function],
            "getDomain": [Function],
            "getOrigin": [Function],
            "getOriginSign": [Function],
            "getTickFormat": [Function],
            "getTicks": [Function],
            "isVertical": [Function],
            "modifyProps": [Function],
            "stringTicks": [Function],
          },
          "Collection": Object {
            "containsDates": [Function],
            "containsNumbers": [Function],
            "containsOnlyStrings": [Function],
            "containsStrings": [Function],
            "getMaxValue": [Function],
            "getMinValue": [Function],
            "isArrayOfArrays": [Function],
            "removeUndefined": [Function],
          },
          "Data": Object {
            "createStringMap": [Function],
            "downsample": [Function],
            "formatData": [Function],
            "formatDataFromDomain": [Function],
            "generateData": [Function],
            "getCategories": [Function],
            "getData": [Function],
            "getStringsFromAxes": [Function],
            "getStringsFromCategories": [Function],
            "getStringsFromData": [Function],
            "isDataComponent": [Function],
          },
          "DefaultTransitions": Object {
            "continuousPolarTransitions": [Function],
            "continuousTransitions": [Function],
            "discreteTransitions": [Function],
          },
          "Domain": Object {
            "createDomainFunction": [Function],
            "formatDomain": [Function],
            "getDomain": [Function],
            "getDomainFromCategories": [Function],
            "getDomainFromData": [Function],
            "getDomainFromMinMax": [Function],
            "getDomainFromProps": [Function],
            "getDomainWithZero": [Function],
            "getMaxFromProps": [Function],
            "getMinFromProps": [Function],
            "getSymmetricDomain": [Function],
            "isDomainComponent": [Function],
          },
          "Events": Object {
            "emulateReactEvent": [Function],
            "getComponentEvents": [Function],
            "getEventState": [Function],
            "getEvents": [Function],
            "getExternalMutation": [Function],
            "getExternalMutations": [Function],
            "getExternalMutationsWithChildren": [Function],
            "getGlobalEventNameFromKey": [Function],
            "getGlobalEvents": [Function],
            "getPartialEvents": [Function],
            "getScopedEvents": [Function],
            "omitGlobalEvents": [Function],
          },
          "Helpers": Object {
            "createAccessor": [Function],
            "degreesToRadians": [Function],
            "evaluateProp": [Function],
            "evaluateStyle": [Function],
            "getCurrentAxis": [Function],
            "getDefaultStyles": [Function],
            "getPadding": [Function],
            "getPoint": [Function],
            "getPolarOrigin": [Function],
            "getRadius": [Function],
            "getRange": [Function],
            "getStyles": [Function],
            "isHorizontal": [Function],
            "isTooltip": [Function],
            "modifyProps": [Function],
            "omit": [Function],
            "radiansToDegrees": [Function],
            "reduceChildren": [Function],
            "scalePoint": [Function],
          },
          "Hooks": Object {
            "useAnimationState": [Function],
            "usePreviousProps": [Function],
          },
          "Immutable": Object {
            "IMMUTABLE_ITERABLE": "@@__IMMUTABLE_ITERABLE__@@",
            "IMMUTABLE_LIST": "@@__IMMUTABLE_LIST__@@",
            "IMMUTABLE_MAP": "@@__IMMUTABLE_MAP__@@",
            "IMMUTABLE_RECORD": "@@__IMMUTABLE_RECORD__@@",
            "isImmutable": [Function],
            "isIterable": [Function],
            "isList": [Function],
            "isMap": [Function],
            "isRecord": [Function],
            "shallowToJS": [Function],
          },
          "LabelHelpers": Object {
            "getDegrees": [Function],
            "getPolarAngle": [Function],
            "getPolarTextAnchor": [Function],
            "getPolarVerticalAnchor": [Function],
            "getProps": [Function],
            "getText": [Function],
          },
          "LineHelpers": Object {
            "getInterpolationFunction": [Function],
            "getLineFunction": [Function],
          },
          "Log": Object {
            "warn": [Function],
          },
          "PointPathHelpers": Object {
            "circle": [Function],
            "cross": [Function],
            "diamond": [Function],
            "minus": [Function],
            "plus": [Function],
            "square": [Function],
            "star": [Function],
            "triangleDown": [Function],
            "triangleUp": [Function],
          },
          "PropTypes": Object {
            "allOfType": [Function],
            "deprecated": [Function],
            "domain": [Function],
            "greaterThanZero": [Function],
            "homogeneousArray": [Function],
            "integer": [Function],
            "matchDataLength": [Function],
            "nonNegative": [Function],
            "regExp": [Function],
            "scale": [Function],
          },
          "Scale": Object {
            "getBaseScale": [Function],
            "getDefaultScale": [Function],
            "getScaleFromName": [Function],
            "getScaleFromProps": [Function],
            "getScaleType": [Function],
            "getType": [Function],
            "validScale": [Function],
          },
          "Selection": Object {
            "getBounds": [Function],
            "getDataCoordinates": [Function],
            "getDomainCoordinates": [Function],
            "getParentSVG": [Function],
            "getSVGEventCoordinates": [Function],
          },
          "Style": Object {
            "getColorScale": [Function],
            "toTransformString": [Function],
          },
          "TextSize": Object {
            "_approximateTextSizeInternal": Object {
              "impl": [Function],
            },
            "approximateTextSize": [Function],
            "convertLengthToPixels": [Function],
          },
          "Transitions": Object {
            "getInitialTransitionState": [Function],
            "getTransitionPropsFactory": [Function],
          },
          "UserProps": Object {
            "assert": [Function],
            "getSafeUserProps": [Function],
            "withSafeUserProps": [Function],
          },
          "Wrapper": Object {
            "addBinsToParentPropsIfHistogram": [Function],
            "getAllEvents": [Function],
            "getCategories": [Function],
            "getCategoryAndAxisStringsFromChildren": [Function],
            "getChildStyle": [Function],
            "getColor": [Function],
            "getData": [Function],
            "getDataFromChildren": [Function],
            "getDefaultDomainPadding": [Function],
            "getDomain": [Function],
            "getDomainFromChildren": [Function],
            "getScale": [Function],
            "getStringsFromCategories": [Function],
            "getStringsFromChildren": [Function],
            "getStringsFromData": [Function],
            "getStyle": [Function],
            "getWidth": [Function],
          },
        }
      `);
    });
  });
});
