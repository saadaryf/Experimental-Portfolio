function toggleHamMenu() {        // toogling menu
    var x = document.querySelector('.ham-menu');

    if (x.classList.contains('show-ham-menu')) {
        x.classList.remove('show-ham-menu');
        x.classList.add('hide-ham-menu');
    } else {
        x.classList.remove('hide-ham-menu');
        x.classList.add('show-ham-menu');
    }
}

function toogleHamIcon() {        // toogling hamburger
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('open');
}


let mybutton = document.getElementById("myBtn");      // go to top button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// counting animation

const table = document.getElementById('animatedTable');
const tableRows = table.querySelectorAll('tr');
const numbersToCount = table.querySelectorAll('.table5 h4');

let animationStarted = false;

function startCountAnimation() {
    if (animationStarted) return;

    animationStarted = true;

    numbersToCount.forEach((element) => {
        const finalValue = parseInt(element.innerText, 10);
        element.innerText = '0';

        let currentCount = 0;
        const increment = Math.ceil(finalValue / 100); // Adjust the increment value as needed

        const countInterval = setInterval(() => {
            currentCount += increment;
            if (currentCount >= finalValue) {
                currentCount = finalValue;
                clearInterval(countInterval);
            }
            element.innerText = currentCount;
        }, 10 * Math.random() + 30); // Adjust the interval as needed
    });
}

// Check if the table is in view when scrolling
window.addEventListener('scroll', () => {
    const rect = table.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    if (rect.top < windowHeight && rect.bottom >= 0 && !animationStarted) {
        startCountAnimation();
    }
});
