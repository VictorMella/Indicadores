import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { IIndicators } from '../core/interfaces/indicator.interfaces'
import { IResponse } from '../core/interfaces/response.interface'
import { UtilsService } from '../core/services/utils.service'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  indicatorLs: Array<IIndicators> = []
  constructor(private http: HttpClient, private utils: UtilsService,) { }

  public getIndicadores(): Observable<any> {
    return this.http.get(`${environment.api}`)
      .pipe(
        map((resp :any) => {
          resp = resp ? this.transformDataCountries(resp) : []
          return {
            ok: true,
            data: resp,
            totalRegistros: resp.length
          }
        }),
        catchError(this.getError)
      )
  }

  public getDetalleIndicadores(codigo: string): Observable<any> {
    return this.http.get(`${environment.api}/${codigo}`)
      .pipe(
        map((resp :any) => {
          return {
            ok: true,
            data: resp ? resp: [],
          }
        }),
        catchError(this.getError)
      )
  }

  private transformDataCountries(data: any): Array<IIndicators> {
    this.utils.typeIndicators().forEach(item => {
      this.indicatorLs.push(data[item])
    })
    return this.indicatorLs
  }

  private getError(err: any) {
    console.warn('error en:', err.error.mensaje)
    return of<IResponse>({
      ok: false,
      data: [],
      mensaje: err.error.mensaje
    })
  }
}
