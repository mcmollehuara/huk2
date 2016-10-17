import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: '[footer]',
  directives: [
    ROUTER_DIRECTIVES
  ],
  template: require('./footer.html')
})

/**
 * footer implements OnInit
 */
export class Footer implements OnInit {
    constructor() {
        
    }
    
    ngOnInit():void {
        
    };
}