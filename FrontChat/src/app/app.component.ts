import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { io } from 'socket.io-client';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'FrontChat';
  private socket: any;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngAfterViewInit() {
    this.socket = io(); // Ensure your `socket.io` instance is initialized correctly

    const messages = this.elRef.nativeElement.querySelector('#messages');
    this.socket.on('chat message', (msg: string) => {
      const item = this.renderer.createElement('li');
      const text = this.renderer.createText(msg);
      this.renderer.appendChild(item, text);
      this.renderer.appendChild(messages, item);
    });
  }
}
