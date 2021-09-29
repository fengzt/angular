// a-module
import { NgModule } from '@angular/core';
import { ShortCutPipe } from './ShortCut.pipe';

@NgModule({
  declarations: [ShortCutPipe],
  imports: [],
  exports: [ShortCutPipe],
})
export class PipeModule {}
