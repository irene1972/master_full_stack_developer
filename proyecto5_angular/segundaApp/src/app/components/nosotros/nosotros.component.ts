import { Component, inject } from '@angular/core';
import { Router,RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
   router= inject(Router);

    goToPage(path: any){
      this.router.navigate([path])
    }
}
