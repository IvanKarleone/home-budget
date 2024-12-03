import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesListItemComponent } from './expenses-list-item.component';

describe('ExpensesListItemComponent', () => {
  let component: ExpensesListItemComponent;
  let fixture: ComponentFixture<ExpensesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensesListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensesListItemComponent);
    fixture.componentRef.setInput('expense', { date: new Date() });

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
