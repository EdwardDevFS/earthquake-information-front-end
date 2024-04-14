import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FeaturesService } from '../../core/services/features.service';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { FeatureCardComponent } from '../../shared/components/feature-card/feature-card.component';
import { AsyncPipe } from '@angular/common';
import { IPagination, IResponse } from '../../core/models/features.interface';
import { DropdownChangeEvent } from 'primeng/dropdown';


interface PageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}

interface IMagTypes{
  name: string;
  code: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [
    FormsModule,
    MultiSelectModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    PaginatorModule,
    FeatureCardComponent,
    AsyncPipe
  ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent implements OnInit, OnDestroy {

  public featuresList$ !: Observable<IResponse>;
  
  magTypes: IMagTypes[] = [];
  pagination!: IPagination;

  search: string = "";
  selectedMagTypes: string[]= []; 
  
  page?: number = 0;
  perPage?: number = 10;
  totalRecords: number = 120;

  options = [
      { label: 5, value: 5 },
      { label: 10, value: 10 },
      { label: 50, value: 50 },
      { label: 100, value: 100 }
  ];

  constructor(private service: FeaturesService) {}
  

  ngOnInit(): void {
    this.magTypes = [
      {name: 'Magnitude of duration', code: 'md'},
      {name: 'Local wave Magnitude', code: 'ml'},
      {name: 'Surface Wave Magnitude', code: 'ms'},
      {name: 'Moment Magnitude', code: 'mw'},
      {name: 'Energy Magnitude', code: 'me'},
      {name: 'Instrumental Magnitude', code: 'mi'},
      {name: 'Body Magnitude', code: 'mb'},
      {name: 'Long wave Magnitude', code: 'mlg'}
    ];
    this.getFeatures();
    
  }

  getFeatures(){
    this.featuresList$ = this.service.getFeatures(this.page, this.perPage, this.selectedMagTypes, this.search);
  }

  onPageChange(event: PageEvent): void
  {
    this.page = event.page;
    this.perPage = event.rows;
    this.getFeatures();
  }

  onPerPageChange(event: number): void
  {
    this.page = 0
    this.perPage = event
    this.getFeatures();
  }

  onMagTypeChange(): void
  {
    this.getFeatures();
  }

  onSearchEvent(): void
  {
    this.getFeatures();
  }

  ngOnDestroy(): void 
  {
    this.page = 0;
    this.perPage = 10;
  }


} 
