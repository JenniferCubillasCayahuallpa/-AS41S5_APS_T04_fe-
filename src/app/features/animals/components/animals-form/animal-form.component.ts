import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Animal } from '../../models/animal.model';
import { AnimalService } from '../../services/animal.service'; 

@Component({
    selector: 'app-animal-form',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './animal-form.component.html',
    styleUrl: './animal-form.component.scss'
})
export class AnimalFormComponent {
    animal: Animal = {
        codigo_arete: '',
        id_especie: 0,
        id_raza: 0,
        id_proposito: 0,
        sexo: '',
        fecha_nacimiento: ''
    };

    constructor(
        private router: Router,
        private animalService: AnimalService
    ) { }

    guardarAnimal() {
        console.log('Enviando a la BD...', this.animal);

        this.animalService.saveAnimal(this.animal).subscribe({
            next: (response) => {
                alert('¡Animal guardado con éxito en el servidor!');
                this.router.navigate(['/animals']);
            },
            error: (err) => {
                console.error('Error al conectar con el backend:', err);
                alert('Error: No se pudo conectar con el servidor. Revisa si el backend está encendido.');
            }
        });
    }
}