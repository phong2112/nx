import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'counter-wrapper-cmp',
  templateUrl: './counter-wrapper.component.html',
  styleUrls: ['./counter-wrapper.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterWrapperComponent {
  title = 'app1';
}
