import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
  getTeamMembersSummary(): any[] {
    var TeamMembersSummary = [
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
    return TeamMembersSummary;
  }

  getClients(): any[] {
    var Clients = [
      'ABC Infotech Ltd',
      'HCL Technologies',
      'Tech Mahindra Ltd',
      'Tata Consultancy',
    ];
    return Clients;
  }

  getProjects(): any[] {
    var Projects = ['Project A', 'Project B', 'Project C', 'Project D'];
    return Projects;
  }

  getYears(): any[] {
    var Years = [2019, 2018, 2017, 2016, 2015, 2014, 2013];
    return Years;
  }

  getTeamMembers(): any[] {
    var TeamMembers = [
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

    return TeamMembers;
  }
}
