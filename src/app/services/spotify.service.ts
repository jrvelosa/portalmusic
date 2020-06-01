import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

    constructor(private http: HttpClient) {
      console.log("Spotify service listo");
}

getQuery(query: string){
const url = `https://api.spotify.com/v1/${query}`;

const headers = new HttpHeaders({
        'Authorization':"Bearer BQCS6dHl5Jmnfo68CWkZ6y_CPwGKVpOtHy9uQdY1DnkjspEZn1NXPxa92Pf-F5eaiD1L-KApJIAnI0BZ0aI",
});

return this.http.get(url,{headers});

}


getNewReleases(){
  return this.getQuery('browse/new-releases?Limit=20')
              .pipe(map(data => data ['albums'].items));

}

getArtista(termino:string){

  const headers = new HttpHeaders({
          'Authorization':"Bearer BQCS6dHl5Jmnfo68CWkZ6y_CPwGKVpOtHy9uQdY1DnkjspEZn1NXPxa92Pf-F5eaiD1L-KApJIAnI0BZ0aI",
  });
  return this.getQuery(`search?q=${termino}&type=artist&Limit=15`)
  .pipe(map(data => data ['artists'].items));


}
}
