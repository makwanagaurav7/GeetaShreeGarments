import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.scss']
})
export class NewBillComponent implements OnInit {
  customerName = '';
  billedDate = '';
  customerContactNumber = '';
  billedBy = 'Dinesh';

  optionCForm!: FormGroup;
  optCformArray!: FormArray;
  formGroup: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.optionCForm = this.formBuilder.group({
      tableRows: this.formBuilder.array([])
    });
    this.addRow();
  }

  addRow() {
    this.createFormGroup();
    this.optCformArray =  this.optionCForm.get('tableRows') as FormArray;
    this.optCformArray.push(this.formGroup);
  }

  createFormGroup() {
    this.formGroup = this.formBuilder.group({
      itemName: new FormControl('', [Validators.required]),
      numberOfItems: new FormControl('', [Validators.required]),
      oneItemPrice: new FormControl('', [Validators.required]),
      totalItemAmount: new FormControl('')
    });
  }

  createForm(): FormGroup {
    return this.formBuilder.group(this.formGroup);
  }

  get getFormControls() {
    const control = this.optionCForm.get('tableRows') as FormArray;
    return control;
  }

  deleteRow(index: number) {
    const control =  this.optionCForm.get('tableRows') as FormArray;
    this.optCformArray.removeAt(index);
  }
}
