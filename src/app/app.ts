import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./pages/header/header";
import { Footer } from "./pages/footer/footer";
import { Home } from "./components/home/home";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, Home],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  protected title = 'Certifyu';
}
 