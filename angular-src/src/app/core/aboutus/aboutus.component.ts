import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
})
export class AboutusComponent implements OnInit {
  @HostBinding('class') class = 'col-12';

  constructor() { }

  ngOnInit() {
  }

}
