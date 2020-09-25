import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
userMessage: FormGroup;
email: string;
message: string
  constructor(public formBuilder: FormBuilder,
			  public httpClient: HttpClient) {
  }

  ngOnInit() {
	this.userMessage=this.formBuilder.group({
		  email : new FormControl('', Validators.required),
		  message : new FormControl('', Validators.required),

		}
	);
  }

  submit(){
	if(!(this.email == null || this.message == null || this.email == "" || this.message == "" )){
	  this.sendMessage();
	}
  }

  sendMessage(){
  const route = environment.server_url + '/admin/contact';
  const formData = new FormData();
  formData.append('email', this.email);
  formData.append('message', this.message);
  //const headers = {}

  this.httpClient.post(route, formData).toPromise()
	  .then((data) =>{
		if(data['res'].toString() == 'true')
		  {
			this.email = null;
			this.message = null;
			alert('Message envoyé!')
		  }
		  else{
			  alert('Message non envoyé. Veuillez réessayez!')
			}
	  })
	  .catch(
		(error) =>{
		alert('Problem on our side. Please try again later! ')
	  }
	);
  }

}
