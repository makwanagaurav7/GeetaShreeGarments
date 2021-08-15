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

  restrictInputs(type: string, value: any) {
    switch(type) {
      case 'number': if (value >= 48 && value <= 57) return true;
                      return false;
      case 'name' : if ((value >= 65 && value <= 90) || (value >= 97 && value <= 122) || value === 32) return true;
                      return false;
    }
    return true;
  }
}
