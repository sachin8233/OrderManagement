import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProductComponent } from './add-new-product.component';

describe('AddNewProductComponent', () => {
  let component: AddNewProductComponent;
  let fixture: ComponentFixture<AddNewProductComponent>;

<<<<<<< HEAD
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
=======
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewProductComponent]
    });
>>>>>>> f8d9c49ac489eac1ab8655924375229386ecee0a
    fixture = TestBed.createComponent(AddNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
