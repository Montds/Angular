import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderUserComponent} from '@shared/components/header-user-component/header-user-component';
import {MediaPlayerComponent} from '@shared/components/media-player-component/media-player-component';
import {SideBarComponent} from '@shared/components/side-bar-component/side-bar-component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderUserComponent,
    MediaPlayerComponent,
    SideBarComponent
  ],
  exports: [
    //esto es parea exporla el Component pero se debe declarar la importacion donde se vatya a usar
    SideBarComponent,
  ]
})
export class SharedModule { }
