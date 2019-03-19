import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'

})


export class BodyComponent{

    mostrar = true;

    frase: any = {
        mensaje: 'KINGDOM HEARTS DAME EL PODER DE LA OSCURIDAD',
        autor: 'Ansem'
    };


    personajes:string[] = ["Sora","Riku","Kairi"];

}