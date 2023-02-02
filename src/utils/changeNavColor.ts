//Initialisation

const navLogo = document.querySelector<HTMLElement>('.nav__logo-init');
const navSource = document.querySelector<HTMLElement>('.nav__source');

const navContentLinks = Array.from(document.querySelectorAll<HTMLElement>('.nav_content_link'));
const navContentTitres = Array.from(document.querySelectorAll<HTMLElement>('.nav_content_titre'));

const btnSecondaire = document.querySelector<HTMLElement>('.btn.secondaire');
const btnPrincipal = document.querySelector<HTMLElement>('.btn.principal');

const navContentLinkNew = document.querySelector<HTMLElement>('.nav_content_link_new');
const navContentLinkText = document.querySelector<HTMLElement>('.nav_content_link_text');
const navContentLinkExergue = document.querySelector<HTMLElement>('.nav_content_link.exergue');

export function changeNavColortoBlackonOrange() {
  navLogo.style.color = 'rgba(14,17,22,1)';
  navSource.style.color = 'rgba(14,17,22,1)';

  navContentLinks.forEach(function (item) {
    item.style.color = 'rgba(14,17,22,0.6)';
  });
  navContentTitres.forEach(function (item) {
    item.style.color = 'rgba(14,17,22,0.3)';
  });

  btnSecondaire.style.color = 'rgba(14,17,22,1)';
  btnSecondaire.style.borderColor = 'rgba(14,17,22,1)';

  btnPrincipal.style.color = 'rgba(255,102,15,1)';
  btnPrincipal.style.backgroundColor = 'rgba(14,17,22,1)';
  btnPrincipal.style.borderColor = 'rgba(14,17,22,1)';

  navContentLinkNew.style.color = 'rgba(14,17,22,1)';
  navContentLinkNew.style.borderColor = 'rgba(14,17,22,0.3)';
  navContentLinkText.style.color = 'rgba(14,17,22,1)';
  navContentLinkExergue.style.backgroundColor = 'rgba(14,17,22,0.15)';
  navContentLinkExergue.style.borderColor = 'rgba(14,17,22,0.3)';
}
export function changeNavColortoBlackonLight() {
  navLogo.style.color = 'rgba(14,17,22,1)';
  navSource.style.color = 'rgba(14,17,22,1)';

  navContentLinks.forEach(function (item) {
    item.style.color = 'rgba(14,17,22,0.6)';
  });
  navContentTitres.forEach(function (item) {
    item.style.color = 'rgba(14,17,22,0.3)';
  });

  btnSecondaire.style.color = 'rgba(14,17,22,1)';
  btnSecondaire.style.borderColor = 'rgba(14,17,22,1)';

  btnPrincipal.style.color = 'rgba(255,102,15,1)';
  btnPrincipal.style.backgroundColor = 'rgba(14,17,22,1)';
  btnPrincipal.style.borderColor = 'rgba(14,17,22,1)';

  navContentLinkNew.style.color = 'rgba(14,17,22,1)';
  navContentLinkNew.style.borderColor = 'rgba(14,17,22,0.3)';
  navContentLinkText.style.color = 'rgba(14,17,22,1)';
  navContentLinkExergue.style.backgroundColor = 'rgba(14,17,22,0.15)';
  navContentLinkExergue.style.borderColor = 'rgba(14,17,22,0.3)';
}

export function changeNavColortoWhite() {
  navLogo.style.color = 'rgba(256,256,256,1)';
  navSource.style.color = 'rgba(255,102,15,1';

  navContentLinks.forEach(function (item) {
    item.style.color = 'rgba(256,256,256,0.6)';
  });
  navContentTitres.forEach(function (item) {
    item.style.color = 'rgba(256,256,256,0.3)';
  });

  btnSecondaire.style.color = 'rgba(256,256,256,1)';
  btnSecondaire.style.borderColor = 'rgba(256,256,256,1)';

  btnPrincipal.style.color = 'rgba(14,17,22,1)';
  btnPrincipal.style.backgroundColor = 'rgba(256,256,256,1)';
  btnPrincipal.style.borderColor = 'rgba(256,256,256,1)';

  navContentLinkNew.style.color = 'rgba(255,102,15,1)';
  navContentLinkNew.style.borderColor = 'rgba(255,102,15,0.3)';
  navContentLinkText.style.color = 'rgba(255,102,15,1)';
  navContentLinkExergue.style.backgroundColor = 'rgba(255,102,15,0.15)';
  navContentLinkExergue.style.borderColor = 'rgba(255,102,15,0.3)';
}
