import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
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
  gitUser: User = new User("","", "",new Date());

  constructor(private service: GitHubService) { }

  ngOnInit(): void {
    this.findUser();
  }

  findUser () {
    this.service.getUser(this.username);

    this.gitUser=this.service.gitUser;
    console.log(this.gitUser);

    this.service.getUserRepos().subscribe((repos:any) => {
      console.log(repos);
      this.userRepos = repos;
    });

    this.loadState = true;
  }

}
