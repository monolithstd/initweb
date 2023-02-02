/* eslint-disable @typescript-eslint/no-unused-vars */
/*eslint-disable no-console*/
import { Webflow } from '@finsweet/ts-utils';

import {
  animationsSectionComponent,
  clearProgMarketCSS,
  conclusionSectionComponent,
  fondamentauxSectionComponent,
  integrationsSectionComponent,
  introSectionComponent,
  structureSectionComponent,
} from './components/progMarket';
import { AvisisInViewport, HeroisOutViewport } from './utils/inViewport';
import { h2Reveal } from './utils/revealElements';
import { initSplide } from './utils/splide';

//
//
// GLOBAL | Calcul des hauteurs d'écrans
const windowHeight = window.innerHeight;
const twoWindows = windowHeight * 2;
const threeWindows = windowHeight * 3;
const fourWindows = windowHeight * 4;
const fiveWindows = windowHeight * 5;
const sixWindows = windowHeight * 6;

//
//
window.Webflow ||= [];
window.Webflow.push(() => {
  initSplide();
  AvisisInViewport();
  h2Reveal();
  HeroisOutViewport();

  // GLOBAL | Nettoyer des états en CSS
  clearProgMarketCSS();

  // PROG MARKET | Affichage des sections correspondantes
  const progMarketScroll = document.querySelector('.prog-market__scroll');
  if (!progMarketScroll) return;

  $(document).on('scroll', function () {
    // PROGMARKET | Animation au Scroll
    // PROGMARKET | Calcul de la distance de scroll séparant entre l'écran affiché et le top de ProgMarket
    const progMarketBoundingClientRect = progMarketScroll.getBoundingClientRect();
    const progMarketOffsetTop = progMarketBoundingClientRect.top + window.scrollY;
    const windowScrollTop = $(window).scrollTop() || 0;

    const scrollFromTopProgMarket = windowScrollTop - progMarketOffsetTop + window.innerHeight;
    console.log('from DIV: ' + scrollFromTopProgMarket + ' | from BODY: ' + $(window).scrollTop());

    // PROGMARKET | Affichage conditionnel selon la distance de scroll à l'instant T
    if (scrollFromTopProgMarket < twoWindows) {
      console.log('Introduction');
      fondamentauxSectionComponent.destroy();
      structureSectionComponent.destroy();
      introSectionComponent.init();
    } else if (scrollFromTopProgMarket > twoWindows && scrollFromTopProgMarket < threeWindows) {
      console.log('Fondamentaux');
      introSectionComponent.destroy();
      structureSectionComponent.destroy;
      fondamentauxSectionComponent.init;
    } else if (scrollFromTopProgMarket > threeWindows && scrollFromTopProgMarket < fourWindows) {
      console.log('Structure');
      fondamentauxSectionComponent.destroy();
      animationsSectionComponent.destroy();
      structureSectionComponent.init();
    } else if (scrollFromTopProgMarket > fourWindows && scrollFromTopProgMarket < fiveWindows) {
      console.log('Animations');
      structureSectionComponent.destroy();
      integrationsSectionComponent.destroy();
      animationsSectionComponent.init();
    } else if (scrollFromTopProgMarket > fiveWindows && scrollFromTopProgMarket < sixWindows) {
      console.log('Intégrations');
      conclusionSectionComponent.destroy();
      animationsSectionComponent.destroy();
      integrationsSectionComponent.init();
    } else {
      console.log('Conclusion');
      integrationsSectionComponent.destroy();
      conclusionSectionComponent.init();
    }
  });
});
