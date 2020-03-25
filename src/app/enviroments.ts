import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariables {
    contextConfigStr: any = {
        language: "en",
        country:"",
        path: ""
    };
    customConfigStr: any ={ 
        endpoint: "",
        redirect: ""
    };
}