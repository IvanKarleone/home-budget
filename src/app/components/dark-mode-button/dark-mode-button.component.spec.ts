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

  it('should display light-mode img initially', () => {
    spyOn(darkModeService, 'isOnDarkMode').and.returnValue(false);

    fixture.detectChanges();

    const lightModeImgTitle = debugElement.query(By.css('img')).attributes['title'];

    expect(lightModeImgTitle).toContain('light');
  });

  it('should display dark-mode img after #click() button', () => {
    debugElement.query(By.css('button')).triggerEventHandler('click');
    spyOn(darkModeService, 'isOnDarkMode').and.returnValue(true);

    fixture.detectChanges();

    const darkModeImgTitle = debugElement.query(By.css('img')).attributes['title'];

    expect(darkModeImgTitle).toContain('dark');
  });
});
