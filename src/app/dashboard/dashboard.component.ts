import { Component, OnInit } from '@angular/core';

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

    this.Clients = [
      'ABC Infotech Ltd',
      'HCL Technologies',
      'Tech Mahindra Ltd',
      'Tata Consultancy',
    ];

    this.Projects = ['Project A', 'Project B', 'Project C', 'Project D'];
    this.Years = [2019, 2018, 2017, 2016, 2015, 2014, 2013];
    this.TeamMembersSummary = [
      { Region: 'East', TeamMembersCount: 20, TemporarilyUavailableMembers: 4 },
      { Region: 'West', TeamMembersCount: 30, TemporarilyUavailableMembers: 3 },
      {
        Region: 'North',
        TeamMembersCount: 28,
        TemporarilyUavailableMembers: 6,
      },
      {
        Region: 'South',
        TeamMembersCount: 24,
        TemporarilyUavailableMembers: 5,
      },
    ];
    this.TeamMembers = [
      {
        Region: 'East',
        Members: [
          { ID: 1, Name: 'Ford', Status: 'Available' },
          { ID: 2, Name: 'Miller', Status: 'Available' },
          { ID: 3, Name: 'Jones', Status: 'Busy' },
          { ID: 4, Name: 'James', Status: 'Busy' },
        ],
      },
      {
        Region: 'West',
        Members: [
          { ID: 5, Name: 'Anna', Status: 'Available' },
          { ID: 6, Name: 'Arun', Status: 'Available' },
          { ID: 7, Name: 'Varun', Status: 'Busy' },
          { ID: 8, Name: 'Jasmine', Status: 'Busy' },
        ],
      },
      {
        Region: 'North',
        Members: [
          { ID: 9, Name: 'Krisha', Status: 'Available' },
          { ID: 10, Name: 'Mohan', Status: 'Available' },
          { ID: 11, Name: 'Raju', Status: 'Busy' },
          { ID: 12, Name: 'Farooque', Status: 'Busy' },
        ],
      },
      {
        Region: 'South',
        Members: [
          { ID: 13, Name: 'Jacob', Status: 'Available' },
          { ID: 14, Name: 'Smith', Status: 'Available' },
          { ID: 15, Name: 'Jones', Status: 'Busy' },
          { ID: 16, Name: 'James', Status: 'Busy' },
        ],
      },
    ];
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
