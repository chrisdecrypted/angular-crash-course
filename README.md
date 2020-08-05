# Angular 8 Crash Course  
This project was created by following a tutorial for Angular 8 / Typescript.

The notes below are my own, but the original content was created by `Gary Simon`. Here's the  [original tutorial text](https://coursetro.com/posts/code/174/Angular-8-Tutorial-&-Crash-Course).

Live version here: https://angular8-crash-course.netlify.app/

# Concepts Covered

## Angular 8 Components
+ Imports 
+ Component decorator (Includes locations for HTML template and CSS)
+ Component logic (TS code)

## App Routing
First, we created a simple Nav bar with a logo ("Angular Crash Course") and two links.

The links do not actually use `href` tags. Instead navigation is done through routes.

```HTML
<nav>
    <ul>
        <li><a href="#" routerLink="/">Home</a></li>
        <li><a href="#" routerLink="/list">List</a></li>
    </ul>
</nav>

```
Then we use `router-outlet` tags on our main app template to create a destination container for our routes.

From `app.component.html`:
```HTML
<div class="container">
  <router-outlet></router-outlet>
</div>
```
## Setting up the Routes
We need to create components for Home and List. We use the angular cli to do this: 

```
ng generate component home
ng generate component list
```
This automatically generates the necessary component decorator and component logic files. We still need to configure the routes.

We will edit the `app/app-routing.module.ts` file to ido that. Once there, we need to import each relevant component by adding these two lines to the top of the code:

```JS
import { HomeComponent } from './home/home.component'; 
import { ListComponent } from './list/list.component'; 
```

If you enter a different name for your component, it will follow this same pattern. 

Once we've imported our components, we still need to create the routes.

```JS
const routes: Routes = []
```
This is the array for our routes, we can add the path name and link the components here like this: 
```JS
const routes: Routes = [
  { path: '', component: HomeComponent },           
  { path: 'list', component: ListComponent }        
```

## One way Data Binding
This means communicating in one direction from the logic to the template or the other way around.

We are going to create a `span` that listens for click events on our template (html/css). Once the area is clicked, it will call a function called `clickCounter()`. We will then display the information returned form our function. 

## Two-way binding:

We used `ngModel` to bind form data with the template component. The effect produced displays any text entered in the input box directly below it as well. 

## Style Binding
The project page demonstrates several variations of this. We use different techniques to manipulate css and page elements. 

Concepts:
+ ngTemplate
+ ngStyle
+ ngClass

## Class Binding
`ngClass` allows us to change styles based on class.

Here is the `ngClass`-specific content from the `home.component.ts` file.
```JS
setClasses() {
  let myClasses = {
    active:    this.clickCounter > 4,
    notactive: this.clickCounter <= 4,
  }
  return myClasses;
}
```

## Services
In order to generate the content for the list page, we access an API of breweries. 

First, we have to generate the service component. We will call it `http`. To create it, type the following into the Angular CLI:

```
ng generate service http
```
This creates a file at `src/app/http.service.ts` which looks similar to a component but you can see it's called an injectable.

## Angular HTTP Client
To access our API, we need to integrate our service with the HTTP client.

We will add this to our `http.service.ts` file.
```JS
 getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }
}
```

Then, we need to go to `/src/app/app.module.ts` add an import for our module like we did for the FormsModule earlier. Then, we'll edit our component logic to look like this:

```JS
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: object;

  constructor(private httpList: HttpService) { }

  ngOnInit(): void {
    this.httpList.getBeer().subscribe(data => {
      this.brews = data;
    });
  }

}
```

Now we can access data from the api link and pass it to our application.

We will need to use our template component to format the information. 

```HTML
<h1>Breweries</h1>

<!-- ngIf means that the list will only be displayed if brews exists. -->
<ul *ngIf="brews">
    <li *ngFor="let brew of brews">
        <p class="name">{{ brew.name }}</p>
        <p class="country">{{ brew.country }}</p>       
        <a href="{{ brew.website_url }}" class="site">site</a>               
    </li>
</ul>
```

Once that is done, your app is ready to deploy. I love using the `netlify-cli`.
