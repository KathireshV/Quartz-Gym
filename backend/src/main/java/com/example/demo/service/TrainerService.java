// TrainerService.java
package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Trainer;
import com.example.demo.repository.TrainerRepository;

@Service
public class TrainerService {
    @Autowired
    private TrainerRepository trainerRepository;

    public List<Trainer> getAllTrainers() {
        return trainerRepository.findAll();
    }

    public Optional<Trainer> getTrainerById(Long id) {
        return trainerRepository.findById(id);
    }

    public Trainer saveTrainer(Trainer trainer) {
        return trainerRepository.save(trainer);
    }

    public void deleteTrainer(Long id) {
        trainerRepository.deleteById(id);
    }
    
    public void deleteTrainerByEmail(String email) {
        Trainer trainer = trainerRepository.findByEmail(email);
        if (trainer != null) {
            trainerRepository.deleteById(trainer.getId());
        }
    }

    // Update an existing trainer
    public Optional<Trainer> updateTrainer(Long id, Trainer updatedTrainer) {
        return trainerRepository.findById(id)
            .map(existingTrainer -> {
                existingTrainer.setName(updatedTrainer.getName());
                existingTrainer.setSpecialization(updatedTrainer.getSpecialization());
                existingTrainer.setEmail(updatedTrainer.getEmail());
                return trainerRepository.save(existingTrainer);
            });
    }
}
