import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-side-bar-component',

  imports: [
    RouterLink
  ]    //RouterLink
  ,
  templateUrl: './side-bar-component.html',
  styleUrl: './side-bar-component.css',
})

export class SideBarComponent {
  mainMenu:any  = { defaultOptions: [], accessLink: [] };
  customOptions: any[] = [];

  constructor()
  {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'tracks']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites']
      }
    ];

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil uil-plus-square' // Corregido: añadí 'uil ' al inicio
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil uil-heart-medical' // Corregido: añadí 'uil ' al inicio
      }
    ];

    this.customOptions = [
      { name: 'Mi lista º1', router: ['/'] },
      { name: 'Mi lista º2', router: ['/'] },
      { name: 'Mi lista º3', router: ['/'] },
      { name: 'Mi lista º4', router: ['/'] }
    ];
  }
}
