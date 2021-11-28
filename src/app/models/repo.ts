export class Repo {
    name!: string;
    description!: string;
    fork: boolean = false;
    updated_at: Date = new Date();
    size!: string;
    language!: string;
    constructor(
        name?: string,
        description?: string,
        fork?: boolean,
        updated_at?: Date,
        size?: string,
        language?: string,
    ){}
}
