import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

    employessData = [
        {"id":1, "name":"name_1", "age":11},
        {"id":2, "name":"name_2", "age":12},
        {"id":3, "name":"name_3", "age":13}
    ];


    getEmployees(){
        return this.employessData;
    }

  constructor() { }

}
