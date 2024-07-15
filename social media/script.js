function showgroup(){
    if(document.getElementById('group_side').style.display=="none"){
        document.getElementById('centre_side').style.display="none";
        document.getElementById('message_side').style.display="none";
        document.getElementById('surbhiDashboard').style.display="none";
        document.getElementById('vaibhavDashboard').style.display="none";
        document.getElementById('history-side').style.display="none";
        document.getElementById('playlist_side').style.display="none";
        document.getElementById('loading_side').style.display="none";
        document.getElementById('group_side').style.display="flex";
    }
    
}

function showmessage(){
    if(document.getElementById('message_side').style.display=="none"){
        document.getElementById('centre_side').style.display="none";
        document.getElementById('group_side').style.display="none";
        document.getElementById('surbhiDashboard').style.display="none";
        document.getElementById('vaibhavDashboard').style.display="none";
        document.getElementById('history-side').style.display="none";
        document.getElementById('playlist_side').style.display="none";
        document.getElementById('loading_side').style.display="none";
        document.getElementById('message_side').style.display="inline";
    }
}

function addpost(){
   window.alert("Media Permission Not Granted. Chage Settings From Your Device");
}

function showhome(){
    document.getElementById('post1').style.display="none";
    if(document.getElementById('centre_side').style.display=="none"){
        document.getElementById('message_side').style.display="none";
        document.getElementById('group_side').style.display="none";
        document.getElementById('surbhiDashboard').style.display="none";
        document.getElementById('vaibhavDashboard').style.display="none";
        document.getElementById('playlist_side').style.display="none";
        document.getElementById('history-side').style.display="none";
        document.getElementById('loading_side').style.display="none";
        document.getElementById('centre_side').style.display="inline";
    }
}

function showProfileOptions(){
    if(document.getElementById('profile_options').style.display=="none"){
        document.getElementById('profile_options').style.display="inline";
    }
    else{
        document.getElementById('profile_options').style.display="none";
    }
}

function messageSaurav(){
    document.getElementById('message_saurav').style.display="none";
    document.getElementById('requested_saurav').style.display="block";
}

function unrequestSaurav(){
    document.getElementById('message_saurav').style.display="block";
    document.getElementById('requested_saurav').style.display="none";
}

function messageShalini(){
    document.getElementById('message_shalini').style.display="none";
    document.getElementById('requested_shalini').style.display="block";
}

function unrequestShalini(){
    document.getElementById('message_shalini').style.display="block";
    document.getElementById('requested_shalini').style.display="none";
}

function messageSarojini(){
    document.getElementById('message_sarojini').style.display="none";
    document.getElementById('requested_sarojini').style.display="block";
}

function unrequestSarojini(){
    document.getElementById('message_sarojini').style.display="block";
    document.getElementById('requested_sarojini').style.display="none";
}

function messageSurbhiMeena(){
    document.getElementById('vaibhavDashboard').style.display="none";
    document.getElementById('message_side').style.display="none";
    document.getElementById('surbhiDashboard').style.display="block";
}

function messageVaibhavChopra(){
    document.getElementById('message_side').style.display="none";
    document.getElementById('vaibhavDashboard').style.display="block";
}

function showHistory(){
    document.getElementById('message_side').style.display="none";
    document.getElementById('group_side').style.display="none";
    document.getElementById('surbhiDashboard').style.display="none";
    document.getElementById('vaibhavDashboard').style.display="none";
    document.getElementById('playlist_side').style.display="none";
    document.getElementById('centre_side').style.display="none";
    document.getElementById('loading_side').style.display="none";
    document.getElementById('history-side').style.display="flex";
}

function showPlaylist(){
    document.getElementById('message_side').style.display="none";
    document.getElementById('group_side').style.display="none";
    document.getElementById('surbhiDashboard').style.display="none";
    document.getElementById('vaibhavDashboard').style.display="none";
    document.getElementById('centre_side').style.display="none";
    document.getElementById('history-side').style.display="none";
    document.getElementById('loading_side').style.display="none";
    document.getElementById('playlist_side').style.display="flex";
}

function msg_sent(){
    document.getElementById('sent_mag').innerText=document.getElementById('actual_msg').value;
    document.getElementById('actual_msg').value="";
}

function msg_sent_vaibhav(){
    document.getElementById('sent_msg_vaibhav').innerText=document.getElementById('actual_msg_vaibhav').value;
    document.getElementById('actual_msg_vaibhav').value="";
}

function showtrend(){
    document.getElementById('post1').style.display="inline";
    document.getElementById('message_side').style.display="none";
    document.getElementById('group_side').style.display="none";
    document.getElementById('surbhiDashboard').style.display="none";
    document.getElementById('vaibhavDashboard').style.display="none";
    document.getElementById('playlist_side').style.display="none";
    document.getElementById('history-side').style.display="none";
    document.getElementById('loading_side').style.display="none";
    document.getElementById('centre_side').style.display="inline";
}

function showLoader(){
    document.getElementById('message_side').style.display="none";
    document.getElementById('group_side').style.display="none";
    document.getElementById('surbhiDashboard').style.display="none";
    document.getElementById('vaibhavDashboard').style.display="none";
    document.getElementById('centre_side').style.display="none";
    document.getElementById('history-side').style.display="none";
    document.getElementById('playlist_side').style.display="none";
    document.getElementById('loading_side').style.display="block";
}

function addToRecentSearch(){
    if(document.getElementById('searched_item').value!=""){
        document.getElementById('added_search').style.display="flex";
        document.getElementById('addRecentSearch').innerText=document.getElementById('searched_item').value;
        showLoader();
    }
    else{
        document.getElementById('loading_side').style.display="none";
        document.getElementById('centre_side').style.display="";
        document.getElementById('message_side').style.display="none";
        document.getElementById('group_side').style.display="none";
        document.getElementById('surbhiDashboard').style.display="none";
        document.getElementById('vaibhavDashboard').style.display="none";
        document.getElementById('playlist_side').style.display="none";
        document.getElementById('history-side').style.display="none";
        document.getElementById('loading_side').style.display="none";
    }
}

function showMore(){
    if(document.getElementById('left_side').style.height!="30vh"){
        document.getElementById('extra_options').style.display="none";
        document.getElementById('recent_search').style.display="none";
        document.getElementById('left_side').style.height="30vh";
    }
    else if(document.getElementById('left_side').style.height=="30vh")
    {
        document.getElementById('extra_options').style.display="block";
        document.getElementById('recent_search').style.display="block";
        document.getElementById('left_side').style.height="100vh";
    }
}


