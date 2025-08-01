import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EruptingPage } from './erupting.page';

describe('EruptingPage', () => {
  let component: EruptingPage;
  let fixture: ComponentFixture<EruptingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EruptingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
