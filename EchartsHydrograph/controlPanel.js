import { sections } from '@superset-ui/chart-controls';
import controls from '../controls';

const { echartsBackgroundColor } = controls;

export default {
  controlPanelSections: [
    sections.legacyTimeseriesTime,
    {
      label: '配置选项',
      expanded: true,
      controlSetRows: [['metric'], ['adhoc_filters'], [echartsBackgroundColor]],
    },
    {
      label: '水位图配置',
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'echarts_hydrograph_shape',
            config: {
              type: 'SelectControl',
              label: '形状',
              default: 'circle',
              choices: [
                ['circle', '圆形'],
                ['rect', '方形'],
                ['roundRect', '圆角矩形'],
                ['triangle', '三角形'],
                ['diamond', '菱形'],
                ['pin', '水滴'],
                ['arrow', '箭头'],
                ['container', '填满整个容器'],
                ['none', '无'],
              ],
              clearable: false,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_hydrograph_font_size',
            config: {
              type: 'TextControl',
              label: '字体大小',
              default: 36,
              isInt: true,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_hydrograph_font_weight',
            config: {
              type: 'SelectControl',
              label: '字体粗细',
              default: 'bold',
              choices: [
                ['lighter', 'lighter'],
                ['normal', 'normal'],
                ['bold', 'bold'],
              ],
              clearable: false,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_hydrograph_inside_color',
            config: {
              type: 'ColorPickerControl',
              label: '字体被水位渗透时的颜色',
              default: { r: 255, g: 255, b: 255, a: 0.9 },
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_hydrograph_background_color',
            config: {
              type: 'ColorPickerControl',
              label: '背景色',
              default: { r: 227, g: 247, b: 255, a: 1 },
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_hydrograph_warning_threshold',
            config: {
              type: 'TextControl',
              label: '警告阈值',
              description:
                '设置后当水位值低于该值，水位的颜色为警告色（取值范围：0～1）',
              default: null,
              isFloat: true,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_hydrograph_danger_threshold',
            config: {
              type: 'TextControl',
              label: '危险阈值',
              description:
                '设置后当水位值低于该值，水位的颜色为危险色，优先级比警告阈值高（取值范围：0～1）',
              default: null,
              isFloat: true,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_hydrograph_threshold_sort',
            config: {
              type: 'SelectControl',
              label: '阈值排序',
              default: '升序',
              choices: [
                ['升序', '升序'],
                ['降序', '降序'],
              ],
              clearable: false,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_hydrograph_theme_color',
            config: {
              type: 'ColorPickerControl',
              label: '主题色',
              default: { r: 64, g: 158, b: 255, a: 1 },
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_hydrograph_warning_color',
            config: {
              type: 'ColorPickerControl',
              label: '警告色',
              default: { r: 230, g: 162, b: 60, a: 1 },
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_hydrograph_danger_color',
            config: {
              type: 'ColorPickerControl',
              label: '危险色',
              default: { r: 245, g: 108, b: 108, a: 1 },
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_hydrograph_theme_color_gradient',
            config: {
              type: 'ColorPickerControl',
              label: '主题色（渐变）',
              default: { r: 236, g: 245, b: 255, a: 1 },
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_hydrograph_warning_color_gradient',
            config: {
              type: 'ColorPickerControl',
              label: '警告色（渐变）',
              default: { r: 253, g: 246, b: 236, a: 1 },
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_hydrograph_danger_color_gradient',
            config: {
              type: 'ColorPickerControl',
              label: '危险色（渐变）',
              default: { r: 254, g: 240, b: 240, a: 1 },
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_hydrograph_outline_show',
            config: {
              type: 'CheckboxControl',
              label: '是否展示轮廓边框',
              default: false,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_hydrograph_outline_border_width',
            config: {
              type: 'TextControl',
              label: '边框宽',
              default: 5,
              isInt: true,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_hydrograph_outline_border_distance',
            config: {
              type: 'TextControl',
              label: '边框间隔',
              default: 3,
              isInt: true,
              renderTrigger: true,
            },
          },
        ],
      ],
    },
  ],
};
