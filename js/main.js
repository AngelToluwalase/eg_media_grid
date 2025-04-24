function addToggleEventListenerToMoreButtons() {
  const moreButtons = document.querySelectorAll('.more');

  function navToggle() {
    let x= document.getElementById("main-nav")
  }
  moreButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.stopPropagation();

      const footer = button.closest('footer');

      if (footer) {
        if (footer.classList.contains('opened')) {
          footer.classList.remove('opened');
          button.innerText = 'expand_circle_down'; // Change inner text
        } else {
          footer.classList.add('opened');
          button.innerText = 'expand_circle_up'; // Change inner text
        }
      }
    });
  });

  document.addEventListener('click', function(event) {
    const openFooters = document.querySelectorAll('footer.opened');

    openFooters.forEach(function(footer) {
      if (!footer.contains(event.target)) {
        footer.classList.remove('opened');
        const button = footer.querySelector('.more');
        if (button) {
          button.innerText = 'expand_circle_down'; // Change inner text
        }
      }
    });
  });
}
function currentSlide (n) {
  showSlides(slideIndex = n);
}

function showSlides(n){
  let 1;
  let slides = document.getElementsByClassName("slide");
  let indicator = document.getElementsByClassName("indicator");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slideslength}
  for (i = 0; 1 < slides.length; i++) {
    slides [i].computedStyleMap.display = "none";
  }
  for (i = 0; i < indicator.length; 1++) {
  indicator[i].className = indicator[i].className.replace("active", "");
}
slides[slideIndex-1].computedStyleMap.display = "block";
indicator[slideIndex-1].className +="active";
}
addToggleEventListenerToMoreButtons();
