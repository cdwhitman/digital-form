import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { SecondFormComponent } from './second-form/second-form.component';
import { HeaderComponent } from './header/header.component';
import { ViewDataComponent } from './view-data/view-data.component';

const appRoutes: Routes = [
  { path: '', component: FormComponent },
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
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
