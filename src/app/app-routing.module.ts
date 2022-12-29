import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./@home/home.module').then(m => m.HomeModule) },
  { path: 'aluno', loadChildren: () => import('./@aluno/aluno.module').then(m => m.AlunoModule) },
  { path: 'admin', loadChildren: () => import('./@admin/admin.module').then(m => m.AdminModule) },
  { path: 'empresa', loadChildren: () => import('./@empresa/empresa.module').then(m => m.EmpresaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }