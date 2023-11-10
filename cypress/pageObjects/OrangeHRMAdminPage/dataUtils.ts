import { createJobTitleBody } from "@support/OrangeHRMAdminPage/constants";
import { JobTitleAPIBody } from "@support/OrangeHRMAdminPage/types";
class AdminPageDataUtils{
    createJobTitle(jobTitleAPIBody: JobTitleAPIBody){
        return cy.request({
             method: 'POST',
             url: 'api/v2/admin/job-titles',
             body: createJobTitleBody(jobTitleAPIBody),
           }).then((response) => response.body
           );
     }

    deleteJobTitle(id: number){
        return cy.request({
             method: 'DELETE',
             url: 'api/v2/admin/job-titles',
             body: {"ids": [id]},
           }).then((response) => response.body
           );
     }    
}
export default AdminPageDataUtils