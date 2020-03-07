import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  classrooms: any[] = [];
  loaderToShow: any;

  constructor(
    public api: RestApiService,
    public loadingController: LoadingController
  ) { }

  ionViewWillEnter() {
    this.api.getClassroom()
    .subscribe(
      (res: any) => {
        this.classrooms = res.data;
      }, error => {
        alert("ERROR");
      }
    );
  }
  
  async getClassrooms() {
    // const loading = await this.loadingController.create({
    //   content: 'Loading',
    // });
    // await loading.present();
    this.api.getClassroom()
      .subscribe(() => {
        res => {
          this.classrooms = res;
        };
      }
    );
  }

}
