//switch statement
const day = 'sunday';
switch(day) {
   default: 
   console.log('Not a valid day!');
   break;
   case  'monday' :
       console.log('plan course structure');
   break;
   case 'tuesday' :
       console.log('clear the bush');
   break;
   case 'wednesday' :
       console.log('go see doctor');
   break; 
   case 'thursday' :
       console.log('attend online class');
   break;
   case 'friday' :
       console.log('go to jumat');
   break;
   case 'saturday' :
   case 'sunday' :
        console.log('go to church');
        console.log('go to cinema') ;   
   break;
}

if (day === 'monday'){
    console.log('plan course structure');
} else if (day === 'tuesday'){
    console.log('clear the bush') 
} else if (day === 'wednesday'){
    console.log('go see doctor');
} else if (day === 'thursday'){
    console.log('attend online class');
 }else if (day === 'friday'){
    console.log('go to jumat');
} else if (day === 'saturday' || 'sunday' ){
    console.log('go to church')
    console.log('go to cinema') ; 
}
    
