export default function transformProps(chartProps) {
  const { width, height, formData, queriesData } = chartProps;
  return {
    width,
    height,
    config: formData,
    data: queriesData[0].data,
  };
}
