# jk-superset-echarts-plugin

<p>
  <img alt="JK" src="https://img.shields.io/badge/-JK-brightgreen">
  <a href="https://github.com/traceslord/jk-superset-echarts-plugin">
    <img alt="code size" src="https://img.shields.io/github/languages/code-size/traceslord/jk-superset-echarts-plugin">
  </a>
  <img alt="version" src="https://img.shields.io/github/package-json/v/traceslord/jk-superset-echarts-plugin">
  <a href="https://github.com/traceslord/jk-superset-echarts-plugin/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/traceslord/jk-superset-echarts-plugin" alt="license">
  </a>
</p>

> JK Superset Chart - Echarts.

## Usage

Configure `key`, which can be any `string`, and register the plugin. This `key` will be used to
lookup this chart throughout the app.

```js
import {
  JkEchartsBarChartPlugin,
  JkEchartsGanttChartPlugin,
  JkEchartsHydrographChartPlugin,
  JkEchartsLineChartPlugin,
  JkEchartsLineBarChartPlugin,
  JkEchartsPieChartPlugin,
  JkEchartsSankeyChartPlugin,
  JkEchartsScatterChartPlugin,
  JkNumberChartPlugin,
} from 'jk-superset-echarts-plugin';

new JkEchartsBarChartPlugin().configure({ key: 'jk_echarts_bar' }).register();
new JkEchartsGanttChartPlugin().configure({ key: 'jk_echarts_gantt' }).register();
new JkEchartsHydrographChartPlugin().configure({ key: 'jk_echarts_hydrograph' }).register();
new JkEchartsLineChartPlugin().configure({ key: 'jk_echarts_line' }).register();
new JkEchartsLineBarChartPlugin().configure({ key: 'jk_echarts_line_bar' }).register();
new JkEchartsPieChartPlugin().configure({ key: 'jk_echarts_pie' }).register();
new JkEchartsSankeyChartPlugin().configure({ key: 'jk_echarts_sankey' }).register();
new JkEchartsScatterChartPlugin().configure({ key: 'jk_echarts_scatter' }).register();
new JkNumberChartPlugin().configure({ key: 'jk_number' }).register();
```

## License
[MIT](https://github.com/traceslord/jk-superset-echarts-plugin/blob/master/LICENSE)

Copyright (c) 2021-present zhuhuajian
