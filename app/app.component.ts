import {Component} from '@angular/core';


@Component(
    {
        selector:'dj-app',
        template:`<div><h1>{{pageTitle}}</h1>
                    <dj-products></dj-products></div>`
    }
)
export class AppComponent{
    pageTitle:string='Test Page';
}