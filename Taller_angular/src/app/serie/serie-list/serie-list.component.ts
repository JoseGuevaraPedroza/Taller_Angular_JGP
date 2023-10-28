import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit{
  series: Array<Serie> = [];

  constructor(private serieService: SerieService) {}
  getSeries():void {
    this.serieService.getSeries().subscribe((series) => {this.series = series;});
  }
  calcularPromedioTemporadas(): number {
    let suma:number=0;
    let total:number=0; 
    for (let serie of this.series) {
      suma+=serie.seasons;
      total++;
    }
    return suma/total;
  }
  ngOnInit(): void {
      this.getSeries();
  }
}
