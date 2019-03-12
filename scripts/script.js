//GLOBAL

//SIMPLE SCROLLING TO SECTION
$('.header >nav a').on('click', function () {
  const goToSection = `#${$(this).attr('class')}`
  $('body, html').animate({
    scrollTop: $(goToSection).offset().top
  }, 700)
});



// 0-HEADER FUNC
const trigger = document.querySelector('.header__navTrigger');
const navHeight = document.querySelector('.header__nav').offsetHeight;
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
});

// 0-HEADER FUNC


// 3-OURWORK SECTION

const ch = document.documentElement.clientHeight;
const cw = document.body.clientWidth;
const owlWork = $('.ourWork__galleryBox');
jQuery(document).ready(function ($) {
  const alterClass = function () {
    if (cw > 519 && ch < 800) {
      owlWork.owlCarousel({
        loop: true,
        items: 3,
        dots: false,
        nav: true,
        margin: -90,
      })
    }
  };
  $(window).resize(function () {
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});

//function that checks if element is scrolled into view
const ideas = [...document.querySelectorAll('.ourWork__imageBox')];
const isScrolledIntoView = () => {
  const docViewsTop = [];
  const docViewsBottom = [];
  const elementsTop = [];
  const result = []; // results table with boolean values, if true=> element is showed
  $(ideas).each(function (index) {
    docViewsTop.push(($(window).scrollTop() - $(this).height() / 2).toFixed(0))
    elementsTop.push($(this).offset().top.toFixed(0))
  })
  docViewsTop.map(view => {
    docViewsBottom.push(Number(view) + Number(($(ideas).height() * 3)))
  });

  for (let i = 0; i < elementsTop.length; i++) {
    result.push((elementsTop[i] <= docViewsBottom[i]) && (elementsTop[i] >= docViewsTop[i]))
  }
  return result;
}
//listener for the function above
document.addEventListener('scroll', () => {
  const results = isScrolledIntoView()
  for (let i = 0; i < results.length; i++) {
    if (results[i]) {
      ideas[i].classList.add('ourWork__imageBox--active')
    } else {
      ideas[i].classList.remove('ourWork__imageBox--active')
    }
  }
});

// 3-OURWORK SECTION

//4-OURTEAM SECTION

const owlButtonLeft = document.querySelector('.ourTeam__owlButton--left')
const owlButtonRight = document.querySelector('.ourTeam__owlButton--right')
const owlTeam = $('.ourTeam__owlCarousel');
$('.ourTeam__owlButton--right').click(function () {
  owlTeam.trigger('next.owl.carousel');
});
$('.ourTeam__owlButton--left').click(function () {
  owlTeam.trigger('prev.owl.carousel', [300]);
});
owlTeam.owlCarousel({
  loop: true,
  items: 1,
  stagePadding: 20,
  center: true,
  dots: false,
  nav: false,
  responsive: {
    769: {
      items: 3,
    },
  }
});

//4-OURTEAM SECTION





//5-CLIENTS SECTION
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



