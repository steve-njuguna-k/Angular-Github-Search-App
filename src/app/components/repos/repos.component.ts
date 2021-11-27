import { Component, OnInit } from '@angular/core';
import { GitHubService } from 'src/app/services/git-hub.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repoItems: any[] = [];
  repoName: string = "Akan-Name-Generator";
  loadState: boolean = false;

  constructor(private service: GitHubService) { }

  ngOnInit(): void {
    this.findRepo();
  }

  findRepo () {
    this.service.updateRepo(this.repoName);
    this.service.searchrepos()
      .subscribe((response: any) => {
        this.repoItems = response;
        console.log(this.repoItems);
      }
    );
    this.loadState = true;
  }

}
