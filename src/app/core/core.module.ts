import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginatorComponent} from "./components/paginator/paginator.component";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  imports: [CommonModule,MatPaginatorModule],
  declarations: [
    PaginatorComponent,
     ],
  providers: [
   ],
  exports: [
    PaginatorComponent,
   ]
})
export class CoreModule {
}
