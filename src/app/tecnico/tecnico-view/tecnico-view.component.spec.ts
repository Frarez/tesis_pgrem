import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoViewComponent } from './tecnico-view.component';

describe('TecnicoViewComponent', () => {
  let component: TecnicoViewComponent;
  let fixture: ComponentFixture<TecnicoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnicoViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TecnicoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
