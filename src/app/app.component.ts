import { Component, OnInit } from '@angular/core';
import { AppAuthService } from './service/app.auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AppAuthService) { }

  ngOnInit(): void {
    this.authService.initAuth();
  }
}
