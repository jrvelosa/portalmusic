import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioModel } from '../../models/usuario.models';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme = false;


  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    this.usuario.nombre = '';
    this.usuario.email = '';
    this.usuario.password = '';
  }
  onSubmit( form: NgForm){

    if (form.invalid) {
      return;
   }

   Swal.fire({
    allowOutsideClick: false,
    icon: 'info',
    text: "Espere un momento.."
});
   Swal.showLoading();

   // tslint:disable-next-line: align
   this.auth.newUser(this.usuario)
   .subscribe( resp=>{
     
    Swal.close();
    if (this.recordarme) {
      localStorage.setItem('email',this.usuario.email);
   }

    this.router.navigateByUrl('/home');

  }, (err)=> { 
    
    Swal.fire({
      icon: 'error',
      title: 'Error de Autenticación',
      text: err.error.error.message
  });

  });

  }

}
