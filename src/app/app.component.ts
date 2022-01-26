import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { JwtHelperService } from '@auth0/angular-jwt'
import { TranslateService } from '@ngx-translate/core'
import { IResponse } from './core/interfaces/response.interface'

import { MainFactoryService } from './core/services/main-factory.service'
import { UtilsService } from './core/services/utils.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean
  titleProyect: string

  constructor(
    private activatedRoute: ActivatedRoute,
    private utils: UtilsService,

    private mainFactory: MainFactoryService,
    private translateService: TranslateService
  ) {

  }

  ngOnInit(): void {
    console.log
  }
}
