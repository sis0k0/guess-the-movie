import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { registerElement } from 'nativescript-angular/element-registry';
import { Gif } from 'nativescript-gif';

import { AppRoutingModule } from './app-routing.module.tns';
import { AppComponent } from './app.component';
import { CreditsComponent } from './credits/credits.component';
import { GameComponent } from './game/game.component';
import { GuessComponent } from './guess/guess.component';
import { HintComponent } from './hint/hint.component';
import { ExplodeDirective } from './explode.directive';

registerElement('Gif', () => Gif);

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    CreditsComponent,
    GameComponent,
    GuessComponent,
    HintComponent,
    ExplodeDirective,
  ],
  providers: [
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
