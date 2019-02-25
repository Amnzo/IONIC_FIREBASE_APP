import { Component } from '@angular/core';
import { Observable } from 'rxjs'; import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { participation } from '../participation/participation';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   postes = [ ]; 
   pt
   nom: string;
   prenom: string;
   tel:string
   newPoste = {nom: 'aaa', prenom:'bbb',tel:'ccc'};
   constructor(public navCtrl: NavController,afDatabase: AngularFireDatabase) {
     
    this.postes = afDatabase.list('/postes').valueChanges();
    this.pt=afDatabase.list('/postes');
      
  }
  log():void {
   this.newPoste.nom=this.nom;
   this.newPoste.prenom=this.prenom;
   this.newPoste.tel=this.tel;
   this.pt.push(this.newPoste);

  }
   go():void {

   this.navCtrl.push(participation);
  }
}
