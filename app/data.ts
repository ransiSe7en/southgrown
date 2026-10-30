export const categories = ['All food', 'Eggs', 'Honey', 'Vegetables', 'Fruit', 'Herbs', 'Dairy'];
export const photos = {
 hero:'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1800&q=85',
 eggs:'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=900&q=85',
 honey:'https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=900&q=85',
 vegetables:'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85',
 fruit:'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=900&q=85',
 herbs:'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=85',
 tomatoes:'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=85',
};
export type Listing = {id:string; seller:string; title:string; description:string; category:string; price:number; unit:string; quantity:number; suburb:string; postcode:string; method:string; harvested:string; pickup:boolean; delivery:boolean; deliveryFee:number; deliveryArea:string; pickupTimes:string; images:string[]; active:boolean; demo?:boolean; sellerName?:string; created?:string};
export type Profile = {id?:string; name:string; type:string; suburb:string; postcode:string; bio:string; methods:string; pickupTimes:string; deliveryArea:string; deliveryFee:number};
export const samples:Listing[] = [
 {id:'sample-eggs',seller:'sample-patch',sellerName:'The Little Patch',title:'Fresh backyard eggs',description:'An example of a small backyard flock listing. Sellers can describe their hens, collection dates and how to arrange pickup.',category:'Eggs',price:8,unit:'dozen',quantity:6,suburb:'Stirling',postcode:'5152',method:'Free-range · seller declared',harvested:'',pickup:true,delivery:false,deliveryFee:0,deliveryArea:'',pickupTimes:'Arrange with grower',images:[photos.eggs],active:true,demo:true},
 {id:'sample-honey',seller:'sample-hills',sellerName:'Hills & Hive',title:'Local bush honey',description:'An example honey listing. A producer can share the floral source, harvest season and jar size.',category:'Honey',price:14,unit:'500g jar',quantity:12,suburb:'Hahndorf',postcode:'5245',method:'Raw honey · seller declared',harvested:'',pickup:true,delivery:true,deliveryFee:5,deliveryArea:'Adelaide Hills',pickupTimes:'Arrange with grower',images:[photos.honey],active:true,demo:true},
 {id:'sample-greens',seller:'sample-garden',sellerName:'Sunday Garden',title:'Garden greens bundle',description:'An example seasonal greens listing. Growers can say what is in the bundle and when it will be picked.',category:'Vegetables',price:6,unit:'bunch',quantity:8,suburb:'Willunga',postcode:'5172',method:'No pesticides used · seller declared',harvested:'',pickup:true,delivery:false,deliveryFee:0,deliveryArea:'',pickupTimes:'Arrange with grower',images:[photos.vegetables],active:true,demo:true},
 {id:'sample-tomatoes',seller:'sample-patch',sellerName:'The Little Patch',title:'Vine-ripened tomatoes',description:'An example homegrown listing. Add variety, ripeness and the quantity available.',category:'Vegetables',price:7,unit:'kg',quantity:10,suburb:'Stirling',postcode:'5152',method:'Homegrown · seller declared',harvested:'',pickup:true,delivery:false,deliveryFee:0,deliveryArea:'',pickupTimes:'Arrange with grower',images:[photos.tomatoes],active:true,demo:true},
];
