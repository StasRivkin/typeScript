// enum Activity {
//     CHANGE_PASSWORD, EDIT_PROFILE, DEFAULT
// };
// let action1 = Activity.CHANGE_PASSWORD;
// console.log(action1);
// action1 = Activity.EDIT_PROFILE;
// console.log(action1);
// action1 = Activity.DEFAULT;
// console.log(action1);
var Activity;
(function (Activity) {
    Activity["CHANGE_PASSWORD"] = "changePassword";
    Activity["EDIT_PROFILE"] = "updateProfile";
    Activity["DEFAULT"] = "home";
})(Activity || (Activity = {}));
;
let action1 = Activity.CHANGE_PASSWORD;
console.log(action1);
action1 = Activity.EDIT_PROFILE;
console.log(action1);
action1 = Activity.DEFAULT;
console.log(action1);
