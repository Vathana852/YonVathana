function toggleMenu() {
  const dropdownMenu = document.getElementById('dropdownMenu');
  dropdownMenu.classList.toggle('show');
}

document.querySelectorAll('.navbar-menu a, .dropdown-menu a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    document.getElementById('dropdownMenu').classList.remove('show');
  });
});




// On scroll animation
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  });

  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  });

  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
  });
});


// Close dropdown on resize
window.addEventListener('resize', () => {
  const dropdownMenu = document.getElementById('dropdownMenu');
  if (window.innerWidth > 600 && dropdownMenu.classList.contains('show')) {
    dropdownMenu.classList.remove('show');
  }
});



// Text animation title Hero

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};




window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};


// Skill process animation
document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    const progress = skill.querySelector('.progress');
    const width = progress.getAttribute('data-width');
    progress.style.width = width;
  });

  skill.addEventListener('mouseleave', () => {
    const progress = skill.querySelector('.progress');
    progress.style.width = '0';
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  });

  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
  });

  // Progress bar animation
  document.querySelectorAll('.progress').forEach(progress => {
    observer.observe(progress);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  });

  document.querySelectorAll('.progress').forEach(progress => {
    observer.observe(progress);
  });
});



