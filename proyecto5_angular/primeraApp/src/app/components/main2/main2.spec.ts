import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main2 } from './main2';

describe('Main2', () => {
  let component: Main2;
  let fixture: ComponentFixture<Main2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
