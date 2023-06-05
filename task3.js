function mySetTimeout(delay){

    return new Promise((resolve)=>{
        setTimeout(resolve, delay)
    })
}


async function makeToys(delay) {
    await mySetTimeout(delay);
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.1) {
        resolve("undefected");
      } else {
        reject("defected");
      }
    });
  }
  
  async function sellToys(status, delay) {
    await mySetTimeout(delay);
    return new Promise((resolve, reject) => {
      if (status === "undefected") {
        if (Math.random() > 0.5) {
          resolve("Toy sold");
        } else {
          reject("Toy did not sell");
        }
      }
    });
  }
  
  async function deliverToys(delay) {
    await mySetTimeout(delay);
    return "Toys delivered";
  }
  
  async function toyBusiness() {
    try {
      const status = await makeToys(3000);
      const result = await sellToys(status, 1000);
      const finalResult = await deliverToys(2000);
      console.log(finalResult);
    } catch (err) {
      console.log(err);
    }
  }
  
  toyBusiness();
  