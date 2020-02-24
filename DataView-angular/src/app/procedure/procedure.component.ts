import { Component, OnInit } from '@angular/core';
import { FormControl , FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css'],
  
})
export class ProcedureComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
export class NameEditorComponent {
  name = new FormControl('');
}

// export class StepperVerticalExample implements OnInit {
//   isLinear = false;
//   firstFormGroup: FormGroup;
//   secondFormGroup: FormGroup;

//   constructor(private _formBuilder: FormBuilder) {}

//   ngOnInit() {
//     this.firstFormGroup = this._formBuilder.group({
//       firstCtrl: ['', Validators.required]
//     });
//     this.secondFormGroup = this._formBuilder.group({
//       secondCtrl: ['', Validators.required]
//     });
//   }
// }