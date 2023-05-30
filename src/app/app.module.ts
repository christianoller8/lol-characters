import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { DescriptionComponent } from "./components/description/description.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { SkinsComponent } from "./components/skins/skins.component";

import { DataCharactersService } from "./services/data-characters.service";
import { AppRoutingModule } from "./app-routing.module";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { HeaderComponent } from "./components/header/header.component";

import { BreadcrumbModule } from "primeng/breadcrumb";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { PruebaFootModule } from "prueba-foot";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DescriptionComponent,
    SkillsComponent,
    SkinsComponent,
    BreadcrumbComponent,
    HeaderComponent,
    PagenotfoundComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    YouTubePlayerModule,
    MatToolbarModule,
    MatIconModule,
    BreadcrumbModule,
    PruebaFootModule,
  ],
  providers: [DataCharactersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
