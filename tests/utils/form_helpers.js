import { FormFieldType } from "./constants"
import { TestHelper } from "./helpers"

export class FormHelper {
    static async genericSetFieldVal(formMeta, value, instance = 0) {
        //if(typeof value.getMonth !== 'function' && (TestHelper.isNothing(value) || TestHelper.isNothing(formMeta) || TestHelper.isNothing(formMeta.fieldType))) return
        if((TestHelper.isNothing(value) || TestHelper.isNothing(formMeta) || TestHelper.isNothing(formMeta.fieldType))) return
        if(typeof formMeta.isDisabled !== 'undefined' && formMeta.isDisabled) return
        if(TestHelper.isNotNullOrUndefined(formMeta?.instance)) instance = formMeta.instance
    
        switch(formMeta.fieldType.name) {
            case FormFieldType.DDBOX.name:
                /* if(typeof(value) === 'object' && cy.hasValue(value.text)) value = value.text
    
                cy.setDropdownBySel(formMeta.fieldSel, value, value, instance) */
                break
            case FormFieldType.DDBOX_MUI.name:
               /*  if(typeof(value) === 'object' && cy.hasValue(value.text)) value = value.text
        
                cy.setDropdownBySel(formMeta.fieldSel, value, value, instance, 'ul[role="listbox"]') */
                break
            case FormFieldType.MULTI_DDBOX.name:
                /* if((!Array.isArray(value)) || value.length <= 0) return
    
                //clearAll
                cy.get(formMeta.fieldSel).eq(instance).parent().then(($cont) => {
                    if(!$cont.find('button[class$="clearIndicatorDirty"]').length) return
    
                    cy.get(formMeta.fieldSel).eq(instance).parent().parent().trigger('mouseover')
                    cy.get(formMeta.fieldSel).eq(instance).parent().find('button[class$="clearIndicatorDirty"]').click({force: true})
                })
    
                value.forEach(v => {
                    if(typeof(v) === 'object' && cy.hasValue(v.text)) value = v.text
    
                    cy.setDropdownBySel(formMeta.fieldSel, value, value, instance)
                }) */
                break
            case FormFieldType.COMBOX.name:
                /* //if(typeof(value) === 'object' && cy.hasValue(value.text)) value = value.text
                if(typeof(value) === 'object' && cy.hasValue(value.name.value)) value = value.name.value
    
                cy.setCombobox(formMeta.fieldSel, value, value, instance) */
                break
            case FormFieldType.TXTBOX.name:
                await formMeta.locator.fill(value)
                break
            case FormFieldType.SWITCH.name:
                /* cy.reactSwitchSetVal(formMeta.fieldSel, value) */
                break
            case FormFieldType.LIST_CBOX.name:
                /* cy.reactListComboSetVal(formMeta.fieldSel, value) */
                break
            case FormFieldType.LISTBOX.name:
                /* cy.muiListSetVal(formMeta.fieldSel, value, instance) */
                break
            case FormFieldType.DATETIME_PICKER.name:
                /* cy.reactDatetimePickerSetValByDate(formMeta.fieldSel, value, (TestHelper.isNothing(formMeta.instance) ? 0 : formMeta.instance )) */
                break
            case FormFieldType.CHBOX.name: 
                /* (value) ? cy.get(formMeta.fieldSel).check({force: true}) : cy.get(formMeta.fieldSel).uncheck({force: true}) */
                break
            case FormFieldType.FILE.name:
                /* if(value.length === 0) return
    
                cy.get(formMeta.fieldSel).selectFile(value.filter(v => v._id.value === null).map(v => v.path.value), { force: true }); */
                break
            default:
                //nothing to do for now 
        }
    }
}