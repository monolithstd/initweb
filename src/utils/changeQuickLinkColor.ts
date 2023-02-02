//Initialisation

const QLNumbers = Array.from(document.querySelectorAll<HTMLElement>('.ql_number'));
const QLIntitules = Array.from(document.querySelectorAll<HTMLElement>('.ql_intitule'));

export function changeQLColortoBlackonOrange() {
  QLNumbers.forEach(function (item) {
    item.style.color = 'rgba(14,17,22,0.6)';
  });
  QLIntitules.forEach(function (item) {
    item.style.color = 'rgba(14,17,22,0.3)';
  });
}
export function changeQLColortoBlackonLight() {
  QLNumbers.forEach(function (item) {
    item.style.color = 'rgba(14,17,22,0.6)';
  });
  QLIntitules.forEach(function (item) {
    item.style.color = 'rgba(14,17,22,0.3)';
  });
}

export function changeQLColortoWhite() {
  QLNumbers.forEach(function (item) {
    item.style.color = 'rgba(256,256,256,0.6)';
  });
  QLIntitules.forEach(function (item) {
    item.style.color = 'rgba(256,256,256,0.3)';
  });
}
