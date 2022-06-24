import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashboardbackgroundComponent } from './admindashboardbackground.component';

describe('AdmindashboardbackgroundComponent', () => {
  let component: AdmindashboardbackgroundComponent;
  let fixture: ComponentFixture<AdmindashboardbackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindashboardbackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindashboardbackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
