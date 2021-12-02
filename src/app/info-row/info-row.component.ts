import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Inject,
  OnInit,
  Optional,
  ViewChild,
} from '@angular/core';
import { HostDirective } from '../host.directive';
import { InfoButtonComponent } from '../info-button/info-button.component';

type Constructor<T> = new (...args: unknown[]) => T;

@Component({
  selector: 'app-info-row',
  templateUrl: './info-row.component.html',
  styleUrls: ['./info-row.component.scss'],
})
export class InfoRowComponent implements OnInit, AfterViewInit {
  @ViewChild(HostDirective) host!: HostDirective;

  constructor(
    @Inject(InfoButtonComponent)
    @Optional()
    private _infoButton: Constructor<InfoButtonComponent>,
    private _resolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit(): void {
    if (this._infoButton) {
      const buttonFactory = this._resolver.resolveComponentFactory(
        this._infoButton
      );
      this.host.hostElement.createComponent(buttonFactory);
    }
  }

  ngOnInit(): void {}
}
