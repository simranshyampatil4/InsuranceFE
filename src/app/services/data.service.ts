import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _userName:string="";
  private _userId:number=0;
  set userName(value:string){
    this._userName=value;
  }
  get userName():string{
    return this._userName
  }
  set userId(value:number){
    this._userId=value;
  }
  get userId():number{
    return this._userId;
  }
  constructor() { }
}
