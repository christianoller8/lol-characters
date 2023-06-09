import { Component } from "@angular/core";
import { NavigationService } from "src/app/services/navigation.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  constructor(public navigation: NavigationService) {}
}
