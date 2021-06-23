import { buildQueryContext } from '@superset-ui/core';

export default function buildQuery(formData) {
  return buildQueryContext(formData, {
    queryFields: {
      echarts_x: 'columns',
      echarts_y_left: 'columns',
      echarts_y_right: 'columns',
      echarts_select: 'columns',
      echarts_picker: 'columns',
      echarts_groupby: 'columns',
      echarts_sort: 'columns',
    },
  });
}
