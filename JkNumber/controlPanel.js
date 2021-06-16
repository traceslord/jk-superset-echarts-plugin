import { sections } from '@superset-ui/chart-controls';

export default {
  controlPanelSections: [
    sections.legacyTimeseriesTime,
    {
      label: '配置选项',
      expanded: true,
      controlSetRows: [
        ['metric'],
        ['adhoc_filters'],
        [
          {
            name: 'jk_background_color',
            config: {
              type: 'ColorPickerControl',
              label: '背景色',
              default: { r: 255, g: 255, b: 255, a: 1 },
            },
          },
        ],
      ],
    },
    {
      label: '布局',
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'jk_padding_top',
            config: {
              type: 'TextControl',
              label: '上',
              description: '组件离容器上侧的距离',
              default: '24',
              renderTrigger: true,
            },
          },
          {
            name: 'jk_padding_bottom',
            config: {
              type: 'TextControl',
              label: '下',
              description: '组件离容器下侧的距离',
              default: '24',
              renderTrigger: true,
            },
          },
          {
            name: 'jk_padding_left',
            config: {
              type: 'TextControl',
              label: '左',
              description: '组件离容器左侧的距离',
              default: '40',
              renderTrigger: true,
            },
          },
          {
            name: 'jk_padding_right',
            config: {
              type: 'TextControl',
              label: '右',
              description: '组件离容器右侧的距离',
              default: '40',
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'jk_align_items',
            config: {
              type: 'SelectControl',
              label: '垂直',
              description: '垂直方向位置',
              default: 'flex-start',
              choices: [
                ['flex-start', '居上'],
                ['center', '居中'],
                ['flex-end', '居下'],
              ],
              clearable: false,
              renderTrigger: true,
            },
          },
          {
            name: 'jk_justify_content',
            config: {
              type: 'SelectControl',
              label: '水平',
              description: '水平方向位置',
              default: 'flex-start',
              choices: [
                ['flex-start', '居左'],
                ['center', '居中'],
                ['flex-end', '居右'],
              ],
              clearable: false,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'jk_spacing',
            config: {
              type: 'TextControl',
              label: '数字与标题的间距',
              default: '8',
              renderTrigger: true,
            },
          },
        ],
      ],
    },
    {
      label: '数字',
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'jk_number_font_size',
            config: {
              type: 'TextControl',
              label: '字体大小',
              default: '36',
              renderTrigger: true,
            },
          },
          {
            name: 'jk_number_font_weight',
            config: {
              type: 'SelectControl',
              label: '字体粗细',
              default: 'normal',
              choices: [
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
            name: 'jk_number_color',
            config: {
              type: 'ColorPickerControl',
              label: '字体颜色',
              default: { r: 48, g: 49, b: 51, a: 1 },
              renderTrigger: true,
            },
          },
        ],
      ],
    },
    {
      label: '标题',
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'jk_title',
            config: {
              type: 'TextControl',
              label: '标题',
              default: '',
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'jk_title_font_size',
            config: {
              type: 'TextControl',
              label: '字体大小',
              default: '14',
              renderTrigger: true,
            },
          },
          {
            name: 'jk_title_font_weight',
            config: {
              type: 'SelectControl',
              label: '字体粗细',
              default: 'normal',
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
            name: 'jk_title_color',
            config: {
              type: 'ColorPickerControl',
              label: '字体颜色',
              default: { r: 144, g: 147, b: 153, a: 1 },
              renderTrigger: true,
            },
          },
        ],
      ],
    },
  ],
};
