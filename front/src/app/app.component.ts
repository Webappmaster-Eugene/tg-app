import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<router-outlet />`,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})
export class AppComponent {
  title = "Tg-Bot";
  items = [1, 2, 3, 4, 5];
}
