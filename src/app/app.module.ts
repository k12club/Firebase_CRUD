import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { AngularFireAuthModule } from 'angularfire2/auth';



import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { AddShoppingListPage } from '../pages/add-shopping-list/add-shopping-list';
import { EditShoppingListPage } from '../pages/edit-shopping-list/edit-shopping-list';
import { LoginPage } from '../pages/login/login';
import { ProfilesPage } from '../pages/profiles/profiles';
import { HomePage } from '../pages/home/home';


@NgModule({
  declarations: [ 
    MyApp,
    ShoppingListPage,
    AddShoppingListPage,
    EditShoppingListPage,
    LoginPage,
    ProfilesPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Config FIREBASE_CREDENTIALS
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    // Config FIREBASE_DATABASE
    AngularFireDatabaseModule,
    AngularFireAuthModule
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShoppingListPage,
    AddShoppingListPage,
    EditShoppingListPage,
    LoginPage,
    ProfilesPage,
    HomePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
//npm install promise-polyfill --save-exact