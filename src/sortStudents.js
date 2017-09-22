// takes an array of objects w/ fn, ln & grade
// filters for 8th graders only
// sort 8th graders by last name
//

export default function sortStudents(students, gradeSearch) {
  return students
    .filter((student) => student.grade === gradeSearch)
    .sort((a, b) => {
      const lnA = a.lastname;
      const lnB = b.lastname;
      if (lnA < lnB) {
        return -1
      } else if (lnA > lnB) {
        return 1
      }
      return 0
    })
    .map((student) => {
      return {
        name: `${student.firstname} ${student.lastname}`,
        grade: student.grade
      }
  })
}
