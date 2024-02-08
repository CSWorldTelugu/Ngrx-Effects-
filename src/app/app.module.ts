import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { userEffect } from './user.effects';
import { userReducer } from './user.reducer';



@NgModule({
  declarations: [	
    AppComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      users:userReducer
    }),
    EffectsModule.forRoot([userEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
