import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoIndexComponent } from './tecnico-index.component';

describe('TecnicoIndexComponent', () => {
  let component: TecnicoIndexComponent;
  let fixture: ComponentFixture<TecnicoIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnicoIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TecnicoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
