// array of strings transformer names
// returns array of strings vehicle

// op => semitruck
// bumblebee => VW beetle
// jazz => porsche
// grimlock => t-rex
// inferno => fire engine

// const transformerNames = ['bumblebee', 'optimus prime', 'jazz', 'grimlock', 'inferno'];
const transformers = [
  {
    name: 'optimus prime',
    vehicle: 'semitruck'
  },
  {
    name: 'bumblebee',
    vehicle: 'vw beetle'
  },
  {
    name: 'jazz',
    vehicle: 'porsche'
  },
  {
    name: 'grimlock',
    vehicle: 't-rex'
  },
  {
    name: 'inferno',
    vehicle: 'fire engine'
  }
]

export default function transform(transformerNames) {
  // map thru array of transformernames, iterate through each name
  // result will store the new array of strings of vehicle names
  const result = transformerNames.map((name) => {
    // search through an array called vehicles and
    const t = transformers.find((transformer) => {
      // return where vehicle.name matches the existing name iterator
      return transformer.name === name
    })
    // v hold the list of matches
    // v.vehicle returns the vehicle types
    return t.vehicle;
  })
  return result;
}
