
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  template: `
    <ng-template #content let-modal>
      <div class="modal-header">
        <h4 class="modal-title">Título del Modal</h4>
        <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Contenido del modal...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')">Cerrar</button>
      </div>
    </ng-template>

    <!-- Botón para abrir el modal -->
    <button class="btn btn-primary" (click)="openModal()">Abrir Modal</button>
  `,
})
export class ModalComponent {
  private modalRef: NgbModalRef | undefined;

  @ViewChild('content') content!: TemplateRef<any>;

  constructor(private modalService: NgbModal) {}

  openModal() {
    if (this.content) {
      this.modalRef = this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' });

      this.modalRef.result.then(
        (result) => {
          console.log(`Closed with: ${result}`);
        },
        (reason) => {
          console.log(`Dismissed ${this.getDismissReason(reason)}`);
        }
      );
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
