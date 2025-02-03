import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LocalStorageService, ThemeStorageService } from '@shared/api';

import { SwitchThemeComponent } from './switch-theme.component';

describe('SwitchThemeComponent', () => {
  let fixture: ComponentFixture<SwitchThemeComponent>;

  let component: SwitchThemeComponent;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchThemeComponent],
    }).compileComponents();

    TestBed.inject(LocalStorageService).clear();

    fixture = TestBed.createComponent(SwitchThemeComponent);

    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be light theme initially', () => {
    fixture.detectChanges();

    const inputTitle = debugElement.query(By.css('input')).attributes['title'];

    expect(inputTitle).toContain('light');
  });

  it('should be dark theme after #input.change()', () => {
    debugElement.query(By.css('input')).triggerEventHandler('ngModelChange');

    fixture.detectChanges();

    const inputTitle = debugElement.query(By.css('input')).attributes['title'];

    expect(inputTitle).toContain('dark');
  });

  it('should call #themeStorage.toggle() once after #input.change()', () => {
    const themeStorage = debugElement.injector.get(ThemeStorageService);
    const themeStorageToogleFn = spyOn(themeStorage, 'toggle');

    debugElement.query(By.css('input')).triggerEventHandler('ngModelChange');

    expect(themeStorageToogleFn).toHaveBeenCalledTimes(1);
  });
});
