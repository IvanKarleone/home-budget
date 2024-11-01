import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeButtonComponent } from './theme-button.component';
import { DebugElement } from '@angular/core';
import { ThemeService } from '../service/theme.service';
import { By } from '@angular/platform-browser';

describe('ThemeButtonComponent', () => {
  let fixture: ComponentFixture<ThemeButtonComponent>;

  let component: ThemeButtonComponent;
  let debugElement: DebugElement;

  let themeService: ThemeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeButtonComponent);

    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    themeService = debugElement.injector.get(ThemeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call #themeService.toggle() once after #click() button', () => {
    const themeServiceToogleFn = spyOn(themeService, 'toggle');

    debugElement.query(By.css('button')).triggerEventHandler('click');

    expect(themeServiceToogleFn).toHaveBeenCalledTimes(1);
  });

  it('should be light theme initially', () => {
    spyOn(themeService, 'theme').and.returnValue('light');

    fixture.detectChanges();

    const themeBtnTitle = debugElement.query(By.css('button')).attributes['title'];

    expect(themeBtnTitle).toContain('light');
  });

  it('should be dark theme after #click() button', () => {
    debugElement.query(By.css('button')).triggerEventHandler('click');
    spyOn(themeService, 'theme').and.returnValue('dark');

    fixture.detectChanges();

    const themeBtnTitle = debugElement.query(By.css('button')).attributes['title'];

    expect(themeBtnTitle).toContain('dark');
  });
});
