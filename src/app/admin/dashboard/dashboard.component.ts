import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  Designation: string = '';
  Username: string = '';
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpCommingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];
  ToDay: Date | undefined;

  constructor(private dashboardService: DashboardService) {}

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
    this.ToDay = new Date();

    this.Clients = this.dashboardService.getClients();

    this.Projects = this.dashboardService.getProjects();
    this.Years = this.dashboardService.getYears();
    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();
    this.TeamMembers = this.dashboardService.getTeamMembers();
  }

  onProjectChange($event: any) {
    if ($event.target.innerHTML === ' Project A') {
      this.ProjectCost = 1200000;
      this.CurrentExpenditure = 87000;
      this.AvailableFunds = 12000;
    } else if ($event.target.innerHTML === ' Project B') {
      this.ProjectCost = 8200000;
      this.CurrentExpenditure = 97000;
      this.AvailableFunds = 12000;
    } else if ($event.target.innerHTML === ' Project C') {
      this.ProjectCost = 4200000;
      this.CurrentExpenditure = 67000;
      this.AvailableFunds = 32000;
    } else if ($event.target.innerHTML === ' Project D') {
      this.ProjectCost = 3200000;
      this.CurrentExpenditure = 17000;
      this.AvailableFunds = 92000;
    }
  }
}
