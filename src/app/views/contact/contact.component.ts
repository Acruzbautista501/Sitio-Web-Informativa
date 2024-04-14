import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      Swal.fire({
        icon: 'success',
        title: '¡Formulario enviado correctamente!',
        text: 'Gracias por llenar el formulario. Nos pondremos en contacto contigo lo antes posible.',
        confirmButtonColor: '#ff9900',
        confirmButtonText: 'Aceptar',
        customClass: {
          popup: 'custom-swal-font',
          confirmButton: 'custom-swal-font'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/']);
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, complete todos los campos correctamente antes de enviar el formulario.',
        showDenyButton: true,
        showConfirmButton: false,
        denyButtonColor: "#d33",
        denyButtonText: 'Cerrar',
        customClass: {
          popup: 'custom-swal-font',
          denyButton: 'custom-swal-font',
        }
      });
    }
  }
}
