import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpddateRestoComponent } from './upddate-resto.component';

describe('UpddateRestoComponent', () => {
  let component: UpddateRestoComponent;
  let fixture: ComponentFixture<UpddateRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpddateRestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpddateRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
