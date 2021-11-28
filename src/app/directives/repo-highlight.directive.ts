import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRepoHighlight]'
})
export class RepoHighlightDirective {

  constructor( private elementRef:ElementRef, private renderer:Renderer2) { }

  @Input() defaultColor = '#ffffff';
  @Input() highlight: string= '#ffffff';

  @HostBinding('style.color') color:string = this.defaultColor;

  @HostListener('mouseenter') mouseover(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#0d1117');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#ffffff');
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', '1px solid rgba(240,246,252,0.1)');

    this.color=this.highlight;
  }

  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#161b22');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#ffffff');
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', '1px solid rgba(0,0,0,.125)');
    this.color=this.defaultColor;
  }

}
