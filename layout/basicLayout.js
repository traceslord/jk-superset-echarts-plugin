import * as echarts from 'echarts';

function basicLayout(element, props, drawChart) {
  const propsConfig = props.config || {};
  const propsLabel = props.label || {};
  const propsData = propsConfig.echartsDataPreprocessing
    ? // eslint-disable-next-line no-new-func
      new Function(
        'params',
        `return ${propsConfig.echartsDataPreprocessing}`,
      )()(props.data)
    : props.data;
  const randomNumber = Math.round(Math.random() * 1000000000000000);
  const html = `<div
    id="echarts-${randomNumber}"
    style="width: ${props.width}px; height: ${props.height}px"
  ></div>`;
  element.innerHTML = html;
  const chart = echarts.init(
    document.getElementById(`echarts-${randomNumber}`),
  );
  drawChart(chart, propsData, propsConfig, propsLabel);
}

export default basicLayout;
