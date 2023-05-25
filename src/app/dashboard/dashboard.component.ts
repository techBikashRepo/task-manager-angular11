import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  Designation: string | undefined;
  Username: string | undefined;
  NoOfTeamMembers: number | undefined;
  TotalCostOfAllProjects: number | undefined;
  PendingTasks: number | undefined;
  UpCommingProjects: number | undefined;
  ProjectCost: number | undefined;
  CurrentExpenditure: number | undefined;
  AvailableFunds: number | undefined;

  ngOnInit(): void {
    this.Designation = 'Team Leader';
    this.Username = 'Bikash Shaw';
    this.NoOfTeamMembers = 230;
    this.TotalCostOfAllProjects = 510000;
    this.PendingTasks = 23;
    this.UpCommingProjects = 7;
    this.ProjectCost = 7800000;
    this.CurrentExpenditure = 37000;
    this.AvailableFunds = 32000;
  }
}
