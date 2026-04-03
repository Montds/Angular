import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.development';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService
{
  private readonly URL = environment.api+"/auth/login"
  private httpClient = inject(HttpClient);

  public sendCredentials(email:string , password:string ):Observable<any>
  {
  const body  =
    {
    email,
    password
  };
 return this.httpClient.post(`${this.URL}` , body);

  }

}
