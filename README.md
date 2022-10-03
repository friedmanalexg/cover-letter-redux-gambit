# README



## to do: 
add another prose block*
refactor renderer as a dynamic component
interpolate variables into prose blocks
export saved letter to TXT or something
rtf format your export somehow, react npm library probably
https://youtu.be/kykC7i9VUE4



## known bugs:
Save/PATCH functions need to trigger rerender
map functions break if users do no have any prose blocks or letters


## notes toward feature completion
Save and View letter fetchpocalypse
- grab data from form ✅
- grab id of selected prose blocks ✅
- grab position of prose blocks from select divs ✅
- PATCH if letter exists ✅
-creating join array ✅
-empty option to force user to make selection ✅
-if position == old position, delete old object ✅
-delete duplicate letter_block instances on Letter PATCH ✅

Write a React component that can render the letter with the objects listed in order from Letter.letterblock.position 

Render the component with the return of a function in a div below the LetterEditCard (or maybe at the bottom of lettereditcard)

my previous idea was to use the following method:
Prose blocks will have keywords to interpolate Letter's variable data. Users will either be instructed on simple syntax to use this feature,
or I will write a button to populate them either in the field or the user's clipboard.
It does not appear to work, I will have to research a different method.  

Frontend Auth, if not logged in you should not be able to hit the route✅