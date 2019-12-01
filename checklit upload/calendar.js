function getContent(data){
    data = data.replace("info:", "'info':");

    for(i=0; i<31; i++){
        data = data.replace("_id:", "'_id':");
        data = data.replace("date:", "'date':");
        data = data.replace("content:", "'content':");
    }

    for(i=0; i<250; i++){
        data= data.replace("'", '"');
    }
    console.log(data);
    data= JSON.parse(data);   

    var info  = data.info;
    for (i = 1; i < 32; i++){
        var id = i.toString();
        var content = info[i - 1].content;
        document.getElementById(id).value = content;
    }
}

function postContent(username, year_month){
    var json = {};
    json.info = [];
    
    for (i = 1; i < 32; i++){
        var id = i.toString();
        var docu = {};
        docu['date'] = id;
        docu['content'] = document.getElementById(id).value;
        json.info.push(docu);
    }
    // Call postSchedule as a call back function.
    postSchedule(username, year_month, json);
}