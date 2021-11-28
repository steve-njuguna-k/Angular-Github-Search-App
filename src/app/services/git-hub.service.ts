import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../interfaces/apiresponse';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  private API_KEY = environment.apikey;
  private URL = environment.url;
  gitUser: User;

  username!: string;
  repoName!: string;

  constructor(private http: HttpClient) { 
    console.log('service is now ready');
    this.gitUser = new User("","", "",new Date());
  }

  getUser(user:string) {
    let url = this.URL + user + '?api_key=' + this.API_KEY;
    let promise = new Promise((resolve,reject)=>{
      this.http.get<APIResponse>(url).
        toPromise().then(response=>{
          this.gitUser.name = response.name;
          this.gitUser.avatar_url = response.avatar_url;
          this.gitUser.login=response.login;
          this.gitUser.created_at=response.created_at;
          this.gitUser.public_repos=response.public_repos;
          this.gitUser.followers=response.followers;
          this.gitUser.following=response.following;
        console.log(response);
        resolve("")
      },
      
      error=>{
        console.log(error);
        confirm(`Sorry we cant find ${user}. Such user does not exist!`);
        // window.location.reload();
        reject(error);
      })
    })
    
    return promise;
  };

  getUserRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos' + '?api_key=' + this.API_KEY);
  }

  searchrepos() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName + '&api_key=' + this.API_KEY)
  }

  userSearch(username:string) {
    this.username = username;
  }

  updateRepo(repo:string) {
    this.repoName = repo;
  }

}
