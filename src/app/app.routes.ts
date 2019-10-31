import { CrudComponent } from './features/crud/crud.component';
import { ModelDrivenComponent } from './features/forms/model-driven/model-driven.component';
import { NotificationsComponent } from './features/notifications/notifications.component';
import { ComponentInteractionComponent } from './features/component-interaction/component-interaction.component';
import { CustomPipesComponent } from './features/custom-pipes/custom-pipes.component';
import { BuiltInDirectivesComponent } from './features/built-in-directives/built-in-directives.component';
import { EventBindingComponent } from './features/event-binding/event-binding.component';
import { AppComponent } from './app.component';
import { TypescriptComponent } from './features/typescript/typescript.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './features/data-binding/data-binding.component';
import { appRoutesNames } from './app.routes.names';
import { TemplateDrivenComponent } from './features/forms/template-driven/template-driven.component';
import { ListUsersComponent } from './features/crud/list-users/list-users.component';
import { AddUserComponent } from './features/crud/add-user/add-user.component';
import { FormsComponent } from './features/forms/forms.component';

export const appRoutes: Routes = [
    { path: appRoutesNames.TYPESCRIPT, component: TypescriptComponent },
    { path: appRoutesNames.DATA_BINDING, component: DataBindingComponent },
    { path: appRoutesNames.EVENT_BINDING, component: EventBindingComponent },
    { path: appRoutesNames.BUILT_IN_DIRECTIVES, component: BuiltInDirectivesComponent },
    { path: appRoutesNames.PIPES, component: CustomPipesComponent },
    { path: appRoutesNames.FORMS, component: FormsComponent },
    { path: appRoutesNames.COMPONENT_INTERACTION, component: ComponentInteractionComponent },
    { path: appRoutesNames.NOTIFICATIONS, component: NotificationsComponent },
    { path: appRoutesNames.CRUD, component: CrudComponent },
    { path: '', pathMatch: 'full', redirectTo: 'app' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
