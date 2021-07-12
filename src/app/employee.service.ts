import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee`);
  }

  public addEmployee(employee: Employee): Observable<void> {
    return this.http.post<void>(`${this.apiServerUrl}/employee`, employee);
  }

  public updateEmployee(employee: Employee): Observable<void> {
    return this.http.put<void>(`${this.apiServerUrl}/employee/update`, employee);
  }

  // public updateEmployee(employee: Employee): Observable<Employee> {
  //   return this.http.post<Employee>(`${this.apiServerUrl}/employee`, employee);
  // }

  public deleteEmployee(employeeId: number, employee: Employee): Observable<void> {
    return this.http.put<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`, employee);
  }
}
