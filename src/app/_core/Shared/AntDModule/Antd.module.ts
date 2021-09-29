import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzTabsModule } from 'ng-zorro-antd/tabs';


@NgModule({
  imports: [
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    NzRateModule,
    NzSpaceModule,
    NzTableModule,
    NzDividerModule,
    NzBreadCrumbModule,
    NzUploadModule,
    NzTagModule,
    NzTabsModule,
    NzIconModule,
  ],
  exports: [
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    NzRateModule,
    NzSpaceModule,
    NzTableModule,
    NzDividerModule,
    NzBreadCrumbModule,
    NzUploadModule,
    NzTagModule,
    NzTabsModule,
    NzIconModule,
  ],
})
export class AntDModule {}
