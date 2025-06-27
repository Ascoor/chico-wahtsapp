export interface SportModule {
  id: string;
  name: string;
  playersTable?: string;
  coachesTable?: string;
  facilitiesTable: string;
}

export const sportsConfig: SportModule[] = [
  {
    id: 'football',
    name: 'football',
    playersTable: 'football_players',
    coachesTable: 'football_coaches',
    facilitiesTable: 'fields'
  },
  {
    id: 'swimming_private',
    name: 'Private Swimming',
    coachesTable: 'swimming_trainers',
    facilitiesTable: 'pools'
  },
  {
    id: 'swimming_school',
    name: 'School Swimming',
    coachesTable: 'swimming_trainers',
    facilitiesTable: 'pools'
  },
  {
    id: 'swimming_free',
    name: 'Free Period Swimming',
    facilitiesTable: 'pools'
  }
];
