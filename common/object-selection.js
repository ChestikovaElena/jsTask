const workers = [
  {"name": "Anna", "salary": 1000},
  {"name": "Ben", "salary": 800},
  {"name": "Sam", "salary": 1200},
  {"name": "Samanta", "salary": 1700},
  {"name": "John", "salary": 0},
  {"name": "Miranda", "salary": 3000},
];

// const getWorthyWorkers = workers => {
//   const WorthyWorkers = [];

//   workers.forEach(currentWorker => {
//     if (currentWorker.salary >= 1000) {
//       WorthyWorkers.push(currentWorker.name);
//     }
//   })

//   return WorthyWorkers;
  
  // for (var i = 0; i < workers.length; i++) {
  //   if (workers[i].salary >= 1000) {
  //     WorthyWorkers.push(workers[i].name);
  //   }
  // }
// }

var worthyWorkers = workers.filter(worker => worker.salary >= 1000);
//   .sort((a, b) => (a.salary + b.salary))
//   .map(e => console.log(e.name + ': ' + e.salary));

console.log(worthyWorkers);