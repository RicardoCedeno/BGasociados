import { Component, OnInit } from '@angular/core';
import { DollarServiceService } from '../services/dollar-service.service';
import { Money } from '../classes/money';
import { Testimonials } from '../classes/testimonials';
import { Blog } from '../classes/blog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private dollarService:DollarServiceService){}
  ngOnInit(): void {
    this.getAllExchanges()

    }

    exchangeRates:any[]

    getAllExchanges(){
      this.dollarService.getAllExchanges().subscribe((data:any)=>{
        this.exchangeRates=Object.entries(data.rates).map(([name, rate]) => ({name, rate}))
      })
    }

    copRate:number

    setCopRate(rate:number){
      this.copRate=rate
    }

    testimonials:Testimonials[]=[
      {
        name:"Angelica",
        country: "China, Guanzhou",
        testimony:'“me llamo Angelica de Guanzhou de China y he recibido el mejor servicio. Siempre atención inmediata por parte de los abogados, ellos han resuelto mis dudas y dado respuesta a mis llamadas. Ya le recomendé esta firma a mis familiares y amigos, pues gracias a ustedes tengo mi pensión cotizando desde el exterior. Estoy muy agradecida con ustedes y con el servicio que brindan”.',
        image:"https://rodriguezasociados.co/wp-content/uploads/2019/09/Angelica.png"
      },
      {
        name:"Lina",
        country: "Tampa",
        testimony:'“No sé cómo describir lo bien que los abogados de esta firma me han tratado, gracias a ellos pude constituir mi sociedad en Colombia, en todo momento Rodriguez Asociados atendieron mis llamadas vía whatapp y skype, en estos momentos me encuentro en Tampa, ¡pero espero viajar pronto!. Creo que esta empresa ha hecho un gran trabajo seleccionando a sus profesionales”.',
        image:"https://rodriguezasociados.co/wp-content/uploads/2019/09/lina-tampa.png"
      },
      {
        name:"Marta",
        country: "Boston",
        testimony:'“La atención ha sido muy buena. Yo soy de Colombia pero vivo con mi esposo en Boston hace 2 años, hoy en día quisimos invertir en propiedad raíz en Colombia por lo que contacté a Rodriguez Asociados para todos los trámites desde Colombia, en todo momento han atendido mis llamadas y/o mensajes de correo electrónico. ¡Súper recomendados para realizar trámites de inversión en Colombia»',
        image:"https://rodriguezasociados.co/wp-content/uploads/2019/09/Martha.png"
      },

    ]

    blogs:Blog[]=[
      {
        date:"19 enero, 2023",
        title: "Venta de bienes ligados a plazo o condición",
        content:"Los bienes tan bien pueden ser vendidos cuando están sujetos a condiciones, esto quiere decir, que la tradición se cumple cuando el bien mueble o inmueble cumple el plazo o la condición a la cual está sujeta, un ejemplo es la venta de un bien inmueble con el gravamen de embargo, en donde se debe…",
        image:"https://rodriguezasociados.co/wp-content/uploads/2023/01/pexels-thirdman-8469937-scaled.jpg"
      },
      {
        date:"5 enero, 2023",
        title: "INCENTIVOS TRIBUTARIOS EN HOTELERÍA Y TURISMO",
        content:"La reforma tributaria, aprobada el 13 de diciembre de 2022, dejo vigente el incentivo tributario para la inversión extranjera y nacional en hotelería y turismo. Antes de la vigencia de la presente ley contaba con una tarifa de impuesto de renta del 9%, con la reforma paso al 15%. Es decir seguirá siendo atractiva pues…",
        image:"https://rodriguezasociados.co/wp-content/uploads/2023/01/pexels-rodnae-productions-8292847-scaled.jpg"
      }
    ]





  }
