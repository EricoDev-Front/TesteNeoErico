import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListMoviesComponent } from './table-list-movies.component';

describe('TableListMoviesComponent', () => {
  let component: TableListMoviesComponent;
  let fixture: ComponentFixture<TableListMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableListMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
