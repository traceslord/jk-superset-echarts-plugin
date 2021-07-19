import { ChartMetadata, ChartPlugin } from '@superset-ui/core';
import buildQuery from './buildQuery';
import controlPanel from './controlPanel';
import transformProps from './transformProps';
import thumbnail from './images/thumbnail.png';

export default class EchartsScatterChartPlugin extends ChartPlugin {
  constructor() {
    super({
      metadata: new ChartMetadata({
        name: 'Echarts 散点图',
        description: '',
        thumbnail,
      }),
      buildQuery,
      controlPanel,
      transformProps,
      loadChart: () => import('./ReactEchartsScatter.js'),
    });
  }
}
