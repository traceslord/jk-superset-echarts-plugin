import { validateNonEmpty } from '@superset-ui/core';
import { sections } from '@superset-ui/chart-controls';
import controls, { columnChoices } from '../controls';

const {
  echartsBackgroundColor,

  echartsPreprocessingData,
  echartsDataPreprocessing,

  echartsTooltipShow,
  echartsTooltipTriggerOn,
  echartsTooltipFormatter,
  echartsTooltipPaddingTop,
  echartsTooltipPaddingBottom,
  echartsTooltipPaddingLeft,
  echartsTooltipPaddingRight,
  echartsTooltipBorderWidth,
  echartsTooltipBorderColor,
  echartsTooltipBackgroundColor,
  echartsTooltipTextStyleColor,

  echartsToolboxFeatureSaveAsImageShow,
  echartsToolboxFeatureRestoreShow,
} = controls;

export default {
  controlPanelSections: [
    sections.legacyTimeseriesTime,
    {
      label: '数据预处理',
      controlSetRows: [[echartsPreprocessingData], [echartsDataPreprocessing]],
    },
    {
      label: '配置选项',
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'echarts_x',
            config: {
              type: 'SelectControl',
              label: '节点数据列表',
              description: '注意: 节点的 name 不能重复',
              default: null,
              mapStateToProps: state => ({
                choices: columnChoices(state.datasource),
              }),
              validators: [validateNonEmpty],
            },
          },
        ],
        [
          {
            name: 'echarts_y',
            config: {
              type: 'SelectControl',
              label: '节点间的边',
              description: '注意: 桑基图理论上只支持有向无环图（DAG, Directed Acyclic Graph），所以请确保输入的边是无环的。',
              default: null,
              mapStateToProps: state => ({
                choices: columnChoices(state.datasource),
              }),
              validators: [validateNonEmpty],
            },
          },
        ],
        ['row_limit'],
        ['adhoc_filters'],
        [echartsBackgroundColor],
      ],
    },
    {
      label: '桑基图配置',
      expanded: true,
      controlSetRows: [],
    },
    {
      label: '提示框组件',
      controlSetRows: [
        [echartsTooltipShow],
        [echartsTooltipTriggerOn],
        [echartsTooltipFormatter],
        [
          echartsTooltipPaddingTop,
          echartsTooltipPaddingBottom,
          echartsTooltipPaddingLeft,
          echartsTooltipPaddingRight,
        ],
        [echartsTooltipBorderWidth],
        [
          echartsTooltipBorderColor,
          echartsTooltipBackgroundColor,
          echartsTooltipTextStyleColor,
        ],
      ],
    },
    {
      label: '工具箱',
      controlSetRows: [
        [echartsToolboxFeatureRestoreShow],
        [echartsToolboxFeatureSaveAsImageShow],
      ],
    },
  ],
};
