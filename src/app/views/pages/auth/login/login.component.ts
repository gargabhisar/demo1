import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Publications } from 'src/app/Models/Publications';
import { WebAPIService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  loginForm: FormGroup;
  allpublications: Array<Publications>;
  constructor(private formBuilder: FormBuilder, private router: Router, private webapi: WebAPIService) {
    let getAllPublicationsCall = this.webapi.GetAllPublications();
    getAllPublicationsCall.subscribe((data: any) => {
      this.allpublications = data.result;
    });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      useremail: ['', [Validators.required, Validators.email]],
      userpassword: ['', [Validators.required, Validators.minLength(8)]],
      publicationid: ['', [Validators.required]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    
    let loginresult = this.webapi.login(this.loginForm.value);

    loginresult.subscribe((data: any) => {
      if (data.statusCode == 400) {
        alert('Login Failed.');
      }
      else {
        sessionStorage.setItem('result', JSON.stringify(data.result));
        this.router.navigateByUrl('dashboard')
      }
    })
  }

}
