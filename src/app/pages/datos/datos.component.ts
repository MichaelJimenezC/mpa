import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';
import { Spotify } from '../../interfaces/spotify';
import { DataService } from '../../providers/data.service'

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  providers: [DataService],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent {
  public data : Spotify[] = [];
  constructor(private dataProvider: DataService) { }
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      let dataArray = (response as Spotify[]); 
      this.data = dataArray.slice(0,100);
    })
  }
}
