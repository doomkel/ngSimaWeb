import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css']
})
export class MessageModalComponent {
  @Input() isVisible: boolean = false;
  @Input() title: string = 'Message';
  @Input() message: string = '';
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.isVisible = false;
    this.close.emit();
  }
}
