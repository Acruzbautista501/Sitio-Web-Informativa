import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit, OnDestroy{

  @ViewChild('container') container!: ElementRef;

  empresas = [
    {
      nombre: 'Financial',
      descripcion: 'Una empresa líder en el sector financiero que buscaba modernizar su presencia en línea. Desarrollamos una plataforma web personalizada utilizando tecnologías como React y Node.js, para la gestión de cuentas y servicios financieros.',
      imagen: '../../../assets/img/Company1.png'
    },
    {
      nombre: 'Medical',
      descripcion: 'Una start-up innovadora en el sector de la salud que necesitaba una aplicación web personalizada para su plataforma de telemedicina. Desarrollamos una solución utilizando Angular y C# que cumplió con sus requisitos de seguridad y funcionalidad.',
      imagen: '../../../assets/img/Company2.png'
    },
    {
      nombre: 'D´ISRA',
      descripcion: 'Un restaurante local que necesitaba un sitio web dinámico para promocionar su menú y gestionar reservas en línea. Desarrollamos una solución utilizando Vue.js y Java que satisfizo sus necesidades y aumentó su visibilidad en línea.',
      imagen: '../../../assets/img/Company3.png'
    },
    {
      nombre: 'Basic Needs',
      descripcion: 'Una organización sin fines de lucro dedicada a la cuidado del medio ambiente, para la cual desarrollamos un sitio web interactivo utilizando Angular y Node.js, que les permitió gestionar donaciones y compartir información relevante con su audiencia.',
      imagen: '../../../assets/img/Company4.png'
    },
    {
      nombre: 'Talento H',
      descripcion: 'Una consultora de recursos humanos que requería un sitio web profesional y fácil de usar para promocionar sus servicios. Utilizamos tecnologías como Figma, React y PHP para crear una plataforma que reflejara la calidad y experiencia de su empresa.',
      imagen: '../../../assets/img/Company5.png'
    },
    {
      nombre: 'Mobility & Tours',
      descripcion: 'Una agencia de viajes que buscaba mejorar su presencia en línea. Creamos un sitio web interactivo y responsivo utilizando Angular y PHP, que le permitió mostrar sus servicios de manera efectiva y aumentar sus reservas en línea.',
      imagen: '../../../assets/img/Company6.png'
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
      this.siguienteCliente();
    }, 5000);
  }

  siguienteCliente() {
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