export class RouterOutletItem {
    constructor(
        public tabId: string,
        public name: string,
        public tabDisabled: boolean,
        public routerLink: string | string[],
        public enableCount: boolean,
        public tabCount: number) { }
}
