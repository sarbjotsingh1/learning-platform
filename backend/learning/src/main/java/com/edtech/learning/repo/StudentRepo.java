package com.edtech.learning.repo;

import com.edtech.learning.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student,Long> {
    public Student findByEmail(String email);

}
