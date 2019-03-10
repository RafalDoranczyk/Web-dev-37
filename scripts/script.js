

const owlButtonLeft = document.querySelector('.ourTeam__owlButton--left')
const owlButtonRight = document.querySelector('.ourTeam__owlButton--right')

var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
const owlWork = $('.ourWork__galleryBox');
jQuery(document).ready(function ($) {
  var alterClass = function () {
    var ww = document.body.clientWidth;
    if (ww > 519) {
      owlWork.owlCarousel({
        loop: true,
        items: 3,
        dots: false,
        nav: true,
      })
    } else if (ww < 519) {



    };
  };
  $(window).resize(function () {
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});





var owl = $('.ourTeam__owlCarousel');


$('.ourTeam__owlButton--right').click(function () {
  owl.trigger('next.owl.carousel');
})

$('.ourTeam__owlButton--left').click(function () {
  owl.trigger('prev.owl.carousel', [300]);
})

owl.owlCarousel({
  loop: true,
  items: 3,
  center: true,
  lazyLoad: true,
  dots: false,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2,
      margin: -15,
    },
    1000: {
      items: 3,
      margin: -30,
    }
  }
})



const opinions = [
  {
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    role: 'Jinny Snow, Company CEO',
  },
  {
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    role: 'Alex Great, Company Client',
  },
  {
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    role: 'Max Hat, Company Client',
  }
];

const description = document.querySelector('.clients__description');
const role = document.querySelector('.clients__role');
const img = document.getElementById('client')
const images = document.querySelectorAll('.clients__image--click');

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    description.innerHTML = opinions[index].description;
    role.innerHTML = opinions[index].role;
    img.src = `assets/client-${index + 1}.png`;
  })
});
const idea = document.querySelector('.ourWork__imageBox')
const elementHeight = document.querySelector('.ourWork__imageBox').offsetHeight * 2;


function isScrolledIntoView() {
  const docViewsTop = [];
  const docViewsBottom = [];
  const elementsTop = [];
  $('.ourWork__imageBox').each(function (index) {
    const view = docViewsTop.push(($(window).scrollTop() - $(this).height() / 2).toFixed(0))
    elementsTop.push($(this).offset().top.toFixed(0))
  })
  docViewsTop.map(view => {
    docViewsBottom.push(Number(view) + Number(($(idea).height() * 3)))
    // console.log(docViewsBottom[0])
  });

  const result = [];
  for (let i = 0; i < elementsTop.length; i++) {
    result.push((elementsTop[i] <= docViewsBottom[i]) && (elementsTop[i] >= docViewsTop[i]))
  }

  var docViewTop = $(window).scrollTop() - $(idea).height() / 2; //
  var docViewBottom = docViewTop + $(idea).height() * 3; //
  var elemTop = $(idea).offset().top;
  return result;
}

document.addEventListener('scroll', () => {
  const ideas = [...document.querySelectorAll('.ourWork__imageBox')];
  const results = isScrolledIntoView()
  for (let i = 0; i < results.length; i++) {
    if (results[i]) {
      ideas[i].classList.add('ourWork__imageBox--active')
    } else {
      ideas[i].classList.remove('ourWork__imageBox--active')

    }
  }

});



const trigger = document.querySelector('.header__navTrigger');
const navHeight = document.querySelector('.header__nav').offsetHeight
const nav = document.querySelector('.header__nav')
const navList = document.querySelector('.header__list--mobile ')

document.addEventListener('scroll', () => {
  const actuallScroll = document.documentElement.scrollTop;
  if (actuallScroll === 0) {
    document.body.classList.remove('fixedPosition')
    navList.classList.remove('header__list--mobile--active')
    trigger.classList.remove('header__navTrigger--fixed--active')
  }
  if (actuallScroll > navHeight * 0.6) {
    trigger.classList.add('header__navTrigger--fixed');
    nav.classList.add('header__nav--fixed')
  } else if (actuallScroll < navHeight / 2) {
    nav.classList.remove('header__nav--fixed')
    trigger.classList.remove('header__navTrigger--fixed');
  }
})


trigger.addEventListener('click', () => {
  document.body.classList.toggle('fixedPosition')
  navList.classList.toggle('header__list--mobile--active')
  trigger.classList.toggle('header__navTrigger--fixed--active')
})

