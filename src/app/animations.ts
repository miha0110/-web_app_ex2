import { trigger, transition, state, animate, style } from "@angular/animations";

export let fade = trigger('fade', [
    state('void', style({opacity: 0})),
    transition(':enter',[
        animate(500)
    ])
])

export let slideDown = trigger('slideDown', [
    transition(':enter', [
        style({transform: 'translateY(-20px)'}),
        animate(500)
    ])
])

export let slideRight = trigger('slideRight', [
    transition(':enter', [
        style({transform: 'translateX(-500px)'}),
        animate(250)
    ])
])