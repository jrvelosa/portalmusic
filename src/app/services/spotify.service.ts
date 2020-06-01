import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
        console.log("Spotify service listo");
  }

  getNewReleases(){
    const headers = new HttpHeaders({
            'Authorization':"Bearer BQBmSqlA4Dv97ikZhfbVw-lxfIFJ99a_0EdtZSp7zdymcQ1TBK5V22McVaQH87MGyQXA87yc77Yo1JFK2nw",
    });
  
     return this.http.get('https://api.spotify.com/v1/browse/new-releases?Limit=20',{headers});
  
  }
}
