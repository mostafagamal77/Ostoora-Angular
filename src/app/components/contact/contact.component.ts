import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  messageForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
  });

  constructor(private _MessageService: MessageService) {}

  sendMessage() {
    if (this.messageForm.valid) {
      this._MessageService.sendMessage(this.messageForm.value).subscribe({
        next: () => {
          this.messageForm.reset();
        },
      });
    }
  }
}
