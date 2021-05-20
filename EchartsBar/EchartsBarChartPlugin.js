import { ChartMetadata, ChartPlugin } from '@superset-ui/core';
import controlPanel from './controlPanel';
import transformProps from './transformProps';
import thumbnail from './images/thumbnail.png';

export default class EchartsBarChartPlugin extends ChartPlugin {
  constructor() {
    super({
      metadata: new ChartMetadata({
        name: 'Echarts 柱状图',
        description: '',
        thumbnail,
      }),
      controlPanel,
      transformProps,
      loadChart: () => import('./ReactEchartsBar.js'),
    });
  }
}
