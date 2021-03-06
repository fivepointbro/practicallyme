import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { User, Api } from '../providers';
import { MyApp } from './app.component';
import { WpProvider } from '../providers/wp/wp';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { 
  WpApiModule,
  WpApiLoader,
  WpApiStaticLoader
} from 'wp-api-angular'

export function WpApiLoaderFactory(http) {
  return new WpApiStaticLoader(http, 'https://practicallyphotography.com/wp-json/wp/v2','');
}

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
        WpApiModule.forRoot({
      provide: WpApiLoader,
      useFactory: (WpApiLoaderFactory),
      deps: [Http]      
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    Api,
    User,
    InAppBrowser,
    PhotoViewer,
    SplashScreen,
    StatusBar,
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    WpProvider,
    SocialSharing,
  ]
})
export class AppModule { }
