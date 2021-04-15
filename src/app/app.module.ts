import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { couService } from './course.services';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LivePlayerComponent } from './live-player/live-player.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserDetailsComponent,
    LivePlayerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {path: 'user-details' , component: UserDetailsComponent} ,
        {path: 'live-player' , component: LivePlayerComponent} 
    ]),
     
  ],
  providers: [couService],
  bootstrap: [AppComponent]
})
export class AppModule { }
