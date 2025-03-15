import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarModule, DropdownModule, HeaderModule, FooterModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Yeni eklenen
import { DefaultHeaderComponent, DefaultFooterComponent, DefaultLayoutComponent } from './layout';

@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, // Burada yeni modülü kullanıyoruz
    SidebarModule,
    DropdownModule,
    HeaderModule,
    FooterModule,
    DefaultHeaderComponent,
    DefaultFooterComponent,
    DefaultLayoutComponent,
  ],
  providers: [IconSetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
