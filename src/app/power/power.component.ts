import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Power } from '../power';
import { PowerService } from '../power.service';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  powers: Power[] = [];

  constructor(private powerService: PowerService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getPowers();
  }

  getPowers(): void {
    this.powerService.getPowers()
        .subscribe(powers => this.powers = powers);
  }

}
