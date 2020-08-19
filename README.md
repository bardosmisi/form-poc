# form-poc
A POC repo for a webcomponent form.

### The problem
If we want to use web component based form elements, the native form will not be compatible with those. Also in order to maintain compatibility with angular, and barista, we have to find the best way of using these web components with them.

### What's in the repo
The repo contains an application, for demonstrating the different approaches to the problem, and a possible solution. 

### This should do the trick:
```
npm i
ng serve
```
note: if you would like to see the fluid elements as well, and those are not yet publicly released, you will have add a configured ``` .npmrc ```.

In the running application there are examples of different ui library form components, and and the the current state of the POC. The current approach of the POC is, that during form submission it loops over all the slotted elements, and based on their type, the form data is assembled.

### What still needs to be figured out:
- [ ] Why the barista form does not work :).
- [ ] Even though I tried I couldn't find a better approach, but there should be.
- [ ] Find out how would be the best to integrate the poc into an angular component.
- [ ] Check how we could leverage ngModel.
- [ ] Check how we could leverage angular forms with https://angular.io/api/forms/ControlValueAccessor.
