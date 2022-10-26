import { User } from 'app/models/user';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
      });
    userService = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  /**
   * Test to test our UserService for its Update via PUT
   */
  
  it('should update user email and first name via PUT',
   () => {

    // ARRANGE
    const dummyInfo : User = {
      id: 1,
      email: "dummyEmail",
      password: "password",
      firstName: "dummyFirstName",
      lastName: "user"
    };

    //ACT
    userService.updateUser(dummyInfo.email, dummyInfo.firstName).subscribe(response => expect (response).toEqual(dummyInfo));

  });

});
