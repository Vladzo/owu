function wakeUp (time, cb) {
    setTimeout(() => {
        if (time < 100) {
            console.log("I'm wake up!");
            cb(null, time+=100);
            return;
        }
        cb('Too late for wake up');
    }, 1000)
}

function getUp(time, cb) {
    setTimeout(() => {
        if (time < 200) {
            console.log('I`m get up');
            cb(null);
            return;
        }
        cb('Too late for get up');
    },2000)
}

function goWork(money, cb) {
    setTimeout(() => {
        if (!money) {
            console.log('Go to work')
            cb(null);
            return;
        }
        cb('I don`t need money');
    }, 1000)
}

function work(money, cb) {
    setTimeout(() => {
        if (money < 100) {
            console.log('Working');
            money = 100;
            cb(null, money);
        } else {
            cb('I dont come to work!');
        }
    }, 1000)
}

function goHome(isHome, cb) {
    setTimeout(() => {
        if (isHome) {
            console.log('Go home!')
            cb(null);
        } else {
            cb('I dont have home');
        }
    }, 2000)
}

function goShopping(money, cb) {
    setTimeout(() => {
        if (money > 100) {
            console.log('Shoping...');
            cb(null);
        } else {
            cb('Today i will be hungry');
        }
    }, 1500)
}

function sleep(isTired) {
    setTimeout(() => {
        if(isTired) {
            console.log('Happy end');
        } else {
            console.log('Cant sleep')
        }
    })
}


wakeUp(50, (err, data) => {
    if (!err) {
        getUp(data, (err) => {
          if (!err) {
              goWork(false, (err) => {
                  if (!err) {
                      work(50, (err) => {
                          if(!err) {
                              goHome(true, (err) => {
                                  if (!err) {
                                      goShopping(500, (err) => {
                                          if(!err) {
                                              sleep(true, () => {

                                              })
                                          } else  console.error(err);
                                      })
                                  } else  console.error(err);
                              })
                          } else  console.error(err);
                      })
                  } else  console.error(err);
              })
          } else {
              console.error(err);
          }
        })
    } else {
        console.error(err);
    }
})



//Оголошення функцій для промісів і async

// function wakeUp(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (time < 100) {
//                 console.log("I'm wake up!");
//                 resolve(time += 100);
//             }
//             reject('Too late for wake up');
//         }, 1000)
//     })
// }
//
// function getUp(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (time < 200) {
//                 console.log('I`m get up');
//                 resolve();
//             }
//             reject('Too late for get up');
//         }, 2000)
//     })
// }
//
// function goWork(money) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!money) {
//                 console.log('Go to work')
//                 resolve();
//             }
//             reject('I don`t need money');
//         }, 1000)
//     })
// }
//
// function work(money) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money < 100) {
//                 console.log('Working');
//                 money = 100;
//                 resolve(money);
//             } else {
//                 reject('I dont come to work!');
//             }
//         }, 1000)
//     })
// }
//
// function goHome(isHome, cb) {
//     return new Promise((resole, reject) =>{
//         setTimeout(() => {
//             if (isHome) {
//                 console.log('Go home!')
//                 resole();
//             } else {
//                 reject('I dont have home');
//             }
//         }, 2000)
//     })
// }
//
// function goShopping(money, cb) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 100) {
//                 console.log('Shoping...');
//                 resolve();
//             } else {
//                 reject('Today i will be hungry');
//             }
//         }, 1500)
//     })
// }
//
// function sleep(isTired, cb) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isTired) {
//                 console.log('Happy end');
//                 resolve();
//             } else {
//                 console.log('Cant sleep')
//             }
//         })
//     })
// }

// Promise
// wakeUp(50)
//     .then(value => {
//         return getUp(value);
//     })
//     .then(() => {
//         return goWork(false);
//     })
//     .then(() => {
//         return work(70);
//     })
//     .then(() => {
//         return goHome(true);
//     })
//     .then(() => {
//         return goShopping(150);
//     })
//     .then(() => {
//         return sleep(true);
//     })
//     .catch((err) => {
//         console.error(err);
//     })
//     .finally(() => {
//         console.log("Promises finished");
//     })

// async await
// async function showMyDay() {
//     try {
//         let time = await wakeUp(30);
//         await getUp(time);
//         await goWork(false);
//         await work(40);
//         await goHome(true);
//         await goShopping(300);
//         await sleep(true);
//     } catch (err) {
//         console.error(err);
//     } finally {
//         console.log('Everithing is good (or not)')
//     }
// }
//
// showMyDay();