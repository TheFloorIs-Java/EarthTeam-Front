import { User } from 'app/models/user';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { inject } from '@angular/core';

describe('UserService', () => {
  let userService: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [userService]
    });
    userService = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // it('should be created', () => {
  //   expect(userService).toBeTruthy();
  // });

  it('should update user email and first name via PUT',
   () => {
    const dummyInfo : User = {
      id: 1,
      email: "dummyEmail",
      password: "password",
      firstName: "dummyFirstName",
      lastName: "user"
    };

    userService.updateUser(dummyInfo.email, dummyInfo.firstName).subscribe(response => expect (response).toEqual(dummyInfo));

    const request = httpMock.expectOne('http://localhost:8080/api/user/' + dummyInfo.id);
    expect(request.request.method).toEqual('PUT');
    expect(request.request.body).toEqual(dummyInfo);
  });

});
