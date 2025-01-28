import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './userlist/userlist.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateNewComponent } from './createnew/createnew.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './newuser/newuser.component';
import { TestingComponent } from './testing/testing.component';



export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
      },
      
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },

      {
        path:"userlist",
        component:UserListComponent,
      },

      {
        path: 'createnew',
        component: CreateNewComponent,
      },

      { path: 'newuser', 
        component: NewUserComponent,
       }, 
      
       
      { path: 'testing', 
        component: TestingComponent,
       }, 

       
];

@NgModule({
  declarations: [
    // AppComponent,
    // LoginComponent,
    // UserListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here
    RouterModule.forRoot(routes), // Import RouterModule with routes
    AppComponent,
    LoginComponent,
    UserListComponent,
    CreateNewComponent,
    ReactiveFormsModule,
    CommonModule,
    NewUserComponent,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
