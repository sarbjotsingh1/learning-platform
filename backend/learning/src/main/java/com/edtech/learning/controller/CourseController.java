package com.edtech.learning.controller;


import com.edtech.learning.model.Course;
import com.edtech.learning.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/course")
public class CourseController {
    @Autowired
     CourseService service;

    @PostMapping
    public ResponseEntity<Course> addProduct(@RequestBody Course course) {
        return new ResponseEntity<>(service.addCourse(course), HttpStatus.CREATED);
    }
    @PutMapping("{id}")
    public ResponseEntity<Course> updateCourse(@RequestBody Course course,@PathVariable Long id) {
        return new ResponseEntity<>(service.updateCourse(course,id), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Course>> getAll() {
        return new ResponseEntity<>(service.getAllCourses(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Course> getAll(@PathVariable long id) {
        return new ResponseEntity<>(service.getCourseById(id), HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable long id) {
        service.deleteCourseById(id);
    }



}
