import { sections } from '@superset-ui/chart-controls';
import controls from '../controls';

const {
  echartsX,
  echartsIndicators,
  echartsSelect,
  echartsPicker,
  echartsGroupby,
  echartsGroupbyAggregate,
  echartsSort,
  echartsOrder,
  echartsBackgroundColor,

  echartsLegendShow,
  echartsLegendType,
  echartsLegendTop,
  echartsLegendBottom,
  echartsLegendLeft,
  echartsLegendRight,
  echartsLegendWidth,
  echartsLegendHeight,
  echartsLegendOrient,
  echartsLegendAlign,
  echartsLegendPaddingTop,
  echartsLegendPaddingBottom,
  echartsLegendPaddingLeft,
  echartsLegendPaddingRight,
  echartsLegendItemGap,
  echartsLegendItemWidth,
  echartsLegendItemHeight,
  echartsLegendNotSelected,
  echartsLegendIcon,

  echartsGridShow,
  echartsGridTop,
  echartsGridBottom,
  echartsGridLeft,
  echartsGridRight,
  echartsGridWidth,
  echartsGridHeight,
  echartsGridBorderWidth,
  echartsGridBorderColor,
  echartsGridBackgroundColor,
  echartsGridContainLabel,

  echartsXAxisShow,
  echartsXAxisName,
  echartsXAxisNameLocation,
  echartsXAxisNameGap,
  echartsXAxisNameRotate,
  echartsXAxisLabelRotate,
  echartsXAxisInverse,
  echartsXAxisDataFormat,
  echartsXAxisDataFormatType,
  echartsXAxisLabelInterval,

  echartsYAxisShow,
  echartsYAxisName,
  echartsYAxisNameLocation,
  echartsYAxisNameGap,
  echartsYAxisNameRotate,
  echartsYAxisLabelRotate,
  echartsYAxisInverse,

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
  echartsToolboxFeatureDataViewShow,
  echartsToolboxFeatureMagicTypeShow,
  echartsToolboxFeatureDataZoomShow,
  echartsToolboxFeatureRestoreShow,
} = controls;

export default {
  controlPanelSections: [
    sections.legacyTimeseriesTime,
    {
      label: '配置选项',
      expanded: true,
      controlSetRows: [
        [echartsX],
        [echartsIndicators],
        [echartsSelect],
        [echartsPicker],
        [echartsGroupby, echartsGroupbyAggregate],
        [echartsSort, echartsOrder],
        ['adhoc_filters'],
        [echartsBackgroundColor],
      ],
    },
    {
      label: '柱状图配置',
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'echarts_series_bar_width',
            config: {
              type: 'TextControl',
              label: '柱条宽度',
              description:
                '柱条的宽度，不设时自适应。可以是绝对值例如 40 或者百分数例如 60%',
              default: '',
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_bar_min_height',
            config: {
              type: 'TextControl',
              label: '柱条最小高度',
              description:
                '柱条的最小高度，可用于防止某数据项的值过小而影响交互',
              default: null,
              isInt: true,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_bar_max_width',
            config: {
              type: 'TextControl',
              label: '柱条最大宽度',
              description:
                '柱条的最大宽度，比柱条宽度优先级高。可以是绝对值例如 40 或者百分数例如 60%',
              default: '',
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_bar_min_width',
            config: {
              type: 'TextControl',
              label: '柱条最小宽度',
              description:
                '柱条的最小宽度，比柱条宽度优先级高。可以是绝对值例如 40 或者百分数例如 60%',
              default: '1',
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_bar_category_gap',
            config: {
              type: 'TextControl',
              label: '柱间距离（同一系列）',
              description:
                '同一系列的柱间距离，默认为类目间距的 20%，可设固定值',
              default: '20%',
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_bar_gap',
            config: {
              type: 'TextControl',
              label: '柱间距离（不同系列）',
              description:
                '不同系列的柱间距离，为百分比（如 30%，表示柱子宽度的 30%）',
              default: '30%',
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_axis_swap',
            config: {
              type: 'CheckboxControl',
              label: '是否将 X 轴与 Y 轴互换',
              default: false,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_stack',
            config: {
              type: 'CheckboxControl',
              label: '数据堆叠',
              default: false,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_legend_hover_link',
            config: {
              type: 'CheckboxControl',
              label: '图例联动高亮',
              default: true,
              renderTrigger: true,
            },
          },
        ],
      ],
    },
    {
      label: '图例组件',
      controlSetRows: [
        [echartsLegendShow],
        [echartsLegendType],
        [
          echartsLegendTop,
          echartsLegendBottom,
          echartsLegendLeft,
          echartsLegendRight,
        ],
        [echartsLegendWidth, echartsLegendHeight],
        [echartsLegendOrient, echartsLegendAlign],
        [
          echartsLegendPaddingTop,
          echartsLegendPaddingBottom,
          echartsLegendPaddingLeft,
          echartsLegendPaddingRight,
        ],
        [echartsLegendItemGap, echartsLegendItemWidth, echartsLegendItemHeight],
        [echartsLegendIcon, echartsLegendNotSelected],
      ],
    },
    {
      label: '网格组件',
      controlSetRows: [
        [echartsGridShow],
        [echartsGridTop, echartsGridBottom, echartsGridLeft, echartsGridRight],
        [echartsGridWidth, echartsGridHeight],
        [echartsGridBorderWidth],
        [echartsGridBorderColor, echartsGridBackgroundColor],
        [echartsGridContainLabel],
      ],
    },
    {
      label: 'X 轴',
      controlSetRows: [
        [echartsXAxisShow],
        [echartsXAxisName],
        [echartsXAxisNameLocation, echartsXAxisNameGap],
        [echartsXAxisNameRotate, echartsXAxisLabelRotate],
        [echartsXAxisInverse],
        [echartsXAxisDataFormat],
        [echartsXAxisDataFormatType, echartsXAxisLabelInterval],
      ],
    },
    {
      label: 'Y 轴',
      controlSetRows: [
        [echartsYAxisShow],
        [echartsYAxisName],
        [echartsYAxisNameLocation, echartsYAxisNameGap],
        [echartsYAxisNameRotate, echartsYAxisLabelRotate],
        [echartsYAxisInverse],
      ],
    },
    {
      label: '提示框组件',
      controlSetRows: [
        [echartsTooltipShow],
        [
          {
            name: 'echarts_tooltip_trigger',
            config: {
              type: 'SelectControl',
              label: '触发类型',
              default: 'axis',
              choices: [
                ['item', '数据项图形触发'],
                ['axis', '坐标轴触发'],
                ['none', '什么都不触发'],
              ],
              clearable: false,
              renderTrigger: true,
            },
          },
          echartsTooltipTriggerOn,
          {
            name: 'echarts_tooltip_axis_pointer_type',
            config: {
              type: 'SelectControl',
              label: '指示器类型',
              default: 'shadow',
              choices: [
                ['line', '直线指示器'],
                ['shadow', '阴影指示器'],
                ['cross', '十字准星指示器'],
                ['none', '无指示器'],
              ],
              clearable: false,
              renderTrigger: true,
            },
          },
        ],
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
        [echartsToolboxFeatureMagicTypeShow],
        [echartsToolboxFeatureDataZoomShow],
        [echartsToolboxFeatureRestoreShow],
        [echartsToolboxFeatureDataViewShow],
        [echartsToolboxFeatureSaveAsImageShow],
      ],
    },
  ],
};
