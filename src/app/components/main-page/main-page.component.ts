import { Component, OnInit } from '@angular/core';
import { Repo } from 'src/app/models/repo';
import { User } from 'src/app/models/user';
import { GitHubService } from 'src/app/services/git-hub.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  username: string = 'steve-njuguna-k';
  repos: any[] = [];
  userProfile: any;
  loadState: boolean = false;

  constructor(private service: GitHubService) {
  }

  ngOnInit() {
    this.search(this.username);
  }

  search(username: string) {
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
