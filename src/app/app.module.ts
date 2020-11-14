import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';

//my modules
import { MaterialModule } from './material/material.module';
//my components
import { UserComponent } from './container/user/user.component';
import { PostComponent } from './container/post/post.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { YoutubelayoutComponent } from './components/layout/youtubelayout/youtubelayout.component';

//services


import { HttpserviceService } from './services/httpservice.service';
import { ApiserviceService } from './services/apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { SingleuserComponent } from './components/singleuser/singleuser.component';
import { AlluserComponent } from './components/alluser/alluser.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    DashboardComponent,
    HeaderComponent,
    YoutubelayoutComponent,
    SingleuserComponent,
    AlluserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    //flex moduels
    FlexLayoutModule,
    FlexModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [HttpserviceService , ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
