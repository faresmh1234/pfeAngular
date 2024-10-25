import { Injectable } from '@angular/core';
import { Client, StompSubscription } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Subject, Subscription } from 'rxjs';
import { Observable, } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketServiceService {
   private subscription: StompSubscription;

  private client: Client;
    private messageSubject: Subject<any> = new Subject<any>();
     constructor(private http: HttpClient) {
       this.initializeWebSocket();
     }

  private initializeWebSocket(): void {
 //   const socket = new SockJS('http://localhost:8080/your-websocket-endpoint');
    this.client = new Client({
      brokerURL: 'http://localhost:8085/',
      connectHeaders: {},
      debug: (str: string) => {
        console.log(str);
      },
      onConnect: (frame: any) => {
        console.log('Connected: ', frame);
        this.subscription = this.client.subscribe('/topic/messages', (message) => {
          this.messageSubject.next(message.body);
        });
        console.log("***connected****", this.client);
      },
      onStompError: (frame: any) => {
        console.error('Error: ', frame);
      },
      onDisconnect: (frame: any) => {
        console.log('Disconnected: ', frame);
      }
    });

    this.client.activate();
  }


  public sendMessage(destination: string, message: string): void {
    if (this.client && this.client.connected) {
      this.client.publish({
        destination: destination,
        body: message
      });
      console.log('Message sent:', message);
    } else {
      console.error('Client is not connected. Cannot send message.');
    }
  }


  public start()
  {console.log("**start stocket entity***")
   return this.http.get(`${environment.baseUrl}greeting/start`);
   // return this.http://localhost:8085/greeting/start
  }




  public sendMessage2(data : any ){
    console.log("*********data is ******************",data)
    return this.http.post(`${environment.baseUrl}greeting/send-message`, data);
  }

  public listmsg(){

          return this.http.get(`${environment.baseUrl}greeting/listmsg`);

  }

  public sendnotif(data:any)
  {
    return this.http.post(`${environment.baseUrl}Notification/sendnotif`,data)
  }

   public seenonenotif(id:String)
  {
    return this.http.get(`${environment.baseUrl}Notification/getOneNot/${id}`)
  }






    public getAllnotif()
  {
    return this.http.get(`${environment.baseUrl}Notification/getAllnotif`)
  }

    sendNotifpusher(data:any){

      console.log("####step2####");
      const token="a2c2998f9e28dab013bf01b6d7308b2a9fd798556ab6ccd2d80557b7b2b40c68";

      const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'});

    return this.http.post(`http://landing-page-demo.pushnotifications.pusher.com/publish_api/v1/instances/beb6f539-ed11-4a61-a2ea-845292c64db1/publishes/users`,data,{headers:headers});
  }


  starserviceworker()
  {
    return this.http.get(`${environment.baseUrl}api/service-worker.js`);
  }
}







