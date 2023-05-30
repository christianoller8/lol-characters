import { Component } from "@angular/core";
import { NavigationService } from "src/app/services/navigation.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(public navigation: NavigationService) {
    this.navigation.startSaveHistory();
  }
}
