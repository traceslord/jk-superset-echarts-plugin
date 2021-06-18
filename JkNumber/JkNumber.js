import { formatColor } from '../utils/colors';

function jkNumber(element, props) {
  const { config } = props;
  const randomNumber = Math.round(Math.random() * 1000000000000000);
  // eslint-disable-next-line no-new-func
  const formatNumber = new Function(
    'num',
    `return ${config.jkNumberFormatter}`,
  )()(props.data);
  const html = `
  <div
    id="jk-number-${randomNumber}"
    style="
      display: flex;
      align-items: ${config.jkAlignItems};
      justify-content: ${config.jkJustifyContent};
      width: ${props.width}px;
      height: ${props.height}px;
      background: ${formatColor(config.jkBackgroundColor)};
      padding-top: ${Number(config.jkPaddingTop)}px;
      padding-bottom: ${Number(config.jkPaddingBottom)}px;
      padding-left: ${Number(config.jkPaddingLeft)}px;
      padding-right: ${Number(config.jkPaddingRight)}px;
    "
  >
    <div>
      <div
        style="
          font-size: ${Number(config.jkNumberFontSize)}px;
          font-weight: ${config.jkNumberFontWeight};
          color: ${formatColor(config.jkNumberColor)};
        "
      >${config.jkNumberFormatter ? formatNumber : props.data}</div>
      <div
        style="
          margin-top: ${Number(config.jkSpacing)}px;
          font-size: ${Number(config.jkTitleFontSize)}px;
          font-weight: ${config.jkTitleFontWeight};
          color: ${formatColor(config.jkTitleColor)};
        "
      >${config.jkTitle ? config.jkTitle : ''}</div>
    </div>
  </div>`;
  element.innerHTML = html;
}

export default jkNumber;
