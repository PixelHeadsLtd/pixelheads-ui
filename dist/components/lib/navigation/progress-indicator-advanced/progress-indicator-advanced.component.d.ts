import { OnInit, EventEmitter } from '@angular/core';
export declare class ProgressIndicatorAdvancedComponent implements OnInit {
    progressClass: string;
    progressLabel: string;
    iconClass: string;
    showDescription: boolean;
    description: string;
    asLink: boolean;
    progressLink: string;
    progressClick: EventEmitter<Event>;
    onProgressClick(e: Event): void;
    ngOnInit(): void;
}
//# sourceMappingURL=progress-indicator-advanced.component.d.ts.map