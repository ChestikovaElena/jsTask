const workers = [
  {"name": "Anna", "salary": 1000},
  {"name": "Ben", "salary": 800},
  {"name": "Sam", "salary": 1200},
  {"name": "Samanta", "salary": 1700},
  {"name": "John", "salary": 0},
  {"name": "Miranda", "salary": 3000},
];
let names = [];

function getWorthyWorkers(workers) {
  for (var i = 0; i < workers.length; i++) {
    if (workers[i].salary >= 1000) {
      names.push(workers[i].name);
    }
  }
  return names;
}

console.log(getWorthyWorkers(workers));