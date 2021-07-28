import React from 'react';
import { sections, ColumnOption } from '@superset-ui/chart-controls';
import controls, { FIGURE_SHAPE } from '../controls';

const {
  echartsX,
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
        [
          {
            name: 'echarts_y_left',
            config: {
              type: 'SelectControl',
              label: 'Y 轴（折线）',
              description: '折线轴要显示的列',
              default: [],
              optionRenderer: c =>
                React.createElement(ColumnOption, {
                  column: c,
                  showType: true,
                }),
              valueRenderer: c =>
                React.createElement(ColumnOption, {
                  column: c,
                }),
              valueKey: 'column_name',
              mapStateToProps: state => ({
                options: state.datasource ? state.datasource.columns : [],
              }),
              multi: true,
            },
          },
        ],
        [
          {
            name: 'echarts_y_right',
            config: {
              type: 'SelectControl',
              label: 'Y 轴（柱状）',
              description: '柱状轴要显示的列',
              default: [],
              optionRenderer: c =>
                React.createElement(ColumnOption, {
                  column: c,
                  showType: true,
                }),
              valueRenderer: c =>
                React.createElement(ColumnOption, {
                  column: c,
                }),
              valueKey: 'column_name',
              mapStateToProps: state => ({
                options: state.datasource ? state.datasource.columns : [],
              }),
              multi: true,
            },
          },
        ],
        [echartsSelect],
        [echartsPicker],
        [echartsGroupby, echartsGroupbyAggregate],
        [echartsSort, echartsOrder],
        ['row_limit'],
        ['adhoc_filters'],
        [echartsBackgroundColor],
      ],
    },
    {
      label: '基础配置',
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'echarts_base_swap',
            config: {
              type: 'SelectControl',
              label: 'Y 轴互换',
              default: true,
              choices: [
                [true, '左折线右柱状'],
                [false, '左柱状右折线'],
              ],
              clearable: false,
              renderTrigger: true,
            },
          },
        ],
      ],
    },
    {
      label: '折线图配置',
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'echarts_series_show_symbol',
            config: {
              type: 'CheckboxControl',
              label: '是否显示标志图形',
              default: true,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_show_all_symbol',
            config: {
              type: 'SelectControl',
              label: '标志图形显示策略',
              description:
                '默认：如果有足够空间则显示标志图形，否则随主轴标签间隔隐藏策略',
              default: 'auto',
              choices: [
                ['auto', '默认'],
                [true, '显示所有图形'],
                [false, '随主轴标签间隔隐藏策略'],
              ],
              clearable: false,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_symbol',
            config: {
              type: 'SelectControl',
              label: '标记的图形',
              default: 'emptyCircle',
              choices: FIGURE_SHAPE,
              clearable: false,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_symbol_size_width',
            config: {
              type: 'TextControl',
              label: '标记的大小(宽)',
              default: 4,
              isInt: true,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_symbol_size_height',
            config: {
              type: 'TextControl',
              label: '标记的大小(高)',
              default: 4,
              isInt: true,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_symbol_rotate',
            config: {
              type: 'TextControl',
              label: '标记的旋转角度',
              description: '标记的旋转角度（而非弧度），正值表示逆时针旋转',
              default: 0,
              isInt: true,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_symbol_offset_horizontal',
            config: {
              type: 'TextControl',
              label: '标记的偏移(水平)',
              description: '标记相对于原本位置的水平偏移',
              default: 0,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_symbol_offset_vertical',
            config: {
              type: 'TextControl',
              label: '标记的偏移(垂直)',
              description: '标记相对于原本位置的垂直偏移',
              default: 0,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_step',
            config: {
              type: 'SelectControl',
              label: '阶梯线图',
              description:
                '选择为空则不显示成阶梯线图，选项配置分别为在当前点，当前点与下个点的中间点，下个点拐弯',
              default: '',
              choices: [
                ['start', '当前点'],
                ['middle', '中间点'],
                ['end', '下个点'],
              ],
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_line_style_type',
            config: {
              type: 'SelectControl',
              label: '线的类型',
              default: 'solid',
              choices: [
                ['solid', '实线'],
                ['dashed', '虚线'],
                ['dotted', '点线'],
              ],
              clearable: false,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_line_style_width',
            config: {
              type: 'TextControl',
              label: '线宽',
              default: 2,
              isInt: true,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_line_style_opacity',
            config: {
              type: 'TextControl',
              label: '线条透明度',
              description: '支持从 0 到 1 的数字，为 0 时不绘制该图形',
              default: 1,
              isFloat: true,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_area_style_opacity',
            config: {
              type: 'TextControl',
              label: '区域填充透明度',
              description: '支持从 0 到 1 的数字，为 0 时不绘制该图形',
              default: 0,
              isFloat: true,
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
            name: 'echarts_series_smooth',
            config: {
              type: 'CheckboxControl',
              label: '平滑曲线',
              default: false,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_legend_hover_link',
            config: {
              type: 'CheckboxControl',
              label: '图例联动高亮',
              default: true,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_connect_nulls',
            config: {
              type: 'CheckboxControl',
              label: '连接空数据',
              default: false,
              renderTrigger: true,
            },
          },
        ],
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
            name: 'echarts_series_stack_2',
            config: {
              type: 'CheckboxControl',
              label: '数据堆叠',
              default: false,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_legend_hover_link_2',
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
      label: 'Y 轴（折线）',
      controlSetRows: [
        [
          {
            name: 'echarts_y_axis_show',
            config: {
              type: 'CheckboxControl',
              label: '是否显示 y 轴（折线）',
              default: true,
              renderTrigger: true,
            },
          },
        ],
        [echartsYAxisName],
        [echartsYAxisNameLocation, echartsYAxisNameGap],
        [echartsYAxisNameRotate, echartsYAxisLabelRotate],
        [echartsYAxisInverse],
      ],
    },
    {
      label: 'Y 轴（柱状）',
      controlSetRows: [
        [
          {
            name: 'echarts_y_axis_show_2',
            config: {
              type: 'CheckboxControl',
              label: '是否显示 y 轴（柱状）',
              default: true,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_y_axis_name_2',
            config: {
              type: 'TextControl',
              label: '坐标轴名称',
              default: '',
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_y_axis_name_location_2',
            config: {
              type: 'SelectControl',
              label: '名称显示位置',
              description: '坐标轴名称显示位置',
              default: 'end',
              choices: [
                ['start', '开始'],
                ['middle', '中间'],
                ['end', '结束'],
              ],
              clearable: false,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_y_axis_name_gap_2',
            config: {
              type: 'TextControl',
              label: '名称与轴线的间距',
              description: '坐标轴名称与轴线之间的距离',
              default: 15,
              isInt: true,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_y_axis_name_rotate_2',
            config: {
              type: 'TextControl',
              label: '坐标轴名字旋转的角度',
              description: '坐标轴名字旋转，角度值',
              default: 0,
              isInt: true,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_y_axis_label_rotate_2',
            config: {
              type: 'TextControl',
              label: '刻度标签旋转的角度',
              description: '旋转的角度从 -90 度到 90 度',
              default: 0,
              isInt: true,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_y_axis_inverse_2',
            config: {
              type: 'CheckboxControl',
              label: '是否是反向坐标轴',
              default: false,
              renderTrigger: true,
            },
          },
        ],
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
