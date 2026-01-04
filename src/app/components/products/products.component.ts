
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  image: string;
  title: string;
  subtitle: string;
  description: string[];
  features: string[];
  variants?: string[];
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class ProductsComponent {
  products: Product[] = [
    {
      image: 'assets/img/sp8.jpg',
      title: 'Sonpakhru Smart Switch',
      subtitle: 'Retrofit Smart Switchboard Solution',
      description: [
        'Transform existing switchboards into smart automation hubs.',
        'Perfect for homes, hospitals, community halls, and hotels.',
        'Controls lights and fans with dimmable options and 16A load capacity.'
      ],
      features: ['Retrofit design', 'WiFi connectivity', 'App control', 'Scheduling'],
      variants: ['Sonpakhru S4: 4-port', 'Sonpakhru S8: 8-port']
    },
    {
      image: 'assets/img/thml.jpg',
      title: 'THMLogger',
      subtitle: 'WiFi Cloud-Based Environmental Monitor',
      description: [
        'Industrial-grade temperature and humidity logging.',
        'Real-time cloud data synchronization.',
        'Advanced analytics and reporting for critical environments.'
      ],
      features: ['Threshold-based alerts', 'Inactivity monitoring', 'Analytics dashboard', 'Historical data tracking']
    },
    {
      image: 'assets/img/musice.jpg',
      title: 'Sonpakhru Music Box',
      subtitle: 'Multi-Source Audio Streaming Device',
      description: [
        'A versatile music playback solution for any space, based.',
        'Multiple connectivity options for seamless audio experience.',
        'Stream from anywhere or play your local favorites.'
      ],
      features: ['Remote stream support', 'Bluetooth', 'WiFi streaming', 'Local playback (USB/SD)'],
      variants: ['ESP32 based', 'Raspberry Pi based']
    }
  ];
}
