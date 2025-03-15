import { Component, OnInit, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { delay, filter, map, tap } from 'rxjs/operators';

import { ColorModeService } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Smart Factory';

  private destroyRef: DestroyRef = inject(DestroyRef);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private titleService = inject(Title);

  private colorModeService = inject(ColorModeService);
  private iconSetService = inject(IconSetService);

  constructor() {
    this.titleService.setTitle(this.title);

    // iconSet singleton
    this.iconSetService.icons = { ...iconSubset };
    this.colorModeService.localStorageItemName.set('coreui-free-angular-admin-template-theme-default');
    this.colorModeService.eventName.set('ColorSchemeChange');
  }

  ngOnInit(): void {
    this.router.events
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
      });

    this.activatedRoute.queryParams
      .pipe(
        delay(1),
        map(params => <string>params['theme']?.match(/^[A-Za-z0-9\s]+/)?.[0]),
        filter(theme => ['dark', 'light', 'auto'].includes(theme)),
        tap(theme => {
          this.colorModeService.colorMode.set(theme);
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
