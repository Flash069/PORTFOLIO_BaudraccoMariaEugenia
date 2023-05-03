import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoArgProgComponent } from './imagenes/logo-arg-prog/logo-arg-prog.component';
import { SocialNetworkComponent } from './imagenes/social-network/social-network.component';
import { BannerComponent } from './banner/banner.component';
import { RedesSocialesComponent } from './componentes/redes-sociales/redes-sociales.component';
import { LogoAPComponent } from './componentes/logo-ap/logo-ap.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgProgComponent,
    SocialNetworkComponent,
    BannerComponent,
    RedesSocialesComponent,
    LogoAPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
