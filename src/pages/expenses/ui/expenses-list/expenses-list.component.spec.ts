import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesListComponent } from './expenses-list.component';

describe('ExpensesListComponent', () => {
  let component: ExpensesListComponent;
  let fixture: ComponentFixture<ExpensesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensesListComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('expenses', []);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
