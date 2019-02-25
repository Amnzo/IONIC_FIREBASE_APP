import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { environment } from '../environments/environment';
import { ParticipationPage } from '../pages/participation/participation';
export const firebaseConfig = {
    apiKey: "AIzaSyClrR-ju4mgixv7kzGOlOnkqPACMHFtHaI",
    authDomain: "test-c98b8.firebaseapp.com",
    databaseURL: "https://test-c98b8.firebaseio.com",
    projectId: "test-c98b8",
    storageBucket: "test-c98b8.appspot.com",
    messagingSenderId: "614280009310"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ParticipationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   AngularFireModule.initializeApp(environment.firebase),
   AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
