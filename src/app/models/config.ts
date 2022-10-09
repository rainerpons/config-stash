export class Config {
    description: string;
    displayName: string;
    name: string;
    setting: string;

    constructor(data: any) {
        this.description = data.description || '';
        this.displayName = data.displayName || '';
        this.name = data.name || '';
        this.setting = data.setting || '';
    }
}
