import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';


const DECLARE_MAT_MODULE = [MatFormFieldModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatCheckboxModule,
  MatListModule, MatCardModule, MatButtonToggleModule, MatSelectModule, MatMenuModule, MatProgressSpinnerModule,
  MatInputModule, MatTabsModule, MatGridListModule, MatAutocompleteModule, MatRadioModule, MatChipsModule, MatDialogModule,
  MatDividerModule, MatSnackBarModule, MatBadgeModule,
  MatTooltipModule, MatTableModule, MatExpansionModule
];

@NgModule({

  imports: [DECLARE_MAT_MODULE],
  exports: [DECLARE_MAT_MODULE]
})
export class MaterialModule { }
