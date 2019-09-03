import {
    LightningElement,
    api,
    track
} from 'lwc';

export default class Paginator extends LightningElement {
    constructor() {
        super();
        const styles = document.createElement('link');
        styles.href =
            '/resources/styles/salesforce-lightning-design-system.css';
        styles.rel = 'stylesheet';
        this.template.appendChild(styles);

        this.current = 0;

    }

    @track
    current

    @api
    max

    handlePrevious() {
        this.current--;
        this.disableButtons();
        this.dispatchEvent(new CustomEvent('previousslide'));
    }

    handleNext() {
        this.current++;
        this.disableButtons();
        this.dispatchEvent(new CustomEvent('nextslide'));
    }

    disableButtons() {
        if (this.current === 0) {
            this.disablePrevious();
        }
        if (this.current === this.max - 1) {
            this.disableNext();
        }
        if (this.current > 0) {
            this.enablePrevious();
        }
        if (this.current < this.max - 1) {
            this.enableNext();
        }
    }

    disablePrevious() {
        let previous = this.template.querySelectorAll('button')
        previous[0].setAttributeNode(document.createAttribute("disabled"));
    }

    disableNext() {
        let previous = this.template.querySelectorAll('button')
        previous[1].setAttributeNode(document.createAttribute("disabled"));
    }

    enablePrevious() {
        let previous = this.template.querySelectorAll('button')
        previous[0].removeAttribute('disabled');
    }

    enableNext() {
        let previous = this.template.querySelectorAll('button')
        previous[1].removeAttribute('disabled');
    }
}