export class Repo {
    name!: string;
    description!: string;
    updated_at: Date = new Date();
    size!: string;
    language!: string;
    constructor(
        name?: string,
        description?: string,
        updated_at?: Date,
        size?: string,
        language?: string,
    ){}
}
