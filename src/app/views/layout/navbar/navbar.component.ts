import { Component, OnInit, ViewChild, ElementRef, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  Name: string;
  Role: string;
  Admin: boolean = false;
  ImageSRC: string;
  ProfilePercentage: number;

  constructor(
    @Inject(DOCUMENT) private document: Document, 
    private renderer: Renderer2,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { 
    let result = JSON.parse(sessionStorage.getItem('result') || '{}');
      this.Name = result.loggedInUser.name;
      this.Role = result.loggedInUser.role;
      this.ImageSRC = result.loggedInUser.image;
      this.ProfilePercentage = result.loggedInUser.profilePercentage;
  }

  ngOnInit(): void {
  }

  /**
   * Sidebar toggle on hamburger button click
   */
  toggleSidebar(e: Event) {
    e.preventDefault();
    this.document.body.classList.toggle('sidebar-open');
  }

  /**
   * Logout
   */
  onLogout(e: Event) {
    e.preventDefault();
    localStorage.removeItem('isLoggedin');

    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(['/auth/login']);
    }
  }

  getImage() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.ImageSRC);
  }
}
