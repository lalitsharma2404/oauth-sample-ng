import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';

import {LoaderComponent} from '@app/core/components/loader/loader.component';
import {LoaderRef} from '@app/core/utils/loader.ref';

@Injectable()
export class LoaderService {

  private static loaderDirectiveRef: ViewContainerRef = null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  getLoader() {
    return new LoaderRef(LoaderComponent);
  }

  setViewRef(viewRef: ViewContainerRef) {
    LoaderService.loaderDirectiveRef = viewRef;
  }

  startLoader() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getLoader().component);
    LoaderService.loaderDirectiveRef.clear();
    LoaderService.loaderDirectiveRef.createComponent(componentFactory);
  }

  stopLoader() {
    LoaderService.loaderDirectiveRef.clear();
  }
}
