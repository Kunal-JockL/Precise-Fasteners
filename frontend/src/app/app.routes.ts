import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ProductListingComponent } from './products/product-listing/product-listing.component';
import { IndustriesComponent } from './industries/industries.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutUsComponent},
    { 
        path: 'products', 
        component: ProductsComponent,
        children: [
            { path: '', component: ProductListingComponent },
        ]
    },
    { path: 'industries', component: IndustriesComponent},
    { path: 'clients', component: ClientsComponent},
    { path: 'contact', component: ContactUsComponent}
];
