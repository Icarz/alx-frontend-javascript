// 100-createIteratorObject.js
export default function createIteratorObject(report) {
  const { allEmployees } = report;
  let employeeList = [];

  for (const department of Object.values(allEmployees)) {
    employeeList = [...employeeList, ...department];
  }

  return employeeList[Symbol.iterator](); // returns an iterator
}
