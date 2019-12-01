import { Component, OnInit,} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor(private _sanitizer: DomSanitizer
    ) { }

    
    getVideoIframe(url) {
      var video;
   
      video   = '/8pC5VZM2h8k?rel=0';
   
      return this._sanitizer.bypassSecurityTrustResourceUrl('//www.youtube.com/embed' + video);   
  }
  
    
  

  ngOnInit() {

    

  }

  

}
