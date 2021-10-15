import { buildQueryContext } from '@superset-ui/core';

export default function buildQuery(formData) {
  return buildQueryContext(formData, {
    queryFields: {
      echarts_x: 'columns',
      echarts_y: 'columns',
      echarts_preprocessing_data: 'columns',
    },
  });
}
