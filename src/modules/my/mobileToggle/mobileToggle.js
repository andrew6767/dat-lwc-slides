import { LightningElement} from 'lwc';

export default class MobileToggle extends LightningElement {

    constructor() {
        super();
        const styles = document.createElement('link');
        styles.href =
            '/resources/styles/salesforce-lightning-design-system.css';
        styles.rel = 'stylesheet';
        this.template.appendChild(styles);
        
    }

    handleToggleChange(evt) {
        const toggleChangedEvt = new CustomEvent('mobiletogglechange', {
            detail: evt.currentTarget.checked
        });
        this.dispatchEvent(toggleChangedEvt);
    }

}