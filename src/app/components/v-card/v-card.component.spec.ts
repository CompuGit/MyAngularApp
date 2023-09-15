import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VCardComponent } from './v-card.component';

describe('VCardComponent', () => {
  let component: VCardComponent;
  let fixture: ComponentFixture<VCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VCardComponent]
    });
    fixture = TestBed.createComponent(VCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
