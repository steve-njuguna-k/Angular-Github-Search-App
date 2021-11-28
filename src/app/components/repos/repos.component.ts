import { Component, OnInit } from '@angular/core';
import { GitHubService } from 'src/app/services/git-hub.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos: any;
  loadState: boolean = false;

  constructor(private service: GitHubService) { }

  ngOnInit(): void {
  }

  repoSearch(searchTerm: HTMLInputElement) {
    if (searchTerm.value==='') {
      alert('Please Enter A Repository Name');
      searchTerm.focus();
      return;
    }
    console.log(searchTerm.value);
    this.service.repoSearch(searchTerm);
    this.repos = this.service.returnRepo();

    this.loadState = true;
  }

}
