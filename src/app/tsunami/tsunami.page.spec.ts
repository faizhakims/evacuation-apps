import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TsunamiPage } from './tsunami.page';

describe('TsunamiPage', () => {
  let component: TsunamiPage;
  let fixture: ComponentFixture<TsunamiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TsunamiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
