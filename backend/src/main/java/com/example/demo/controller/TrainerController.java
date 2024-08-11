// TrainerController.java
package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Trainer;
import com.example.demo.service.TrainerService;

@RestController
@RequestMapping("/api/trainers")
public class TrainerController {

    private static final Logger logger = LoggerFactory.getLogger(TrainerController.class);

    @Autowired
    private TrainerService trainerService;

    @PostMapping
    public Trainer createTrainer(@RequestBody Trainer trainer) {
        logger.info("Creating trainer: {}", trainer);
        return trainerService.saveTrainer(trainer);
    }

    @GetMapping
    public List<Trainer> getAllTrainers() {
        return trainerService.getAllTrainers();
    }
    
    @GetMapping("/count")
    public ResponseEntity<Long> getTrainerCount() {
        long count = trainerService.getTrainerCount();
        return new ResponseEntity<>(count, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Trainer> getTrainerById(@PathVariable Long id) {
        Optional<Trainer> trainer = trainerService.getTrainerById(id);
        return trainer.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTrainer(@PathVariable Long id) {
    // Log the delete operation
    logger.info("Deleting trainer with id: {}", id);

    // Ensure the trainer exists before attempting to delete
    Optional<Trainer> trainer = trainerService.getTrainerById(id);
    if (trainer.isEmpty()) {
        return ResponseEntity.notFound().build(); // Return 404 if not found
    }

    // Perform the deletion
    trainerService.deleteTrainer(id);
    return ResponseEntity.noContent().build(); // Return 204 No Content
}


    @DeleteMapping("/{email}")
    public ResponseEntity<Void> deleteTrainerByEmail(@PathVariable String email) {
        trainerService.deleteTrainerByEmail(email);
        return ResponseEntity.noContent().build();
    }

    // PUT endpoint for updating a trainer
    @PutMapping("/{id}")
    public ResponseEntity<Trainer> updateTrainer(@PathVariable Long id, @RequestBody Trainer updatedTrainer) {
        logger.info("Updating trainer with id {}: {}", id, updatedTrainer);

        // Attempt to update the trainer
        Optional<Trainer> trainer = trainerService.updateTrainer(id, updatedTrainer);

        // Return the updated trainer if present, otherwise return a 404 response
        return trainer.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
