/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CasualityComponent } from './casuality.component';

describe('CasualityComponent', () => {
  let component: CasualityComponent;
  let fixture: ComponentFixture<CasualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});