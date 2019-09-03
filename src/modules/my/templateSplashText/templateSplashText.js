import { LightningElement, api } from 'lwc';

export default class TemplateSplashText extends LightningElement {
    constructor() {
        super();
        const styles = document.createElement('link');
        styles.href =
            '/resources/styles/salesforce-lightning-design-system.css';
        styles.rel = 'stylesheet';
        this.template.appendChild(styles);

    }

    @api
    slide

}