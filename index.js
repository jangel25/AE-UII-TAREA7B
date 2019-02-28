function esPar() {
    return new Promise(function(si, no) {
        let num=3;

          if (num%2 == 0) {
            resolve('es par!');
          }
          else {
            reject();
          }
    });
};

esPar().then(r =>{
    console.log(r);
  }).catch(() => {
    console.log('es impar!');
  });