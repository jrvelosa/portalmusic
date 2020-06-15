import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({ providedIn: 'root' })
export class SpotifyService {
  token: any;

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');

    this.getToken().subscribe((repuesta: any) => {
      this.token = repuesta.access_token;
    });
  }

  getToken = () => {
    return this.http
      .get(
        'https://token-portalmusic.herokuapp.com/spotify/d6b55734aa3f4b49af89ae8023b6c69e/4659ca881ead4eed81c45197f071db34'
      );
  };

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?Limit=20').pipe(
      map((data) => data['albums'].items)
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data) => data['artists'].items)
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    //.pipe( map( data => data['artists'].items));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((data) => data['tracks'])
    );
  }
}
