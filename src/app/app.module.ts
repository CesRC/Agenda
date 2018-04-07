import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LogInPage } from '../pages/log-in/log-in';
import { AgendaPage } from '../pages/agenda/agenda';
import { ContactoPage } from '../pages/contacto/contacto';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { NuevoContactoPage } from '../pages/nuevo-contacto/nuevo-contacto';
import { ClickContactoPage } from '../pages/click-contacto/click-contacto';
import { EditContactPage } from '../pages/edit-contact/edit-contact';
import { NuevaTareaPage } from '../pages/nueva-tarea/nueva-tarea';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactService } from '../services/contact.service';
import { TaskService } from '../services/task.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogInPage,
    ContactoPage,
    AgendaPage,
    AcercaDePage,
    NuevoContactoPage,
    ClickContactoPage,
    NuevaTareaPage,
    EditContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogInPage,
    ContactoPage,
    AgendaPage,
    AcercaDePage,
    NuevoContactoPage,
    ClickContactoPage,
    EditContactPage,
    NuevaTareaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ContactService,
    TaskService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
