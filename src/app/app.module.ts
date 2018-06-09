import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { DbService } from './shared/db.service';
import { WindowComponent } from './chat/window/window.component';
import { InputComponent } from './chat/input/input.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [AppComponent, WindowComponent, InputComponent, ChatComponent],
  imports: [
    BrowserModule,
    // FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule {}
