import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  equipo = [
    {
      foto: '../../../assets/img/team1.jpg',
      nombre: 'Juan Pérez',
      puesto: 'CEO y Fundador',
      descripcion: 'Con más de 10 años de experiencia en desarrollo web, Juan lidera nuestro equipo con su visión estratégica y su pasión por la innovación tecnológica.'
    },
    {
      foto: '../../../assets/img/team2.jpg',
      nombre: 'María Lopez',
      puesto: 'Directora de Diseño',
      descripcion: ' María es nuestra experta en diseño creativo y experiencia de usuario. Con su atención al detalle y su creatividad sin límites, garantiza que cada proyecto tenga un aspecto impresionante y una funcionalidad impecable.'
    },
    {
      foto: '../../../assets/img/team3.jpg',
      nombre: 'Pedro Ramírez',
      puesto: 'Lider de Desarrollo Back-End',
      descripcion: 'Pedro es nuestro genio de la programación en el back-end. Con su profundo conocimiento de los lenguajes de programación y su habilidad para construir sistemas robustos y escalables, asegura que nuestros proyectos funcionen de manera eficiente y segura.'
    },
    {
      foto: '../../../assets/img/team4.jpg',
      nombre: 'Ana García',
      puesto: 'Lider de Desarrollo Front-End',
      descripcion: 'Ana es nuestra especialista en desarrollo front-end. Con su pasión por la creación de interfaces intuitivas y atractivas, se encarga de traducir los diseños en código interactivo que cautiva a los usuarios y mejora su experiencia en línea.'
    },
    {
      foto: '../../../assets/img/team5.jpg',
      nombre: 'Carlos González',
      puesto: 'Lider de QA Tester',
      descripcion: 'Carlos es nuestro experto en control de calidad. Su atención meticulosa a los detalles y su habilidad para identificar y solucionar problemas aseguran que cada proyecto cumpla con los más altos estándares de calidad antes de su lanzamiento.'
    },
    {
      foto: '../../../assets/img/team6.jpg',
      nombre: 'Sofía Martínez',
      puesto: 'Especialista en Marketing Digital',
      descripcion: 'Sofía es nuestra experta en estrategias de marketing digital. Con su conocimiento profundo del mercado y las últimas tendencias, trabaja para posicionar a nuestros clientes en línea y maximizar su visibilidad y alcance.'
    }
  ];
}
