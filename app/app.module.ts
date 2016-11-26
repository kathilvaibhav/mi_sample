import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSemanticModule } from "ng-semantic";

import { AppComponent }  from './components/app.component';
import { routing, APP_ROUTER_PROVIDERS } from "./routes";

import { HomeComponent } from './components/home/home.component';
import { ReviewComponent } from './components/reviews/reviews.component';
import { AddReviewComponent } from "./components/reviews/add/add.component";
import { StatisticReviewComponent } from "./components/reviews/statistic/statistic.component";
import { EventsComponent } from "./components/events/events.component";
import { Auth } from "./services/auth";

import { ChartModule }            from 'angular2-highcharts'; 
import {ChartEventsExample} from './components/chart/chart.event.component';

@NgModule({
    imports: [
        BrowserModule,
        NgSemanticModule,
        routing,
        ChartModule
    ],
    providers: [
        APP_ROUTER_PROVIDERS,
        Auth
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ReviewComponent,
        AddReviewComponent,
        StatisticReviewComponent,
        EventsComponent,
        ChartEventsExample
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
