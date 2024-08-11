package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Exercise;
import com.example.demo.repository.ExerciseRepository;

import java.util.List;

@Service
public class ExerciseService {
    @Autowired
    private ExerciseRepository exerciseRepository;

    public List<Exercise> getExercisesByEmail(String email) {
        return exerciseRepository.findByEmail(email);
    }

    public Exercise addExercise(Exercise exercise) {
        return exerciseRepository.save(exercise);
    }

    public Exercise updateExerciseStatus(Long id, Exercise updatedExercise) {
        Exercise exercise = exerciseRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Exercise not found"));
        
        exercise.setName(updatedExercise.getName());
        exercise.setStatus(updatedExercise.getStatus());
        return exerciseRepository.save(exercise);
    }

    public void deleteExercise(Long id) {
        if (!exerciseRepository.existsById(id)) {
            throw new RuntimeException("Exercise not found");
        }
        exerciseRepository.deleteById(id);
    }
}
