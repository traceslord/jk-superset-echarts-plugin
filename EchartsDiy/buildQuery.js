import { buildQueryContext } from '@superset-ui/core';

export default function buildQuery(formData) {
  return buildQueryContext(formData, {
    queryFields: {
      echarts_preprocessing_data: 'columns',
    },
  });
}
