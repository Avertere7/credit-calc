
import { Component } from "@angular/core";

@Component({
  template: "<div class='title'><span class='material-icons icon'>info</span>Chooose loan</div>",
  styles: [`
    .title {
        text-align: center;
         margin: 100px auto;
         width:300px;
         font-size:40px;
         color: rgb(172, 170, 170);
    }
    .icon {
        font-size:40px;
        margin-top:-10px;
        vertical-align: middle;
    }
  `],
})
export class InfoComponent {
}