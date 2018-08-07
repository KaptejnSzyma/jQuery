// $('h1').click(function(){
//   $(this).text('I was changed!')
// })

$('li').click(function(){
  console.log('any li was clicked');
})

// $('input').eq(0).keypress(function(){
//   $('h3').toggleClass('turnBlue');
// })

$('input').eq(0).keypress(function(event){
  if (event.which === 13) {
    $('h3').toggleClass('turnBlue')
  }
})

$('h1').on('mouseenter', function(){
  $(this).toggleClass('turnBlue')
})
