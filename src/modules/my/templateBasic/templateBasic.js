import { LightningElement, api, track } from 'lwc';

export default class TemplateBasic extends LightningElement {

    @api
    slide

    @track
    title

    @track
    bgColour

    constructor() {
        super();
        const styles = document.createElement('link');
        styles.href =
            '/resources/styles/salesforce-lightning-design-system.css';
        styles.rel = 'stylesheet';
        this.template.appendChild(styles);
        
    }

    connectedCallback() {
        this.bgColour = 'background-color:' + this.slide.backgroundcolour;
    }

}