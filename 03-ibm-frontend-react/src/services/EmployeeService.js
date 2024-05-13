
// EmployeeService.js

import axios from 'axios';

const BASE_URL = 'http://localhost:8090/emp';

const EmployeeService = {

    getAllEmployees: async () => {
        console.log('getAllEmployees');
        try {
            const epList = await axios.get(`${BASE_URL}/get-all-emps`);
            console.log(epList);
            return epList;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },

    getEmployeeById: async (eid) => {
        console.log(eid);
    },

    getEmployeeByName: async (firstName) => {
        console.log(firstName);
    },

    addEmployee: async (empData) => {
        console.log(empData);
        try {
            const addedEmployee = await axios.post(`${BASE_URL}/add-emp`, empData);
            console.log(addedEmployee);
            return addedEmployee;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
        console.log(empData);
    },

    updateEmployee: async (empData) => {
        console.log(empData);
    },

    deleteEmployee: async (eid) => {
        console.log(eid);
        try {
            const deletedEmployee = await axios.delete(`${BASE_URL}/delete-emp`, { eid });
            console.log(deletedEmployee);
            return deletedEmployee;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
};

export default EmployeeService;



