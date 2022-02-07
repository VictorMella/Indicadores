import { DatePipe } from '@angular/common'
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core'
import { $ } from 'protractor'
import { IDetails, ISerie } from 'src/app/core/interfaces/details.interface'

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss'],
  providers: [DatePipe]
})
export class GraficosComponent implements OnInit, OnChanges {
  @Input() results: ISerie[] = [];
  @Input() indicatorDetail: IDetails
  @Input() loading: boolean
  view: any[] = [500, 1550];
  // options
  showXAxis: boolean
  showYAxis: boolean
  gradient: boolean
  showLegend: boolean
  showXAxisLabel: boolean
  yAxisLabel: string
  showYAxisLabel: boolean
  xAxisLabel: string

  colorScheme = {};

  @Output() handleSeeDetails: EventEmitter<any> = new EventEmitter();
  constructor(public datePipe: DatePipe,) {

  }

  ngOnInit(): void {
    this.showXAxis = true
    this.showYAxis = true
    this.gradient = false
    this.showLegend = false
    this.showXAxisLabel = true
    this.yAxisLabel = 'Fecha'
    this.showYAxisLabel = true
    this.xAxisLabel = 'Valor'

    this.colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    }
  }


  ngOnChanges(changes: SimpleChanges) {
    const _data: SimpleChange = changes.results
    if (!_data.firstChange) {
      this.results = _data.currentValue
      const results = this.results.map(item => {
        return {
          label: item.valor,
          name: this.datePipe.transform(item.fecha, 'dd-MM-yyyy', 'es'),
          value: item.valor
        }
      })
      Object.assign(this, { results })
    }
  }

  onSelect({ name }, codigo: string): void {
    this.handleSeeDetails.emit({ name, codigo })
  }

}
