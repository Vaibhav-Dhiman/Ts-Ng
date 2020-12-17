import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './MainPage/MainPage.component';
import { AddItemFormComponent } from './AddItemForm/AddItemForm.component';
import { BudgetItemListComponent } from './budget-item-list/budget-item-list.component';

@NgModule({
  declarations: [			
    AppComponent,
      MainPageComponent,
      AddItemFormComponent,
      BudgetItemListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
