import { Component,inject } from '@angular/core';
import { Geo, Iuser2 } from '../../interfaces/iuser2';
import { Users2 } from '../../services/users2';
import { GoogleMap, MapMarker } from '@angular/google-maps'

@Component({
  selector: 'app-users-list2',
  standalone:true,
  imports: [GoogleMap, MapMarker],
  templateUrl: './users-list2.html',
  styleUrl: './users-list2.css',
})
export class UsersList2 {
  misUsuariosObservable:Iuser2[]=[];
  misUsuariosPromise:Iuser2[]=[];
  userService=inject(Users2)

  async ngOnInit(){
    //opción 1 Observables
    this.userService.getAllUserObservable().subscribe((data)=>{
      console.log(data);
      this.misUsuariosObservable=data;
    });

    //opción 2 Promesas
    this.misUsuariosPromise=await this.userService.getAllUserPromise();
  }
  getPosition(geo:Geo){
    return new google.maps.LatLng(Number(geo.lat),Number(geo.lng));
  }
}
