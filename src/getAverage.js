// takes in array of ints  - grades
// returns letter based on avg

export default function getAverage(grades) {
  const sum = grades.reduce((accum, b) => {
    return accum + b
  },0)
  const avg = sum / grades.length;
  switch (true) {
    case avg <= 100 && avg >= 90 : {
      return 'A'
    }
    case avg <= 89 && avg >= 80 : {
      return 'B'
    }
    case avg <= 79 && avg >= 70 : {
      return 'C'
    }
    case avg <= 69 && avg >= 0 : {
      return 'F'
    }
  }
}
