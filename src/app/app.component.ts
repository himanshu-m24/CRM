import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule],
})
export class AppComponent {
  title = 'angular-demo';
}


