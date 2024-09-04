package com.edtech.learning.service;

import com.edtech.learning.model.Course;
import com.edtech.learning.repo.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {
    @Autowired
    private CourseRepo repo;

    public Course addCourse(Course course) {
        return repo.save(course);
    }

    public Course updateCourse(Course course,long id) {
        Course oldcourse  = repo.findById(id).orElse(null);
        if(oldcourse != null) {
            oldcourse.setDescription(course.getDescription());
            oldcourse.setImgurl(course.getImgurl());
            oldcourse.setPrice(course.getPrice());
            oldcourse.setTittle(course.getTittle());
            return repo.save(oldcourse);
        }
        return null;

    }
    public List<Course> getAllCourses() {
        return repo.findAll();
    }

    public Course getCourseById(long id) {
        return repo.findById(id).orElse(null);
    }

    public  void deleteCourseById(Long id){
        repo.deleteById(id);
    }

}
