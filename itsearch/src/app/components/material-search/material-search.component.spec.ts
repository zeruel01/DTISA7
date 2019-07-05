import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSearchComponent } from './material-search.component';

describe('MaterialSearchComponent', () => {
  let component: MaterialSearchComponent;
  let fixture: ComponentFixture<MaterialSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
