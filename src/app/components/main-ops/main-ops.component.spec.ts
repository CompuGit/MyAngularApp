import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOpsComponent } from './main-ops.component';

describe('MainOpsComponent', () => {
  let component: MainOpsComponent;
  let fixture: ComponentFixture<MainOpsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainOpsComponent]
    });
    fixture = TestBed.createComponent(MainOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
