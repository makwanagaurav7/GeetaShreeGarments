import { Component, DoCheck, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common.service';
import { PreviewPopupComponent } from '../preview-popup/preview-popup.component';

@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.scss']
})
export class NewBillComponent implements OnInit, DoCheck {
  customerName = '';
  // billedDate = '';
  // customerContactNumber = '';
  // billedBy = 'Dinesh';
  totalAmount = 0;

  optionCForm!: FormGroup;
  optCformArray!: FormArray;
  formGroup: any;

  constructor(private formBuilder: FormBuilder,
    private commonService: CommonService,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.optionCForm = this.formBuilder.group({
      tableRows: this.formBuilder.array([])
    });
    this.addRow();
  }

  ngDoCheck() {
    this.updateTotalItemAmount();
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
      pricePerItem: new FormControl('', [Validators.required]),
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
    this.optCformArray.removeAt(index);
  }

  fieldKeyPressEvent(type: string, event: any) {
    return this.commonService.restrictInputs(type, event.keyCode);
  }

  updateTotalItemAmount() {
    this.totalAmount = 0;
    const group = this.optionCForm.get('tableRows') as FormArray;
    for (let i = 0; i < group.controls.length; i++) {
      const formGroup = group.controls[i];
      if (formGroup.get('numberOfItems')?.value !== '' && formGroup.get('pricePerItem')?.value !== '') {
        const numberOfItems = Number(formGroup.get('numberOfItems')?.value);
        const pricePerItem = Number(formGroup.get('pricePerItem')?.value);
        formGroup.get('totalItemAmount')?.setValue(numberOfItems * pricePerItem);
      } else {
        formGroup.get('totalItemAmount')?.setValue('');
      }

      if (formGroup.get('totalItemAmount')?.value !== '') {
        this.totalAmount += Number(formGroup.get('totalItemAmount')?.value);
      }
    }
  }

  previewClick() {
    if (this.customerName && this.optionCForm.valid) {      
      const data = this.optionCForm.get('tableRows') as FormArray;
      const dialogRef = this.matDialog.open(PreviewPopupComponent, {
        width: '250px',
        data: {
          customerName: this.customerName,
          formData: data.controls
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        // TODO: Reset all variables and UI
      });
    } else {
      console.log('invalid')
    }
  }
}
