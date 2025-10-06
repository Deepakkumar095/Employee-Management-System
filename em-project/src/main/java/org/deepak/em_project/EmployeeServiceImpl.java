package org.deepak.em_project;


import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired 
    private EmployeeRepository employeeRepository;

    // List<Employee> employees = new ArrayList<>();

    @Override
    public void addEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepository.save(employeeEntity);
        // employees.add(employee);
    }

    @Override
    public List<Employee> getAllEmployees() {
        
        List<EmployeeEntity> employeesList = employeeRepository.findAll();
        List<Employee> employees = new ArrayList<>();
        for (EmployeeEntity employeeEntity : employeesList) {
            Employee emp = new Employee();
            emp.setId(employeeEntity.getId());
            emp.setName(employeeEntity.getName());
            emp.setEmail(employeeEntity.getEmail());
            emp.setPhone(employeeEntity.getPhone());

            employees.add(emp);
        }
        return employees;
    }

    @Override
    public void deleteEmployee(Long id) {

        employeeRepository.deleteById(id);
        // boolean removed = employees.removeIf(e -> e.getId().equals(id));
        // if (!removed) {
        //     throw new RuntimeException("Employee not found with id: " + id);
        // }
    }

    @Override
    public String updateEmployee(Long id, Employee employee) {
        EmployeeEntity existingEmployee = employeeRepository.findById(id).get();
        existingEmployee.setName(employee.getName());
        existingEmployee.setEmail(employee.getEmail());
        existingEmployee.setPhone(employee.getPhone());
        employeeRepository.save(existingEmployee);
        return "Employee updated successfully.";
        
        
    }

    @Override
    public Employee getEmployeeById(Long id) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));
    
    Employee employee = new Employee();
    employee.setId(employeeEntity.getId());
    employee.setName(employeeEntity.getName());
    employee.setEmail(employeeEntity.getEmail());
    employee.setPhone(employeeEntity.getPhone());
    
    return employee;
}
}
