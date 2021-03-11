import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component"

const appRoutes = [
  { path: "", component: AppComponent, pathMatch: "full" },
];
export const routing = RouterModule.forRoot(appRoutes);