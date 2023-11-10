import { EmployeeAPIBody } from "./types";

export const createEmployeeBody = (employeeAPIBody : EmployeeAPIBody) => {
    return {
        ...employeeAPIBody,
    }
};