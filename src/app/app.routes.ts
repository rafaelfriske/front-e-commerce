import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { TagsComponent } from './features/tags/tags.component';
import { ProfileComponent } from './features/profile/profile.component';
import { TrackingComponent } from './features/tracking/tracking.component';
import { HelpCenterComponent } from './features/help-center/help-center.component';
import { TagsCreateComponent } from './features/tags/components/tags-create/tags-create.component';
import { TagsDetailsComponent } from './features/tags/components/tags-details/tags-details.component';
import { TrackingDetailsComponent } from './features/tracking/components/tracking-details/tracking-details.component';
import { ForgotPasswordComponent } from './features/auth/forgort-password/forgot-password.component';
import { ResetPasswordComponent } from './features/auth/forgort-password/components/reset-password/reset-password.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    {
        path: '',
        component: LayoutComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'tags', component: TagsComponent},
          { path: 'tags/create', component: TagsCreateComponent},
          { path: 'tags/details', component: TagsDetailsComponent},
          { path: 'tracking', component: TrackingComponent },
          { path: 'tracking/details', component: TrackingDetailsComponent },
          { path: 'profile', component: ProfileComponent },
          { path: 'help-center', component: HelpCenterComponent },
        ]
      }
];
