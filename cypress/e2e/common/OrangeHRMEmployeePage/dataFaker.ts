import {EmployeeAPIBody} from "@support/OrangeHRMEmployeePage/types";

const getPrefix = (): string => {
    if (window.location.pathname.includes("%2F")) {
        return window.location.pathname.split("%2F").pop().split("")[0];
    }
    return window.location.pathname.split("%5C").pop().split("_")[0];
};

export const getEmployee = (): EmployeeAPIBody => {
    return {
        firstName: `${getPrefix()}Dana`,
        middleName: ``,
        lastName: `Hamoda`,
        employeeId: "4422"
    }
};
