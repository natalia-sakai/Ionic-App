import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-refresher',
  templateUrl: './component-refresher.page.html',
  styleUrls: ['./component-refresher.page.scss'],
})
export class ComponentRefresherPage implements OnInit {

  message : string = 'Puxe para baixo para obter mais informações';
  constructor() { }

  ngOnInit() {
  }

  atualizarMensagem(event : any){
    setTimeout(
      ()=> {
      this.message = 'Esta é a mensagem depois de dar o refresher';
      event.target.complete();
      }, 
      2000
    )
  }
}
