import { Component, OnInit } from '@angular/core';
import { GitHubService } from 'src/app/services/git-hub.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: any;
  username: string = 'steve-njuguna-k'

  constructor(private service: GitHubService) { }

  ngOnInit(): void {
    this.findUser();
  }

  findUser () {
    this.service.userSearch(this.username);

    this.service.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });
  }

}
