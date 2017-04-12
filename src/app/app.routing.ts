import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';


export const appRoutes: Routes = [
    { path: 'todo', component: TodoComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '/todo' }
];

// export const routing = RouterModule.forRoot(appRoutes);
// export appRoutes;