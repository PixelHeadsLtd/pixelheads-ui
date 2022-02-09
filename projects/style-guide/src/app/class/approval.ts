export class Approval {
    constructor(
        // public id: number,
        public createdBy: string,
        public modifiedBy: string,
        public statusClass: string,
        public status: string,
        public approver: string,
        public created: string,
        public modified: string) { }
}
