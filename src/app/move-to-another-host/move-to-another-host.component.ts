import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { HostDirective } from '../host.directive';
import { InfoButtonComponent } from '../info-button/info-button.component';

@Component({
  selector: 'app-move-to-another-host',
  templateUrl: './move-to-another-host.component.html',
  styleUrls: ['./move-to-another-host.component.scss'],
})
export class MoveToAnotherHostComponent implements OnInit, AfterViewInit {
  @ViewChild('h1', { read: HostDirective }) private firstHost!: HostDirective;
  @ViewChild('h2', { read: HostDirective }) private secondHost!: HostDirective;
  constructor(private _cf: ComponentFactoryResolver) {}

  componentRef?: ComponentRef<InfoButtonComponent>;

  ngAfterViewInit(): void {
    var buttonFactory = this._cf.resolveComponentFactory(InfoButtonComponent);
    this.componentRef =
      this.firstHost.hostElement.createComponent(buttonFactory);
    this.componentRef.changeDetectorRef.detectChanges();
  }

  moveToAnotherHost(): void {
    if (this.firstHost.hostElement.indexOf(this.componentRef!.hostView) === 0) {
      this.firstHost.hostElement.detach(0);
      this.secondHost.hostElement.insert(this.componentRef!.hostView);
    } else {
      this.secondHost.hostElement.detach(0);
      this.firstHost.hostElement.insert(this.componentRef!.hostView);
    }
  }

  ngOnInit(): void {}
}
