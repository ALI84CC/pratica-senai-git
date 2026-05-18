import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutlizarClenteComponent } from './autlizar-clente.component';

describe('AutlizarClenteComponent', () => {
  let component: AutlizarClenteComponent;
  let fixture: ComponentFixture<AutlizarClenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutlizarClenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutlizarClenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
