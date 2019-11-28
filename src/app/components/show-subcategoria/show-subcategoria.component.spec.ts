import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSubcategoriaComponent } from './show-subcategoria.component';

describe('ShowSubcategoriaComponent', () => {
  let component: ShowSubcategoriaComponent;
  let fixture: ComponentFixture<ShowSubcategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSubcategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSubcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
