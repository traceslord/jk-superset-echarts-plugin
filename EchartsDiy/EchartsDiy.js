import * as echarts from 'echarts';

function echartsDiy(element, props) {
  const echartsId = Date.now();
  const html = `<div
    id="echarts-${echartsId}"
    style="width: ${props.width}px; height: ${props.height}px"
  ></div>`;
  element.innerHTML = html;
  const chart = echarts.init(document.getElementById(`echarts-${echartsId}`));
  const option = props.config.echartsDataPreprocessing
    ? // eslint-disable-next-line no-new-func
      new Function(
        'params',
        `return ${props.config.echartsDataPreprocessing}`,
      )()(props)
    : {};
  chart.setOption(option);
}

export default echartsDiy;
