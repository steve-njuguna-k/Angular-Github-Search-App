import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../interfaces/apiresponse';
import { User } from '../models/user';
import { Repo } from '../models/repo';
import { RepoResponse } from '../interfaces/repo-response';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  private API_KEY = environment.apikey;

  gitUser: User;
  gitRepo: Repo;
  allRepos : any;
  username!: string;

  constructor(private http: HttpClient) { 
    console.log('Service is now ready')
    this.gitUser = new User("","", "",new Date())
    this.gitRepo = new Repo("", "", false, new Date(), "", "")
  }

  getProfileData(username: string) {
    return this.http.get(
      `https://api.github.com/users/${username}?api_key=${this.API_KEY}`
    );
  }

  getRepoData(username: string) {
    return this.http.get(
      `https://api.github.com/users/${username}/repos?api_key=${this.API_KEY}`
    );
  }

  findUser(username: string) {
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<APIResponse>(`https://api.github.com/users/${username}?`)
        .toPromise().then(response => {
          this.gitUser.name = response.name,
          this.gitUser.avatar_url = response.avatar_url,
          this.gitUser.login = response.login,
          this.gitUser.created_at = response.created_at,
          this.gitUser.public_repos = response.public_repos,
          this.gitUser.followers = response.followers,
          this.gitUser.following = response.following,
          resolve()
        },
          error => {
            confirm(`Sorry we can't find ${username}. The user does not exist!`);
            window.location.reload();
            reject(error);
            console.log(error);
          })

      this.http.get<RepoResponse>(`https://api.github.com/users/${username}/repos`)
        .toPromise().then(response => {
          this.gitRepo.name = response.name,
          this.gitRepo.description = response.description,
          this.gitRepo.fork = response.fork,
          this.gitRepo.updated_at = response.updated_at,
          this.gitRepo.size = response.size,
          this.gitRepo.language = response.language,
          resolve()
        },
          error => {
            reject(error)
            console.log(error);
          }
        )
      }
    )
    return promise;
  }

  updateFields(username: string) {
    this.username = username;
  }

}
