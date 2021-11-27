export class User {
    name: string | undefined;
    avatar_url: string | undefined;
    login: string | undefined;
    created_at: Date=new Date();
    public_repos: number | undefined;
    followers: number | undefined;
    following: number | undefined;
    constructor(
        name?:string,
        avatar_url?:string,
        login?:string,
        created_at?:Date,
        public_repos?:string,
        followers?:number,
        following?:number
    ){  }
}
