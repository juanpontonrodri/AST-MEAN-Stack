import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPokemonComponent } from './modify-pokemon.component';

describe('ModifyPokemonComponent', () => {
  let component: ModifyPokemonComponent;
  let fixture: ComponentFixture<ModifyPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
