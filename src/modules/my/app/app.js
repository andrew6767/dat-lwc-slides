import {LightningElement, track, api} from 'lwc';

export default class App extends LightningElement {
    constructor() {
        super();

        this.loadJSON(response => {
            this.slides = JSON.parse(response);
            this.mapSlides();
        });

        const styles = document.createElement('link');
        styles.href =
            '/resources/styles/salesforce-lightning-design-system.css';
        styles.rel = 'stylesheet';
        this.template.appendChild(styles);

        this.mobile = window.matchMedia("(max-width: 700px)").matches;

        let x = window.matchMedia("(max-width: 700px)");
        this.myFunction(x); 
        x.addListener(this.myFunction); 
        x.myself = this;

        this.containerClass = 'slds-col slds-large-size_2-of-3';
    }

    @track
    slides

    @track
    mySlides

    @api
    mobile

    @track
    containerClass

    handleSlideChange(evt) {
    
        this.setAllSlidesFalse();
        this.mySlides[evt.detail].active = true;
    }

    handleNextSlide(){
        let activeSlideId = this.getActiveSlide().Id;
        let currentSlide = this.getSlide(activeSlideId);
        currentSlide.active = false;
        let slide = this.getSlide(activeSlideId +1);
        slide.active = true;
    }

    handlePreviousSlide(){
        let activeSlideId = this.getActiveSlide().Id;
        let currentSlide = this.getSlide(activeSlideId);
        currentSlide.active = false;
        let slide = this.getSlide(activeSlideId -1);
        slide.active = true;
    }

    getActiveSlide(){
        return this.mySlides.find(slide => slide.active === true);
    }

    getSlide(Id){
        return this.mySlides.find(slide => slide.Id === Id);
    }

    setAllSlidesFalse() {
        this.mySlides.forEach(slide => {
            slide.active = false;
        });
    }

    mapSlides() {
        this.mySlides = this.slides.map((x, index) =>
            ({
                Id: index,
                title: x.title,
                content: x.content,
                link: x.link,
                linkText: x.linkText,
                active: index === 0 ? true : false,
                backgroundcolour: x.backgroundColour,
                image: 'resources/' + x.image,
                templateBasic: x.template === 'basic' ? true : false,
                templatePhoto: x.template === 'photo' ? true : false,
                templateSplashBasic: x.template === 'splashBasic' ? true : false
            }));
    }

    myFunction(x) {
        if (x.matches && x.currentTarget !== undefined) {
            x.currentTarget.myself.mobile = true;

        } else {
            if(x.currentTarget !== undefined){
                x.currentTarget.myself.mobile = false;
                
            }
        }
    }

    loadJSON(callback) {   

        var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
        xobj.open('GET', '../../../resources/slides.json', true);
        xobj.onreadystatechange = function () {
              if (xobj.readyState == 4 && xobj.status == "200") {
                callback(xobj.responseText);
              }
        };
        xobj.send(null);  
    }

    handleMobileToggleChange(evt) {
        this.setAllSlidesFalse();
        this.mySlides[0].active = true;

        this.mobile = evt.detail;

        this.containerClass = evt.detail ? 'slds-col slds-large-size_3-of-3' : 'slds-col slds-large-size_2-of-3';
    }
}