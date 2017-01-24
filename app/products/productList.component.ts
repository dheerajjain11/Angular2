import {Component} from '@angular/core';


@Component(
    {
        selector:'dj-products',
        templateUrl:'app/products/productList.component.html'
    }
)
export class ProductListComponent{
    pageTitle:string='Product List';
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean=false;
    listFilter:string='';

    toggleImage():void
    {
        this.showImage = !this.showImage;    
    }
    

    products:any[]=[    {
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