import { Injectable } from '@angular/core';

@Injectable()
export class IconsService {
  icons = ["3d_rotation","access_alarm","access_alarms","access_time","accessibility","account_balance","account_balance_wallet","account_box","account_circle","adb","add","add_alarm","add_alert","add_box","add_circle","add_circle_outline","add_shopping_cart","add_to_photos","adjust","airline_seat_flat","airline_seat_flat_angled","airline_seat_individual_suite","airline_seat_legroom_extra","airline_seat_legroom_normal","airline_seat_legroom_reduced","airline_seat_recline_extra","airline_seat_recline_normal","airplanemode_active","airplanemode_inactive","airplay"]
  public  getIcons() {
      return this.icons;
  }
}
