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

  repos:any[] = [];
  username!: string;
  loadState: boolean = false;
  gitUser: User = new User("","", "",new Date());

  constructor(private service: GitHubService) { }

  ngOnInit(): void {
  }

  findUser (username: string) {

    this.loadState = true;
  }

}
