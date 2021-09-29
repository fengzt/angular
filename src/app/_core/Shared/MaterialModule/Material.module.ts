import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  imports: [
    MatBadgeModule,
    MatDividerModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
  ],
  exports: [
    MatBadgeModule,
    MatDividerModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
  ],
})
export class MaterialModule {}
