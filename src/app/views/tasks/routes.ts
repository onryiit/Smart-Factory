import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'tasks'
    },
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full'
      },
      {
        path: 'task-list',
        loadComponent: () => import('./tasks.component').then(m => m.TasksComponent),
        data: {
          title: 'Task List'
        }
      },
      // {
      //   path: 'button-groups',
      //   loadComponent: () => import('./button-groups/button-groups.component').then(m => m.ButtonGroupsComponent),
      //   data: {
      //     title: 'Button groups'
      //   }
      // },
      // {
      //   path: 'dropdowns',
      //   loadComponent: () => import('./dropdowns/dropdowns.component').then(m => m.DropdownsComponent),
      //   data: {
      //     title: 'Dropdowns'
      //   }
      // },
    ]
  }
];

