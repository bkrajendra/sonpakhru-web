import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, AfterViewInit, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-flasher',
    standalone: true,
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './flasher.component.html',
    styleUrls: ['./flasher.component.scss']
})
export class FlasherComponent implements OnInit, AfterViewInit {
    @ViewChild('installButton') installButton!: ElementRef;

    progress = 0;
    status = '';
    isInstalling = false;
    showButton = false;
    error = false;

    constructor(private cdr: ChangeDetectorRef) { }

    ngOnInit() {
        this.loadScript();
    }

    ngAfterViewInit() {
        this.setupListeners();
    }

    loadScript() {
        // Only load if not already present
        if (!document.querySelector('script[src*="esp-web-tools"]')) {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = 'https://unpkg.com/esp-web-tools@10/dist/web/install-button.js?module';
            document.head.appendChild(script);
        }
    }

    onTypeChange(event: any) {
        const type = event.target.value;
        if (this.installButton) {
            const button = this.installButton.nativeElement;
            button.manifest = `/flasher/manifest_${type}.json`;
            this.showButton = true;
            this.status = '';
            this.error = false;
            this.progress = 0;
            this.isInstalling = false;
            this.cdr.detectChanges();
        }
    }

    setupListeners() {
        const button = this.installButton?.nativeElement;
        if (button) {
            button.addEventListener('installing', () => {
                this.isInstalling = true;
                this.status = 'Installing...';
                this.cdr.detectChanges();
            });

            button.addEventListener('progress', (e: any) => {
                this.progress = Math.round((e.detail.bytesWritten / e.detail.bytesTotal) * 100);
                this.cdr.detectChanges();
            });

            button.addEventListener('installed', () => {
                this.status = '✅ Flash completed successfully!';
                this.progress = 100;
                this.isInstalling = false;
                this.cdr.detectChanges();
            });

            button.addEventListener('error', () => {
                this.status = '❌ Error during flashing!';
                this.error = true;
                this.isInstalling = false;
                this.cdr.detectChanges();
            });
        } else {
            // Retry in case it's not ready
            setTimeout(() => this.setupListeners(), 100);
        }
    }
}
