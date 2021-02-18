import Realm from 'realm';

import EmployeeSchema from './EmployeeDatabase';

export default function getRealm() {
  return Realm.open({
    schema: [EmployeeSchema],
  });
}





























// var Realm = require('realm');
// const EMPLOYEELIST = 'EmployeeList';

// export const EmployeeSchema = {
//   name: EMPLOYEELIST,
//   primaryKey: 'firstName',
//   properties: {
//     firstName: 'string',
//     lastName: 'string',
//   },
// };

// const databaseOptions = {
//   path: 'empList.realm',
//   schema: [EmployeeSchema],
//   schemaVersion: 0,
//   deleteRealmIfMigrationNeeded: true,
// };

// export const insertEmployeee = (empDetails) =>
//   new Promise((resolve, reject) => {
//     Realm.open(databaseOptions)
//       .then((realm) => {
//         realm.write(() => {
//           realm.create(EMPLOYEELIST, empDetails);
//           resolve(empDetails);
//         });
//       })
//       .catch((error) => reject(error));
//   });

// export const deleteEmployee = (empDetails) =>
//   new Promise((resolve, reject) => {
//     Realm.open(databaseOptions)
//       .then((realm) => {
//         realm.write(() => {
//           let list = realm.objectForPrimaryKey(
//             EMPLOYEELIST,
//             empDetails.firstName,
//           );
//           realm.delete(list);
//           resolve();
//         });
//       })
//       .catch((error) => reject(error));
//   });

// export const getList = () =>
//   new Promise((resolve, reject) => {
//     Realm.open(databaseOptions)
//       .then((realm) => {
//         let allList = realm.objects(EMPLOYEELIST);
//         resolve(allList);
//       })
//       .catch((error) => reject(error));
//   });

// export default new Realm(databaseOptions);
