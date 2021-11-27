import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { GitHubService } from 'src/app/services/git-hub.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userRepos:any;
  username: string = ''
  loadState: boolean = false;
  gitUser: User = new User("","", "",new Date());

  constructor(private service: GitHubService) { }

  ngOnInit(): void {
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
