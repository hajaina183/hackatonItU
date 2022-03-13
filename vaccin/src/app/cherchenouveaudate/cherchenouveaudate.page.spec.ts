import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CherchenouveaudatePage } from './cherchenouveaudate.page';

describe('CherchenouveaudatePage', () => {
  let component: CherchenouveaudatePage;
  let fixture: ComponentFixture<CherchenouveaudatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CherchenouveaudatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CherchenouveaudatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
