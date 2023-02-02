import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**

const menuFormations = document.querySelector('.visualtabs_tab._2');
const menuRessources = document.querySelector('.visualtabs_tab._3');
const menuCommunaute = document.querySelector('.visualtabs_tab._4');

const detectorFormations = document.querySelector('.scrollsticky_detector_step._1');
const detectorRessources = document.querySelector('.scrollsticky_detector_step._2');
const detectorCommunaute = document.querySelector('.scrollsticky_detector_step._3');

const fakecontent0 = document.querySelector('.visualtabs_content_fake._0');
const fakecontent1 = document.querySelector('.visualtabs_content_fake._1');
const contentFormations = document.querySelector('.visualtabs_content_image-wrap._2');
const contentRessources = document.querySelector('.visualtabs_content_image-wrap._3');
const contentCommunaute = document.querySelector('.visualtabs_content_image-wrap._4');

const visuelFakeContent0 = fakecontent0.firstChild;
const visuelFakeContent1 = fakecontent1.firstChild;
const visuelFormations = contentFormations.firstChild;
const visuelRessources = contentRessources.firstChild;
const visuelCommunaute = contentCommunaute.firstChild;

const fakecontent0Dimensions = fakecontent0?.getBoundingClientRect();
const fakecontent1Dimensions = fakecontent1?.getBoundingClientRect();

const contentFormationsDimensions = contentFormations?.getBoundingClientRect();
const contentRessourcesDimensions = contentRessources?.getBoundingClientRect();
const contentCommunauteDimensions = contentCommunaute?.getBoundingClientRect();



export function showVisualTabs() {
  const tl = gsap
    .timeline()
    .set(contentCommunaute, {
      display: 'none',
      opacity: 0,
    })
    .set(contentRessources, {
      display: 'none',
      opacity: 0,
    })
    .set(contentFormations, {
      display: 'none',
      opacity: 0,
    })
    .set(fakecontent1, {
      display: 'none',
      opacity: 0,
      width:
        fakecontent1Dimensions?.width -
        3 * parseFloat(getComputedStyle(document.documentElement).fontSize),
      height:
        fakecontent1Dimensions?.height -
        1.5 * parseFloat(getComputedStyle(document.documentElement).fontSize),
    })
    .set(fakecontent0, {
      display: 'none',
      opacity: 0,
      width:
        fakecontent0Dimensions?.width -
        6 * parseFloat(getComputedStyle(document.documentElement).fontSize),
      height:
        fakecontent0Dimensions?.height -
        3 * parseFloat(getComputedStyle(document.documentElement).fontSize),
    })
    .set(menuFormations, {
      opacity: 0.3,
    })
    .set(menuRessources, {
      opacity: 0.3,
    })
    .set(menuCommunaute, {
      opacity: 0.3,
    })
    .add('step1')
    .to(menuFormations, {
      opacity: 1,
      duration: 0.3,
    })
    .fromTo(
      contentFormations,
      {
        y: contentFormationsDimensions?.height,
        opacity: 0,
        display: 'block',
      },

      {
        y: -0.75 * parseFloat(getComputedStyle(document.documentElement).fontSize),
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
      }
    )
    .to(visuelFakeContent1, {
      opacity: 0.5,
    })
    .fromTo(
      fakecontent1,
      {
        y: 0,
        opacity: 0,
        display: 'block',
      },

      {
        y: -1.5 * parseFloat(getComputedStyle(document.documentElement).fontSize),
        opacity: 1,
        duration: 0.5,
        ease: 'power4.out',
      }
    )
    .to(visuelFakeContent0, {
      opacity: 0.1,
    })
    .fromTo(
      fakecontent0,
      {
        y: 0,
        opacity: 0,
        display: 'block',
      },
      {
        y: -2.25 * parseFloat(getComputedStyle(document.documentElement).fontSize),
        opacity: 1,
        duration: 0.5,
        ease: 'power4.out',
      }
    );

  ScrollTrigger.create({
    trigger: detectorFormations,
    start: 'top 90%',
    end: 'top 20%',
    toggleActions: 'play none none reverse',
    markers: {
      startColor: 'green',
      endColor: 'green',
      fontSize: '1rem',
    },
    animation: tl,
  });
}

export function showVisualTabs() {
  const tl = gsap
    .timeline()
    .addLabel('step1')
    .to(menuFormations, {
      color: '#FF0000',
      duration: 0.3,
    })
    .addLabel('step2')
    .to(menuRessources, {
      color: '#00FF00',
      duration: 0.3,
    })
    .addLabel('step3')
    .to(menuCommunaute, {
      color: '#0000FF',
      duration: 0.3,
    });
}

const scrollContainer = document.querySelector('[data-scroller]');
const sections = gsap.utils.toArray('section');
const track = document.querySelector('[data-draggable]');
const navLinks = gsap.utils.toArray('[data-link]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const lastItemWidth = () => navLinks[navLinks.length - 1].offsetWidth;

const getUseableHeight = () => document.documentElement.offsetHeight - window.innerHeight;

const getDraggableWidth = () => {
  return track.offsetWidth * 0.5 - lastItemWidth();
};


const updatePosition = () => {
  const left = track.getBoundingClientRect().left * -1;
  const width = getDraggableWidth();
  const useableHeight = getUseableHeight();
  const y = gsap.utils.mapRange(0, width, 0, useableHeight, left);

  st.scroll(y);
};

const tl = gsap.timeline().to(track, {
  x: () => getDraggableWidth() * -1,
  ease: 'none',
});

const st = ScrollTrigger.create({
  animation: tl,
  scrub: 0,
});

const draggableInstance = Draggable.create(track, {
  type: 'x',
  inertia: true,
  bounds: {
    minX: 0,
    maxX: getDraggableWidth() * -1,
  },
  edgeResistance: 1,
  onDragStart: () => st.disable(),
  onDragEnd: () => st.enable(),
  onDrag: updatePosition,
  onThrowUpdate: updatePosition,
});

  if (prefersReducedMotion.matches) return;

  sections.forEach((section, index) => {
    const heading = section.querySelector('h2');
    const image = section.querySelector('.section__image');


    gsap.set(heading, {
      opacity: 0,
      y: 50,
    });
    gsap.set(image, {
      opacity: 0,
      rotateY: 15,
    });-


    const sectionTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: () => 'top center',
        end: () => `+=${window.innerHeight}`,
        toggleActions: 'play reverse play reverse',
        // toggleClass: 'is-active',
        // markers: true,
      },
    });


    sectionTl
      .to(image, {
        opacity: 1,
        rotateY: -5,
        duration: 6,
        ease: 'elastic',
      })
      .to(
        heading,
        {
          opacity: 1,
          y: 0,
          duration: 2,
        },
        0.5
      );


    const sectionTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 20px',
        end: () => `bottom top`,
        toggleActions: 'play none play reverse',
        onToggle: ({ isActive }) => {
          const sectionLink = navLinks[index];

          if (isActive) {
            sectionLink.classList.add('is-active');
          } else {
            sectionLink.classList.remove('is-active');
          }
        },
      },
    });
  });
};

initSectionAnimation();


track.addEventListener('keyup', (e) => {
  const id = e.target.getAttribute('href');
  if (!id || e.key !== 'Tab') return;

  const section = document.querySelector(id);
  const y = section.getBoundingClientRect().top + window.scrollY;

  st.scroll(y);
});


*/
