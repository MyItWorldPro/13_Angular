import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "singleErrorOnlyPipe"
})
export class SingleErrorOnly implements PipeTransform {
    transform(errorsList: any, errorsPriorityList: string[]): any {
        if (!errorsList) {
            return null;
        }

        const singleErrorObj: any = {};

        for (let errorObj of errorsPriorityList) {
            if (errorsList[errorObj]) {
                singleErrorObj[errorObj] = errorsList[errorObj];
                break;
            }
        }

        return singleErrorObj;
    }

}