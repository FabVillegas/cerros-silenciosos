import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhrasesComponent } from './phrases.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        PhrasesComponent
    ],
    exports: [
        PhrasesComponent
    ],
    providers: [],
})
export class PhrasesModule {
    constructor() {
        //
    }
}
