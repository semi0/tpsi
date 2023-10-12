import { Component } from '@angular/core';
import {compileDeclareDirectiveFromMetadata} from "@angular/compiler";

@Component({
  selector: 'binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  // Variabile utilizzata per l'interpolazione di stringa
  numTests: number = 25;
  // Oggetto utilizzato per le proprietà vincolanti
  car = {
    model: "Alfa Romeo Giulia",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/74/Alfa_Romeo_Giulia_Super.jpg",
    available: false
  };

  // Variabili utilizzate per la proprietà vincolante [class]
  myClass: string = "red";
  setBlueClass: boolean = false;

  // Variabili per la direttiva ngClass
  componentClasses = {
    show: true,
    warning: false
  }
  formOk: boolean = false;
  admin: boolean = false;

  // Oggetto utilizzato con la direttiva ngStyle
  componentStyle = {
    'width':'300px',
    'height.px':100,
    'background-color':'forestgreen'
  }

  // Variabile utilizzata per Two-Way Binding con [(ngModel)]
  textSize: number = 20;
  username: string = "";
  voto: number=6;

  getClick() {
    console.log("Btn clicked");
    this.car.available=!this.car.available;
    this.setBlueClass=!this.setBlueClass;
    this.myClass="blue";
    this.formOk=!this.formOk;
    this.admin=!this.admin;
  }

  inviaDati() {
    console.log("Nome utente inserito: " + this.username);
  }

  getColor() {
    if(this.voto>=6)
      return  "lightgreen";
    else
      return "red";
  }
}
