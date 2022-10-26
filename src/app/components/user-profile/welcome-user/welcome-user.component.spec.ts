import { ThemeService } from 'app/services/theme.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeUserComponent } from './welcome-user.component';

describe('WelcomeUserComponent', () => {
  let component: WelcomeUserComponent;
  let fixture: ComponentFixture<WelcomeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ WelcomeUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
