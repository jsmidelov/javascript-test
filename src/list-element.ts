import {Video} from './model';
import {VideoApi} from './api';

export class ListElement{
    public video:Video;
    constructor(props:any) {
        this.video = props;        
    }
    public render = (root:HTMLElement, video:Video) => {
        const container = this.createChildElement(root,'div');
        let id = this.createChildElement(container,'input') as HTMLInputElement;
        id.type = 'hidden';
        id.value = String(video.id);
        let label = this.createChildElement(container,'p');
        let score = this.createChildElement(container, 'select') as HTMLSelectElement;
        score = this.appendGradeOptions(score, [1, 2, 3, 4, 5]);
        label.innerHTML = video.title;
    }
    
    private createChildElement = (parent:HTMLElement, tag:string):HTMLElement => {
        const child = document.createElement(tag);
        parent.appendChild(child);
        return child;
    };
    
    private appendGradeOptions = (scoreSelectElement:HTMLSelectElement,grades: number[]) => {
        grades.map((grade) => {
        let option: HTMLOptionElement = this.createChildElement(scoreSelectElement, 'option') as HTMLOptionElement;
        option.value = String(grade);
        option.innerHTML = String(grade);
        });
        scoreSelectElement.selectedIndex = this.video.grade;
        scoreSelectElement.addEventListener('change',this.updateScore);
        return scoreSelectElement;
    };

    private updateScore = (event:Event) => {
        let selectors = document.querySelectorAll('select');
        // låser alla selectors under pågående uppdatering för att förebygga race conditions.
        // Jag föreställer mig att ett liten uppdatering som denna går omärkbart snabbt.
        selectors.forEach(select => select.disabled = true);
      
        const newVideo:Video = {
          id: this.video.id,
          title: this.video.title,
          grade: event.target.grade}; // behöver komma på hur jag hämtar event value med TS
          // så när jag uppdaterat värdet, hur skriver jag det tillbaka?
        VideoApi.update(newVideo.id, newVideo).then(()=> {
          selectors.forEach(select => select.disabled = false);
        }).catch();
      }
}