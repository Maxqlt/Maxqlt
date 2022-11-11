import { PathLocationStrategy } from "@angular/common";
import { HammerGestureConfig } from "@angular/platform-browser";

export class Breadcrumb {
    public name: string;
    public path: string;

    constructor(name: string, path: string) {
        this.name= name;
        this.path= path;
    
    }
}