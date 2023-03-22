"use strict";

export default class joke {
    constructor(setup, delivery){
        this.setup = setup;
        this.delivery = delivery;
        console.log('hi this is a new Joke!');
    }
}

const myFirstJoke = new joke();
console.log(myFirstJoke);