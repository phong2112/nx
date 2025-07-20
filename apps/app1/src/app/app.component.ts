import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { environment } from '../environments/environment';
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
  version = environment.appVersion;

  increament(): void {
    this.count.set(this.count() + 1);
  }

  decreament(): void {
    this.count.set(this.count() - 1);
  }
}
