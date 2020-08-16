import { NgModule } from "@angular/core"

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    exports:[
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatExpansionModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
    ]
})

export class AngularMaterialModule{}