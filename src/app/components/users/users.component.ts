import { Component, OnInit } from '@angular/core';
import { GitHubService } from 'src/app/services/git-hub.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: any;
  userRepos:any;
  username: string = ''
  loadState: boolean = false;

  constructor(private service: GitHubService) { }

  ngOnInit(): void {
  }

  findUser () {
    this.service.userSearch(this.username);

    this.service.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });

    this.service.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.userRepos = repos;
    });

    this.loadState = true;
  }

}
