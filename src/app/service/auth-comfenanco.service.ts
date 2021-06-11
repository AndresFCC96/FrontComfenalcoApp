import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthComfenancoService {

  constructor(public angularFireAuth:AngularFireAuth) {
  }

  public createUser(email:string,password:string){
    return this.angularFireAuth.createUserWithEmailAndPassword(email,password);
  }

  public login(email:string,password:string){
    return this.angularFireAuth.signInWithEmailAndPassword(email,password);
  }

  public salir(){
    return this.angularFireAuth.signOut();
  }

  public async validarEmail(){
    await (await this.angularFireAuth.currentUser).sendEmailVerification();
  }

  public resetpass(email:string){
    return this.angularFireAuth.sendPasswordResetEmail(email);
  }

}
