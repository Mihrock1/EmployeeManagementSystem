package com.mihrock.employeesystemapi.service;

import com.mihrock.employeesystemapi.model.Employee;

import java.util.List;

public interface EmployeeService {
    Employee createEmployee(Employee employee);

    List<Employee> getEmployees();

    boolean deleteEmployee(Integer id);

    Employee getEmployeeById(Integer id);

    Employee updateEmployee(Integer id, Employee employee);
}
