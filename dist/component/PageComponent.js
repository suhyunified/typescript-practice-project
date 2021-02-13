"use strict";
class PageComponent {
    constructor(name) {
        this.name = name;
        console.log(this.name);
    }
    static makeCompomponent(name) {
        return new PageComponent(name);
    }
}
