import { createEmployeeBody } from "@support/OrangeHRMEmployeePage/constants";
import { EmployeeAPIBody } from "@support/OrangeHRMEmployeePage/types";
class EmployeePageDataUtils{
    createEmployee(employeeAPIBody: EmployeeAPIBody){
        return cy.request({
             method: 'POST',
             url: 'api/v2/pim/employees',
             body: createEmployeeBody(employeeAPIBody),
           }).then((response) => response.body
           );
     }

    getEmployeeByID(id :string){
      return cy.request({
        method: 'GET',
        url: `/api/v2/pim/employees?limit=50&offset=0&model=detailed&employeeId=${id}&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC`,
      }).then((response) => response.body
      );
    }

    deleteEmployee(id :string){
      this.getEmployeeByID(id).then((response) => {
         if (Array.isArray(response) && response.length === 0) {
          return;
          }
          else {
        cy.request({
          method: 'DELETE',
          url: '/api/v2/pim/employees',
          body:
          {ids: [response.data[0].empNumber]}
        }); 
      }
      });    
    }
}
export default EmployeePageDataUtils