import { Component, OnInit } from '@angular/core';
import { faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  faTwitter = faTwitter;
  faWhatsapp = faWhatsapp;
  faEnvelope = faEnvelope;
  constructor() { }

  ngOnInit(): void {
  }

}
