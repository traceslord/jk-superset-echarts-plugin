import { defaultby } from '../utils/defaultby';
import { formatColor } from '../utils/colors';
import basicLayout from '../layout/basicLayout';
import 'echarts-liquidfill';

function drawChart(chart, val, propsConfig) {
  propsConfig = defaultby(propsConfig);

  const warningThreshold = Number(
    propsConfig.echartsHydrographWarningThreshold,
  );
  const dangerThreshold = Number(propsConfig.echartsHydrographDangerThreshold);
  let color = propsConfig.echartsHydrographThemeColor;
  let gradientColor = propsConfig.echartsHydrographThemeColorGradient;
  if (propsConfig.echartsHydrographThresholdSort === '升序') {
    if (warningThreshold && warningThreshold > val) {
      color = propsConfig.echartsHydrographWarningColor;
      gradientColor = propsConfig.echartsHydrographWarningColorGradient;
    }
    if (dangerThreshold && dangerThreshold > val) {
      color = propsConfig.echartsHydrographDangerColor;
      gradientColor = propsConfig.echartsHydrographDangerColorGradient;
    }
  } else {
    if (warningThreshold && warningThreshold < val) {
      color = propsConfig.echartsHydrographWarningColor;
      gradientColor = propsConfig.echartsHydrographWarningColorGradient;
    }
    if (dangerThreshold && dangerThreshold < val) {
      color = propsConfig.echartsHydrographDangerColor;
      gradientColor = propsConfig.echartsHydrographDangerColorGradient;
    }
  }
  const series = [
    {
      type: 'liquidFill',
      data: [val],
      shape: propsConfig.echartsHydrographShape,
      label: {
        fontSize: propsConfig.echartsHydrographFontSize,
        fontWeight: propsConfig.echartsHydrographFontWeight,
        color: formatColor(color),
        insideColor: formatColor(propsConfig.echartsHydrographInsideColor),
      },
      emphasis: {
        itemStyle: {
          opacity: 0.8,
        },
      },
      backgroundStyle: {
        color: formatColor(propsConfig.echartsHydrographBackgroundColor),
      },
      color: [
        {
          type: 'linear',
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 1,
              color: [formatColor(color)],
            },
            {
              offset: 0,
              color: [formatColor(gradientColor)],
            },
          ],
        },
      ],
      outline: {
        show: propsConfig.echartsHydrographOutlineShow,
        borderDistance: propsConfig.echartsHydrographOutlineBorderDistance,
        itemStyle: {
          borderColor: formatColor(color),
          borderWidth: propsConfig.echartsHydrographOutlineBorderWidth,
        },
      },
    },
  ];

  chart.setOption({
    series,
    backgroundColor: formatColor(propsConfig.echartsBackgroundColor),
  });
}

function echartsHydrograph(element, props) {
  basicLayout(element, props, drawChart);
}

export default echartsHydrograph;
