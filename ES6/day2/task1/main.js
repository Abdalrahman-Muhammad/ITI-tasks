console.log('test')







function courseInfo(obj) {
  let defaultObj = {
    courseName: "unknown",
    courseDuration: 0,
    courseOwner: "unknown"
  }
  Object.assign(defaultObj, obj);
  return `the course name is ${defaultObj.courseName} , the course duration is ${defaultObj.courseDuration} , the course owner is ${defaultObj.courseOwner}`
}

let result = courseInfo({
  courseName: "Advanced JS",
  courseDuration: 10000,
  courseOwner: "Eng : Sara Atef"
})
console.log(result)