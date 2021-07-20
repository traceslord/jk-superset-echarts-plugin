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

  const planData = chartData.map(item => {
    const startTime = new Date(item[propsConfig.echartsStartTime]).getTime();
    const endTime = new Date(item[propsConfig.echartsEndTime]).getTime();
    return {
      yAxis: item[propsConfig.echartsY],
      startTime,
      endTime: item[propsConfig.echartsEndTime]
        ? endTime
        : startTime + 86400000 * propsConfig.echartsPlanPeriod,
      progress: item[propsConfig.echartsX],
    };
  });
  const currentProgress = planData.map(
    data =>
      ((data.endTime - data.startTime) * data.progress) / 100 + data.startTime,
  );
  const otherData = chartData.map(item => {
    const obj = {};
    propsConfig.echartsIndicators.forEach(data => {
      obj[propsLabel[data]] = item[data];
    });
    return obj;
  });
  const series = [
    {
      type: 'bar',
      name: '计划开始时间',
      stack: 'time',
      itemStyle: {
        color: formatColor(propsConfig.echartsGanttHidden),
        borderColor: formatColor(propsConfig.echartsGanttHidden),
      },
      emphasis: {
        itemStyle: {
          color: formatColor(propsConfig.echartsGanttHidden),
          borderColor: formatColor(propsConfig.echartsGanttHidden),
        },
      },
      barWidth: 15,
      zlevel: -1,
      z: 4,
      data: planData.map(item => item.startTime),
    },
    {
      type: 'bar',
      name: '计划结束时间',
      stack: 'time',
      itemStyle: {
        color: formatColor(propsConfig.echartsGanttPeriod),
        borderColor: formatColor(propsConfig.echartsGanttHidden),
      },
      emphasis: {
        itemStyle: {
          color: formatColor(propsConfig.echartsGanttPeriod),
          borderColor: formatColor(propsConfig.echartsGanttHidden),
        },
      },
      barWidth: 15,
      zlevel: -1,
      z: 2,
      data: planData.map(item => item.endTime),
      markLine: {
        symbol: ['none', 'none'],
        label: {
          formatter: params =>
            propsConfig.echartsSeriesMarkLineFormatterPrefix +
            formatDate.formatDay(params.value),
        },
        lineStyle: {
          color: '#909399',
        },
        data: [
          {
            xAxis:
              new Date().getTime() +
              propsConfig.echartsSeriesMarkLineFormatterNum * 86400000,
          },
        ],
      },
    },
    {
      type: 'bar',
      name: '当前进度',
      stack: 'time',
      itemStyle: {
        color: formatColor(propsConfig.echartsGanttProgress),
        borderColor: formatColor(propsConfig.echartsGanttHidden),
      },
      emphasis: {
        itemStyle: {
          color: formatColor(propsConfig.echartsGanttProgress),
          borderColor: formatColor(propsConfig.echartsGanttHidden),
        },
      },
      barWidth: 15,
      zlevel: -1,
      z: 3,
      data: currentProgress,
    },
    {
      type: 'bar',
      name: '其他指标',
      data: otherData,
    },
  ];

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
      data: ['当前进度', '计划结束时间'],
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
      type: 'time',
      name: propsConfig.echartsXAxisName,
      nameLocation: propsConfig.echartsXAxisNameLocation,
      nameTextStyle: {
        color: '#303133',
      },
      nameGap: propsConfig.echartsXAxisNameGap,
      nameRotate: propsConfig.echartsXAxisNameRotate,
      inverse: propsConfig.echartsXAxisInverse,
      axisLine: {
        lineStyle: {
          color: formatColor(propsConfig.echartsGridBorderColor),
          width: 0,
        },
      },
      axisLabel: {
        rotate: propsConfig.echartsXAxisLabelRotate,
        margin: 12,
        formatter: value => formatDate.formatDay(value),
        color: '#303133',
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      show: propsConfig.echartsYAxisShow,
      type: 'category',
      name: propsConfig.echartsYAxisName,
      nameLocation: propsConfig.echartsYAxisNameLocation,
      nameTextStyle: {
        color: '#303133',
      },
      nameGap: propsConfig.echartsYAxisNameGap,
      nameRotate: propsConfig.echartsYAxisNameRotate,
      inverse: propsConfig.echartsYAxisInverse,
      axisLine: {
        lineStyle: {
          color: formatColor(propsConfig.echartsGridBorderColor),
          width: 0,
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        rotate: propsConfig.echartsYAxisLabelRotate,
        // eslint-disable-next-line no-new-func
        formatter: new Function(
          `return ${propsConfig.echartsYAxisLabelFormatter}`,
        )(),
        color: '#303133',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#eaeaea',
        },
      },
      data: chartData.map(item => {
        const obj = JSON.parse(JSON.stringify(item));
        const startTime = obj[propsConfig.echartsStartTime];
        const endTime = obj[propsConfig.echartsEndTime];
        obj[propsConfig.echartsStartTime] = formatDate.formatDay(startTime);
        obj[propsConfig.echartsEndTime] = endTime
          ? formatDate.formatDay(endTime)
          : formatDate.formatDay(
              startTime + 86400000 * propsConfig.echartsPlanPeriod,
            );
        obj[propsConfig.echartsX] =
          Math.round(obj[propsConfig.echartsX] * 100) / 100;
        let str = `${propsLabel[propsConfig.echartsY]}：${
          obj[propsConfig.echartsY]
        }`;
        Object.keys(obj).forEach(data => {
          if (data === propsConfig.echartsY) return;
          str += `|||${propsLabel[data]}：${obj[data]}`;
        });
        return str;
      }),
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

function echartsGantt(element, props) {
  selectLayout(element, props, drawChart);
}

export default echartsGantt;
