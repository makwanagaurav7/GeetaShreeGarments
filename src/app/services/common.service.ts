import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private electronService: ElectronService) { }

  closeApp() {
    this.electronService.remote.app.exit();
    // this.electronService.remote.app.quit();
  }

  minimizeApp() {
    this.electronService.remote.getCurrentWindow().minimize();
  }
}
