import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';
import { Spotify } from '../../interfaces/spotify';
import { DataService } from '../../providers/data.service'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  providers: [DataService],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent {
  public fullData: Spotify[] = []; // Almacena todos los datos
  public data: Spotify[] = [];
  public searchText: string = '';

  constructor(private dataProvider: DataService) { }
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.fullData = (response as Spotify[]);
      this.applyFilter();
    });
  }

  applyFilter() {
    this.data = this.fullData.filter(item => 
      item.track_name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item['artist(s)_name'].toLowerCase().includes(this.searchText.toLowerCase())
      // ... agrega más condiciones según sea necesario ...
    ).slice(0, 10);
  }
}
