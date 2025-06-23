import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'my-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'app1';
  count = signal(0);

  increament(): void {
    this.count.set(this.count() + 1);
  }

  decreament(): void {
    this.count.set(this.count() - 1);
  }
}
