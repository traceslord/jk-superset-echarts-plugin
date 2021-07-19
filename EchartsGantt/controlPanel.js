import React from 'react';
import { validateNonEmpty } from '@superset-ui/core';
import { sections, ColumnOption } from '@superset-ui/chart-controls';
import controls, { columnChoices } from '../controls';

const {
  echartsY,
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

  echartsYAxisShow,
  echartsYAxisName,
  echartsYAxisNameLocation,
  echartsYAxisNameGap,
  echartsYAxisNameRotate,
  echartsYAxisLabelRotate,
  echartsYAxisInverse,

  echartsTooltipShow,
  echartsTooltipTriggerOn,
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
        [
          {
            name: 'echarts_start_time',
            config: {
              type: 'SelectControl',
              label: '计划开始时间',
              description: '计划开始的时间',
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
            name: 'echarts_end_time',
            config: {
              type: 'SelectControl',
              label: '计划结束时间',
              description: '计划结束的时间',
              default: null,
              mapStateToProps: state => ({
                choices: columnChoices(state.datasource),
              }),
            },
          },
          {
            name: 'echarts_plan_period',
            config: {
              type: 'TextControl',
              label: '计划周期（天）',
              description:
                '如果没有计划结束时间，则其值为计划开始时间 + 计划周期',
              default: 100,
              isInt: true,
            },
          },
        ],
        [
          {
            name: 'echarts_x',
            config: {
              type: 'SelectControl',
              label: '当前进度',
              description: '计划当前的进度',
              default: null,
              mapStateToProps: state => ({
                choices: columnChoices(state.datasource),
              }),
              validators: [validateNonEmpty],
            },
          },
        ],
        [echartsY],
        [
          {
            name: 'echarts_indicators',
            config: {
              type: 'SelectControl',
              label: '其他指标',
              description: '提示框要显示的其他指标',
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
        ['adhoc_filters'],
        [echartsBackgroundColor],
      ],
    },
    {
      label: '甘特图配置',
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'echarts_gantt_progress',
            config: {
              type: 'ColorPickerControl',
              label: '进度色',
              description: '计划进度的颜色',
              default: { r: 24, g: 144, b: 255, a: 1 },
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_gantt_period',
            config: {
              type: 'ColorPickerControl',
              label: '周期色',
              description: '计划周期的颜色',
              default: { r: 203, g: 223, b: 246, a: 1 },
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_gantt_hidden',
            config: {
              type: 'ColorPickerControl',
              label: '隐藏色',
              description: '应与底层背景色保持一致',
              default: { r: 255, g: 255, b: 255, a: 1 },
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_mark_line_formatter_prefix',
            config: {
              type: 'TextControl',
              label: '图表标线内容前缀',
              description: '图表标线内容的前缀',
              default: '今天：',
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_mark_line_formatter_num',
            config: {
              type: 'TextControl',
              label: '图表标线日期差值（天）',
              description:
                '图表标线内容的日期差值（展示日期 = 当地日期 - 差值）',
              default: 0,
              isInt: true,
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
      ],
    },
    {
      label: 'Y 轴',
      controlSetRows: [
        [echartsYAxisShow],
        [echartsYAxisName],
        [echartsYAxisNameLocation, echartsYAxisNameGap],
        [echartsYAxisNameRotate, echartsYAxisLabelRotate],
        [
          {
            name: 'echarts_y_axis_label_formatter',
            config: {
              type: 'TextAreaControl',
              language: 'javascript',
              label: '刻度标签内容格式器',
              description: '支持字符串模板和回调函数两种形式',
              default: `str => {
  const arr = str.split('|||');
  let value = arr[0].split('：')[1];
  let newValue = '';
  const num = 15;
  const row = Math.ceil(value.length / num);
  if (value.length > num) {
    for (let i = 0; i < row; i++) {
      let valueSlice = '';
      if (i === row - 1) {
        valueSlice = value.slice(num * i, value.length);
      } else {
        valueSlice = value.slice(num * i, num * (i + 1)) + '\\n';
      }
      newValue += valueSlice;
    }
  } else {
    newValue = value;
  }
  return newValue;
};`,
              renderTrigger: true,
            },
          },
        ],
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
        [
          {
            name: 'echarts_tooltip_formatter',
            config: {
              type: 'TextAreaControl',
              language: 'javascript',
              label: '提示框浮层内容格式器',
              description: '支持字符串模板和回调函数两种形式',
              default: `params => {
  const formatNumber = (num) => {
    const n = num.toString();
    return n[1] ? n : '0' + n;
  };
  const formatDay = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return [year, month, day].map(formatNumber).join('-');
  };
  const progress = ((params[2].value - params[0].value) / (params[1].value - params[0].value)) * 100;
  const otherData = Object.keys(params[3].data).map((data, index) => {
    return data + '：' + Object.values(params[3].data)[index] + '<br />';
  }).join('');
  let res = params[0].name.split('|||')[0].split('：')[1] + '：<br />';
  res += '计划开始时间：' + formatDay(params[0].value) + '<br />';
  res += '计划结束时间：' + formatDay(params[1].value) + '<br />';
  res += params[2].seriesName + '：' + progress + '<br />';
  res += otherData;
  return res;
};`,
              renderTrigger: true,
            },
          },
        ],
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
