import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainFactoryService {
  private data: object = {};

  constructor() { }

  public setData(type: string, data: any, persist: boolean = false): void {
    this.data[type] = data;
    if (persist) {
      sessionStorage.setItem(type, JSON.stringify(data));
    }
  }

  public getData(type: string, persist: boolean = false): any {
    return persist ? JSON.parse(sessionStorage.getItem(type)) : this.data[type];
  }
}
