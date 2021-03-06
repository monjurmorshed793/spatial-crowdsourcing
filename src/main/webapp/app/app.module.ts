import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { SpacialcrowdsourcingSharedModule, UserRouteAccessService } from './shared';
import { SpacialcrowdsourcingAppRoutingModule} from './app-routing.module';
import { SpacialcrowdsourcingHomeModule } from './home/home.module';
import { SpacialcrowdsourcingAdminModule } from './admin/admin.module';
import { SpacialcrowdsourcingAccountModule } from './account/account.module';
import { SpacialcrowdsourcingEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AgmCoreModule} from "@agm/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SpacialcrowdsourcingAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        SpacialcrowdsourcingSharedModule,
        SpacialcrowdsourcingHomeModule,
        SpacialcrowdsourcingAdminModule,
        SpacialcrowdsourcingAccountModule,
        SpacialcrowdsourcingEntityModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey:'AIzaSyAkIG_7Gsl3yqKhoyXuG0yy8BhSxmxCtJ0',
            libraries:["places","geometry"]
        })
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class SpacialcrowdsourcingAppModule {}
