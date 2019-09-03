import { LightningElement, track } from 'lwc';

export default class StepListItem extends LightningElement {
    constructor() {
        super();
        const styles = document.createElement('link');
        styles.href =
            '/resources/styles/salesforce-lightning-design-system.css';
        styles.rel = 'stylesheet';
        this.template.appendChild(styles);
    }

    //@track
    //borderStyle = "border-color: green; border-style: solid";
}
