import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParticipationPage } from './participation';

@NgModule({
  declarations: [
    ParticipationPage,
  ],
  imports: [
    IonicPageModule.forChild(ParticipationPage),
  ],
})
export class ParticipationPageModule {}
