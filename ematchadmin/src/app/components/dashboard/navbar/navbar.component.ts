import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu: Menu[] = [];
  rol = localStorage.getItem('user_rol');
  constructor(private _menuService: MenuService, private router: Router) { }

  ngOnInit(): void {
    this.cargarMenu();
  }

  cargarMenu() {
    if (this.rol == '1') {
      this._menuService.getMenu().subscribe(data => {
        this.menu = data;
      })
    }
    else if (this.rol == '2') {
      this._menuService.getMenuUser().subscribe(data => {
        this.menu = data;
      })
    } else if (this.rol == '3') {
      this._menuService.getMenuSuperAdmin().subscribe(data => {
        this.menu = data;
      })
    };
   

  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_rol');
    this.router.navigate(['login']);
  }

}
