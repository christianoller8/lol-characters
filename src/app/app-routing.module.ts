import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "./components/home-page/home-page.component";
import { DescriptionComponent } from "./components/description/description.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { SkinsComponent } from "./components/skins/skins.component";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";

// Definimos un arreglo de rutas que describe las rutas de la aplicación.
const routes: Routes = [
  {
    path: "",
    data: {
      breadcrumb: "Home",
    },
    children: [
      {
        path: "",
        data: {
          breadcrumb: null,
        },
        component: HomePageComponent,
      },
      {
        path: ":id/description",
        data: {
          breadcrumb: "Description",
        },
        children: [
          {
            path: "",
            data: {
              breadcrumb: null,
            },
            component: DescriptionComponent,
          },
          {
            path: "skills",
            data: {
              breadcrumb: "Skills",
            },
            children: [
              {
                path: "",
                data: {
                  breadcrumb: null,
                },
                component: SkillsComponent,
              },
              {
                path: "skins",
                data: {
                  breadcrumb: "Skins",
                },
                component: SkinsComponent,
              },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
