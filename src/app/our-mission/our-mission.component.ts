import { Component, OnInit } from '@angular/core';
import {take} from "rxjs";
import {DirectusService} from "../shared/directus.service";
import {Mission} from "../shared/service-types";

@Component({
  selector: 'app-our-mission',
  templateUrl: './our-mission.component.html',
  styleUrls: ['./our-mission.component.scss']
})
export class OurMissionComponent implements OnInit {

  mission: Mission;

  constructor(private directusService: DirectusService) { }

  ngOnInit(): void {
    this.directusService.getMission().pipe(take(1)).subscribe(response => {
      this.mission = response.data;
    });
  }

}
