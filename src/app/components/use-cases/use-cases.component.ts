import { Component, ChangeDetectionStrategy } from '@angular/core';

interface UseCase {
  icon: string;
  title: string;
  image: string;
}

@Component({
  selector: 'app-use-cases',
  templateUrl: './use-cases.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UseCasesComponent {
  useCases: UseCase[] = [
    {
      // FIX: Added 'icon' property to match the UseCase interface.
      icon: 'home-outline',
      title: 'Home Automation',
      image: 'https://picsum.photos/id/10/500/400'
    },
    {
      // FIX: Added 'icon' property to match the UseCase interface.
      icon: 'analytics-outline',
      title: 'Industrial Monitoring',
      image: 'https://picsum.photos/id/119/500/400'
    },
    {
      // FIX: Added 'icon' property to match the UseCase interface.
      icon: 'business-outline',
      title: 'Commercial Spaces',
      image: 'https://picsum.photos/id/21/500/400'
    },
    {
      // FIX: Added 'icon' property to match the UseCase interface.
      icon: 'bed-outline',
      title: 'Hospitality Solutions',
      image: 'https://picsum.photos/id/211/500/400'
    }
  ];
}
