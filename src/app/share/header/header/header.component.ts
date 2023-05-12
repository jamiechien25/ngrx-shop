import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {

  }

  goCart() {
    this.router.navigate(['cart'], { relativeTo: this.route });
  }

  goProduct() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
