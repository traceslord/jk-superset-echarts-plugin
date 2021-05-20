import { sections, formatSelectOptions } from '@superset-ui/chart-controls';
import controls from '../controls';

const {
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

  echartsTooltipShow,
  echartsTooltipTrigger,
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
        ['metrics'],
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
      label: '饼图配置',
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'echarts_series_legend_hover_link',
            config: {
              type: 'CheckboxControl',
              label: '是否启用图例 hover 时的联动高亮',
              default: true,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_name',
            config: {
              type: 'TextControl',
              label: '系列名称',
              description: '用于提示框的显示',
              default: '',
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_pie_start_angle',
            config: {
              type: 'TextControl',
              label: '起始角度',
              description: '起始角度，支持范围[0, 360]',
              default: 90,
              isInt: true,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_pie_min_angle',
            config: {
              type: 'TextControl',
              label: '最小角度',
              description:
                '最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互',
              default: 0,
              isInt: true,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_pie_min_show_label_angle',
            config: {
              type: 'TextControl',
              label: '最小显示标签角度',
              description: '小于这个角度（0 ~ 360）的扇区，不显示标签',
              default: 0,
              isInt: true,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_pie_rose_type',
            config: {
              type: 'SelectControl',
              label: '南丁格尔图',
              description:
                '通过半径区分数据大小，模式：radius —— 扇区圆心角展现数据的百分比，半径展现数据的大小；area ——  所有扇区圆心角相同，仅通过半径展现数据大小。',
              default: null,
              choices: formatSelectOptions(['radius', 'area']),
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_pie_top',
            config: {
              type: 'TextControl',
              label: '上',
              description: '组件离容器上侧的距离',
              default: '0',
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_pie_bottom',
            config: {
              type: 'TextControl',
              label: '下',
              description: '组件离容器下侧的距离',
              default: '0',
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_pie_left',
            config: {
              type: 'TextControl',
              label: '左',
              description: '组件离容器左侧的距离',
              default: '0',
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_pie_right',
            config: {
              type: 'TextControl',
              label: '右',
              description: '组件离容器右侧的距离',
              default: '0',
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_pie_width',
            config: {
              type: 'TextControl',
              label: '宽度',
              description: '组件的宽度',
              default: 'auto',
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_pie_height',
            config: {
              type: 'TextControl',
              label: '高度',
              description: '组件的高度',
              default: 'auto',
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_center_1',
            config: {
              type: 'TextControl',
              label: '圆心横坐标',
              description:
                '可设置成绝对的像素值或相对的百分比，设置成百分比时是相对于容器宽度',
              default: '50%',
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_center_2',
            config: {
              type: 'TextControl',
              label: '圆心纵坐标',
              description:
                '可设置成绝对的像素值或相对的百分比，设置成百分比时是相对于容器高度',
              default: '50%',
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_radius_1',
            config: {
              type: 'TextControl',
              label: '图形的内半径',
              description: '可设置成绝对值或相对的百分比',
              default: '0',
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_radius_2',
            config: {
              type: 'TextControl',
              label: '图形的外半径',
              description: '可设置成绝对值或相对的百分比',
              default: '75%',
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_pie_label_show',
            config: {
              type: 'CheckboxControl',
              label: '是否展示文本标签',
              description:
                '饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等',
              default: true,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_pie_label_position',
            config: {
              type: 'SelectControl',
              label: '标签位置',
              description:
                'outside —— 饼图扇区外侧，通过视觉引导线连到相应的扇区；inside —— 饼图扇区内部；center —— 在饼图中心位置。',
              default: 'outside',
              choices: formatSelectOptions(['outside', 'inside', 'center']),
              clearable: false,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_pie_clockwise',
            config: {
              type: 'CheckboxControl',
              label: '是否顺时针排布',
              description: '饼图的扇区是否是顺时针排布',
              default: true,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_pie_avoid_label_overlap',
            config: {
              type: 'CheckboxControl',
              label: '是否启用防止标签重叠策略',
              description:
                '在标签拥挤重叠的情况下会挪动各个标签的位置，防止标签间的重叠',
              default: true,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_pie_still_show_zero_sum',
            config: {
              type: 'CheckboxControl',
              label: '是否在数据和为 0 的时候不显示扇区',
              description: '一般情况下所有数据为 0',
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
      label: '提示框组件',
      controlSetRows: [
        [echartsTooltipShow],
        [echartsTooltipTrigger, echartsTooltipTriggerOn],
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
