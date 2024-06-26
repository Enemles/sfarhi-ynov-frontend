import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { HttpClientModule } from '@angular/common/http';

import { AddTutorialComponent } from './add-tutorial.component';

describe('AddTutorialComponent', () => {
  let component: AddTutorialComponent;
  let fixture: ComponentFixture<AddTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTutorialComponent],
      imports: [
        HttpClientModule, // Déjà ajouté pour HttpClient
        FormsModule       // Ajouter FormsModule ici
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
