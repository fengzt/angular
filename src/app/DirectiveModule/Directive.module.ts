import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './Directive.component';


@NgModule({
  declarations: [DirectiveComponent],
  imports: [CommonModule, FormsModule],
  exports: [DirectiveComponent],
})
export class DirectiveModule {}
