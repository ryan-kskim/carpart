/**
 * Created by vega on 2017-03-29.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrdinalPipe} from './pipe/ordinal.pipe';
import {MyDatePipe} from './pipe/mydate.pipe';
import {HiddenDirective} from './directive/hidden.directive';
import {TextDecorationDirective} from './directive/text-decoration.directive';
import {ColorDirective} from './directive/color.directive';


@NgModule({
    // declarations 에 표현한 거는 반드시 exports 해야 함.
    imports: [ CommonModule ], // 필수사항
    declarations: [ OrdinalPipe, MyDatePipe, HiddenDirective, TextDecorationDirective, ColorDirective ],
    exports : [     OrdinalPipe, MyDatePipe, HiddenDirective, TextDecorationDirective, ColorDirective ]
})

export class SharedModule {}
