import * as echarts from 'echarts';

function basicLayout(element, props, drawChart) {
  const val = props.data;
  const propsConfig = props.config || {};
  const propsLabel = props.label || {};
  const randomNumber = Math.round(Math.random() * 1000000000000000);
  const html = `<div
    id="echarts-${randomNumber}"
    style="width: ${props.width}px; height: ${props.height}px"
  ></div>`;
  element.innerHTML = html;
  const chart = echarts.init(
    document.getElementById(`echarts-${randomNumber}`),
  );
  drawChart(chart, val, propsConfig, propsLabel);
}

export default basicLayout;
