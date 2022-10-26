import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { NgxBootstrapIconsModule} from 'ngx-bootstrap-icons'
import { allIcons } from 'ngx-bootstrap-icons';
import { UserDetailsComponent } from './components/user-profile/user-details/user-details.component';
import { WelcomeUserComponent } from './components/user-profile/welcome-user/welcome-user.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProductCardComponent,
    CartComponent,
    CheckoutComponent,
    DisplayProductsComponent,
    UserProfileComponent,
    UserDetailsComponent,
    WelcomeUserComponent,
    OrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
