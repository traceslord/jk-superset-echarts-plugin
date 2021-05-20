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
  JkEchartsLineChartPlugin,
  JkEchartsPieChartPlugin,
} from 'jk-superset-echarts-plugin';

new JkEchartsBarChartPlugin().configure({ key: 'jk_echarts_bar' }).register();
new JkEchartsLineChartPlugin().configure({ key: 'jk_echarts_line' }).register();
new JkEchartsPieChartPlugin().configure({ key: 'jk_echarts_pie' }).register();
```

```js
import {
  JkEchartsBar,
  JkEchartsLine,
  JkEchartsPie,
} from 'jk-superset-echarts-plugin/controlPanels';

getChartControlPanelRegistry()
  .registerValue('jk_echarts_bar', JkEchartsBar)
  .registerValue('jk_echarts_line', JkEchartsLine)
  .registerValue('jk_echarts_pie', JkEchartsPie);
```

## License
[MIT](https://github.com/traceslord/jk-superset-echarts-plugin/blob/master/LICENSE)

Copyright (c) 2021-present zhuhuajian
