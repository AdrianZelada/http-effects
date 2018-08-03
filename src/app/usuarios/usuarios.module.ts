import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ListComponent, UsuarioComponent],
  declarations: [ListComponent, UsuarioComponent]
})
export class UsuariosModule { }
