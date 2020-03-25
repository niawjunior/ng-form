import {
    NxButtonModule,
    NxCheckboxModule,
    NxCopytextModule,
    NxDropdownModule,
    NxHeadlineModule,
    NxImageModule,
    NxLinkModule,
    NxMessageModule,
    NxPopoverModule,
    NxRadioModule,
    NxAutocompleteModule,
    NxVideoModule,
    NxDynamicTableModule, 
    NxListModule
  } from '@allianz/ngx-ndbx';
  import { NxDatefieldModule } from '@allianz/ngx-ndbx/datefield';
  import { NxIconModule } from '@allianz/ngx-ndbx/icon';
  import { NxGridModule } from '@allianz/ngx-ndbx/grid';
  import { NxSliderModule } from '@allianz/ngx-ndbx/slider';
  
  import { NxInputModule } from '@allianz/ngx-ndbx/input';
  import { NxMomentDateModule } from '@allianz/ngx-ndbx/moment-date-adapter';
  import { NxFormfieldModule } from '@allianz/ngx-ndbx/formfield';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { NgModule } from '@angular/core';
  
  @NgModule({
    exports: [
      NxButtonModule,
      NxHeadlineModule,
      NxCheckboxModule,
      NxRadioModule,
      NxCopytextModule,
      NxHeadlineModule,
      NxIconModule,
      NxLinkModule,
      NxInputModule,
      NxSliderModule,
      NxGridModule,
      NxImageModule,
      NxVideoModule,
      NxPopoverModule,
      NxDropdownModule,
      NxLinkModule,
      NxDatefieldModule,
      NxMessageModule,
      NxMomentDateModule,
      NxAutocompleteModule,
      NxDynamicTableModule,
      NxFormfieldModule,
      FormsModule,
      NxListModule,
      ReactiveFormsModule,
      BrowserAnimationsModule
    ]
  })
  export class NdbxSharedModule { }