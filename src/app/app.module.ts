import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './componentes/search/search.component';
import { HomeComponent } from './componentes/home/home.component';
import { ArtistaComponent } from './componentes/artista/artista.component';
import { NavbarComponent } from './componentes/share/navbar/navbar.component';
import { from } from 'rxjs';
import { ROUTES } from './app.routes';

//Import de seervicio
//mport { SpotifyService } from './services/spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    ArtistaComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
