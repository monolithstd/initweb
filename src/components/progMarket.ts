export function clearProgMarketCSS() {
  // PROGMARKET | Initial State de la section ProgMarket
  $('.layout--h2--wide.mb-48.chap-1').removeClass('show');
  $('.chap-obj__infos.chap-1').removeClass('show');
  $('.chap-obj__card.chap-1').removeClass('show');

  $('.layout--h2--wide.mb-48.chap-2').removeClass('show');
  $('.chap-obj__infos.chap-2').removeClass('show');
  $('.chap-obj__card.chap-2').removeClass('show');

  $('.layout--h2--wide.mb-48.chap-3').removeClass('show');
  $('.chap-obj__infos.chap-3').removeClass('show');
  $('.chap-obj__card.chap-3').removeClass('show');

  $('.layout--h2--wide.mb-48.chap-4').removeClass('show');
  $('.chap-obj__infos.chap-4').removeClass('show');
  $('.chap-obj__card.chap-4').removeClass('show');

  $('.layout--h2--wide.mb-48.chap-5').removeClass('show');
  $('.chap-obj__infos.chap-5').removeClass('show');
  $('.chap-obj__card.chap-5').removeClass('show');

  $('.layout--h2--wide.mb-48.chap-6').removeClass('show');
  $('.chap-obj__infos.chap-6').removeClass('show');
  $('.chap-obj__card.chap-6').removeClass('show');

  // version sans jquery
  // document.querySelector('.chap-obj__card.chap-6')?.classList.remove('show');
}

function introductionSection() {
  const h2 = $('.layout--h2--wide.mb-48.chap-1');
  const infos = $('.chap-obj__infos.chap-1');
  const card = $('.chap-obj__card.chap-1');

  // idenTimers
  let identifierTimerAnimationInfo = 0;
  let identifierTimerAnimationCard = 0;

  // De base, il n'est pas monté
  let mounted = false;

  function init() {
    // Si il est pas monté, alors inutile de INIT
    if (mounted) return;

    h2.addClass('show');
    identifierTimerAnimationInfo = setTimeout(() => infos.addClass('show'), 200);
    identifierTimerAnimationCard = setTimeout(() => card.addClass('show'), 400);

    mounted = true;
  }

  function destroy() {
    /// Si il n'est pas monté, alors inutile de DESTROY
    if (mounted === false) return;
    // return permet de quitter la fonction

    h2.removeClass('show');
    infos.removeClass('show');
    card.removeClass('show');
    clearTimeout(identifierTimerAnimationCard);
    clearTimeout(identifierTimerAnimationInfo);

    mounted = false;
  }

  return { init, destroy };
}
function fondamentauxSection() {
  const h2 = $('.layout--h2--wide.mb-48.chap-2');
  const infos = $('.chap-obj__infos.chap-2');
  const card = $('.chap-obj__card.chap-2');

  // De base, il n'est pas monté
  let mounted = false;

  // idenTimers
  let identifierTimerAnimationInfo = 0;
  let identifierTimerAnimationCard = 0;

  function init() {
    // Si il est pas monté, alors inutile de INIT
    if (mounted) return;

    h2.addClass('show');
    identifierTimerAnimationInfo = setTimeout(() => infos.addClass('show'), 200);
    identifierTimerAnimationCard = setTimeout(() => card.addClass('show'), 400);

    mounted = true;
  }

  function destroy() {
    /// Si il n'est pas monté, alors inutile de DESTROY
    if (mounted === false) return;
    // return permet de quitter la fonction
    h2.removeClass('show');
    infos.removeClass('show');
    card.removeClass('show');
    clearTimeout(identifierTimerAnimationInfo);
    clearTimeout(identifierTimerAnimationCard);

    mounted = false;
  }

  return { init, destroy };
}
function structureSection() {
  const h2 = $('.layout--h2--wide.mb-48.chap-4');
  const infos = $('.chap-obj__infos.chap-4');
  const card = $('.chap-obj__card.chap-4');

  // De base, il n'est pas monté
  let mounted = false;

  // idenTimers
  let identifierTimerAnimationInfo = 0;
  let identifierTimerAnimationCard = 0;

  function init() {
    // Si il est pas monté, alors inutile de INIT
    if (mounted) return;

    h2.addClass('show');
    identifierTimerAnimationInfo = setTimeout(() => infos.addClass('show'), 200);
    identifierTimerAnimationCard = setTimeout(() => card.addClass('show'), 400);

    mounted = true;
  }

  function destroy() {
    /// Si il n'est pas monté, alors inutile de DESTROY
    if (mounted === false) return;
    // return permet de quitter la fonction

    h2.removeClass('show');
    infos.removeClass('show');
    card.removeClass('show');
    clearTimeout(identifierTimerAnimationInfo);
    clearTimeout(identifierTimerAnimationCard);

    mounted = false;
  }

  return { init, destroy };
}
function animationSection() {
  const h2 = $('.layout--h2--wide.mb-48.chap-3');
  const infos = $('.chap-obj__infos.chap-3');
  const card = $('.chap-obj__card.chap-3');

  // De base, il n'est pas monté
  let mounted = false;

  // idenTimers
  let identifierTimerAnimationInfo = 0;
  let identifierTimerAnimationCard = 0;

  function init() {
    // Si il est pas monté, alors inutile de INIT
    if (mounted) return;

    h2.addClass('show');
    identifierTimerAnimationInfo = setTimeout(() => infos.addClass('show'), 200);
    identifierTimerAnimationCard = setTimeout(() => card.addClass('show'), 400);

    mounted = true;
  }

  function destroy() {
    /// Si il n'est pas monté, alors inutile de DESTROY
    if (mounted === false) return;
    // return permet de quitter la fonction

    h2.removeClass('show');
    infos.removeClass('show');
    card.removeClass('show');
    clearTimeout(identifierTimerAnimationInfo);
    clearTimeout(identifierTimerAnimationCard);

    mounted = false;
  }

  return { init, destroy };
}
function integrationsSection() {
  const h2 = $('.layout--h2--wide.mb-48.chap-5');
  const infos = $('.chap-obj__infos.chap-5');
  const card = $('.chap-obj__card.chap-5');

  // De base, il n'est pas monté
  let mounted = false;

  // idenTimers
  let identifierTimerAnimationInfo = 0;
  let identifierTimerAnimationCard = 0;

  function init() {
    // Si il est pas monté, alors inutile de INIT
    if (mounted) return;

    h2.addClass('show');
    identifierTimerAnimationInfo = setTimeout(() => infos.addClass('show'), 200);
    identifierTimerAnimationCard = setTimeout(() => card.addClass('show'), 400);

    mounted = true;
  }

  function destroy() {
    /// Si il n'est pas monté, alors inutile de DESTROY
    if (mounted === false) return;
    // return permet de quitter la fonction

    h2.removeClass('show');
    infos.removeClass('show');
    card.removeClass('show');
    clearTimeout(identifierTimerAnimationInfo);
    clearTimeout(identifierTimerAnimationCard);

    mounted = false;
  }

  return { init, destroy };
}
function conclusionSection() {
  const h2 = $('.layout--h2--wide.mb-48.chap-6');
  const infos = $('.chap-obj__infos.chap-6');
  const card = $('.chap-obj__card.chap-6');

  // De base, il n'est pas monté
  let mounted = false;

  // idenTimers
  let identifierTimerAnimationInfo = 0;
  let identifierTimerAnimationCard = 0;

  function init() {
    // Si il est pas monté, alors inutile de INIT
    if (mounted) return;

    h2.addClass('show');
    identifierTimerAnimationInfo = setTimeout(() => infos.addClass('show'), 200);
    identifierTimerAnimationCard = setTimeout(() => card.addClass('show'), 400);

    mounted = true;
  }

  function destroy() {
    /// Si il n'est pas monté, alors inutile de DESTROY
    if (mounted === false) return;
    // return permet de quitter la fonction

    h2.removeClass('show');
    infos.removeClass('show');
    card.removeClass('show');
    clearTimeout(identifierTimerAnimationInfo);
    clearTimeout(identifierTimerAnimationCard);

    mounted = false;
  }

  return { init, destroy };
}

// Components
export const introSectionComponent = introductionSection();
export const fondamentauxSectionComponent = fondamentauxSection();
export const structureSectionComponent = structureSection();
export const animationsSectionComponent = animationSection();
export const integrationsSectionComponent = integrationsSection();
export const conclusionSectionComponent = conclusionSection();
