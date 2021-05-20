import { defaultby } from '../utils/defaultby';
import { groupby } from '../utils/groupby';
import { sort } from '../utils/sort';
import { formatColor } from '../utils/colors';
import selectLayout from '../layout/selectLayout';

function drawChart(chart, teamData, teamIndex, propsConfig, propsLabel) {
  propsConfig = defaultby(propsConfig);

  let chartData = teamData[teamIndex];
  if (propsConfig.echartsGroupby) {
    chartData = groupby(
      chartData,
      propsConfig.echartsGroupby,
      propsConfig.echartsGroupbyAggregate,
    );
  }
  if (propsConfig.echartsSort) {
    sort(chartData, propsConfig.echartsSort, propsConfig.echartsOrder);
  }

  const legendNotSelected = {};
  propsConfig.echartsLegendNotSelected.forEach(data => {
    legendNotSelected[propsLabel[data]] = false;
  });
  const seriesValues = propsConfig.echartsIndicators.map(
    data => chartData[0][data],
  );
  const series = [
    {
      type: 'pie',
      legendHoverLink: propsConfig.echartsSeriesLegendHoverLink,
      clockwise: propsConfig.echartsPieClockwise,
      startAngle: propsConfig.echartsPieStartAngle,
      minAngle: propsConfig.echartsPieMinAngle,
      minShowLabelAngle: propsConfig.echartsPieMinShowLabelAngle,
      roseType: propsConfig.echartsPieRoseType,
      avoidLabelOverlap: propsConfig.echartsPieAvoidLabelOverlap,
      stillShowZeroSum: propsConfig.echartsPieStillShowZeroSum,
      top: propsConfig.echartsPieTop,
      bottom: propsConfig.echartsPieBottom,
      left: propsConfig.echartsPieLeft,
      right: propsConfig.echartsPieRight,
      width: propsConfig.echartsPieWidth,
      height: propsConfig.echartsPieHeight,
      label: {
        show: propsConfig.echartsPieLabelShow,
        position: propsConfig.echartsPieLabelPosition,
      },
      center: [
        propsConfig.echartsSeriesCenter1,
        propsConfig.echartsSeriesCenter2,
      ],
      radius: [
        propsConfig.echartsSeriesRadius1,
        propsConfig.echartsSeriesRadius2,
      ],
      data: propsConfig.echartsIndicators.map((data, index) => ({
        name: propsLabel[data],
        value: seriesValues[index],
      })),
    },
  ];
  if (propsConfig.echartsSeriesName) {
    series[0].name = propsConfig.echartsSeriesName;
  }

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
    tooltip: {
      show: propsConfig.echartsTooltipShow,
      trigger: propsConfig.echartsTooltipTrigger,
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

function echartsPie(element, props) {
  selectLayout(element, props, drawChart);
}

export default echartsPie;
