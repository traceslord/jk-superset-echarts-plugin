import { sections } from '@superset-ui/chart-controls';
import controls from '../controls';

const { echartsPreprocessingData } = controls;

export default {
  controlPanelSections: [
    sections.legacyTimeseriesTime,
    {
      label: '数据预处理',
      expanded: true,
      controlSetRows: [
        [echartsPreprocessingData],
        [
          {
            name: 'echarts_data_preprocessing',
            config: {
              type: 'TextAreaControl',
              language: 'javascript',
              label: '查询结果预处理',
              description:
                '使用函数形式，参数约定为 params，返回 echarts 配置项对象',
              default: '',
            },
          },
        ],
        ['row_limit'],
        ['adhoc_filters'],
      ],
    },
  ],
};
