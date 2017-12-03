console.log('enchiladas');


function roll () {

  for (i = 0; i < 3; i++){
    let n = Math.random();

    if (n <= .333 ){
      // console.log(0);
      $('#row'):nth-child(i).html(0);
    } else if (n <= .666) {
      // console.log(-1);
      $('#row'):nth-child(i).html(-1);
    } else {
      // console.log(1);
      $('#row'):nth-child(i).html(1);
    }
  }
}
