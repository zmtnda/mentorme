import {Action} from '@ngrx/store';
import {type} from '../util';

export const ActionTypes = {
  OPEN_FILE_PICKER : type('[Layout] Open File Picker'),
  CLOSE_FILE_PICKER : type('[Layout] Close File Picker')
};

export class OpenFilePickerAction implements Action { type = ActionTypes.OPEN_FILE_PICKER; }

export class CloseFilePickerAction implements Action { type = ActionTypes.CLOSE_FILE_PICKER; }

export type Actions = OpenFilePickerAction | CloseFilePickerAction;
