import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:9090/employees";

class EmployeeService {
    saveEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL)
    }
    
    getEmployeeById(id) {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/${id}`);
    }

    deleteEmployeeById(id){
        return axios.delete(EMPLOYEE_API_BASE_URL+"/"+id)
    }
    updateEmployee(employee,id){
        return axios.put(EMPLOYEE_API_BASE_URL+"/"+id,employee)
    }

}

export default new EmployeeService();