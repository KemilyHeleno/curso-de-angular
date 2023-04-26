import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() loading = false;

  constructor() {  }

  ngOnInit(): void {
  }

  submit() {
    this.loading = true;
  }

}
