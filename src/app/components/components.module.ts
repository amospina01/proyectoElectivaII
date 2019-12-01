import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { VideoComponent } from './video/video.component';
import { EditorComponent } from './editor/editor.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';

import {AgmCoreModule} from '@agm/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapaComponent } from './mapa/mapa.component';


@NgModule({
  declarations: [CarouselComponent, VideoComponent, EditorComponent, MapaComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    NgbModule,
    FormsModule,
    CKEditorModule,
    AgmCoreModule.forRoot ({
      apiKey: 'AIzaSyDVCfq5Z_SYfbZPGMDm4ZVqskJCunD5M5M'
    })
    
    
  ]
})
export class ComponentsModule { }
