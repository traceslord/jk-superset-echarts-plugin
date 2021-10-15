import { defaultby } from '../utils/defaultby';
import { formatColor } from '../utils/colors';
import basicLayout from '../layout/basicLayout';

function drawChart(chart, propsData, propsConfig) {
  propsConfig = defaultby(propsConfig);

  const series = {
    type: 'sankey',
    lineStyle: {
      color: 'gradient',
    },
    emphasis: {
      focus: 'adjacency',
    },
    data: propsData[propsConfig.echartsX],
    links: propsData[propsConfig.echartsY],
  };
  chart.setOption({
    tooltip: {
      show: propsConfig.echartsTooltipShow,
      trigger: 'item',
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
        restore: {
          show: propsConfig.echartsToolboxFeatureRestoreShow,
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

function echartsSankey(element, props) {
  basicLayout(element, props, drawChart);
}

export default echartsSankey;
