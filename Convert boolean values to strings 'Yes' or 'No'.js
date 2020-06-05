//https://www.codewars.com/kata/53369039d7ab3ac506000467

function boolToWord( bool ){
    if( typeof bool === 'boolean' && bool === true)
        return "Yes";
    if(typeof bool === 'boolean' && bool === false)
        return "No";
}

