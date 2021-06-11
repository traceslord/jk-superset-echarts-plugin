export default function transformProps(chartProps) {
  const { width, height, formData, queriesData } = chartProps;
  const { metric } = formData;
  const metricName = metric && metric.label ? metric.label : metric;
  return {
    width,
    height,
    config: formData,
    data: queriesData[0].data[0][metricName],
  };
}
