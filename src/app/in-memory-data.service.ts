import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 0, name: 'Zero'},
      {id: 1, name: 'Superman'},
      {id: 2, name: 'Batman'},
      {id: 3, name: 'Ironman'},
      {id: 4, name: 'Spiderman'},
      {id: 5, name: 'AntMan'},
      {id: 6, name: 'Wonder Woman'},
      {id: 7, name: 'Hulk'},
      {id: 8, name: 'Captain America'},
      {id: 9, name: 'Thor'},
      {id: 10, name: 'Vu'},
    ];
    return {heroes};
  }
}
