import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IRegion } from './region';
import { RegionService } from './region.service';

@Component({
  selector: 'region-list',
  templateUrl: './region-list.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './region-list.component.css']
})
export class RegionListComponent implements OnInit {
  pageTitle: string = 'Título ';
  imgAlert: string = 'assets/images/alert.png';
  imgWidth: number = 20;
  imgMargin: number = 2;
  sumAlert: number = 0;
  @Input() regionCode: number = 0;
  positionDiv: string =  "right"  ;

  regionName: string = 'Localidade 3';
  filterRegions: IRegion[] = [];
  filterObras: any[] = [];

  regions: IRegion[] = [];

  constructor(private regionService: RegionService) {}

  performFilter(filterBy: number): IRegion[] {
    return this.regions.filter((region: IRegion) => region.code == filterBy);
  }
  atualizaObras(filterId: number): void {
    const obraAtual = this.regions.filter(region => region.idLoc == filterId);
    this.filterObras = obraAtual[0].obras;
    this.positionDiv = this.regionCode == 5 || this.regionCode == 10 ? "left" : "right"  ;
    console.log(this.filterObras);
  }

  updateAlert() {
    this.sumAlert = this.filterRegions.filter(region => region.status == 1).length;
  }

  onClick(idLoc: number): void {
    console.log(`O ID foi ${idLoc}`);
  }

  ngOnInit(): void{
    this.regions = this.regionService.getRegion();
    this.filterRegions = this.performFilter(this.regionCode);
    console.log(this.filterRegions);
    this.updateAlert();
  }
}
