package com.edtech.learning.service;

import com.edtech.learning.model.Course;
import com.edtech.learning.model.Student;
import com.edtech.learning.repo.CourseRepo;
import com.edtech.learning.repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service

public class StudentService {
    @Autowired
    private StudentRepo repo;
    @Autowired
    private CourseRepo crepo;

    public Student addStudent(Student student) {
        return repo.save(student);
    }

    public List<Student> getAllStudents() {
        return repo.findAll();
    }


    public Student updateCourseById(Long cid, Long sid) {
        Student student = repo.findById(sid).orElse(null);
        if (student != null) {
            Course course = crepo.findById(cid).orElse(null);
            Set<Course> set = student.getCourses();
            set.add(course);
            student.setCourses(set);
            return repo.save(student);
        }
        return null;
    }

    public Student login(Student student) {
        Student existing = repo.findByEmail(student.getEmail());
        if (existing != null) {
            if (existing.getPassword().equals(student.getPassword()))
                return existing;
        }
        return null;
    }
}
