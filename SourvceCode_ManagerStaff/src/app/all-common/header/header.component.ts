import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imageUrl ='http://itsol.vn/wp-content/uploads/2017/01/logo_1.png';
  imageFace='./../../../assets/hinh/iconfacebook_32x32.png';
  imageTwitter="./../../../assets/hinh/tiwtter_32x32.png";
  imageInsta="./../../../assets/hinh/instagram_32x32.png";
  
}
