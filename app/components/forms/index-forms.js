
/* ############### FORMS ################ */
// checkboxes
import checkboxes from './checkboxes/index.checkboxes'
// buttons
import buttons from './buttons/index.buttons'
// dropdowns
import dropdowns from './dropdowns/index.dropdowns'
// inputs
import inputs from './inputs/index.inputs'
// datepickers
import datepicker from './date-pickers/index.date-pickers'
// customs
import customs from './customs/index.customs'
// icons
import icons from './icons/icons.index'

export default {
    ...checkboxes,
    ...buttons,
    ...customs,
    ...dropdowns,
    ...inputs,
    ...datepicker,
    ...icons
}