import { Component, OnInit } from '@angular/core';
import { Repo } from 'src/app/models/repo';
import { User } from 'src/app/models/user';
import { GitHubService } from 'src/app/services/git-hub.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  username: string = '';
  repos: any[] = [];
  userProfile: any;
  loadState: boolean = false;

  constructor(private service: GitHubService) {
  }

  ngOnInit() {
  }

  searchUser(username: string) {
    this.service.findUser(username);
    this.service.getProfileData(username)
      .subscribe((profile: any) => {
        this.userProfile = profile;
        console.log(this.userProfile)
      }
    );

    this.service.getRepoData(username)
      .subscribe((repos: any) => {
        this.repos = repos;
        console.log(this.repos)
      }
    );

    this.loadState = true;
  }

}
