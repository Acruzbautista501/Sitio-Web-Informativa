import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, OnDestroy  {

  @ViewChild('container') container!: ElementRef;

  servicios = [
    {
      titulo: 'Diseño Web Personalizado',
      descripcion: 'Creamos diseños web a medida utilizando la plataforma de diseño Figma, asegurando que tu sitio web tenga una apariencia única y atractiva que represente fielmente tu marca.',
      icono: 'fa-pencil-alt',
    },
    {
      titulo: 'Desarrollo Frontend Avanzado',
      descripcion: 'Utilizamos tecnologías como React, Angular y Vue.js para desarrollar interfaces de usuario interactivas y receptivas que brinden una experiencia excepcional a los visitantes de tu sitio web.',
      icono: 'fa-code',
    },
    {
      titulo: 'Desarrollo Backend Robusto',
      descripcion: 'Nuestro equipo domina tecnologías como Node.js, PHP, C# y Java para construir la lógica y la funcionalidad detrás de tu sitio web, garantizando un rendimiento sólido y escalabilidad futura.',
      icono: 'fa-server',
    },
    {
      titulo: 'Optimización de la Experiencia del Usuario (UX)',
      descripcion: 'Nos especializamos en mejorar la experiencia del usuario en tu sitio web, utilizando técnicas de diseño centrado en el usuario y pruebas de usabilidad para maximizar la satisfacción del cliente.',
      icono: 'fa-lightbulb',
    },
    {
      titulo: 'Mantenimiento y Soporte Continuo',
      descripcion: 'Ofrecemos servicios de mantenimiento y soporte técnico continuo para garantizar que tu sitio web funcione sin problemas y esté protegido contra posibles amenazas de seguridad.',
      icono: 'fa-wrench',
    },
    {
      titulo: 'Desarrollo de Aplicaciones Web',
      descripcion: 'Además de los sitios web, también desarrollamos aplicaciones web personalizadas utilizando las mismas tecnologías de vanguardia para ofrecer soluciones digitales completas y orientadas al usuario.',
      icono: 'fa-laptop-code',
    }
  ];

  tecnologias = [
    {
      imagen: '../../../assets/img/Tech1.png',
      nombre: 'Figma',
    },
    {
      imagen: '../../../assets/img/Tech2.png',
      nombre: 'React',
    },
    {
      imagen: '../../../assets/img/Tech3.png',
      nombre: 'Angular',
    },
    {
      imagen: '../../../assets/img/Tech4.png',
      nombre: 'Vue',
    },
    {
      imagen: '../../../assets/img/Tech5.png',
      nombre: 'Node'
    },
    {
      imagen: '../../../assets/img/Tech6.png',
      nombre: 'PHP'
    },
    {
      imagen: '../../../assets/img/Tech7.png',
      nombre: 'C#'
    },
    {
      imagen: '../../../assets/img/Tech8.png',
      nombre: 'Java'
    }
  ];

  intervalo: any;
  desplazamientoTotal = 0;

  constructor() { }

  ngOnInit(): void {
    this.iniciarIntervalo();
  }

  iniciarIntervalo() {
    this.intervalo = setInterval(() => {
      this.siguienteTecnologia();
    }, 5000);
  }

  siguienteTecnologia() {
    const container = this.container.nativeElement as HTMLElement;
    if (container) {
      this.desplazamientoTotal += container.offsetWidth;
      container.scrollTo({ left: this.desplazamientoTotal, behavior: 'smooth' });
      if (this.desplazamientoTotal >= container.scrollWidth) {
        this.desplazamientoTotal = 0;
        container.scrollTo({ left: this.desplazamientoTotal, behavior: 'auto' });
      }
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

}
