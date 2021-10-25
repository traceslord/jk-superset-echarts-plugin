import ecStat from 'echarts-stat';
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
  const series = propsConfig.echartsY.map(item => ({
    type: 'scatter',
    name: propsLabel[item],
    symbolSize: params => params[3],
    emphasis: {
      focus: 'series',
      label: {
        show: true,
        position: 'top',
        formatter: params => params.data[2],
      },
    },
    itemStyle: {
      shadowBlur: 10,
      shadowColor: 'rgba(0, 0, 0, 0.2)',
      shadowOffsetY: 5,
    },
    data: chartData.map(subitem => [
      subitem[propsConfig.echartsX],
      subitem[item],
      subitem[propsConfig.echartsName],
      propsConfig.echartsIndicator
        ? subitem[propsConfig.echartsIndicator]
        : propsConfig.echartsRadius,
    ]),
    markLine: {
      lineStyle: {
        color: '#909399',
        type: 'dashed',
      },
      data: [
        { type: 'average', name: '平均值' },
        { type: 'average', valueDim: 'x' },
      ],
    },
  }));
  if (propsConfig.echartsRegressionType) {
    propsConfig.echartsY.forEach(item => {
      const lineData = chartData.map(subitem => [
        subitem[propsConfig.echartsX],
        subitem[item],
      ]);
      const myRegression = ecStat.regression(
        propsConfig.echartsRegressionType,
        lineData,
      );
      myRegression.points.sort((a, b) => a[0] - b[0]);
      series.push({
        type: 'line',
        name: `${propsLabel[item]}的回归线`,
        showSymbol: false,
        lineStyle: {
          color: '#2f4554',
        },
        data: myRegression.points,
        markPoint: {
          label: {
            show: true,
            position: 'left',
            formatter: myRegression.expression,
            color: '#333',
            fontSize: 14,
          },
          itemStyle: {
            color: 'transparent',
          },
          data: [
            {
              coord: myRegression.points[myRegression.points.length - 1],
            },
          ],
        },
      });
    });
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
      data: propsConfig.echartsY.map(data => propsLabel[data]),
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
    xAxis: {
      show: propsConfig.echartsXAxisShow,
      type: 'value',
      name: propsConfig.echartsXAxisName,
      nameLocation: propsConfig.echartsXAxisNameLocation,
      nameGap: propsConfig.echartsXAxisNameGap,
      nameRotate: propsConfig.echartsXAxisNameRotate,
      inverse: propsConfig.echartsXAxisInverse,
      scale: propsConfig.echartsXAxisScale,
      axisLabel: {
        rotate: propsConfig.echartsXAxisLabelRotate,
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      show: propsConfig.echartsYAxisShow,
      type: 'value',
      name: propsConfig.echartsYAxisName,
      nameLocation: propsConfig.echartsYAxisNameLocation,
      nameGap: propsConfig.echartsYAxisNameGap,
      nameRotate: propsConfig.echartsYAxisNameRotate,
      inverse: propsConfig.echartsYAxisInverse,
      scale: propsConfig.echartsYAxisScale,
      axisLabel: {
        rotate: propsConfig.echartsYAxisLabelRotate,
      },
      splitLine: {
        show: false,
      },
    },
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
          type: ['line', 'Scatter', 'stack', 'tiled'],
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

function echartsScatter(element, props) {
  selectLayout(element, props, drawChart);
}

export default echartsScatter;
