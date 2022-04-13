export class NavContextData {
    constructor(
        public color: string,
        public iconName: string,
        public title: string,
        public routerLink: string,
        public nestedItems?: NavContextData[]) {}
}