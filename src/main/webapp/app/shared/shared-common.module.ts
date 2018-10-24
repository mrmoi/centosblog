import { NgModule } from '@angular/core';

import { LinuxBlogSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [LinuxBlogSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [LinuxBlogSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class LinuxBlogSharedCommonModule {}
