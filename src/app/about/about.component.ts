import { Component } from '@angular/core';

interface product{
  pImage:string,
  pTitle:string,
  pDescription:string,
  pPrice:number;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {

  allProducts:product[]=[
    {pImage:"../../assets/images/about/010aaa32-9d21-4cdc-8cf3-f2d0edd3db38.jpg",pTitle:"T-Shirt",pDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nesciunt!",pPrice:100},
    {pImage:"../../assets/images/about/0de0c831-2717-4ef3-9bda-7920ac1f4677.jpg",pTitle:"T-Shirt",pDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nesciunt!",pPrice:90},
    {pImage:"../../assets/images/about/53e039b2-55a7-465e-a4db-b86a26434230.jpg",pTitle:"T-Shirt",pDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nesciunt!",pPrice:80},
    {pImage:"../../assets/images/about/95e0b525-c5d6-4915-b935-1fe24b4820fd.jpg",pTitle:"T-Shirt",pDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nesciunt!",pPrice:120},
    {pImage:"../../assets/images/about/Cotton Block Striped Knitted Polo.jpg",pTitle:"T-Shirt",pDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nesciunt!",pPrice:130},
    {pImage:"../../assets/images/about/Eventura Shirt.jpg",pTitle:"T-Shirt",pDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nesciunt!",pPrice:80},
    {pImage:"../../assets/images/about/Men Colorblock Button Front Shirt.jpg",pTitle:"T-Shirt",pDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nesciunt!",pPrice:70},
    {pImage:"../../assets/images/about/a94655b4-4d2b-43f4-bd77-2e01cb4d6e6a.jpg",pTitle:"T-Shirt",pDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nesciunt!",pPrice:90},
    {pImage:"../../assets/images/about/d7b18f1e-b00d-4c59-a28e-d00b74497751.jpg",pTitle:"T-Shirt",pDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nesciunt!",pPrice:100},
    {pImage:"../../assets/images/about/St🎞️.jpg",pTitle:"T-Shirt",pDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nesciunt!",pPrice:110},
    {pImage:"../../assets/images/about/010aaa32-9d21-4cdc-8cf3-f2d0edd3db38.jpg",pTitle:"T-Shirt",pDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nesciunt!",pPrice:151},
    {pImage:"../../assets/images/about/0de0c831-2717-4ef3-9bda-7920ac1f4677.jpg",pTitle:"T-Shirt",pDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nesciunt!",pPrice:115},
    {pImage:"../../assets/images/about/53e039b2-55a7-465e-a4db-b86a26434230.jpg",pTitle:"T-Shirt",pDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nesciunt!",pPrice:120},
    {pImage:"../../assets/images/about/95e0b525-c5d6-4915-b935-1fe24b4820fd.jpg",pTitle:"T-Shirt",pDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nesciunt!",pPrice:100},
    {pImage:"../../assets/images/about/Cotton Block Striped Knitted Polo.jpg",pTitle:"T-Shirt",pDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nesciunt!",pPrice:90},
    {pImage:"../../assets/images/about/Eventura Shirt.jpg",pTitle:"T-Shirt",pDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nesciunt!",pPrice:200},
    {pImage:"../../assets/images/about/Men Colorblock Button Front Shirt.jpg",pTitle:"T-Shirt",pDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nesciunt!",pPrice:150},
    {pImage:"../../assets/images/about/a94655b4-4d2b-43f4-bd77-2e01cb4d6e6a.jpg",pTitle:"T-Shirt",pDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nesciunt!",pPrice:170},
    {pImage:"../../assets/images/about/d7b18f1e-b00d-4c59-a28e-d00b74497751.jpg",pTitle:"T-Shirt",pDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nesciunt!",pPrice:130},
    {pImage:"../../assets/images/about/St🎞️.jpg",pTitle:"T-Shirt",pDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nesciunt!",pPrice:60}
  ]

}
