import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationListComponent } from './pagination-list.component';

describe('PaginationListComponent', () => {
  let component: PaginationListComponent;
  let fixture: ComponentFixture<PaginationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationListComponent);
    fixture.componentRef.setInput('listTemplate', null);
    fixture.componentRef.setInput('items', []);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
