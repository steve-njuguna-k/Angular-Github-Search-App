import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  private CLIENT_ID = environment.clientId;
  private CLIENT_SECRET = environment.clientSecret;
  private API_KEY = environment.apikey;

  username!: string;
  repoName!: string;

  constructor(private http: HttpClient) { 
    console.log('service is now ready');
  }

  getUser() {
    return this.http.get("https://api.github.com/users/" + this.username + '?api_key=' + this.API_KEY);
  }

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
