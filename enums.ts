// enum Activity {
//     CHANGE_PASSWORD, EDIT_PROFILE, DEFAULT
// };

// let action1 = Activity.CHANGE_PASSWORD;
// console.log(action1);

// action1 = Activity.EDIT_PROFILE;
// console.log(action1);

// action1 = Activity.DEFAULT;
// console.log(action1);

enum Activity {
    CHANGE_PASSWORD = 'changePassword', 
    EDIT_PROFILE = 'updateProfile', 
    DEFAULT = 'home',
};

let action1 = Activity.CHANGE_PASSWORD;
console.log(action1);

action1 = Activity.EDIT_PROFILE;
console.log(action1);

action1 = Activity.DEFAULT;
console.log(action1);
