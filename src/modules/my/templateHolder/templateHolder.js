import { LightningElement, api, track } from 'lwc';

export default class TemplatePhoto extends LightningElement {

    @api
    slide

    @track
    divStyle

    constructor() {
        super();
        const styles = document.createElement('link');
        styles.href =
            '/resources/styles/salesforce-lightning-design-system.css';
        styles.rel = 'stylesheet';
        this.template.appendChild(styles);

    }

    connectedCallback() {
        this.divStyle = 'width:-webkit-fill-available; background-color:' + this.slide.backgroundcolour;
    }

    

}