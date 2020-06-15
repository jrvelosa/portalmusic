import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDeqm3N0-5V-8MB08rhL7GFuBrtU45NbfL5yx820jvtWeC0ie7TOt7Lp8ffRTX1pQvS896LRw3U43r0lp8',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?Limit=20').pipe(
      map((data) => data['albums'].items)
    );
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDeqm3N0-5V-8MB08rhL7GFuBrtU45NbfL5yx820jvtWeC0ie7TOt7Lp8ffRTX1pQvS896LRw3U43r0lp8',
    });
    return this.getQuery(`search?q=${termino}&type=artist&Limit=15`).pipe(
      map((data) => data['artists'].items)
    );
  }
}
