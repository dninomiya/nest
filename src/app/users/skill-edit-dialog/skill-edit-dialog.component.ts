import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { UserService } from '../../core/user.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { WorksEditDialogComponent } from '../works-edit-dialog/works-edit-dialog.component';
import { Skills } from '../../core/skills.model';

@Component({
  selector: 'nest-skill-edit-dialog',
  templateUrl: './skill-edit-dialog.component.html',
  styleUrls: ['./skill-edit-dialog.component.scss']
})
export class SkillEditDialogComponent implements OnInit {

  form: FormGroup;
  skills = Skills;
  skillModel;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public dialogRef: MatDialogRef<WorksEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data && data.uid) {
      this.userService.getUserByUid(data.uid).subscribe(user => {
        this.createForm(user);
      });
    }

    this.skillModel = {
      front: this.skills.filter(skill => skill.type === 'front'),
      back: this.skills.filter(skill => skill.type === 'back'),
      design: this.skills.filter(skill => skill.type === 'design'),
      management: this.skills.filter(skill => skill.type === 'management'),
      basic: this.skills.filter(skill => skill.type === 'basic'),
      data: this.skills.filter(skill => skill.type === 'data'),
    };
  }

  createForm(user) {
    this.form = this.fb.group({
      skills: this.fb.group({
        front: this.fb.array(this.buildSkillCtrls(user, 'front')),
        back: this.fb.array(this.buildSkillCtrls(user, 'back')),
        basic: this.fb.array(this.buildSkillCtrls(user, 'basic')),
        design: this.fb.array(this.buildSkillCtrls(user, 'design')),
        data: this.fb.array(this.buildSkillCtrls(user, 'data')),
        management: this.fb.array(this.buildSkillCtrls(user, 'management')),
      })
    });
  }

  get frontCtrls(): FormArray {
    return this.form.get('skills.front') as FormArray;
  }

  get backCtrls(): FormArray {
    return this.form.get('skills.back') as FormArray;
  }

  get basicCtrls(): FormArray {
    return this.form.get('skills.basic') as FormArray;
  }

  get designCtrls(): FormArray {
    return this.form.get('skills.design') as FormArray;
  }

  get managementCtrls(): FormArray {
    return this.form.get('skills.management') as FormArray;
  }

  get dataCtrls(): FormArray {
    return this.form.get('skills.data') as FormArray;
  }

  buildSkillCtrls(user, type: string) {
    return this.skills.filter(skill => skill.type === type).map(skill => {
      return user.skills.includes(skill);
    });
  }

  ngOnInit() {
  }

}
