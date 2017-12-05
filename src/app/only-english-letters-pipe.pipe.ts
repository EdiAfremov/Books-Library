import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "onlyEnglishLettersPipe"
})
export class OnlyEnglishLettersPipePipe implements PipeTransform {
  transform(value) {
    return value.replace(/\W/g, " ");
  }
}
