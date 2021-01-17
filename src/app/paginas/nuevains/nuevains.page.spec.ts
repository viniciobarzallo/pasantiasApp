import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevainsPage } from './nuevains.page';

describe('NuevainsPage', () => {
  let component: NuevainsPage;
  let fixture: ComponentFixture<NuevainsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevainsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevainsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
