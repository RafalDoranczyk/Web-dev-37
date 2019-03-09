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
  // return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
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

