import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-howitworks',
  templateUrl: './howitworks.component.html',
  styleUrls: ['./howitworks.component.css']
})
export class HowitworksComponent implements OnInit {
  @HostBinding('class') class = 'col-12';

  constructor() { }

  ngOnInit() {
  }

}
