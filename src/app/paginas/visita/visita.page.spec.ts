import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisitaPage } from './visita.page';

describe('VisitaPage', () => {
  let component: VisitaPage;
  let fixture: ComponentFixture<VisitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
