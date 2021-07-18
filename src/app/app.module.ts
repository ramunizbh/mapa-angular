import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegionListComponent } from './region/region-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegionListComponent,
    BarChartComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
