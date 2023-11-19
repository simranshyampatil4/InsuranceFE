import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { InsurancePlansComponent } from './insurance-plans/insurance-plans.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { ProtectionPlanComponent } from './protection-plan/protection-plan.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'insurance-plans', component: InsurancePlansComponent },
  { path: 'insurance-plans/protection-plan', component: ProtectionPlanComponent },
  { path: 'contact-us', component: ContactUsComponent },
  {
    path:"weather",
    component:WeatherInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
