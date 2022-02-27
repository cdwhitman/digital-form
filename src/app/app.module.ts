import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { SecondFormComponent } from './second-form/second-form.component';
import { HeaderComponent } from './header/header.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { BranchFilterPipe } from './branch-filter.pipe';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const appRoutes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'second-form', component: SecondFormComponent },
  { path: 'view', component: ViewDataComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SecondFormComponent,
    HeaderComponent,
    ViewDataComponent,
    SearchFilterPipe,
    BranchFilterPipe,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
