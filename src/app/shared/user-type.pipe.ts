import { Pipe, PipeTransform } from '@angular/core';
import { UserTypes } from '../core/user.service';

@Pipe({
  name: 'userType'
})
export class UserTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value || !UserTypes.find(type => type.id === value)) {
      return '未設定';
    }
    return UserTypes.find(type => type.id === value).label;
  }

}
