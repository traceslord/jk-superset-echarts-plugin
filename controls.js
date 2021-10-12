import React from 'react';
import { validateNonEmpty } from '@superset-ui/core';
import { ColumnOption, formatSelectOptions } from '@superset-ui/chart-controls';

export function columnChoices(datasource) {
  if (datasource && datasource.columns) {
    return datasource.columns
      .map(col => [col.column_name, col.verbose_name || col.column_name])
      .sort((opt1, opt2) =>
        opt1[1].toLowerCase() > opt2[1].toLowerCase() ? 1 : -1,
      );
  }
  return [];
}

export const FIGURE_SHAPE = [
  ['circle', '圆形'],
  ['emptyCircle', '空心圆形'],
  ['rect', '方形'],
  ['emptyRect', '空心方形'],
  ['roundRect', '圆角矩形'],
  ['emptyRoundRect', '空心圆角矩形'],
  ['triangle', '三角形'],
  ['emptyTriangle', '空心三角形'],
  ['diamond', '菱形'],
  ['emptyDiamond', '空心菱形'],
  ['pin', '水滴'],
  ['emptyPin', '空心水滴'],
  ['arrow', '箭头'],
  ['emptyArrow', '空心箭头'],
  ['none', '无'],
];

const controls = {
  echartsIndicator: {
    name: 'echarts_indicator',
    config: {
      type: 'SelectControl',
      label: '指标',
      description: '所要显示的指标',
      default: null,
      mapStateToProps: state => ({
        choices: columnChoices(state.datasource),
      }),
      validators: [validateNonEmpty],
    },
  },
  echartsIndicators: {
    name: 'echarts_indicators',
    config: {
      type: 'SelectControl',
      label: '指标',
      description: '所要显示的指标',
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
      validators: [validateNonEmpty],
    },
  },
  echartsX: {
    name: 'echarts_x',
    config: {
      type: 'SelectControl',
      label: 'X 轴',
      description: 'X 轴要显示的列',
      default: null,
      mapStateToProps: state => ({
        choices: columnChoices(state.datasource),
      }),
      validators: [validateNonEmpty],
    },
  },
  echartsY: {
    name: 'echarts_y',
    config: {
      type: 'SelectControl',
      label: 'Y 轴',
      description: 'Y 轴要显示的列',
      default: null,
      mapStateToProps: state => ({
        choices: columnChoices(state.datasource),
      }),
      validators: [validateNonEmpty],
    },
  },
  echartsYLeft: {
    name: 'echarts_y_left',
    config: {
      type: 'SelectControl',
      label: 'Y 轴（左）',
      description: '左 Y 轴要显示的列',
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
      validators: [validateNonEmpty],
    },
  },
  echartsYRight: {
    name: 'echarts_y_right',
    config: {
      type: 'SelectControl',
      label: 'Y 轴（右）',
      description: '右 Y 轴要显示的列',
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
  echartsSelect: {
    name: 'echarts_select',
    config: {
      type: 'SelectControl',
      label: '选择器',
      description: '根据其可筛选对应数据',
      default: null,
      mapStateToProps: state => ({
        choices: columnChoices(state.datasource),
      }),
    },
  },
  echartsPicker: {
    name: 'echarts_picker',
    config: {
      type: 'SelectControl',
      label: '时间选择器',
      default: null,
      mapStateToProps: state => ({
        choices: state.datasource ? state.datasource.granularity_sqla : [],
      }),
    },
  },
  echartsGroupby: {
    name: 'echarts_groupby',
    config: {
      type: 'SelectControl',
      label: '分组',
      default: null,
      mapStateToProps: state => ({
        choices: columnChoices(state.datasource),
      }),
    },
  },
  echartsGroupbyAggregate: {
    name: 'echarts_groupby_aggregate',
    config: {
      type: 'SelectControl',
      label: '聚合',
      default: 'SUM',
      choices: formatSelectOptions([
        'AVG',
        'COUNT',
        'COUNT_DISTINCT',
        'MAX',
        'MIN',
        'SUM',
      ]),
      clearable: false,
    },
  },
  echartsSort: {
    name: 'echarts_sort',
    config: {
      type: 'SelectControl',
      label: '排序',
      description: '设置后根据此字段进行升序',
      default: null,
      mapStateToProps: state => ({
        choices: columnChoices(state.datasource),
      }),
    },
  },
  echartsOrder: {
    name: 'echarts_order',
    config: {
      type: 'SelectControl',
      label: '排序顺序',
      default: '升序',
      choices: formatSelectOptions(['升序', '降序']),
      clearable: false,
    },
  },
  echartsBackgroundColor: {
    name: 'echarts_background_color',
    config: {
      type: 'ColorPickerControl',
      label: '背景色',
      default: { r: 0, g: 0, b: 0, a: 0 },
    },
  },

  // 数据预处理
  echartsDataPreprocessing: {
    name: 'echarts_data_preprocessing',
    config: {
      type: 'TextAreaControl',
      language: 'javascript',
      label: '查询结果预处理',
      description: '使用函数形式，参数约定为 params',
      default: '',
    },
  },

  // 图例组件
  echartsLegendShow: {
    name: 'echarts_legend_show',
    config: {
      type: 'CheckboxControl',
      label: '是否显示图例组件',
      default: true,
      renderTrigger: true,
    },
  },
  echartsLegendType: {
    name: 'echarts_legend_type',
    config: {
      type: 'SelectControl',
      label: '图例类型',
      description: '图例的类型',
      default: 'plain',
      choices: [
        ['plain', '普通图例'],
        ['scroll', '可滚动翻页的图例'],
      ],
      clearable: false,
      renderTrigger: true,
    },
  },
  echartsLegendTop: {
    name: 'echarts_legend_top',
    config: {
      type: 'TextControl',
      label: '上',
      description: '图例组件离容器上侧的距离',
      default: 'auto',
      renderTrigger: true,
    },
  },
  echartsLegendBottom: {
    name: 'echarts_legend_bottom',
    config: {
      type: 'TextControl',
      label: '下',
      description: '图例组件离容器下侧的距离',
      default: 'auto',
      renderTrigger: true,
    },
  },
  echartsLegendLeft: {
    name: 'echarts_legend_left',
    config: {
      type: 'TextControl',
      label: '左',
      description: '图例组件离容器左侧的距离',
      default: 'center',
      renderTrigger: true,
    },
  },
  echartsLegendRight: {
    name: 'echarts_legend_right',
    config: {
      type: 'TextControl',
      label: '右',
      description: '图例组件离容器右侧的距离',
      default: 'auto',
      renderTrigger: true,
    },
  },
  echartsLegendWidth: {
    name: 'echarts_legend_width',
    config: {
      type: 'TextControl',
      label: '组件宽度',
      description: '图例组件的宽度',
      default: 'auto',
      renderTrigger: true,
    },
  },
  echartsLegendHeight: {
    name: 'echarts_legend_height',
    config: {
      type: 'TextControl',
      label: '组件高度',
      description: '图例组件的高度',
      default: 'auto',
      renderTrigger: true,
    },
  },
  echartsLegendOrient: {
    name: 'echarts_legend_orient',
    config: {
      type: 'SelectControl',
      label: '布局朝向',
      description: '图例列表的布局朝向',
      default: 'horizontal',
      choices: [
        ['horizontal', '水平'],
        ['vertical', '垂直'],
      ],
      clearable: false,
      renderTrigger: true,
    },
  },
  echartsLegendAlign: {
    name: 'echarts_legend_align',
    config: {
      type: 'SelectControl',
      label: '对齐',
      description: '图例标记和文本的对齐',
      default: 'auto',
      choices: [
        ['auto', '自动'],
        ['left', '左对齐'],
        ['right', '右对齐'],
      ],
      clearable: false,
      renderTrigger: true,
    },
  },
  echartsLegendPaddingTop: {
    name: 'echarts_legend_padding_top',
    config: {
      type: 'TextControl',
      label: '上内边距',
      description: '图例组件的上内边距',
      default: 5,
      isInt: true,
      renderTrigger: true,
    },
  },
  echartsLegendPaddingBottom: {
    name: 'echarts_legend_padding_bottom',
    config: {
      type: 'TextControl',
      label: '下内边距',
      description: '图例组件的下内边距',
      default: 5,
      isInt: true,
      renderTrigger: true,
    },
  },
  echartsLegendPaddingLeft: {
    name: 'echarts_legend_padding_left',
    config: {
      type: 'TextControl',
      label: '左内边距',
      description: '图例组件的左内边距',
      default: 5,
      isInt: true,
      renderTrigger: true,
    },
  },
  echartsLegendPaddingRight: {
    name: 'echarts_legend_padding_right',
    config: {
      type: 'TextControl',
      label: '右内边距',
      description: '图例组件的右内边距',
      default: 5,
      isInt: true,
      renderTrigger: true,
    },
  },
  echartsLegendItemGap: {
    name: 'echarts_legend_item_gap',
    config: {
      type: 'TextControl',
      label: '图形间隔',
      description: '图例每项之间的间隔',
      default: 25,
      isInt: true,
      renderTrigger: true,
    },
  },
  echartsLegendItemWidth: {
    name: 'echarts_legend_item_width',
    config: {
      type: 'TextControl',
      label: '图形宽度',
      description: '图例标记的图形宽度',
      default: 15,
      isInt: true,
      renderTrigger: true,
    },
  },
  echartsLegendItemHeight: {
    name: 'echarts_legend_item_height',
    config: {
      type: 'TextControl',
      label: '图形高度',
      description: '图例标记的图形高度',
      default: 15,
      isInt: true,
      renderTrigger: true,
    },
  },
  echartsLegendNotSelected: {
    name: 'echarts_legend_not_selected',
    config: {
      type: 'SelectControl',
      label: '默认不选中状态',
      description: '图例默认不选中状态',
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
      renderTrigger: true,
    },
  },
  echartsLegendIcon: {
    name: 'echarts_legend_icon',
    config: {
      type: 'SelectControl',
      label: '图例项 ICON',
      description: '图例项的 icon',
      default: 'circle',
      choices: FIGURE_SHAPE,
      clearable: false,
      renderTrigger: true,
    },
  },

  // 图例组件
  echartsGridShow: {
    name: 'echarts_grid_show',
    config: {
      type: 'CheckboxControl',
      label: '是否显示直角坐标系网格',
      default: true,
      renderTrigger: true,
    },
  },
  echartsGridTop: {
    name: 'echarts_grid_top',
    config: {
      type: 'TextControl',
      label: '上',
      description: '网格组件离容器上侧的距离',
      default: 60,
      renderTrigger: true,
    },
  },
  echartsGridBottom: {
    name: 'echarts_grid_bottom',
    config: {
      type: 'TextControl',
      label: '下',
      description: '网格组件离容器下侧的距离',
      default: 60,
      renderTrigger: true,
    },
  },
  echartsGridLeft: {
    name: 'echarts_grid_left',
    config: {
      type: 'TextControl',
      label: '左',
      description: '网格组件离容器左侧的距离',
      default: '10%',
      renderTrigger: true,
    },
  },
  echartsGridRight: {
    name: 'echarts_grid_right',
    config: {
      type: 'TextControl',
      label: '右',
      description: '网格组件离容器右侧的距离',
      default: '10%',
      renderTrigger: true,
    },
  },
  echartsGridWidth: {
    name: 'echarts_grid_width',
    config: {
      type: 'TextControl',
      label: '组件宽度',
      description: '网格组件的宽度',
      default: 'auto',
      renderTrigger: true,
    },
  },
  echartsGridHeight: {
    name: 'echarts_grid_height',
    config: {
      type: 'TextControl',
      label: '组件高度',
      description: '网格组件的高度',
      default: 'auto',
      renderTrigger: true,
    },
  },
  echartsGridBorderWidth: {
    name: 'echarts_grid_border_width',
    config: {
      type: 'TextControl',
      label: '网格边框线宽',
      description: '网格的边框线宽',
      default: 1,
      isInt: true,
      renderTrigger: true,
    },
  },
  echartsGridBorderColor: {
    name: 'echarts_grid_border_color',
    config: {
      type: 'ColorPickerControl',
      label: '网格边框颜色',
      default: { r: 204, g: 204, b: 204, a: 1 },
      renderTrigger: true,
    },
  },
  echartsGridBackgroundColor: {
    name: 'echarts_grid_background_color',
    config: {
      type: 'ColorPickerControl',
      label: '网格背景色',
      default: { r: 0, g: 0, b: 0, a: 0 },
      renderTrigger: true,
    },
  },
  echartsGridContainLabel: {
    name: 'echarts_grid_contain_label',
    config: {
      type: 'CheckboxControl',
      label: '网格区域是否包含坐标轴的刻度标签',
      default: true,
      renderTrigger: true,
    },
  },

  // X 轴
  echartsXAxisShow: {
    name: 'echarts_x_axis_show',
    config: {
      type: 'CheckboxControl',
      label: '是否显示 x 轴',
      default: true,
      renderTrigger: true,
    },
  },
  echartsXAxisName: {
    name: 'echarts_x_axis_name',
    config: {
      type: 'TextControl',
      label: '坐标轴名称',
      default: '',
      renderTrigger: true,
    },
  },
  echartsXAxisNameLocation: {
    name: 'echarts_x_axis_name_location',
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
  echartsXAxisNameGap: {
    name: 'echarts_x_axis_name_gap',
    config: {
      type: 'TextControl',
      label: '名称与轴线的间距',
      description: '坐标轴名称与轴线之间的距离',
      default: 15,
      isInt: true,
      renderTrigger: true,
    },
  },
  echartsXAxisNameRotate: {
    name: 'echarts_x_axis_name_rotate',
    config: {
      type: 'TextControl',
      label: '坐标轴名字旋转的角度',
      description: '坐标轴名字旋转，角度值',
      default: 0,
      isInt: true,
      renderTrigger: true,
    },
  },
  echartsXAxisLabelRotate: {
    name: 'echarts_x_axis_label_rotate',
    config: {
      type: 'TextControl',
      label: '刻度标签旋转的角度',
      description: '旋转的角度从 -90 度到 90 度',
      default: 0,
      isInt: true,
      renderTrigger: true,
    },
  },
  echartsXAxisInverse: {
    name: 'echarts_x_axis_inverse',
    config: {
      type: 'CheckboxControl',
      label: '是否是反向坐标轴',
      default: false,
      renderTrigger: true,
    },
  },
  echartsXAxisDataFormat: {
    name: 'echarts_x_axis_data_format',
    config: {
      type: 'CheckboxControl',
      label: '是否规范刻度标签的时间格式',
      default: false,
      renderTrigger: true,
    },
  },
  echartsXAxisDataFormatType: {
    name: 'echarts_x_axis_data_format_type',
    config: {
      type: 'SelectControl',
      label: '刻度标签的时间格式',
      default: 'day',
      choices: [
        ['day', '日'],
        ['month', '月'],
        ['season', '季'],
        ['year', '年'],
      ],
      renderTrigger: true,
    },
  },
  echartsXAxisLabelInterval: {
    name: 'echarts_x_axis_label_interval',
    config: {
      type: 'TextControl',
      label: '刻度标签的显示间隔',
      description:
        '设置成 auto，默认会采用标签不重叠的策略间隔显示标签；设置成 0 强制显示所有标签，设置为 1，表示『隔一个标签显示一个标签』；也可以通过回调函数控制。',
      default: 'auto',
      renderTrigger: true,
    },
  },

  // Y 轴
  echartsYAxisShow: {
    name: 'echarts_y_axis_show',
    config: {
      type: 'CheckboxControl',
      label: '是否显示 y 轴',
      default: true,
      renderTrigger: true,
    },
  },
  echartsYAxisName: {
    name: 'echarts_y_axis_name',
    config: {
      type: 'TextControl',
      label: '坐标轴名称',
      default: '',
      renderTrigger: true,
    },
  },
  echartsYAxisNameLocation: {
    name: 'echarts_y_axis_name_location',
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
  echartsYAxisNameGap: {
    name: 'echarts_y_axis_name_gap',
    config: {
      type: 'TextControl',
      label: '名称与轴线的间距',
      description: '坐标轴名称与轴线之间的距离',
      default: 15,
      isInt: true,
      renderTrigger: true,
    },
  },
  echartsYAxisNameRotate: {
    name: 'echarts_y_axis_name_rotate',
    config: {
      type: 'TextControl',
      label: '坐标轴名字旋转的角度',
      description: '坐标轴名字旋转，角度值',
      default: 0,
      isInt: true,
      renderTrigger: true,
    },
  },
  echartsYAxisLabelRotate: {
    name: 'echarts_y_axis_label_rotate',
    config: {
      type: 'TextControl',
      label: '刻度标签旋转的角度',
      description: '旋转的角度从 -90 度到 90 度',
      default: 0,
      isInt: true,
      renderTrigger: true,
    },
  },
  echartsYAxisLabelInterval: {
    name: 'echarts_y_axis_label_interval',
    config: {
      type: 'TextControl',
      label: '刻度标签的显示间隔',
      description:
        '设置成 auto，默认会采用标签不重叠的策略间隔显示标签；设置成 0 强制显示所有标签，设置为 1，表示『隔一个标签显示一个标签』；也可以通过回调函数控制。',
      default: 'auto',
      renderTrigger: true,
    },
  },
  echartsYAxisInverse: {
    name: 'echarts_y_axis_inverse',
    config: {
      type: 'CheckboxControl',
      label: '是否是反向坐标轴',
      default: false,
      renderTrigger: true,
    },
  },

  // 提示框组件
  echartsTooltipShow: {
    name: 'echarts_tooltip_show',
    config: {
      type: 'CheckboxControl',
      label: '是否显示提示框组件',
      default: true,
      renderTrigger: true,
    },
  },
  echartsTooltipTrigger: {
    name: 'echarts_tooltip_trigger',
    config: {
      type: 'SelectControl',
      label: '触发类型',
      default: 'item',
      choices: [
        ['item', '数据项图形触发'],
        ['axis', '坐标轴触发'],
        ['none', '什么都不触发'],
      ],
      clearable: false,
      renderTrigger: true,
    },
  },
  echartsTooltipTriggerOn: {
    name: 'echarts_tooltip_trigger_on',
    config: {
      type: 'SelectControl',
      label: '触发条件',
      default: 'mousemove|click',
      choices: [
        ['mousemove', '鼠标移动时触发'],
        ['click', '鼠标点击时触发'],
        ['mousemove|click', '鼠标移动和点击时都触发'],
        ['none', '鼠标移动和点击时都不触发'],
      ],
      clearable: false,
      renderTrigger: true,
    },
  },
  echartsTooltipAxisPointerType: {
    name: 'echarts_tooltip_axis_pointer_type',
    config: {
      type: 'SelectControl',
      label: '指示器类型',
      default: 'line',
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
  echartsTooltipFormatter: {
    name: 'echarts_tooltip_formatter',
    config: {
      type: 'TextAreaControl',
      language: 'javascript',
      label: '提示框浮层内容格式器',
      description: '支持字符串模板和回调函数两种形式',
      default: '',
      renderTrigger: true,
    },
  },
  echartsTooltipPaddingTop: {
    name: 'echarts_tooltip_padding_top',
    config: {
      type: 'TextControl',
      label: '上内边距',
      description: '提示框浮层的上内边距',
      default: 5,
      isInt: true,
      renderTrigger: true,
    },
  },
  echartsTooltipPaddingBottom: {
    name: 'echarts_tooltip_padding_bottom',
    config: {
      type: 'TextControl',
      label: '下内边距',
      description: '提示框浮层的下内边距',
      default: 5,
      isInt: true,
      renderTrigger: true,
    },
  },
  echartsTooltipPaddingLeft: {
    name: 'echarts_tooltip_padding_left',
    config: {
      type: 'TextControl',
      label: '左内边距',
      description: '提示框浮层的左内边距',
      default: 5,
      isInt: true,
      renderTrigger: true,
    },
  },
  echartsTooltipPaddingRight: {
    name: 'echarts_tooltip_padding_right',
    config: {
      type: 'TextControl',
      label: '右内边距',
      description: '提示框浮层的右内边距',
      default: 5,
      isInt: true,
      renderTrigger: true,
    },
  },
  echartsTooltipBorderWidth: {
    name: 'echarts_tooltip_border_width',
    config: {
      type: 'TextControl',
      label: '边框宽',
      description: '提示框浮层的边框宽',
      default: 0,
      isInt: true,
      renderTrigger: true,
    },
  },
  echartsTooltipBorderColor: {
    name: 'echarts_tooltip_border_color',
    config: {
      type: 'ColorPickerControl',
      label: '边框色',
      description: '提示框浮层的边框颜色',
      default: { r: 51, g: 51, b: 51, a: 1 },
      renderTrigger: true,
    },
  },
  echartsTooltipBackgroundColor: {
    name: 'echarts_tooltip_background_color',
    config: {
      type: 'ColorPickerControl',
      label: '背景色',
      description: '提示框浮层的背景颜色',
      default: { r: 50, g: 50, b: 50, a: 0.7 },
      renderTrigger: true,
    },
  },
  echartsTooltipTextStyleColor: {
    name: 'echarts_tooltip_text_style_color',
    config: {
      type: 'ColorPickerControl',
      label: '文本色',
      description: '提示框浮层的文字颜色',
      default: { r: 255, g: 255, b: 255, a: 1 },
      renderTrigger: true,
    },
  },

  // 工具栏
  echartsToolboxFeatureSaveAsImageShow: {
    name: 'echarts_toolbox_feature_save_as_image_show',
    config: {
      type: 'CheckboxControl',
      label: '导出图片',
      description: '保存为图片',
      default: true,
      renderTrigger: true,
    },
  },
  echartsToolboxFeatureDataViewShow: {
    name: 'echarts_toolbox_feature_data_view_show',
    config: {
      type: 'CheckboxControl',
      label: '数据视图',
      description: '可以展现当前图表所用的数据，编辑后可以动态更新',
      default: true,
      renderTrigger: true,
    },
  },
  echartsToolboxFeatureMagicTypeShow: {
    name: 'echarts_toolbox_feature_magic_type_show',
    config: {
      type: 'CheckboxControl',
      label: '动态类型切换',
      description: '可切换为折线图、柱状图、堆叠模式、平铺模式',
      default: false,
      renderTrigger: true,
    },
  },
  echartsToolboxFeatureDataZoomShow: {
    name: 'echarts_toolbox_feature_data_zoom_show',
    config: {
      type: 'CheckboxControl',
      label: '数据区域缩放',
      description: '目前只支持直角坐标系的缩放',
      default: false,
      renderTrigger: true,
    },
  },
  echartsToolboxFeatureRestoreShow: {
    name: 'echarts_toolbox_feature_restore_show',
    config: {
      type: 'CheckboxControl',
      label: '重置',
      description: '配置项还原',
      default: false,
      renderTrigger: true,
    },
  },
};

export default controls;
