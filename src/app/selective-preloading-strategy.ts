import { PreloadingStrategy, Route } from "@angular/router";
import { Observable } from "rxjs";
/**
 * 预加载策略
 */
export class SelectivePreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        //默认进行加载，当配置了preload=false时不预加载
        return route.data && route.data.preload===false ? Observable.of(null) : load() ;
    }

}