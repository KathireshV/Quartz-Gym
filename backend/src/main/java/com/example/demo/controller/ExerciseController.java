package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Exercise;
import com.example.demo.service.ExerciseService;

import java.util.List;

@RestController
@RequestMapping("/api/exercises")
public class ExerciseController {
    @Autowired
    private ExerciseService exerciseService;

    @GetMapping
    public List<Exercise> getExercises(@RequestParam String email) {
        return exerciseService.getExercisesByEmail(email);
    }

    @PostMapping
    public Exercise addExercise(@RequestBody Exercise exercise) {
        return exerciseService.addExercise(exercise);
    }

    @PutMapping("/{id}")
    public Exercise updateExerciseStatus(@PathVariable Long id, @RequestBody Exercise updatedExercise) {
        return exerciseService.updateExerciseStatus(id, updatedExercise);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteExercise(@PathVariable Long id) {
        exerciseService.deleteExercise(id);
        return ResponseEntity.noContent().build(); // Respond with 204 No Content
    }
}
