import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { IIndicators } from '../core/interfaces/indicator.interfaces'
import { IPagination } from '../core/interfaces/pagination.interface'
import { IResponse } from '../core/interfaces/response.interface'
import { MainFactoryService } from '../core/services/main-factory.service'
import { UtilsService } from '../core/services/utils.service'
import { AdminService } from '../services/admin.service'

@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.component.html',
  styleUrls: ['./indicador.component.scss']
})
export class IndicadorComponent implements OnInit {
  indicatorsList: Array<IIndicators> = []
  loading: boolean
  paginationSearch: IPagination
  constructor(  private adminService: AdminService,
                private utils: UtilsService,
                private router: Router,
                private mainFactory: MainFactoryService) {
    this.paginationSearch = this.utils.setPagitation(1, 10, 0)
  }

  ngOnInit(): void {
    this.getIndicators()
  }

  onHandleChangePaginationSearch({ page, itemsPerPage }): void {
    this.loading = true
    this.paginationSearch.currentPage = page
    this.paginationSearch.itemsPerPage = itemsPerPage
    this.getIndicators()
  }

  onHandleSeeDetails({ codigo }): void {
    this.mainFactory.setData('codigoIndicador', codigo, true)
    this.router.navigate(['detalles'], {
      queryParamsHandling: 'preserve'
    })
  }

  private getIndicators(): void {
    this.loading = true
    this.adminService.getIndicadores()
      .subscribe((resp: IResponse) => {
        if (resp.ok) {
          this.indicatorsList = resp.data
          this.paginationSearch.total = resp.totalRegistros
        } else {
          this.indicatorsList = []
        }
        this.loading = false
      }, error => {
        console.log(error)
        this.loading = false
      })
  }

}
