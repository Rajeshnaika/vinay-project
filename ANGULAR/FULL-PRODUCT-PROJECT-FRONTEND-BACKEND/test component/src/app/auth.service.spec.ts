import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service : AuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
    service = TestBed.get(AuthService);
  });
  afterEach(()=>{
    service =null;
    localStorage.removeItem('token');
  });

  it('should be created service ', () => {
    expect(service).toBeTruthy();
  });
  it('should verify token present or not ?', () => {
    localStorage.setItem('token','john smith');
    let flag = service.isTokenAvailable();
    expect(flag).toBe(true);
    expect(service).toBeTruthy();
  });
  it('should validate a token', () => {
    localStorage.setItem('token','john smith');
    let token = service.getToken();
    expect(token).toBe('john smith');
    expect(token).toEqual('john smith');
    expect(service).toBeTruthy();
  });
});
