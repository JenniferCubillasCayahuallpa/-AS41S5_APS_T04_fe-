import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router'; // 1. IMPORTA ESTOS DOS
import { SidebarComponent } from '../../../layout/sidebar/sidebar.component'; 

@Component({
  selector: 'app-animals',
  standalone: true,

  imports: [
    CommonModule, 
    SidebarComponent, 
    RouterLink,   
    RouterOutlet  
  ], 
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.scss'
})
export class AnimalsComponent { }