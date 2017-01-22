"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ProductListComponent = (function () {
    function ProductListComponent() {
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.products = [{
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "deliveredBy": "March 19, 2016",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95,
                "starRating": 3.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "productId": 2,
                "productName": "Saucy Cake",
                "productCode": "GDN-0012",
                "deliveredBy": "Jan 20, 2017",
                "description": "Custom cake",
                "price": 9.95,
                "starRating": 4,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            }
        ];
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'dj-products',
        templateUrl: 'app/products/productList.component.html'
    })
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=productList.component.js.map