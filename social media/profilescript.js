function showbio(){
    if(document.getElementById('edit_bio').style.display=="none"){
        document.getElementById('edit_bio').style.display="flex";
        document.getElementById('posted_items').style.display="none";
        document.getElementById('followers_list').style.display="none";
        document.getElementById('following_list').style.display="none";
        document.getElementById('headImage').style.height="300px";
        document.getElementById('headimage').style.height="300px";
    }

    else{
        document.getElementById('edit_bio').style.display="none";
        document.getElementById('headImage').style.height="";
        document.getElementById('headimage').style.height="";
    }
}

function showpost(){
    if(document.getElementById('posted_items').style.display=="none"){
        document.getElementById('posted_items').style.display="flex";
        document.getElementById('edit_bio').style.display="none";
        document.getElementById('followers_list').style.display="none";
        document.getElementById('following_list').style.display="none";
    }

    else{
        document.getElementById('posted_items').style.display="none";
    }
}

function showfollowers(){
    if(document.getElementById('followers_list').style.display=="none"){
        document.getElementById('followers_list').style.display="flex";
        document.getElementById('edit_bio').style.display="none";
        document.getElementById('posted_items').style.display="none";
        document.getElementById('following_list').style.display="none";
    }

    else{
        document.getElementById('followers_list').style.display="none";
    }
}

function showfollowing(){
    if(document.getElementById('following_list').style.display=="none"){
        document.getElementById('following_list').style.display="flex";
        document.getElementById('edit_bio').style.display="none";
        document.getElementById('followers_list').style.display="none";
        document.getElementById('posted_items').style.display="none";
    }

    else{
        document.getElementById('following_list').style.display="none";
    }
}