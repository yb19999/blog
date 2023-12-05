import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ChildCtoPComponent } from './child-cto-p/child-cto-p.component';
import { UsdToInrPipe } from './pipes/usd-to-inr.pipe';
import { RedELDirective } from './red-el.directive';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WildcardComponent } from './wildcard/wildcard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChildComponent,
    UserDetailsComponent,
    ChildCtoPComponent,
    UsdToInrPipe,
    RedELDirective,
    UserComponent,
    HomeComponent,
    AboutComponent,
    WildcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
