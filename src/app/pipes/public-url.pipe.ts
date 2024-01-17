import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'publicUrl',
})
export class PublicUrlPipe implements PipeTransform {
  transform(value: string): string {
    let publicUri: string = 'https://backend-landing.decorationghs.com/';

    return publicUri + value;
  }
}
