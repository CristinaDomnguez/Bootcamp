package com.ejemplo.tareas.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.ArrayList;

@RestController
@RequestMapping("/tareas")
public class TareasController {
    private final List<String> tareas = new ArrayList<>();

    @GetMapping
    public List<String> getTareas() {
        return tareas;
    }

    @PostMapping
    public ResponseEntity<String> agregarTares(@RequestBody String tarea) {
        tareas.add(tarea);
        return ResponseEntity.ok("Tarea agregada: " + tarea);
    }

    @DeleteMapping("/{index}")
    public ResponseEntity<String> eliminarTarea(@PathVariable int index) {
        if (index >= 0 && index < tareas.size()) {
            String tareaEliminada = tareas.remove(index);
            return ResponseEntity.ok("Tarea eliminada: " + tareaEliminada);
        } else {
            return ResponseEntity.badRequest().body("Indice no valido");
        }
    }
}