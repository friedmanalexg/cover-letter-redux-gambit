# README



## to do: 
add another prose block*
save ✅ and view letter
backend auth 


Save Block (patch) 
Delete Selected Block
program validations (Jose says use required on frontend)



## notes toward feature completion
Save and View letter fetchpocalypse
- grab data from form ✅
- grab id of selected prose blocks ✅
- grab position of prose blocks from select divs ✅
- PATCH if letter exists ✅
-creating join array ✅
-empty option to force user to make selection ✅
-if position == old position, delete old object ✅
-delete duplicate letter_block instances on Letter PATCH

Write a React component that can render the letter with the objects listed in order from Letter.letterblock.position 

Render the component with the return of a function in a div below the LetterEditCard (or maybe at the bottom of lettereditcard)

Prose blocks will have keywords to interpolate Letter's variable data. Users will either be instructed on simple syntax to use this feature,
or I will write a button to populate them either in the field or the user's clipboard.  

