import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.page.html',
  styleUrls: ['./chatroom.page.scss'],
})
export class ChatroomPage implements OnInit {

  message: string = ''; // Simpan input pesan
  messages: string[] = []; // Simpan semua pesan yang dikirim
  chatBubbles: string[] = ['Hello', 'How are you?', 'Let’s meet tomorrow']; // Contoh chat untuk slider

  constructor() { }

  ngOnInit() {}

  sendMessage() {
    // Hanya kirim pesan jika input tidak kosong
    if (this.message.trim().length > 0) {
      this.messages.push(this.message); // Tambah pesan ke array
      this.message = ''; // Reset input setelah dikirim
    }
  }
}
