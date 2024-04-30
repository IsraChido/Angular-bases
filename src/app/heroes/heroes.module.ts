import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroComponent } from "./hero/components/hero.component";
import { ListComponent } from "./list/components/list.component";


@NgModule({
    declarations: [
        HeroComponent,
        ListComponent,
    ],
    exports: [
        HeroComponent,
        ListComponent,
    ],
    imports: [
        CommonModule,
    ]
})
export class HeroesModule {

}

