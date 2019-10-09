import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { BusquedaComponent } from './components/busqueda/busqueda.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'heroes', component:HeroesComponent},
  {path: 'about', component:AboutComponent},
  {path: 'heroe/:id', component:HeroeComponent},
  {path: 'busqueda/:termino', component:BusquedaComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
