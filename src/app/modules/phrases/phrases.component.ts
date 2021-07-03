import { Component, ElementRef, ViewChild, Renderer2, QueryList, ViewChildren} from '@angular/core';

@Component({
    selector: 'phrases',
    templateUrl: './phrases.component.html',
    styleUrls: ['./phrases.component.scss'],
})
export class PhrasesComponent {
    @ViewChild('paragraph') paragraphElement: ElementRef;
    triggerInterval: any;
    phraseControl = 0;
    phrasesRemoved = 0;
    canErase = false;
    phrases = [
        'hola soy yo otra vez // ',
        'perdon por molestar // ',
        'se que no pertenezco a este lugar // ',
        'soy tan diferente a los demas // ',
        'este mundo para mi no tiene ningun sentido // ',
        'espero que mi muerte importe mas que mi vida // ',
        'y pueda mirar mas alla del sufrimiento // ',
        'aunque di mas de lo que soy // ',
        'aparentemente el problema soy siempre yo // ',
        'siempre he sentido que soy una carga // ',
        'odio despertar todos los dias // ',
        'deberia aguantar un dia mas // ',
        'para que seguir aqui // ',
        'a nadie le importo ni le importara // ',
        'no quiero morir pero necesito que el dolor termine // ',
        'callar las voces de mi cabeza // ',
        'es cansado pretender que todo esta bien // ',
        'odio todo lo que soy // ',
        'nadie me podra amar jamas // ',
        'la historia se repite una y otra vez // ',
        'cuando ya no este todo sera igual // ',
        'al final yo me voy pero ustedes aqui se quedan // ',
        'esto no lo hice yo lo hicieron ustedes // ',
        'es hora de desaparecer //',
        'perdon y adios // '
    ];

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        //
    }

    startAmbiance(): void {
        const otherworldAudio = document.getElementById('otherworldSound') as HTMLMediaElement;
        otherworldAudio.play();
        const maxMins = 3;
        const minMins = 1;
        const timerUntilTrigger = Math.floor(Math.random() * (maxMins - minMins + 1) + minMins);
        this.triggerInterval = setInterval(() => {
            const min = 1;
            const max = 6;
            const selectedTrigger = Math.floor(Math.random() * (max - min + 1) + min);
            const triggerAudio = document.getElementById('triggerSound' + selectedTrigger) as HTMLMediaElement;
            triggerAudio.play();
        }, timerUntilTrigger * 60 * 1000);
    }

    initialize(): void {
        if (this.phraseControl < this.phrases.length) {
            const p = this.renderer.createElement('p');
            this.renderer.appendChild(this.paragraphElement.nativeElement, p);
            this.renderer.listen(p, 'click', this.removePhrase.bind(this));
            this.showText(p, this.phrases[this.phraseControl], 0);
        } else {
            // termino la carta
            this.canErase = true;
            this.renderer.setAttribute(this.paragraphElement.nativeElement, 'class', 'clickable')
        }
    }

    private showText(target: HTMLElement , message: string, index: number, interval = 200): void  {
        if (index < message.length) {
            target.innerText += message[index++];
            setTimeout(() => {
                this.showText(target, message, index, interval);
            }, interval);
        } else {
            // frase termino
            this.phraseControl++;
            this.initialize();
        }
    }

    private removePhrase(event: Event): void {
        if (this.canErase) {
            this.renderer.removeChild(this.paragraphElement.nativeElement, event.target);
            this.phrasesRemoved++;
            if (this.phrasesRemoved === this.phrases.length) {
                const musicAudio = document.getElementById('musicSound') as HTMLMediaElement;
                const otherworldAudio = document.getElementById('otherworldSound') as HTMLMediaElement;
                musicAudio.play();
                otherworldAudio.pause();
                clearInterval(this.triggerInterval);
            }
        }
    }
}
