import { Component, OnInit } from '@angular/core';
import { GitHubService } from 'src/app/services/git-hub.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  user: any;
  userRepos:any;
  username: string = 'steve-njuguna-k'
  loadState: boolean = false;

  constructor(private service: GitHubService) { }

  ngOnInit(): void {
    this.findUser();
  }

  findUser () {
    this.service.userSearch(this.username);

    this.service.getUser().subscribe((user:any) => {
      console.log(user);
      this.user = user;
    });

    this.service.getUserRepos().subscribe((repos:any) => {
      console.log(repos);
      this.userRepos = repos;
    });

    this.loadState = true;
  }

}
