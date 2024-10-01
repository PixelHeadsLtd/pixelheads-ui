import {
    Directive,
    Output,
    EventEmitter,
    HostBinding,
    HostListener
  } from '@angular/core';
  
  @Directive({
    selector: '[appDragDropUpload]'
  })
  export class FileUploadDirective {
    @HostBinding('class.file-hover') fileHover: boolean | undefined;
    @Output() fileDropped = new EventEmitter<any>();
  
    // Dragover listener
    @HostListener('dragover', ['$event']) onDragOver(evt: { preventDefault: () => void; stopPropagation: () => void; }) {
      evt.preventDefault();
      evt.stopPropagation();
      this.fileHover = true;
    }
  
    // Dragleave listener
    @HostListener('dragleave', ['$event']) public onDragLeave(evt: { preventDefault: () => void; stopPropagation: () => void; }) {
      evt.preventDefault();
      evt.stopPropagation();
      this.fileHover = false;
    }
  
    // Drop listener
    @HostListener('drop', ['$event']) public ondrop(evt: { preventDefault: () => void; stopPropagation: () => void; dataTransfer: { files: any; }; }) {
      evt.preventDefault();
      evt.stopPropagation();
      this.fileHover = false;
      let files = evt.dataTransfer.files;
      if (files.length > 0) {
        this.fileDropped.emit(files);
      }
    }
  }
  