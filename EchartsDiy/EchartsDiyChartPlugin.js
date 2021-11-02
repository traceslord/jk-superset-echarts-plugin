import { ChartMetadata, ChartPlugin } from '@superset-ui/core';
import buildQuery from './buildQuery';
import controlPanel from './controlPanel';
import transformProps from './transformProps';
import thumbnail from './images/thumbnail.png';

export default class EchartsDiyChartPlugin extends ChartPlugin {
  constructor() {
    super({
      metadata: new ChartMetadata({
        name: 'Echarts DIY 图',
        description: '',
        thumbnail,
      }),
      buildQuery,
      controlPanel,
      transformProps,
      loadChart: () => import('./ReactEchartsDiy.js'),
    });
  }
}
