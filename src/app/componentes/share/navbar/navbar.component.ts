import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  user : string;

  constructor(private auth: AuthService,
              private router: Router) { 
     //this.user = this.auth.leerUsuario();         
              }

   usuario: UsuarioModel;

  ngOnInit() {
    //this.user= this.auth.leerUsuario();
  }

  salir(){ 
 
    this.auth.logout();
    this.router.navigateByUrl('login');
  }

  

}
