export const information = function (img, content) {
  return '<div class="box" style="width: 200px;">' +
    '<div class="box-up" style="padding: 0.2rem 0; padding-left: 0.2rem; background-color: #c4c4c4;">' +
    '<div class="row1" style="width: 100%; font-size: 0.875rem; padding-top: 0.2rem; display: flex; flex-direction: row;">' +
    ' <div class="d1" style="text-align: left; padding-left: 0rem; width: 5.625rem; color: black;">编 号</div>' +
    '<div class="d2">：</div>' +
    '<span class="sp" style="padding-top: 0.2rem;">' + content.cord + '</span>' +
    '</div>' +
    '<div class="row1" style="width: 100%; font-size: 0.875rem; padding-top: 0.2rem; display: flex; flex-direction: row;">' +
    '<div class="d1" style="text-align: left; padding-left: 0rem; width: 5.625rem; color: black;">状 态</div>' +
    '<div class="d2">：</div>' + content.status + '' +
    '<img src="' + img + '" style="height: 1.25rem">' +
    '</div>' +
    '<div class="row1" style="width: 100%; font-size: 0.875rem; padding-top: 0.2rem; display: flex; flex-direction: row;">' +
    '<div class="d1" style="text-align: left; padding-left: 0rem; width: 5.625rem; color: black;">金属塑料玻璃</div>' +
    '<div class="d2">：</div>' +
    '<span style="padding-top: 0.2rem;">' +
    content.metal +
    '<span style="color: gray">/100kg</span>' +
    '</span>' +
    '</div>' +
    '<div class="row1" style="width: 100%; font-size: 0.875rem; padding-top: 0.2rem; display: flex; flex-direction: row;">' +
    '<div class="d1" style="text-align: left; padding-left: 0rem; width: 5.625rem; color: black;">纸张纺织物</div>' +
    '<div class="d2">：</div>' +
    '<span style="padding-top: 0.2rem;">' +
    content.paper +
    '<span style="color: gray">/100kg</span>' +
    '</span>' +
    '</div>' +
    '<div class="row1" style="width: 100%; font-size: 0.875rem; padding-top: 0.2rem; display: flex; flex-direction: row;">' +
    '<div class="d1" style="text-align: left; padding-left: 0rem; width: 5.625rem; color: black;">厨 余 垃 圾</div>' +
    '<div class="d2">：</div>' +
    '<span style="padding-top: 0.2rem;">' +
    content.kitchenWaste +
    '<span style="color: gray">/100kg</span>' +
    '</span>' +
    '</div>' +
    '<div class="row1" style="width: 100%; font-size: 0.875rem; padding-top: 0.2rem; display: flex; flex-direction: row;">' +
    '<div class="d1" style="text-align: left; padding-left: 0rem; width: 5.625rem; color: black;">其 他 垃 圾</div>' +
    '<div class="d2">：</div>' +
    '<span style="padding-top: 0.2rem;">' +
    content.other +
    '<span style="color: gray">/100kg</span>' +
    '</span>' +
    '</div>' +
    '</div>' +

    '<div class="box-bottom" style="background-color: #c4c4c4; padding-bottom: 0.2rem; margin-top: 0.5rem; padding-left: 0.2rem;">' +
    '<div class="row1" style="width: 100%; font-size: 0.875rem; padding-top: 0.2rem; display: flex; flex-direction: row;">' +
    '<div class="d1" style="text-align: left; padding-left: 0rem; width: 5.625rem; color: black;">回 收 人</div>' +
    '<div class="d2">：</div>' + content.recyclePersonal + '' +
    '</div>' +
    '<div class="row1" style="width: 100%; font-size: 0.875rem; padding-top: 0.2rem; display: flex; flex-direction: row;">' +
    '<div class="d1" style="text-align: left; padding-left: 0rem; width: 5.625rem; color: black;">手机号码</div>' +
    '<div class="d2">：</div>' +
    '<span style="padding-top: 0.2rem;">' + content.phone + '</span>' +
    '</div>' +
    '</div>' +
    '</div>'
}

export const box = {
  'width': '200px',
  'background-color': '#ffffff'
}
export const boxUp = {
  'padding': '0.2rem 0',
  'padding-left': '0.2rem',
  'background-color': '#c4c4c4'
}
export const boxBottom = {
  'background-color': '#c4c4c4',
  'padding-bottom': '0.2rem',
  'margin-top': '0.5rem',
  'padding-left': '0.2rem'
}
export const row1 = {
  'width': '100%',
  'font-size': '0.875rem',
  'padding-top': '0.2rem',
  'display': 'flex',
  'flex-direction': 'row'
}
export const d1 = {
  'text-align': 'left',
  'padding-left': '0rem',
  'width': '5.625rem',
  'color': 'black'
}
export const span = {
  'padding-top': '0.2rem'
}

export const informationCSS = '.box {' +
  'width: 200px; background-color: #ffffff;' +
  '.box-up {' +
  'padding: 0.2rem 0; padding-left: 0.2rem; background-color: #c4c4c4;' +
  '}' +
  '.box-bottom {' +
  'background-color: #c4c4c4; padding-bottom: 0.2rem; margin-top: 0.5rem; padding-left: 0.2rem;' +
  '}' +
  '}' +
  '.row1 {' +
  'width: 100%; font-size: 0.875rem; padding-top: 0.2rem; display: flex; flex-direction: row;' +
  '.d1 {' +
  'text-align: left; padding-left: 0rem; width: 5.625rem; color: black;' +
  '}' +
  'span {' +
  'padding-top: 0.2rem;' +
  '}' +
  '}'