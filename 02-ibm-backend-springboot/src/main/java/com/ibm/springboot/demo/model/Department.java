package com.ibm.springboot.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//import lombok.ToString;

@Document("departments")
//@Getter
//@Setter
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@ToString
public class Department {

	@Id
	private String departmentId;
	private String departmentName;
	private String location;
	private String managerId;

	// constructors, getters, setters, toString etc
}
