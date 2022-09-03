import { action, makeAutoObservable } from "mobx";

class HomeViewModel {
    constructor() {
        makeAutoObservable(this);
    }
    
    @action dockIconEvent = (passedIcon: string): void => {
        switch (passedIcon) {
            case 'Finder': 
                console.log(passedIcon);
                return;
            case 'Terminal':
                console.log(passedIcon);
                return;
            case 'App Store':
                console.log(passedIcon);
                return;
            case 'Safari':
                console.log(passedIcon);
                return;
            case 'Photos':
                console.log(passedIcon);
                return;
            case 'Github':
                console.log(passedIcon);
                return;
            case 'Trash':
                console.log(passedIcon);
                return;
            default:
                return;
        }
    }
}

export default HomeViewModel;