import { TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
  });
});
