import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'my-workspace-lib1-cmp',
  templateUrl: './lib1.component.html',
  styleUrls: ['./lib1.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lib1Component {
  title = 'lib1';
}
