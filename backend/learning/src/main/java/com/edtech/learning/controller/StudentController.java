package com.edtech.learning.controller;

import com.edtech.learning.model.Course;
import com.edtech.learning.model.Student;
import com.edtech.learning.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/student")
public class StudentController {
    @Autowired
    StudentService service;

    @PostMapping
    public ResponseEntity<Student> addStudent(@RequestBody Student student) {
        return new ResponseEntity<>(service.addStudent(student), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Student>> getAll() {
        return new ResponseEntity<>(service.getAllStudents(), HttpStatus.OK);
    }

    @PostMapping("/add/{sid}/course/{cid}")
    public ResponseEntity<Student> registerCourse(@PathVariable Long sid, @PathVariable Long cid) {
        return new ResponseEntity<>(service.updateCourseById(sid, cid), HttpStatus.OK);
    }


    @PostMapping("/login")
    public ResponseEntity<Student> login(@RequestBody Student student) {
        Student student1 = service.login(student);
        System.out.println(student1);
        if (student1 != null)
            return ResponseEntity.ok(student1);
        else
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
}

