export const defaultby = config => {
  const val = config;

  // series
  if (!val.echartsSeriesShowSymbol) val.echartsSeriesShowSymbol = false;
  if (!val.echartsSeriesShowSymbol2) val.echartsSeriesShowSymbol2 = false;
  if (!val.echartsSeriesSymbolSizeWidth) val.echartsSeriesSymbolSizeWidth = 0;
  if (!val.echartsSeriesSymbolSizeWidth2) val.echartsSeriesSymbolSizeWidth2 = 0;
  if (!val.echartsSeriesSymbolSizeHeight) val.echartsSeriesSymbolSizeHeight = 0;
  if (!val.echartsSeriesSymbolSizeHeight2) {
    val.echartsSeriesSymbolSizeHeight2 = 0;
  }
  if (!val.echartsSeriesSymbolRotate) val.echartsSeriesSymbolRotate = 0;
  if (!val.echartsSeriesSymbolRotate2) val.echartsSeriesSymbolRotate2 = 0;
  if (!val.echartsSeriesSymbolOffsetHorizontal) {
    val.echartsSeriesSymbolOffsetHorizontal = 0;
  }
  if (!val.echartsSeriesSymbolOffsetHorizontal2) {
    val.echartsSeriesSymbolOffsetHorizontal2 = 0;
  }
  if (!val.echartsSeriesSymbolOffsetVertical) {
    val.echartsSeriesSymbolOffsetVertical = 0;
  }
  if (!val.echartsSeriesSymbolOffsetVertical2) {
    val.echartsSeriesSymbolOffsetVertical2 = 0;
  }
  if (!val.echartsSeriesStep) val.echartsSeriesStep = false;
  if (!val.echartsSeriesStep2) val.echartsSeriesStep2 = false;
  if (!val.echartsSeriesLineStyleWidth) val.echartsSeriesLineStyleWidth = 0;
  if (!val.echartsSeriesLineStyleWidth2) val.echartsSeriesLineStyleWidth2 = 0;
  if (!val.echartsSeriesLineStyleOpacity) val.echartsSeriesLineStyleOpacity = 0;
  if (!val.echartsSeriesLineStyleOpacity2) {
    val.echartsSeriesLineStyleOpacity2 = 0;
  }
  if (!val.echartsSeriesAreaStyleOpacity) val.echartsSeriesAreaStyleOpacity = 0;
  if (!val.echartsSeriesAreaStyleOpacity2) {
    val.echartsSeriesAreaStyleOpacity2 = 0;
  }
  if (!val.echartsSeriesStack) val.echartsSeriesStack = false;
  if (!val.echartsSeriesStack2) val.echartsSeriesStack2 = false;
  if (!val.echartsSeriesSmooth) val.echartsSeriesSmooth = false;
  if (!val.echartsSeriesSmooth2) val.echartsSeriesSmooth2 = false;
  if (!val.echartsSeriesLegendHoverLink) {
    val.echartsSeriesLegendHoverLink = false;
  }
  if (!val.echartsSeriesLegendHoverLink2) {
    val.echartsSeriesLegendHoverLink2 = false;
  }
  if (!val.echartsSeriesConnectNulls) val.echartsSeriesConnectNulls = false;
  if (!val.echartsSeriesConnectNulls2) val.echartsSeriesConnectNulls2 = false;

  if (!val.echartsSeriesBarWidth) val.echartsSeriesBarWidth = '';
  if (!val.echartsSeriesBarMaxWidth) val.echartsSeriesBarMaxWidth = '';
  if (!val.echartsSeriesBarMinWidth) val.echartsSeriesBarMinWidth = '';
  if (!val.echartsSeriesBarMinHeight) val.echartsSeriesBarMinHeight = null;
  if (!val.echartsSeriesBarGap) val.echartsSeriesBarGap = '';
  if (!val.echartsSeriesBarCategoryGap) val.echartsSeriesBarCategoryGap = '';
  if (!val.echartsAxisSwap) val.echartsAxisSwap = false;

  if (!val.echartsSeriesName) val.echartsSeriesName = '';
  if (!val.echartsPieStartAngle) val.echartsPieStartAngle = 0;
  if (!val.echartsPieMinAngle) val.echartsPieMinAngle = 0;
  if (!val.echartsPieMinShowLabelAngle) val.echartsPieMinShowLabelAngle = 0;
  if (!val.echartsPieRoseType) val.echartsPieRoseType = null;
  if (!val.echartsPieTop) val.echartsPieTop = '';
  if (!val.echartsPieBottom) val.echartsPieBottom = '';
  if (!val.echartsPieLeft) val.echartsPieLeft = '';
  if (!val.echartsPieRight) val.echartsPieRight = '';
  if (!val.echartsPieWidth) val.echartsPieWidth = '';
  if (!val.echartsPieHeight) val.echartsPieHeight = '';
  if (!val.echartsSeriesCenter1) val.echartsSeriesCenter1 = '';
  if (!val.echartsSeriesCenter2) val.echartsSeriesCenter2 = '';
  if (!val.echartsSeriesRadius1) val.echartsSeriesRadius1 = '';
  if (!val.echartsSeriesRadius2) val.echartsSeriesRadius2 = '';
  if (!val.echartsPieLabelShow) val.echartsPieLabelShow = false;
  if (!val.echartsPieClockwise) val.echartsPieClockwise = false;
  if (!val.echartsPieAvoidLabelOverlap) val.echartsPieAvoidLabelOverlap = false;
  if (!val.echartsPieStillShowZeroSum) val.echartsPieStillShowZeroSum = false;

  // legend
  if (!val.echartsLegendShow) val.echartsLegendShow = false;
  if (!val.echartsLegendTop) val.echartsLegendTop = '';
  if (!val.echartsLegendBottom) val.echartsLegendBottom = '';
  if (!val.echartsLegendLeft) val.echartsLegendLeft = '';
  if (!val.echartsLegendRight) val.echartsLegendRight = '';
  if (!val.echartsLegendWidth) val.echartsLegendWidth = '';
  if (!val.echartsLegendHeight) val.echartsLegendHeight = '';
  if (!val.echartsLegendPaddingTop) val.echartsLegendPaddingTop = 0;
  if (!val.echartsLegendPaddingBottom) val.echartsLegendPaddingBottom = 0;
  if (!val.echartsLegendPaddingLeft) val.echartsLegendPaddingLeft = 0;
  if (!val.echartsLegendPaddingRight) val.echartsLegendPaddingRight = 0;
  if (!val.echartsLegendItemGap) val.echartsLegendItemGap = 0;
  if (!val.echartsLegendItemWidth) val.echartsLegendItemWidth = 0;
  if (!val.echartsLegendItemHeight) val.echartsLegendItemHeight = 0;

  // grid
  if (!val.echartsGridShow) val.echartsGridShow = false;
  if (!val.echartsGridTop) val.echartsGridTop = '';
  if (!val.echartsGridBottom) val.echartsGridBottom = '';
  if (!val.echartsGridLeft) val.echartsGridLeft = '';
  if (!val.echartsGridRight) val.echartsGridRight = '';
  if (!val.echartsGridWidth) val.echartsGridWidth = '';
  if (!val.echartsGridHeight) val.echartsGridHeight = '';
  if (!val.echartsGridBorderWidth) val.echartsGridBorderWidth = 0;
  if (!val.echartsGridContainLabel) val.echartsGridContainLabel = false;

  // xAxis
  if (!val.echartsXAxisShow) val.echartsXAxisShow = false;
  if (!val.echartsXAxisName) val.echartsXAxisName = '';
  if (!val.echartsXAxisNameGap) val.echartsXAxisNameGap = 0;
  if (!val.echartsXAxisNameRotate) val.echartsXAxisNameRotate = 0;
  if (!val.echartsXAxisLabelRotate) val.echartsXAxisLabelRotate = 0;
  if (!val.echartsXAxisInverse) val.echartsXAxisInverse = false;
  if (!val.echartsXAxisDataFormat) val.echartsXAxisDataFormat = false;
  if (!val.echartsXAxisDataFormatType) val.echartsXAxisDataFormatType = '';
  if (!val.echartsXAxisLabelInterval) val.echartsXAxisLabelInterval = '';

  // yAxis
  if (!val.echartsYAxisShow) val.echartsYAxisShow = false;
  if (!val.echartsYAxisShow2) val.echartsYAxisShow2 = false;
  if (!val.echartsYAxisName) val.echartsYAxisName = '';
  if (!val.echartsYAxisName2) val.echartsYAxisName2 = '';
  if (!val.echartsYAxisNameGap) val.echartsYAxisNameGap = 0;
  if (!val.echartsYAxisNameGap2) val.echartsYAxisNameGap2 = 0;
  if (!val.echartsYAxisNameRotate) val.echartsYAxisNameRotate = 0;
  if (!val.echartsYAxisNameRotate2) val.echartsYAxisNameRotate2 = 0;
  if (!val.echartsYAxisLabelRotate) val.echartsYAxisLabelRotate = 0;
  if (!val.echartsYAxisLabelRotate2) val.echartsYAxisLabelRotate2 = 0;
  if (!val.echartsYAxisInverse) val.echartsYAxisInverse = false;
  if (!val.echartsYAxisInverse2) val.echartsYAxisInverse2 = false;
  if (!val.echartsYAxisLabelInterval) val.echartsYAxisLabelInterval = '';
  if (!val.echartsYAxisLabelInterval2) val.echartsYAxisLabelInterval2 = '';

  // tooltip
  if (!val.echartsTooltipShow) val.echartsTooltipShow = false;
  if (!val.echartsTooltipFormatter) val.echartsTooltipFormatter = '';
  if (!val.echartsTooltipPaddingTop) val.echartsTooltipPaddingTop = 0;
  if (!val.echartsTooltipPaddingBottom) val.echartsTooltipPaddingBottom = 0;
  if (!val.echartsTooltipPaddingLeft) val.echartsTooltipPaddingLeft = 0;
  if (!val.echartsTooltipPaddingRight) val.echartsTooltipPaddingRight = 0;
  if (!val.echartsTooltipBorderWidth) val.echartsTooltipBorderWidth = 0;

  // toolbox
  if (!val.echartsToolboxFeatureSaveAsImageShow) {
    val.echartsToolboxFeatureSaveAsImageShow = false;
  }
  if (!val.echartsToolboxFeatureDataViewShow) {
    val.echartsToolboxFeatureDataViewShow = false;
  }
  if (!val.echartsToolboxFeatureMagicTypeShow) {
    val.echartsToolboxFeatureMagicTypeShow = false;
  }
  if (!val.echartsToolboxFeatureDataZoomShow) {
    val.echartsToolboxFeatureDataZoomShow = false;
  }
  if (!val.echartsToolboxFeatureRestoreShow) {
    val.echartsToolboxFeatureRestoreShow = false;
  }

  return val;
};
