import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { NewsComponent } from './components/news/news.component';
import { ServicesComponent } from './components/services/services.component';
import { WebsiteComponent } from './components/website/website.component';
import { WorksComponent } from './components/works/works.component';
import { VideosComponent } from './components/videos/videos.component';

// import { SwiperDirective } from 'directives/swiper.directive';
import { register } from 'swiper/element/bundle';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { VideoPopupComponent } from './components/video-popup/video-popup.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    FeedbackComponent,
    NewsComponent,
    ServicesComponent,
    WebsiteComponent,
    WorksComponent,
    VideosComponent,
    VideoPopupComponent,
    ScrollTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
