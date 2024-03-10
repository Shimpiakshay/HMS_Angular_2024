import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogesComponent } from './bloges.component';

describe('BlogesComponent', () => {
  let component: BlogesComponent;
  let fixture: ComponentFixture<BlogesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogesComponent]
    });
    fixture = TestBed.createComponent(BlogesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
