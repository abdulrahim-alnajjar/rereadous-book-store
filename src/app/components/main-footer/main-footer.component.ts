import { Component } from '@angular/core';
import { SociallinksComponent } from '../sociallinks/sociallinks.component';
import { DeveloperLogoComponent } from '../developer-logo/developer-logo.component';

@Component({
  selector: 'app-main-footer',
  standalone: true,
  imports: [SociallinksComponent, DeveloperLogoComponent],
  templateUrl: './main-footer.component.html',
  styleUrl: './main-footer.component.css',
})
export class MainFooterComponent {}
