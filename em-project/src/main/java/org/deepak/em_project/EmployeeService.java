package org.deepak.em_project;

import java.util.List;

public interface EmployeeService {
    void addEmployee(Employee employee);
    List<Employee> getAllEmployees();
    void deleteEmployee(Long id);
    String updateEmployee(Long id , Employee employee);
    Employee getEmployeeById(Long id);

}
