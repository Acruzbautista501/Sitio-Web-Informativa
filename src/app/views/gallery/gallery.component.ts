import { Component, Input, Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

 proyectos = [
    {
      nombre: 'Financial',
      imagen: '../../../assets/img/Company1.png',
      imagenes: [
        '../../../assets/img/Company1-img1.png',
        '../../../assets/img/Company1-img2.png',
        '../../../assets/img/Company1-img3.png',
        '../../../assets/img/Company1-img4.png',
        '../../../assets/img/Company1-img5.png'
      ],
      isOpen: false,
      selectedImageIndex: 0
    },
    {
      nombre: 'Medical',
      imagen: '../../../assets/img/Company2.png',
      imagenes: [
        '../../../assets/img/Company2-img1.png',
        '../../../assets/img/Company2-img2.png',
        '../../../assets/img/Company2-img3.png'
      ],
      isOpen: false,
      selectedImageIndex: 0
    },
    {
      nombre: 'D´ISRA',
      imagen: '../../../assets/img/Company3.png',
      imagenes: [
        '../../../assets/img/Company3-img1.png',
        '../../../assets/img/Company3-img2.png',
        '../../../assets/img/Company3-img3.png',
        '../../../assets/img/Company3-img4.png'
      ],
      isOpen: false,
      selectedImageIndex: 0
    },
    {
      nombre: 'Basic Needs',
      imagen: '../../../assets/img/Company4.png',
      imagenes: [
        '../../../assets/img/Company4-img1.png',
        '../../../assets/img/Company4-img2.png',
        '../../../assets/img/Company4-img3.png'
      ],
      isOpen: false,
      selectedImageIndex: 0
    },
    {
      nombre: 'Talento H',
      imagen: '../../../assets/img/Company5.png',
      imagenes: [
        '../../../assets/img/Company5-img1.png',
        '../../../assets/img/Company5-img2.png',
        '../../../assets/img/Company5-img3.png'
      ],
      isOpen: false,
      selectedImageIndex: 0
    },
    {
      nombre: 'Mobility & Tours',
      imagen: '../../../assets/img/Company6.png',
      imagenes: [
        '../../../assets/img/Company6-img1.png',
        '../../../assets/img/Company6-img2.png',
        '../../../assets/img/Company6-img3.png'
      ],
      isOpen: false,
      selectedImageIndex: 0
    }
  ];


  openModal(index: number) {
    this.proyectos[index].isOpen = true;
  }
  
  closeModal(index: number) {
    this.proyectos[index].isOpen = false;
  }
  
  prevImage(index: number) {
    this.proyectos[index].selectedImageIndex--;
    if (this.proyectos[index].selectedImageIndex < 0) {
      this.proyectos[index].selectedImageIndex = this.proyectos[index].imagenes.length - 1;
    }
  }
  
  nextImage(index: number) {
    this.proyectos[index].selectedImageIndex++;
    if (this.proyectos[index].selectedImageIndex >= this.proyectos[index].imagenes.length) {
      this.proyectos[index].selectedImageIndex = 0;
    }
  }
  

}
