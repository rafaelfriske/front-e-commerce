import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { TagsComponent } from './features/tags/tags.component';
import { ProfileComponent } from './features/profile/profile.component';
import { TrackingComponent } from './features/tracking/tracking.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: '',
        component: LayoutComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'tags', component: TagsComponent },
          { path: 'tracking', component: TrackingComponent },
          { path: 'profile', component: ProfileComponent },
        ]
      }
];
