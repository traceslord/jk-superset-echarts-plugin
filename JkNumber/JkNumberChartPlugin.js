import { ChartMetadata, ChartPlugin } from '@superset-ui/core';
import controlPanel from './controlPanel';
import transformProps from './transformProps';
import thumbnail from './images/thumbnail.png';

export default class JkNumberChartPlugin extends ChartPlugin {
  constructor() {
    super({
      metadata: new ChartMetadata({
        name: '数字图',
        description: '',
        thumbnail,
      }),
      controlPanel,
      transformProps,
      loadChart: () => import('./ReactJkNumber.js'),
    });
  }
}
