## Tour of Thrones
* App Starter
  1. cd \MyIonicApps
  2. ionic start MyIonicTourHeroes blank --v2
  3. cd MyIonicTourHeroes
  4. ionic cordova platform add
    * _What platform would you like to add ios, android:_
  5. ionic serve or ionic build android
  6. code .

* Lets add some stuff Home.ts
```javascript
title = 'Tour of Thrones';
char = 'Jon Snow';
```
```HTML
<h1>{{title}}</h1><h2>{{char}} details!</h2>
```

  * Lets add more than just a string, cool. 
  * HTML now has object, not just a string, d'oh
```javascript
export class Character {
  id: number;
  name: string;
}

title = "Tour of Thrones";
  char: Character = {
    id: 1,
    name: "Jon Snow"
  };
```
```HTML
<h1>{{title}}</h1>
  <h2>{{char.name}} details!</h2>
  <div><label>id: </label>{{char.id}}</div>
  <div><label>name: </label>{{char.name}}</div>
```
* Should be able to update users name, break out the binding!
* ng-Model
* don't forget the @angular/forms dude
```HTML
<div>
    <label>name: </label>
    <input [(ngModel)]="char.name" placeholder="name">
  </div>
``` 
* Let's add more characters
  * CHARACTERS array of type character
  * import it
  * cool, now how do we show all the characters ?
  * Dad, what's a directive? [Well son...](https://angular.io/guide/attribute-directives)
    * Directives allow you to attach **behavior** to elements in the DOM..
    * 3 Types
      1. Components—directives with a template.
      2. Structural directives—change the DOM layout by adding and removing DOM elements. *ngIf, *ngFor
      3. Attribute directives—change the appearance or behavior of an element, component, or another directive. ngStyle aka ngClass
  * what is that astrick for ? 
    * *ngFor, click events, *ngIf, [* sugar syntax](https://angular.io/guide/structural-directives#asterisk)
  * property binding and something binding ? 
  * oh, what else ? 
```HTML
<h1>{{title}}</h1>
  <h2>For the Throne</h2>
  <ul class="characters">
    <li *ngFor="let char of characters" [class.selected]="char === selectedChar" (click)="onSelect(char)">
      <span class="badge">{{char.id}}</span> {{char.name}}
    </li>
  </ul>
  <div *ngIf="selectedChar">
    <h2>{{selectedChar.name}} details!</h2>
    <div><label>id: </label>{{selectedChar.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedChar.name" placeholder="name" />
    </div>
  </div>
```
  * oh man that is great, so much info, but the select doesn't work, damn it
```javascript
selectedChar: Character;

  onSelect(char: Character): void {
    this.selectedChar = char;
  }
```

  