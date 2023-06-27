import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MenuIzquierdaComponent } from './menu-izquierda/menu-izquierda.component';



@NgModule({
    declarations: [
        // BreadcrumbsComponent,
        // SidebarComponent,
        HeaderComponent,
        MenuIzquierdaComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        // BreadcrumbsComponent,
        // SidebarComponent,
        HeaderComponent,
        MenuIzquierdaComponent
    ]
})
export class SharedModule { }
