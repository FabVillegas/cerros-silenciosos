import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from './background.component';
import { PhrasesModule } from './../phrases/phrases.module';

@NgModule({
    imports: [
        CommonModule,
        PhrasesModule,
    ],
    declarations: [
        BackgroundComponent
    ],
    exports: [
        BackgroundComponent
    ],
    providers: [],
})
export class BackgroundModule {
    constructor() {
        //
    }
}
