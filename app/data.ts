export const categories = ['All food', 'Eggs', 'Honey', 'Vegetables', 'Fruit', 'Herbs', 'Dairy'];
export const photos = {
 hero:'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1800&q=85',
 eggs:'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=900&q=85',
 honey:'https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=900&q=85',
 vegetables:'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=900&q=85',
 fruit:'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=900&q=85',
 herbs:'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=85',
 tomatoes:'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=85',
};
export type Listing = {id:string; seller:string; title:string; description:string; category:string; price:number; unit:string; quantity:number; suburb:string; postcode:string; method:string; harvested:string; pickup:boolean; delivery:boolean; deliveryFee:number; deliveryArea:string; pickupTimes:string; images:string[]; active:boolean; demo?:boolean; sellerName?:string; created?:string};
export type Profile = {id?:string; name:string; type:string; suburb:string; postcode:string; bio:string; methods:string; pickupTimes:string; deliveryArea:string; deliveryFee:number};
const pexels=(id:number)=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;
type Food = [id:string,category:string,title:string,price:number,unit:string,image:string,description:string];
const food:Food[] = [
 ['sample-eggs','Eggs','Hills brown-shell eggs',9.50,'dozen',photos.eggs,'Twelve brown-shell eggs from a small Stirling flock. Packed in a reusable carton, with weekend collection by arrangement.'],
 ['sample-honey','Honey','Adelaide Hills bush honey',14.50,'500g jar',photos.honey,'A golden 500g jar from a Hills beekeeper’s seasonal harvest. An easy pantry size for toast, tea and baking; collect in Hahndorf.'],
 ['sample-greens','Vegetables','Willunga harvest selection',6.50,'small box',pexels(6653875),'A small mixed selection of leafy and fruiting vegetables from the Willunga patch. Message for this week’s contents before arranging collection.'],
 ['sample-tomatoes','Vegetables','Vine-ripened cherry tomatoes',7.50,'500g punnet',photos.tomatoes,'Sweet cherry tomatoes picked when coloured on the vine. Supplied in a 500g punnet for local Stirling pickup.'],
 ['sample-5000-eggs-1','Eggs','White-shell breakfast six',5.50,'half dozen',pexels(7034135),'Six white-shell eggs in a small carton, sized for a couple of breakfasts. Collection is available in central Adelaide by arrangement.'],
 ['sample-5000-eggs-2','Eggs','Mixed-colour family carton',12.50,'18 eggs',pexels(6294237),'An eighteen-egg carton with a mix of brown and white shells. A larger pack for family cooking, with local delivery available on request.'],
 ['sample-5000-honey-1','Honey','Small-batch amber honey',16.50,'650g jar',pexels(7990478),'A 650g jar of amber honey, poured in small batches. Ask about the current harvest and arrange an Adelaide collection time.'],
 ['sample-5000-honey-2','Honey','Floral breakfast honey',18.50,'750g jar',pexels(11284797),'A generous 750g jar with a light floral flavour. Available for an Adelaide pickup or a pre-arranged local delivery.'],
 ['sample-5000-vegetables-1','Vegetables','Garden carrots with tops',3.50,'bunch',pexels(20371247),'A freshly lifted bunch of carrots with the green tops left on. Mixed sizes from a small garden bed; rinse before use.'],
 ['sample-5000-vegetables-2','Vegetables','Mixed leafy salad harvest',4.50,'250g bag',pexels(28991058),'A 250g mix of seasonal salad leaves and lettuce varieties. Packed for a same-day collection window agreed in messages.'],
 ['sample-5000-fruit-1','Fruit','Backyard red apples',5.90,'kg','https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=900&q=85','A kilogram of red eating apples from backyard trees. Natural marks and mixed sizes are welcome here; ask which variety is ready.'],
 ['sample-5000-fruit-2','Fruit','Sweet orange sharing bag',8.90,'2kg bag','https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=900&q=85','Two kilograms of oranges for sharing, juicing or the fruit bowl. Fruit is supplied whole in a reusable bag for local collection.'],
 ['sample-5000-herbs-1','Herbs','Seasonal cooking herb selection',2.50,'small bunch',pexels(4113898),'A small mixed bunch of fresh cooking herbs from the kitchen garden. Ask what is ready today and collect only what you need.'],
 ['sample-5000-herbs-2','Herbs','Living sweet basil pot',3.90,'pot',pexels(4750398),'A small sweet basil plant in a pot, ready for a sunny spot at home. Keep watered and pick leaves as needed.'],
 ['sample-5000-dairy-1','Dairy','Local pasteurised full-cream milk',4.90,'litre','https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=900&q=85','One litre of pasteurised full-cream milk from a small food business. Keep refrigerated and confirm the use-by date with the seller.'],
 ['sample-5000-dairy-2','Dairy','Plain cultured yoghurt',6.90,'500g tub',pexels(10809259),'A 500g tub of plain cultured yoghurt made with pasteurised milk. Unsweetened, chilled and ready for a confirmed collection time.'],
 ['sample-5095-eggs-1','Eggs','Free-range breakfast dozen',8,'dozen',pexels(6495853),'A dozen mixed-size eggs from a Mawson Lakes backyard flock. Collected in small batches and packed in cartons for Saturday pickup.'],
 ['sample-5095-eggs-2','Eggs','Baker’s mixed-size egg tray',10.50,'15 eggs',pexels(4911800),'Fifteen mixed-size eggs for the weekend baker. A practical tray for cakes and cooking, with local collection or delivery by arrangement.'],
 ['sample-5095-honey-1','Honey','Dark seasonal honey',19.50,'700g jar',pexels(35310735),'A 700g jar of deeper-coloured seasonal honey. The current batch has a fuller flavour; message to ask about its floral source.'],
 ['sample-5095-honey-2','Honey','Golden bush honey',22,'500g jar',pexels(4480156),'Golden bush honey in a 500g glass jar from a local beekeeper. Mawson Lakes pickup or a $5 delivery to nearby Pooraka can be arranged.'],
 ['sample-5095-vegetables-1','Vegetables','Fresh spinach bunch',4,'bunch',photos.vegetables,'Tender garden spinach sold by the bunch. Picked for local collection in Mawson Lakes; ask the grower when the next harvest is ready.'],
 ['sample-5095-vegetables-2','Vegetables','Peppery red radishes',6.75,'large bunch',pexels(2476542),'A generous bunch of crisp red radishes with leaves attached. A bright addition to salads, available for a local meetup or delivery.'],
 ['sample-5095-fruit-1','Fruit','Garden strawberry punnet',7.25,'350g punnet','https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=85','A 350g punnet of ripe strawberries from a small garden bed. Delicate fruit, best collected promptly and kept cool.'],
 ['sample-5095-fruit-2','Fruit','Backyard citrus mixed bag',9.75,'2.5kg bag',pexels(18281433),'A 2.5kg mix of whole oranges and lemons from backyard trees. Seasonal proportions vary, so confirm the contents before ordering.'],
 ['sample-5095-herbs-1','Herbs','Fresh garden mint',3.25,'bunch',pexels(31965185),'A fragrant bunch of mint, cut for your pickup time. Ideal for a jug of water, a salad or a fresh cup of tea.'],
 ['sample-5095-herbs-2','Herbs','Parsley, rosemary & chive trio',4.25,'three small bunches',pexels(4113923),'Three small kitchen bunches: parsley, rosemary and chives. A useful selection for a few meals without a large leftover bundle.'],
 ['sample-5095-dairy-1','Dairy','Fresh soft cream cheese',5.25,'200g tub',pexels(13112021),'A 200g tub of soft cream cheese from a small food business using pasteurised milk. Collect chilled and keep refrigerated.'],
 ['sample-5095-dairy-2','Dairy','Small-batch cottage cheese',7.75,'400g tub',pexels(37907507),'A 400g tub of cottage cheese made with pasteurised milk. Ask for the batch’s use-by date and arrange a chilled handover.'],
];

export const samples:Listing[]=food.map(([id,category,title,price,unit,image,description],index)=>{
 const postcode=id.includes('5000')?'5000':id.includes('5095')?'5095':id==='sample-honey'?'5245':id==='sample-greens'?'5172':'5152';
 const suburb=({'5000':'Adelaide','5095':'Mawson Lakes','5245':'Hahndorf','5172':'Willunga','5152':'Stirling'} as Record<string,string>)[postcode];
 const sellerName=postcode==='5000'?'City Patch':postcode==='5095'?'Lakeside Growers':postcode==='5245'?'Hills & Hive':postcode==='5172'?'Sunday Garden':'The Little Patch';
 return {id,category,title,price,unit,description,seller:({"sample-eggs":"sample-patch","sample-tomatoes":"sample-patch","sample-honey":"sample-hills","sample-greens":"sample-garden"} as Record<string,string>)[id]||`sample-${postcode}-${category.toLowerCase()}`,sellerName,quantity:5+(index%7),suburb,postcode,
  method:category==='Dairy'?'Pasteurised · seller declared':category==='Eggs'?'Free-range · seller declared':category==='Honey'?'Small batch · seller declared':'Homegrown · seller declared',
  harvested:'',pickup:true,delivery:id.endsWith('-2'),deliveryFee:5,deliveryArea:id.endsWith('-2')?`${suburb} by arrangement`:'',pickupTimes:'Arrange with grower',images:[image],active:true,demo:true};
});
