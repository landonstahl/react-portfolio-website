import { action, makeAutoObservable } from "mobx";

class HomeViewModel {
    constructor() {
        makeAutoObservable(this);
    }
    
    @action dockIconEvent = (dockIcon: string): void => {
        switch (dockIcon) {
            case 'finder': 
                return;
            default:
                return;
        }
    }
}

export default HomeViewModel;