import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export function h2Reveal() {
  const h2Targets = gsap.utils.toArray('.anim-h2_title');
  h2Targets.forEach((item) => {
    const h2Wrap = item.querySelector('.anim-h2_wrap');
    const h2 = item.querySelector('.anim-h2');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const exergueWrap = item.querySelector('.anim-h2_wrap-exergue');
    const exergue = item.querySelector('.anim-h2_exergue');
    const h2Split = new SplitType(h2, {
      types: 'words',
    });
    const exergueSplit = new SplitType(exergue, {
      types: 'words',
    });
    const h2Words = h2Split.words;
    const exergueWords = exergueSplit.words;

    // initialisation des éléments
    function h2init() {
      const tl = gsap.timeline();
      gsap.set(h2Words, {
        opacity: 0,
      });
      return tl;
    }
    function exergueinit() {
      const tl = gsap.timeline();
      gsap.set(exergueWords, {
        opacity: 0,
      });
      return tl;
    }

    // animation des éléments
    function h2show() {
      const tl = gsap.timeline();
      gsap.to(h2Words, {
        duration: 0.8,
        opacity: 1,
        ease: 'none',
        stagger: 0.2,
        scrollTrigger: {
          trigger: h2,
          start: 'top 90%',
          end: 'top 40%',
          scrub: true,
        },
      });
      return tl;
    }
    function exergueShow() {
      const tl = gsap.timeline();
      gsap.to(exergueWords, {
        duration: 0.8,
        opacity: 1,
        ease: 'none',
        stagger: 0.2,
        reduceWhiteSpace: false,
        scrollTrigger: {
          trigger: exergue,
          start: 'top 40%',
          end: 'top 20%',
          scrub: true,
        },
      });
      return tl;
    }
    function h2Hide() {
      const tl = gsap.timeline();
      gsap.to(h2Wrap, {
        duration: 0.8,
        opacity: 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: exergue,
          start: 'top 40%',
          end: 'top 25%',
          scrub: true,
        },
      });
      return tl;
    }

    // création de la master timeline
    const master = gsap.timeline();
    master.add(h2init()).add(exergueinit()).add(h2show()).add(exergueShow()).add(h2Hide());
  });
}

/**
  const targets = document.querySelectorAll(".anim_h2");
  targets.forEach(target => ))
    new SplitText('.anim-h2', {
    type: 'words',
    wordsClass: 'words',
  });
  }
  const splitH2 = new SplitText('.anim-h2', {
    type: 'words',
    wordsClass: 'words',
  });
  const splitH2Text = new SplitText('.anim-h2_exergue', {
    type: 'words',
    wordsClass: 'words',
  });

  function intro() {
	const tl = gsap.timeline();
	//...add animations here...
	return tl;
}
function middle() {
	const tl = gsap.timeline();
	//...add animations here...
	return tl;
}

function conclusion() {
	const tl = gsap.timeline();
	//...add animations here...
	return tl;
}

// stitch them together in a master timeline...
const master = gsap.timeline({
    scrollTrigger: {
      trigger: 'splitH2',
      start: 'top 60%',
      end: 'top 40%',
      markers: true,
      scrub: true,
    },
  });
master.add(intro())
      .add(middle(), "+=2")     //with a gap of 2 seconds
      .add(conclusion(), "-=1") //overlap by 1 second



  gsap.from(split.words, {
    duration: 1,
    opacity: 0.15,
    stagger: 0.25,
    scrollTrigger: {
      trigger: split.words,
      start: 'top 60%',
      end: 'top 40%',
      scrub: 2,
      markers: {
        startColor: 'purple',
        endColor: 'purple',
        fontSize: '0rem',
      },
    },
  });
function intro() {
	var tl = gsap.timeline();
	//...add animations here...
	return tl;
}
  tl.from('splitH2Words', {
    opacity: 0.15,
    stagger: 0.25,
  });
}

*/
