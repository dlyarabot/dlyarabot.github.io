function calc() {

  var kach = document.getElementById('kach');
  var colich = document.getElementById('colich');
  var vid = document.getElementById('vid');
  
  var result = document.getElementById('result');
  var price = 0;
  var v = parseInt(vid.options[vid.selectedIndex].value);
  var c = parseInt(colich.options[colich.selectedIndex].value);
  var k = parseInt(kach.options[kach.selectedIndex].value);
  var price_1 = k+v;
    
  price += (k+v)*c;
  price = price;
  result.innerHTML = price;
}


function consoleBG() {
  if ($(window).scrollTop() <= 100) {
    $('#console').css('background', 'none');
  } else {
    $('#console').css('background', '#212529');
  }
}
consoleBG();
$(window).scroll(function() {
  consoleBG();
});

//animation

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

