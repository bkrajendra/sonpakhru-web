import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

interface NavLink {
  path: string;
  fragment?: string;
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NgbCollapseModule, RouterModule],
})
export class HeaderComponent {
  isMenuCollapsed = signal(true);

  navLinks: NavLink[] = [
    { path: '/', fragment: 'home', label: 'Home' },
    { path: '/', fragment: 'about', label: 'About' },
    { path: '/', fragment: 'products', label: 'Products' },
    { path: '/', fragment: 'technology', label: 'Technology' },
    { path: '/', fragment: 'use-cases', label: 'Use Cases' },
    { path: '/flasher', label: 'Flasher' },
    { path: '/', fragment: 'contact', label: 'Contact' }
  ];


}
