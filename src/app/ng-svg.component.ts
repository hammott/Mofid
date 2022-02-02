import { Component,ElementRef,Inject,Injectable, Input, OnInit, Renderer2, ViewChild} from "@angular/core";
import { Observable  } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { map } from 'rxjs/operators';
export abstract class SvgLoader {
	abstract getSvg(url: string): Observable<string>;
}

@Injectable({providedIn:'root'})
export class SvgHttpLoader extends SvgLoader {

	constructor(private http: HttpClient) {
		super();
	}

	getSvg(url: string): Observable<string> {
		return this.http.get(url, { responseType: 'text' });
	}
}

@Component({
  selector: 'ng-svg',
  template: '<span #svg class="display-flex justify-content-center">{{load | async}}</span>'
})
export class NGSvgComponent implements OnInit {
  @Input('src')
  public svgUrl:any;
  private document: Document;

  constructor(private _loader:SvgHttpLoader , @Inject(DOCUMENT) private _document: any , private _renderer :Renderer2){ this.document = this._document; }
  @ViewChild('svg') svg : ElementRef;
  load:Observable<any>;
  ngOnInit(): void {
    this.load = this._loader.getSvg(this.svgUrl).pipe(map(svg => {
      const div = this.document.createElement('DIV');
      div.innerHTML = svg;
      this._renderer.appendChild(this.svg.nativeElement , div.querySelector('svg') as SVGElement)
    }),)
  }
}


