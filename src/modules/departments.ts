export interface DepartmentModule {
  id: string;
  name: string;
  bookingsTable?: string;
  schedulesTable?: string;
  trainersTable?: string;
  playersTable?: string;
  clientsTable?: string;
  fieldsTable?: string;
  subModules?: DepartmentModule[];
}

export const departments: DepartmentModule[] = [
  {
    id: 'swimming',
    name: 'swimming',
    subModules: [
      {
        id: 'swimming_private',
        name: 'Private Swimming',
        bookingsTable: 'swimming_private_bookings',
        schedulesTable: 'swimming_private_schedules',
        trainersTable: 'swimming_trainers',
        clientsTable: 'clients'
      },
      {
        id: 'swimming_school',
        name: 'School Swimming',
        bookingsTable: 'swimming_school_bookings',
        schedulesTable: 'swimming_school_schedules',
        trainersTable: 'swimming_trainers',
        clientsTable: 'schools'
      },
      {
        id: 'swimming_free',
        name: 'Free Period Swimming',
        bookingsTable: 'swimming_free_bookings',
        schedulesTable: 'swimming_free_schedules',
        clientsTable: 'clients'
      }
    ]
  },
  {
    id: 'football',
    name: 'football',
    playersTable: 'football_players',
    trainersTable: 'football_coaches',
    fieldsTable: 'fields',
    subModules: [
      {
        id: 'football_academy',
        name: 'Academies',
        bookingsTable: 'football_academy_bookings',
        playersTable: 'football_players',
        trainersTable: 'football_coaches',
        fieldsTable: 'fields'
      }
    ]
  }
];
