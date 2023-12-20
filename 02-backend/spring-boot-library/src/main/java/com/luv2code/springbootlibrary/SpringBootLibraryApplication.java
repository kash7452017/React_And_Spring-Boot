package com.luv2code.springbootlibrary;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

//@SpringBootApplication
@SpringBootApplication(exclude= {SecurityAutoConfiguration.class })
public class SpringBootLibraryApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootLibraryApplication.class, args);
	}

}
