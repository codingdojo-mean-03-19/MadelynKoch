import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { BrandComponent } from './products/brand/brand.component';
import { CategoryComponent } from './products/category/category.component';
import { ReviewDetailComponent } from './reviews/review-detail/review-detail.component';
import { AuthorComponent } from './reviews/author/author.component';
import { AllReviewsComponent } from './reviews/all-reviews/all-reviews.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent, children: [
    { path: 'brand/:brand', component: BrandComponent},
    { path: 'category/:cat', component: CategoryComponent},
    { path: 'details/:id', component: ProductDetailComponent}
  ]},
  { path: 'reviews', component: ReviewsComponent, children: [
    { path: 'details/:id', component: ReviewDetailComponent},
    { path: 'author/:id', component: AuthorComponent},
    { path: 'all/:id', component: AllReviewsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
