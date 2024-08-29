import { Routes } from '@angular/router';
import { FotografiaComponent } from './pages/fotografia/fotografia.component';
import { DesenvolvimentoComponent } from './pages/desenvolvimento/desenvolvimento.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { SobreComponent } from './pages/sobre/sobre.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fotografia', component: FotografiaComponent },
  { path: 'desenvolvimento', component: DesenvolvimentoComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'sobre/:id', component: SobreComponent },
];
