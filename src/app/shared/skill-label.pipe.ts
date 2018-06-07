import { Pipe, PipeTransform } from '@angular/core';
import { Skills } from '../core/skills.model';

@Pipe({
  name: 'skillLabel'
})
export class SkillLabelPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Skills.find(skill => skill.id === value).label;
  }

}
