import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/service/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private userSerivce: UserService) { }

  ngOnInit() {
  }

  submitForm(f: NgForm): void {
    this.userSerivce.update(f.value);
  }

}
