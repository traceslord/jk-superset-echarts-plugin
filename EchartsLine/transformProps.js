export default function transformProps(chartProps) {
  const { width, height, formData, datasource, queriesData } = chartProps;
  return {
    width,
    height,
    config: formData,
    label: datasource.verboseMap,
    data: queriesData[0].data,
  };
}
