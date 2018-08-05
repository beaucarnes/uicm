$(document).ready(function(){
    $('.social-feed-container').socialfeed({
    // FACEBOOK
    facebook:{
        accounts: ['@teslamotors','!teslamotors'],  //Array: Specify a list of accounts from which to pull wall posts
        limit: 2,                                   //Integer: max number of posts to load
        access_token: '249483695673297|877fb8e972fe97a6cc45d4b95637bb7d'  //String: "APP_ID|APP_SECRET"
    },  

        // GENERAL SETTINGS
        length:400                                      //Integer: For posts with text longer than this length, show an ellipsis.
    });
    console.log("TEST")
});