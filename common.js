// .rv: 한 번 등장 / [data-play]: 화면 안에 있을 때만 .play (루프 애니메이션 일시정지용)
(function(){
  var once=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');once.unobserve(e.target)}})},{threshold:.2});
  document.querySelectorAll('.rv').forEach(function(el){once.observe(el)});
  var loop=new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle('play',e.isIntersecting)})},{threshold:.25});
  document.querySelectorAll('[data-play]').forEach(function(el){loop.observe(el)});
})();
