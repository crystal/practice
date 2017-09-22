// param int equifax
// param int experian
// param int transunion
// output string represents avg of all together

// below 399 'very poor'
// 400-499 'poor'
// 500 - 599 'okay'
// 600 - 699 'good'
// 700 - 799 'very good'
// 800 perfect

export default function scores(equifax, experian, transunion) {
  const average = (equifax + experian + transunion) / 3;
  switch (true) {
    case average <= 399: {
      return 'very poor'
    }
    case average >= 400 && average <= 499: {
      return 'poor'
    }
    case average >= 500 && average <= 599: {
      return 'okay'
    }
    case average >= 600 && average <= 699: {
      return 'good'
    }
    case average >= 700 && average <= 799: {
      return 'very good'
    }
    case average === 800: {
      return 'perfect'
    }
  }
};
