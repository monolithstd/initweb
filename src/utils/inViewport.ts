/* eslint-disable no-console */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { changeNavColortoBlackonOrange, changeNavColortoWhite } from './changeNavColor';
import { changeQLColortoBlackonOrange, changeQLColortoWhite } from './changeQuickLinkColor';

gsap.registerPlugin(ScrollTrigger);
//FONCTION

// Animation des Quotes via GSAP

export function AvisisInViewport() {
  const nav = document.querySelector<HTMLElement>('.nav');
  const section = document.querySelector<HTMLElement>('.section.avis');
  if (nav === null && section !== null) {
    return;
  }
  const sectionHeight = section?.offsetHeight;
  const navHeight = nav.offsetHeight;
  const sectionToTravel = sectionHeight - navHeight;
  console.log(sectionHeight);
  console.log(navHeight);
  console.log(sectionToTravel);

  ScrollTrigger.create({
    trigger: '.section.avis',
    onEnter: () => changeNavColortoBlackonOrange(),
    onLeave: () => changeNavColortoWhite(),
    onEnterBack: () => changeNavColortoBlackonOrange(),
    onLeaveBack: () => changeNavColortoWhite(),
    scrub: true,
    start: `top 0%`,
    end: `top -100%`,
    /**markers: {
      startColor: 'green',
      endColor: 'blue',
    },*/
  });
  ScrollTrigger.create({
    trigger: '.section.avis',
    onEnter: () => changeQLColortoBlackonOrange(),
    onLeave: () => changeQLColortoWhite(),
    onEnterBack: () => changeQLColortoBlackonOrange(),
    onLeaveBack: () => changeQLColortoWhite(),
    scrub: true,
    start: `top 85%`,
    end: `top -15%`,
    /**markers: {
      startColor: 'green',
      endColor: 'blue',
    },*/
  });
}

export function HeroisOutViewport() {
  const hero = document.querySelector<HTMLElement>('.section.hero');
  if (hero === null) {
    return;
  }
  console.log(hero);
  // initialisation des éléments
  function heroVisible() {
    const tl = gsap.timeline();
    gsap.to(hero, {
      borderRadius: 32,
      width: 'calc(100vw - 48px)',
      marginLeft: 24,
      scrollTrigger: {
        trigger: hero,
        start: 'bottom 100%',
        end: 'bottom 80%',
        scrub: true,
      },
    });
    return tl;
  }

  // création de la master timeline
  const master = gsap.timeline();
  master.add(heroVisible());
}
