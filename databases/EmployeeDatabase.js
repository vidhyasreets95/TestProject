export default class EmployeeSchema {
  static schema = {
    name: 'EmployeesList',
    primaryKey: 'firstName',
    properties: {
      firstName: 'string',
      lastName: 'string',
      email: 'string',
      mobileNo: 'string',
      emplyeeId: 'string',
      dob: 'string',
      department: 'string',
    },
  };
}
