import { Component,OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild('container') container!: ElementRef;

  columnas = [
    {
      icono: 'fas fa-cogs custom-icon',
      color: '#7752be',
      titulo: 'Personalización Total',
      contenido: 'El desarrollo web permite una personalización completa, adaptando cada aspecto según las necesidades específicas del cliente, desde el diseño visual hasta las funcionalidades específicas.'
    },
    {
      icono: 'fas fa-user custom-icon',
      color: '#fab005',
      titulo: 'Optimización para la Experiencia del Usuario',
      contenido: 'Con el desarrollo web, se puede priorizar la experiencia del usuario, garantizando que la navegación sea intuitiva, el contenido sea accesible y la velocidad de carga sea rápida, lo que mejora la satisfacción del visitante.'
    },
    {
      icono: 'fas fa-tools custom-icon',
      color: '#f03e3d',
      titulo: 'Funcionalidades Específicas',
      contenido: 'El desarrollo web facilita la implementación de funcionalidades únicas y específicas, como formularios interactivos, sistemas de búsqueda avanzada o integraciones con redes sociales, lo que enriquece la experiencia del usuario.'
    },
    {
      icono: 'fas fa-expand custom-icon',
      color: '#4dadf7',
      titulo: 'Adaptabilidad y Escalabilidad',
      contenido: 'Con el desarrollo web, los sitios pueden adaptarse fácilmente a medida que evolucionan las necesidades del negocio o cambian las tendencias del mercado. Además, es posible escalar la plataforma según sea necesario para manejar un mayor tráfico o agregar nuevas características en el futuro.'
    }
  ];

  testimonios = [
    {
      nombre: 'Juan Pérez',
      mensaje: 'Excelente trabajo en el desarrollo de nuestro sitio web. Estamos muy satisfechos con los resultados.',
      foto: '../../../assets/img/client1.jpg'
    },
    {
      nombre: 'María García',
      mensaje: 'La agencia de desarrollo web superó nuestras expectativas. Recomendamos sus servicios a todos.',
      foto: '../../../assets/img/client2.jpg'
    },
    {
      nombre: 'Roberto González',
      mensaje: 'Increíble atención al cliente y excelente calidad en el desarrollo del sitio web. Muy recomendado.',
      foto: '../../../assets/img/client3.jpg'
    },
    {
      nombre: 'Ana López',
      mensaje: '¡Estamos muy felices con el nuevo diseño de nuestro sitio! Gracias por el excelente trabajo.',
      foto: '../../../assets/img/client4.jpg'
    },
    {
      nombre: 'Pedro Rodríguez',
      mensaje: 'El equipo de desarrollo web demostró gran profesionalismo y rapidez en la entrega del proyecto.',
      foto: '../../../assets/img/client5.jpg'
    },
    {
      nombre: 'Luisa Martínez',
      mensaje: 'Gracias por hacer realidad nuestras ideas y llevarlas a cabo de manera tan efectiva. ¡Excelente trabajo!',
      foto: '../../../assets/img/client6.jpg'
    }
  ];

  articulos = [
    {
      autor: 'Tecnocruz',
      fecha: '03 de Enero de 2024',
      titulo: 'Aumento de la prosperidad con pensamiento positivo',
      imagen: '../../../assets/img/Marketing1.png'
    },
    {
      autor: 'Camaleón Shop MX',
      fecha: '18 de Enero de 2024',
      titulo: 'La motivación es el primer paso hacia el éxito',
      imagen: '.../../../assets/img/Marketing2.png'
    },
    {
      autor: 'Ramón Pérez',
      fecha: '06 de Febrero de 2024',
      titulo: 'Pasos para el éxito en su vida personal o empresarial',
      imagen: '../../../assets/img/Marketing3.png'
    },
  ];

  intervalo: any;
  desplazamientoTotal = 0;

  constructor() { }

  ngOnInit(): void {
    this.iniciarIntervalo();
  }

  iniciarIntervalo() {
    this.intervalo = setInterval(() => {
      this.siguienteTestimonio();
    }, 5000);
  }

  siguienteTestimonio() {
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
