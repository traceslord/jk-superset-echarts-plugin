import React from 'react';
import { validateNonEmpty } from '@superset-ui/core';
import { sections, ColumnOption } from '@superset-ui/chart-controls';
import controls, { columnChoices } from '../controls';

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

  echartsYAxisShow,
  echartsYAxisName,
  echartsYAxisNameLocation,
  echartsYAxisNameGap,
  echartsYAxisNameRotate,
  echartsYAxisLabelRotate,
  echartsYAxisInverse,

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
        [echartsX],
        [
          {
            name: 'echarts_y',
            config: {
              type: 'SelectControl',
              label: 'Y 轴',
              description: 'Y 轴要显示的列',
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
        ],
        [
          {
            name: 'echarts_indicator',
            config: {
              type: 'SelectControl',
              label: '名称',
              description: '所要显示的名称',
              default: null,
              mapStateToProps: state => ({
                choices: columnChoices(state.datasource),
              }),
              validators: [validateNonEmpty],
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
      label: '散点图配置',
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'echarts_radius',
            config: {
              type: 'TextControl',
              label: '半径系数（半径：Y 轴 / X 轴 * 系数）',
              description: '气泡半径尺寸的系数',
              default: 1,
              isInt: true,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_regression_type',
            config: {
              type: 'SelectControl',
              label: '回归线类型',
              description: '回归线的类型',
              default: null,
              choices: [
                ['linear', '线性'],
                ['exponential', '指数'],
                ['logarithmic', '对数'],
                ['polynomial', '多项式'],
              ],
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
        [echartsYAxisInverse],
      ],
    },
    {
      label: '提示框组件',
      controlSetRows: [
        [echartsTooltipShow],
        [
          echartsTooltipTrigger,
          echartsTooltipTriggerOn,
          {
            name: 'echarts_tooltip_axis_pointer_type',
            config: {
              type: 'SelectControl',
              label: '指示器类型',
              default: 'cross',
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
