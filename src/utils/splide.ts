import { Splide } from '@splidejs/splide';
import '@splidejs/splide/css';

export function initSplide() {
  // generic -> querySelector<T extends Element>(el: string) : T
  const avisSliderTarget = document.querySelector<HTMLElement>('.avis_slider');
  if (avisSliderTarget) {
    const sliderAvis = new Splide(avisSliderTarget, {
      type: 'loop',
      autoplay: true,
    });
    sliderAvis.mount();
  }
}
