$(document).ready(function(){
console.log('document ready');

  $('button').click(roll);

});



function roll() {
  console.log('roll');
  let total = 0;

  $(".die").each(function(){
    let n = Math.random();
    if (n <= .333 ){
      // console.log(0);
      $(this).html(0);
    } else if (n <= .666) {
      // console.log(-1);
      $(this).html(-1);
      total--;
    } else {
      // console.log(1);
      $(this).html(1);
      total++;
    };
  });
  console.log(total);

}
