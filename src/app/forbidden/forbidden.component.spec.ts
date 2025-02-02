import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbiddenComponent } from './forbidden.component';

describe('ForbiddenComponent', () => {
  let component: ForbiddenComponent;
  let fixture: ComponentFixture<ForbiddenComponent>;

<<<<<<< HEAD
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForbiddenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
=======
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForbiddenComponent]
    });
>>>>>>> f8d9c49ac489eac1ab8655924375229386ecee0a
    fixture = TestBed.createComponent(ForbiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
