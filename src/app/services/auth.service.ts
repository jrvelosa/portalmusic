import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { UsuarioModel } from '../models/usuario.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url= 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey= 'AIzaSyD1bDQLktOA54YKk2wW0ji8t0_2mdmgUW8';
  userToken : string;
  userActual : string;

   // Crear nuevo user
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) { 
    this.leerToken();
  }

  // log out
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userActual');
  }

  // loG in
  login(usuario: UsuarioModel){
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(
      `${this.url}signInWithPassword?key=${this.apikey}`,
      authData
    ).pipe(
      map( resp => {
        this.guardarToken( resp['idToken']);
        return resp;
      })
    );

  }

  // Register
  newUser(usuario: UsuarioModel){
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}signUp?key=${this.apikey}`,
      authData
    ).pipe(
      map( resp => {
        console.log(resp);
        this.guardarToken( resp['idToken']);
        return resp;
      })
    );

  }

  private guardarToken (idToken: string){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
 }


 leerToken(){
   
   if (localStorage.getItem('token')) {
     this.userToken = localStorage.getItem('token');
     
   } else {
     this.userToken = '';
   }

   return this.userToken;

 }

 estaAutenticado(): boolean {
   console.log('entro a >> estaAutenticado()' );
   return  this.userToken.length > 2;
 }

 leerUsuario(){
   
  if (localStorage.getItem('userActual')) {
    this.userActual = localStorage.getItem('userActual');
    
  } else {
    this.userActual = '';
  }

  return this.userActual;

}


}
