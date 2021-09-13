import { TestBed } from '@angular/core/testing';

import { WysiwygEditorService } from './wysiwyg-editor.service';

describe('WysiwygEditorService', () => {
  let service: WysiwygEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WysiwygEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
