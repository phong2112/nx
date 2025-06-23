import {
  ChangeDetectionStrategy,
  Component,
  signal,
  effect,
} from '@angular/core';

@Component({
  selector: 'counter-cmp',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  title = 'app1';
  count = signal(0);
  sum = signal(0);

  constructor() {
    effect(
      () => {
        console.log('Count is', this.count());
        this.sum.set(this.count() * 3);
      },
      { allowSignalWrites: true }
    );
  }

  increament(): void {
    this.count.update((count) => count + 1);
  }

  decreament(): void {
    this.count.update((count) => count - 1);
  }

  reset(): void {
    this.count.set(0);
  }
}
