import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubelayoutComponent } from './youtubelayout.component';

describe('YoutubelayoutComponent', () => {
  let component: YoutubelayoutComponent;
  let fixture: ComponentFixture<YoutubelayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubelayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubelayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
