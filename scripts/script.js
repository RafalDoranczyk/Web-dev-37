const burgerIcon = document.querySelector('.header__burger');
const headerList = document.querySelector('.header__list');


const showNavigation = () => {
  headerList.classList.toggle('active');
  burgerIcon.classList.toggle('active')
  console.log('hrr');
}

const owlButtonLeft = document.querySelector('.ourTeam__owlButton--left')
const owlButtonRight = document.querySelector('.ourTeam__owlButton--right')

var owl = $('.owl-carousel');


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
      items: 3
    },
    1000: {
      items: 5
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

  var docViewTop = $(window).scrollTop() - $(idea).height() / 2;
  var docViewBottom = docViewTop + $(idea).height() * 3;
  var elemTop = $(idea).offset().top;
  return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
}

document.addEventListener('scroll', () => {
  if (isScrolledIntoView()) {
    idea.classList.add('ourWork__imageBox--active')
  } else {
    idea.classList.remove('ourWork__imageBox--active')

  }
});



// document.addEventListener('scroll', () => {
//   const ideaHeight = document.querySelector('.ourWork__imageBox').offsetHeight;
//   const actuallScroll = window.pageYOffset.toFixed(0);
//   positionsTop = [];
//   positionsBottom = [];
//   ideasOffset.forEach(idea => {
//     positionsTop.push(idea)
//     positionsBottom.push(idea)
//   });

//   console.log(ideaHeight);
//   idea.forEach((id, index) => {
//     console.log(`pozycja skrola ${index}: top ${positionsTop[index]} bottom ${positionsBottom[index]}`);
//     console.log(`aktualna pozycja skrola to ${actuallScroll}`);
//     if (actuallScroll > positionsTop[index] - ideaHeight && actuallScroll < positionsBottom[index] + ideaHeight / 3) {
//       id.classList.add('ourWork__imageBox--active')
//       // console.log(`powinien pokazać się ${index}`);
//     } else {
//       id.classList.remove('ourWork__imageBox--active')
//     }

//   }
//   )
// });

// // 