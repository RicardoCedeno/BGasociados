import { Component } from '@angular/core';
import { Team } from '../classes/team';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent {

  team:Team[]=[
    {
      name:'HUMBERTO RODRIGUEZ GUERRA',
      image:'https://rodriguezasociados.co/wp-content/uploads/2018/05/Im%C3%A1genes-equipo-06.png',
      role:'Socio - Abogado'
    },
    {
      name:'ANA MARIA MAZO GUTIERREZ',
      image:'https://rodriguezasociados.co/wp-content/uploads/2018/05/Im%C3%A1genes-equipo-01.png',
      role:'Asociada - Abogada'
    },
    {
      name:'ALEJANDRA PORRAS MONTOYA',
      image:'https://rodriguezasociados.co/wp-content/uploads/2018/05/Im%C3%A1genes-equipo-02.png',
      role:'Asociada - Abogada'
    },
    {
      name:'JESUS ALCIDES RODRIGUEZ GUERRA',
      image:'https://rodriguezasociados.co/wp-content/uploads/2018/05/Im%C3%A1genes-equipo-05.png',
      role:'Socio - Contador'
    },
    {
      name:'ELKIN FABIAN OBREGON CATAÑO',
      image:'https://rodriguezasociados.co/wp-content/uploads/2018/05/Im%C3%A1genes-equipo-04.png',
      role:'Asociado - Abogado'
    },
    {
      name:'HUGO MARULANDA OTALVARO',
      image:'https://rodriguezasociados.co/wp-content/uploads/2018/05/Im%C3%A1genes-equipo-03.png',
      role:'AsociadO - Abogado'
    },



  ]


}
