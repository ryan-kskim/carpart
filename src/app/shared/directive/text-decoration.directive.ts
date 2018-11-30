/**
 * Created by vega on 2017-03-29.
 */
import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[myTextDecorator]'
})
export class TextDecorationDirective {
    @Input('myTextDecorator') prop; // myTextDecorator에 입력된 값을 받음.

    constructor(
        private renderer: Renderer2,
        private el: ElementRef
    ) {}
    // Event listeners for element hosting
    // the directive
    @HostListener('mouseenter') onMouseEnter() {
        this.hover(true);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.hover(false);
    }
    // Event method to be called on mouse enter and on mouse leave
    hover(shouldUnderline: boolean) {
        if (shouldUnderline) {
            // Mouse enter
            this.renderer.setStyle(this.el.nativeElement, 'text-decoration', this.prop);
        } else {
            // Mouse leave
            this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');
        }
    }
}
