import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSelectComponent } from './location-select.component';
import { DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule, MatOption } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LocationSelectComponent', () => {
  let component: LocationSelectComponent;
  let fixture: ComponentFixture<LocationSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatSelectModule, MatOptionModule, BrowserAnimationsModule],
      declarations: [ LocationSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when the selection is changed', () => {
    const options: MatOption[] = component.matSelect.options.toArray();
    expect(options.length).toBe(3);

    // set up a spy on the function that will be invoked via selectionChange
    const spy = spyOn(component, 'selectCity').and.callThrough();
    expect(spy).not.toHaveBeenCalled();

    // select the option
    options[1]._selectViaInteraction();
    fixture.detectChanges();

    expect(component.selectCity).toHaveBeenCalled();

    component.city.subscribe(next => {
      expect(next).toEqual('CDG');
    });
  });
});
