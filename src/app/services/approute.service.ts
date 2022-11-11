import { Params } from "@angular/router";

export class approuteService {
  urlParams: any;

  getUrl( status: any){
    this.urlParams = status;
    var absUrl = $location.absUrl();
  };

}