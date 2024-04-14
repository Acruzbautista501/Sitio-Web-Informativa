import { NgModule } from '@angular/core';
import { RouterModule, Routes, Scroll } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ClientsComponent } from './views/clients/clients.component';
import { ContactComponent } from './views/contact/contact.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { HomeComponent } from './views/home/home.component';
import { ServicesComponent } from './views/services/services.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'nosotros', component: AboutComponent
  },
  {
    path: 'nuestros-servicios', component: ServicesComponent
  },
  {
    path: 'nuestros-clientes', component: ClientsComponent
  },
  {
    path: 'galeria', component: GalleryComponent
  },
  {
    path: 'contacto', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
