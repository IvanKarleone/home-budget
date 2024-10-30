import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkModeButtonComponent } from './dark-mode-button.component';
import { computed, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DarkModeService } from '../../services/dark-mode/dark-mode.service';

describe('DarkModeButtonComponent', () => {
  let fixture: ComponentFixture<DarkModeButtonComponent>;

  let component: DarkModeButtonComponent;
  let debugElement: DebugElement;

  let darkModeService: DarkModeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkModeButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DarkModeButtonComponent);

    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    darkModeService = debugElement.injector.get(DarkModeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call #darkModeService.toggle() once after #click() button', () => {
    const darkModeServiceToogleFn = spyOn(darkModeService, 'toggle');

    debugElement.query(By.css('button')).triggerEventHandler('click');

    expect(darkModeServiceToogleFn).toHaveBeenCalledTimes(1);
  });

  it('should be light theme initially', () => {
    spyOn(darkModeService, 'isOnDarkMode').and.returnValue(false);

    fixture.detectChanges();

    const themeBtnTitle = debugElement.query(By.css('button')).attributes['title'];

    expect(themeBtnTitle).toContain('light');
  });

  it('should be dark theme after #click() button', () => {
    debugElement.query(By.css('button')).triggerEventHandler('click');
    spyOn(darkModeService, 'isOnDarkMode').and.returnValue(true);

    fixture.detectChanges();

    const themeBtnTitle = debugElement.query(By.css('button')).attributes['title'];

    expect(themeBtnTitle).toContain('dark');
  });
});
