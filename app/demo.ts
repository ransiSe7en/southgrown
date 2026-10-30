import { Listing, Profile, samples, photos } from './data';

export const DEMO_STORAGE_KEY = 'southgrown-demo-v1';
export const demoUsers = {
  buyer: { id: 'demo-buyer', name: 'Alex Taylor' },
  seller: { id: 'demo-seller', name: 'Lakeside Growers' },
};
export type DemoMessage = {id:string;sender:string;body:string;created:string};
export type DemoThread = {id:string;listing:string;buyer:string;seller:string;created:string;messages:DemoMessage[]};
export type DemoState = {
  version:1;role:'buyer'|'seller';listings:Listing[];profiles:Record<string,Profile>;
  threads:DemoThread[];favorites:Record<string,string[]>;
};

export function createDemoState():DemoState {
  const listings:Listing[]=samples.map(l=>({...l,images:[...l.images]}));
  const eggs=listings.find(l=>l.id==='sample-5095-eggs-1')!;
  Object.assign(eggs,{seller:'demo-seller',sellerName:'Lakeside Growers',description:'A dozen mixed-size eggs from our small backyard flock. Collected each morning and packed in reusable cartons. Message us to arrange pickup in Mawson Lakes.',harvested:'2026-10-30',pickupTimes:'Saturday 9–11 am, by arrangement'});
  const honey=listings.find(l=>l.id==='sample-5095-honey-2')!;
  Object.assign(honey,{seller:'demo-seller',sellerName:'Lakeside Growers',description:'Golden bush honey in a 500g jar. A small batch from a local beekeeper. Pickup in Mawson Lakes, or local delivery by arrangement.',unit:'500g jar',delivery:true,deliveryArea:'Mawson Lakes and Pooraka',deliveryFee:5});
  const greens=listings.find(l=>l.id==='sample-5095-vegetables-1')!;
  Object.assign(greens,{seller:'demo-seller',sellerName:'Lakeside Growers',quantity:0,description:'Fresh garden spinach, picked for local collection. This harvest has sold out; message us to ask about the next one.'});
  listings.push({...eggs,id:'demo-draft-herbs',title:'Fresh garden herb bundle',category:'Herbs',price:4,unit:'bunch',quantity:6,images:[photos.herbs],description:'A fragrant mix of mint and parsley from our backyard garden. Cut to order for weekend pickup in Mawson Lakes.',method:'Homegrown · seller declared',active:false,harvested:''});
  const profiles:Record<string,Profile>={
    'demo-buyer':{name:'Alex Taylor',type:'Backyard grower',suburb:'Adelaide',postcode:'5000',bio:'Buying fresh food and supporting local growers.',methods:'',pickupTimes:'',deliveryArea:'',deliveryFee:0},
    'demo-seller':{name:'Lakeside Growers',type:'Backyard grower',suburb:'Mawson Lakes',postcode:'5095',bio:'We’re a small backyard patch in Mawson Lakes, sharing eggs, garden greens and seasonal extras with our neighbours.',methods:'Backyard-grown food, with growing details on each listing.',pickupTimes:'Saturday 9–11 am, by arrangement',deliveryArea:'Mawson Lakes and Pooraka',deliveryFee:5},
  };
  const make=(key:string,listing:string,rows:[string,string][],hour:number):DemoThread=>({id:key,listing,buyer:'demo-buyer',seller:'demo-seller',created:`2026-10-30T0${hour}:00:00.000Z`,messages:rows.map(([sender,body],i)=>({id:`${key}-${i}`,sender,body,created:`2026-10-30T0${hour}:${String(i*4).padStart(2,'0')}:00.000Z`}))});
  return {version:1,role:'buyer',listings,profiles,favorites:{'demo-buyer':['sample-5095-eggs-1','sample-5000-fruit-1'],'demo-seller':[]},threads:[
    make('demo-pickup',eggs.id,[['demo-buyer','Hi! Do you have two dozen eggs available for this weekend?'],['demo-seller','Hi Alex, yes, we have two dozen ready. They’re $8 a dozen.'],['demo-buyer','Lovely. Could I collect on Saturday morning?'],['demo-seller','Absolutely. Between 9 and 11 am in Mawson Lakes works well. I’ll share the collection details privately once we confirm.'],['demo-buyer','Thanks! Around 10 am would be great. Can I pay when I collect?'],['demo-seller','That works. Two dozen for $16, with payment at collection. See you Saturday!']],1),
    make('demo-delivery',honey.id,[['demo-buyer','Hello! Is the honey available for delivery to Pooraka?'],['demo-seller','Yes, we can deliver locally on Saturday afternoon. Delivery is $5.'],['demo-buyer','Great. One 500g jar please. What would the total be?'],['demo-seller','The jar is $22, so $27 including delivery. We can agree on a time here before you share the delivery address.'],['demo-buyer','Sounds good. Would after 2 pm work?'],['demo-seller','Yes, between 2 and 3 pm is fine.']],2),
    make('demo-availability',greens.id,[['demo-buyer','Hi, I can see the spinach has sold out. Will you have more soon?'],['demo-seller','We’re hoping to pick another small batch next weekend, depending on how the garden goes.'],['demo-buyer','No problem. Could I check back on Friday?'],['demo-seller','Of course! Message me then and I’ll confirm what’s ready.']],3),
  ]};
}

// Every demo operation is a local transition. No request or record reaches the live API.
export function demoRequest(state:DemoState,path:string,body?:any):{data:any;state:DemoState} {
  const next:DemoState=structuredClone(state);const user=demoUsers[next.role];
  const [action,key]=path.split('/');
  if(action==='market')return {state,data:{listings:state.listings.filter(l=>l.active||l.seller===user.id)}};
  if(action==='me')return {state,data:{profile:state.profiles[user.id]||null,favorites:state.favorites[user.id]||[],ai:false}};
  if(action==='profile'&&!body){const p=state.profiles[key];if(p)return {state,data:{profile:{...p,id:key}}};const l=state.listings.find(l=>l.seller===key);if(!l)throw Error('Demo grower not found.');return {state,data:{profile:{name:l.sellerName,type:l.category==='Dairy'?'Small food business':'Backyard grower',suburb:l.suburb,postcode:l.postcode,bio:'A local grower profile for the Southgrown demonstration.',methods:l.method,pickupTimes:l.pickupTimes,deliveryArea:l.deliveryArea,deliveryFee:l.deliveryFee}}};}
  if(action==='profile'&&body){if(!body.name||!body.suburb||!/^5\d{3}$/.test(body.postcode))throw Error('Add a grower name, suburb and SA postcode.');next.profiles[user.id]={...body};return {state:next,data:{profile:next.profiles[user.id]}};}
  if(action==='favorite'){const f=next.favorites[user.id]||[];next.favorites[user.id]=body.saved?[...new Set([...f,body.listing])]:f.filter(id=>id!==body.listing);return {state:next,data:{ok:true}};}
  if(action==='threads'&&!body){const threads=state.threads.filter(t=>t.buyer===user.id||t.seller===user.id).map(t=>({...t,name:state.profiles[t.buyer===user.id?t.seller:t.buyer]?.name||state.listings.find(l=>l.id===t.listing)?.sellerName||'Local grower',product:state.listings.find(l=>l.id===t.listing)?.title||'Local food'}));return {state,data:{threads}};}
  if(action==='threads'&&body){const listing=next.listings.find(l=>l.id===body.listing);if(!listing)throw Error('Demo listing not found.');if(listing.seller===user.id)throw Error('Switch to Buyer to enquire about your own listing.');let thread=next.threads.find(t=>t.listing===listing.id&&t.buyer===user.id);if(!thread){thread={id:crypto.randomUUID(),listing:listing.id,buyer:user.id,seller:listing.seller,created:new Date().toISOString(),messages:[]};next.threads.unshift(thread);}return {state:next,data:{id:thread.id}};}
  if(action==='message'){const t=next.threads.find(t=>t.id===body.thread&&(t.buyer===user.id||t.seller===user.id));if(!t)throw Error('Demo conversation not found.');const text=String(body.body||'').trim().slice(0,2000);if(!text)throw Error('Write a message first.');t.messages.push({id:crypto.randomUUID(),sender:user.id,body:text,created:new Date().toISOString()});return {state:next,data:{ok:true}};}
  if(action==='listings'){
    const p=next.profiles[user.id];if(!p)throw Error('Create your grower profile first.');
    if(!body.title?.trim()||!body.description?.trim()||!body.images?.length||!Number.isFinite(body.price)||body.price<=0||!Number.isInteger(body.quantity)||body.quantity<0||(!body.pickup&&!body.delivery))throw Error('Add a title, description, photo, price, quantity and collection option.');
    const old=body.id?next.listings.find(l=>l.id===body.id):null;if(body.id&&(!old||old.seller!==user.id))throw Error('You can only edit your demo listings.');
    const listing:Listing={...body,id:body.id||'demo-'+crypto.randomUUID(),seller:user.id,sellerName:p.name,suburb:p.suburb,postcode:p.postcode,pickupTimes:p.pickupTimes,deliveryArea:p.deliveryArea,deliveryFee:p.deliveryFee,demo:true,created:new Date().toISOString()};
    next.listings=next.listings.filter(l=>l.id!==listing.id);next.listings.unshift(listing);return {state:next,data:{id:listing.id}};
  }
  throw Error('This action is not available in the demo.');
}
