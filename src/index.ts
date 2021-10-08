import { ListElement } from './list-element';
import {Video} from './model';
import {VideoApi} from './api';

let state:Video[] = new Array<Video>();

console.log('index.ts is loaded');

const search = ()=>{
  const searchButton = document.querySelector('#search') as HTMLButtonElement;
  // Jag låser knappen under pågående hämtning och listgenerering för att throttla anropen,
  // eftersom inget hindrar användaren att "button mash"a sökningen annars
  searchButton.disabled = true;
  let query:string = (document.querySelector('#query') as HTMLInputElement).value;
  VideoApi.get(query)
    .then((response:Video[]) => {state = response});
  generateList();
  searchButton.disabled = false;
};

document.querySelector('#search').addEventListener('click', search);

const generateList = ():void => {
  state.forEach(element => {
    let results:HTMLElement = document.querySelector('#results');
    new ListElement(element).render(results, element);
  });
}