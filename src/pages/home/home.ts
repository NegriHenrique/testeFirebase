import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import FirebaseEvents from "../../services/eventosFirebase";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private eventosFirebase: FirebaseEvents
  ) {
    setTimeout(() => {this.teste()}, 5000)
    
  }

  async teste() {
    await this.eventosFirebase.GerarLog(this.eventosFirebase.eventos.VisualizarPagina, {page: 'inicio'})
    this.eventosFirebase.teste()
  }
}
