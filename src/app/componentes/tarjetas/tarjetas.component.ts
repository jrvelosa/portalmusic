import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
})
export class TarjetasComponent {
  @Input() items: any[] = [];


  changeText: boolean;

  constructor(private router: Router) {this.changeText = false;}
  
  valores = "Lancashire Ipsum Dolor Amet Cawn't Ey Lads Ey Musta, Hommer Scrat Dreawnded Wesh Wannt Uv. Enoo ShoddyPownd Sell. Heawse Arn BrockDiddy Traycle Heyt Ceawncil Ow Do Awe,M Dreawn Segs Heawf. Snicket Meyt Gobbinlanders Gronny.";

  verArtista(item: any) {
    let artistaId;

    if (item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }
    this.router.navigate(['/artist', artistaId]);
  }
}
