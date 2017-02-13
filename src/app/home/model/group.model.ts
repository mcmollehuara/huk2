import { ComponentModel } from "./component.model";
export class GroupModel {
    id: number;
    name: string;
    status: boolean;
    icon: string;
    items: Array<ComponentModel>;
    constructor() {

    }
}