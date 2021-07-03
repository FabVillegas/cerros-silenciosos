import { Component, OnInit, ViewChild } from '@angular/core';
import { PhrasesComponent } from './../phrases/phrases.component';

@Component({
    selector: 'background',
    templateUrl: './background.component.html',
    styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent implements OnInit {
    started = false;
    @ViewChild(PhrasesComponent) phrasesComponent: PhrasesComponent;

    constructor() {
        //
    }

    ngOnInit(): void {
        //
    }

    startAmbience(): void {
        const  footstepsAudio = document.getElementById('footstepsSound') as HTMLMediaElement;
        footstepsAudio.play();
        this.started = true;
        this.sirenAlarm();
    }

    private sirenAlarm(): void {
        setTimeout(() => {
        }, 1000 );
        const timerUntilSiren = Math.floor(Math.random() * (30 - 20) + 20);
        setTimeout(() => {
            const  sirenAudio = document.getElementById('sirenSound') as HTMLMediaElement;
            sirenAudio.play();
            setTimeout(() => {
                setTimeout(() => {
                    this.phrasesComponent.startAmbiance();
                    this.phrasesComponent.initialize();
                }, 10000);
            }, 30000);
        }, timerUntilSiren * 1000);
    }
}
