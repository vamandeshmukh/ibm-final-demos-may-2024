package com.ibm.springboot.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ibm.springboot.demo.model.Employee;
import com.ibm.springboot.demo.service.EmployeeService;

@Controller
@CrossOrigin(origins = "*") 
public class ThymeleafController {

	@Autowired
	EmployeeService employeeService;

	@GetMapping("/home")
	public String home() {
		return "home";
	}

	@GetMapping("/user")
	public String user(Model model) {
		List<Employee> empList = employeeService.getAllEmployees();
//		model.addAllAttributes(empList);
		System.out.println(model);
		model.addAttribute("firstName", empList.get(0).getFirstName());
		return "user";
	}

	@GetMapping("/")
	public String index() {
		return "index";
	}

	@PostMapping("/search")
	public String searchEmployee(@RequestParam String employeeId, Model model) {
		Employee employee = employeeService.getEmployeeById(employeeId);
		model.addAttribute("employee", employee);
		return "index";
	}

}