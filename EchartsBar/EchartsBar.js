import { defaultby } from '../utils/defaultby';
import { groupby } from '../utils/groupby';
import { sort } from '../utils/sort';
import { formatColor } from '../utils/colors';
import { formatDate } from '../utils/dates';
import selectLayout from '../layout/selectLayout';

function drawChart(chart, teamData, teamIndex, propsConfig, propsLabel) {
  propsConfig = defaultby(propsConfig);

  let chartData = teamData[teamIndex];
  if (propsConfig.echartsGroupby) {
    chartData = groupby(
      chartData,
      propsConfig.echartsGroupby,
      propsConfig.echartsGroupbyAggregate,
      propsConfig.echartsX,
    );
  }
  if (propsConfig.echartsSort) {
    sort(chartData, propsConfig.echartsSort, propsConfig.echartsOrder);
  }

  const legendNotSelected = {};
  propsConfig.echartsLegendNotSelected.forEach(data => {
    legendNotSelected[propsLabel[data]] = false;
  });
  const xAxis = {
    show: propsConfig.echartsXAxisShow,
    type: 'category',
    name: propsConfig.echartsXAxisName,
    nameLocation: propsConfig.echartsXAxisNameLocation,
    nameGap: propsConfig.echartsXAxisNameGap,
    nameRotate: propsConfig.echartsXAxisNameRotate,
    inverse: propsConfig.echartsXAxisInverse,
    axisLabel: {
      interval: propsConfig.echartsXAxisLabelInterval,
      rotate: propsConfig.echartsXAxisLabelRotate,
    },
    data: chartData.map(data => {
      if (propsConfig.echartsXAxisDataFormat) {
        return formatDate.formatBox(
          propsConfig.echartsXAxisDataFormatType,
          data[propsConfig.echartsX],
        );
      }
      return data[propsConfig.echartsX];
    }),
  };
  const yAxis = {
    show: propsConfig.echartsYAxisShow,
    type: 'value',
    name: propsConfig.echartsYAxisName,
    nameLocation: propsConfig.echartsYAxisNameLocation,
    nameGap: propsConfig.echartsYAxisNameGap,
    nameRotate: propsConfig.echartsYAxisNameRotate,
    inverse: propsConfig.echartsYAxisInverse,
    axisLabel: {
      rotate: propsConfig.echartsYAxisLabelRotate,
    },
  };
  const series = propsConfig.echartsIndicators.map(item => ({
    type: 'bar',
    name: propsLabel[item],
    stack: propsConfig.echartsSeriesStack,
    barWidth: propsConfig.echartsSeriesBarWidth,
    barMaxWidth: propsConfig.echartsSeriesBarMaxWidth,
    barMinWidth: propsConfig.echartsSeriesBarMinWidth,
    barMinHeight: propsConfig.echartsSeriesBarMinHeight,
    barGap: propsConfig.echartsSeriesBarGap,
    barCategoryGap: propsConfig.echartsSeriesBarCategoryGap,
    legendHoverLink: propsConfig.echartsSeriesLegendHoverLink,
    data: chartData.map(data => data[item]),
  }));

  chart.setOption({
    legend: {
      show: propsConfig.echartsLegendShow,
      type: propsConfig.echartsLegendType,
      top: propsConfig.echartsLegendTop,
      bottom: propsConfig.echartsLegendBottom,
      left: propsConfig.echartsLegendLeft,
      right: propsConfig.echartsLegendRight,
      width: propsConfig.echartsLegendWidth,
      height: propsConfig.echartsLegendHeight,
      orient: propsConfig.echartsLegendOrient,
      align: propsConfig.echartsLegendAlign,
      padding: [
        propsConfig.echartsLegendPaddingTop,
        propsConfig.echartsLegendPaddingRight,
        propsConfig.echartsLegendPaddingBottom,
        propsConfig.echartsLegendPaddingLeft,
      ],
      itemGap: propsConfig.echartsLegendItemGap,
      itemWidth: propsConfig.echartsLegendItemWidth,
      itemHeight: propsConfig.echartsLegendItemHeight,
      icon: propsConfig.echartsLegendIcon,
      selected: legendNotSelected,
      data: propsConfig.echartsIndicators.map(data => propsLabel[data]),
    },
    grid: {
      show: propsConfig.echartsGridShow,
      top: propsConfig.echartsGridTop,
      bottom: propsConfig.echartsGridBottom,
      left: propsConfig.echartsGridLeft,
      right: propsConfig.echartsGridRight,
      width: propsConfig.echartsGridWidth,
      height: propsConfig.echartsGridHeight,
      borderWidth: propsConfig.echartsGridBorderWidth,
      borderColor: formatColor(propsConfig.echartsGridBorderColor),
      backgroundColor: formatColor(propsConfig.echartsGridBackgroundColor),
      containLabel: propsConfig.echartsGridContainLabel,
    },
    xAxis: propsConfig.echartsAxisSwap ? yAxis : xAxis,
    yAxis: propsConfig.echartsAxisSwap ? xAxis : yAxis,
    tooltip: {
      show: propsConfig.echartsTooltipShow,
      trigger: propsConfig.echartsTooltipTrigger,
      axisPointer: {
        type: propsConfig.echartsTooltipAxisPointerType,
      },
      triggerOn: propsConfig.echartsTooltipTriggerOn,
      // eslint-disable-next-line no-new-func
      formatter: new Function(
        `return ${propsConfig.echartsTooltipFormatter}`,
      )(),
      backgroundColor: formatColor(propsConfig.echartsTooltipBackgroundColor),
      borderColor: formatColor(propsConfig.echartsTooltipBorderColor),
      borderWidth: propsConfig.echartsTooltipBorderWidth,
      padding: [
        propsConfig.echartsTooltipPaddingTop,
        propsConfig.echartsTooltipPaddingRight,
        propsConfig.echartsTooltipPaddingBottom,
        propsConfig.echartsTooltipPaddingLeft,
      ],
      textStyle: {
        color: formatColor(propsConfig.echartsTooltipTextStyleColor),
      },
    },
    toolbox: {
      feature: {
        magicType: {
          show: propsConfig.echartsToolboxFeatureMagicTypeShow,
          type: ['line', 'bar', 'stack', 'tiled'],
        },
        dataZoom: {
          show: propsConfig.echartsToolboxFeatureDataZoomShow,
          title: {
            zoom: '缩放',
            back: '还原',
          },
        },
        restore: {
          show: propsConfig.echartsToolboxFeatureRestoreShow,
        },
        dataView: {
          show: propsConfig.echartsToolboxFeatureDataViewShow,
        },
        saveAsImage: {
          show: propsConfig.echartsToolboxFeatureSaveAsImageShow,
        },
      },
    },
    series,
    backgroundColor: formatColor(propsConfig.echartsBackgroundColor),
  });
}

function echartsBar(element, props) {
  selectLayout(element, props, drawChart);
}

export default echartsBar;
