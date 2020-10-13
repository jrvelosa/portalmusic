import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
              private router: Router) {}

  canActivate() : boolean  {

    if (this.auth.estaAutenticado() === true) {
      console.log('Entro a if - Guard>>'+ this.auth.leerUsuario());
      return true;
  } else {
     console.log('Entro a Else - Guard>> false');
     this.router.navigateByUrl('/login');
     return false;
  }
  }
  
}
