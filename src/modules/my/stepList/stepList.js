import { LightningElement, api } from 'lwc';

export default class StepList extends LightningElement {
    constructor() {
        super();
        const styles = document.createElement('link');
        styles.href =
            '/resources/styles/salesforce-lightning-design-system.css';
        styles.rel = 'stylesheet';
        this.template.appendChild(styles);
    }

    @api
    slides

    handleSlideChange(evt) {
        const slideChangedEvt = new CustomEvent('slidechange', {
            detail: evt.currentTarget.dataset.key
        });
        this.dispatchEvent(slideChangedEvt);
    }
}
