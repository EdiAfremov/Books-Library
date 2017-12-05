import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "titlePipe"
})
export class TitlePipePipe implements PipeTransform {
  transform(value: any) {
    return value.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
