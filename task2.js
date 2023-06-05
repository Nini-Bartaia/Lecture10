function mySetTimeout(delay){

    return new Promise((resolve)=>{
        setTimeout(resolve, delay)
    })
}


function makeToys(delay) {
    return mySetTimeout(delay).then(() => {
      return new Promise((resolve, reject) => {
        if (Math.random() > 0.1) {
          resolve("undefected");
        } else {
          reject("defected");
        }
      });
    });
  }
  
  function sellToys(status, delay) {
    return mySetTimeout(delay).then(() => {
      return new Promise((resolve, reject) => {
        if (status === "undefected") {
          if (Math.random() > 0.5) {
            resolve("Toy sold");
          } else {
            reject("Toy did not sell");
          }
        }
      });
    });
  }
  
  function deliverToys(delay) {
    return mySetTimeout(delay).then(() => {
      return "Toys delivered";
    });
  }
  
  makeToys(3000)
    .then((status) => sellToys(status, 1000))
    .then((res) => deliverToys(2000))
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
  


