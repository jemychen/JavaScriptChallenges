// Password Validator
// Cannot be less than 8 characters
// Cannot contain spaces
// Cannot contain username

function isValidPassword(password, username) {
    // if (password.length < 8) {
    // //     return false;
    // // }
    // // if (password.indexOf(' ') !== -1) {
    // //     return false;
    // // }
    // // if (password.indexOf(username) !== -1) {
    // //     return false;
    // }

    if ( 
            password.length < 8 ||
            password.indexOf(' ') !== -1 || 
            password.indexOf(username) !== -1
        ) {
            return false;
        }
    return true;
}