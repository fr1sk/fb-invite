function invPage(){
    document.querySelector('#clickEvent').disabled = true;
    document.querySelector('#click').disabled = true;
    document.querySelector('#load').style.display = 'block';
    var myCustomCode = "var x = document.getElementsByClassName('uiButton _1sm');"+
                        "var count = 0;"+
                        "for(var i=0;i<x.length;i++){"+
                            "x[i].click();"+
                            "count++;"+
                        "}"+
                        "count;";
    var outputLog = document.querySelector('#outputLog');
    outputLog.value = "Please wait, it may take a while!";
    chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.executeScript(tab.id, {code: myCustomCode}, function(rez){
            if(rez==0){
                outputLog.value = "There are no more friends to invite.\nMake you sure that you are on right page.";
                document.querySelector('#clickEvent').disabled = false;
                document.querySelector('#click').disabled = false;
                document.querySelector('#load').style.display = 'none';
            } else {
                outputLog.value = rez+" friends invited successfully!";
                document.querySelector('#clickEvent').disabled = false;
                document.querySelector('#click').disabled = false;
                document.querySelector('#load').style.display = 'none';
            }
        });
    });

}


function invEve(){
    document.querySelector('#clickEvent').disabled = true;
    document.querySelector('#click').disabled = true;
    document.querySelector('#load').style.display = 'block';
    var myCustomCode = "var x = document.getElementsByClassName('_1pu2');"+
                        "var count = 0;"+
                        "for(var i=0;i<x.length;i++){"+
                            "x[i].click();"+
                            "count++;"+
                        "}"+
                        "count;";
    var outputLog = document.querySelector('#outputLog');
    outputLog.value = "Please wait, it may take a while!";
    chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.executeScript(tab.id, {code: myCustomCode}, function(rez){
            if(rez==0){
                outputLog.value = "There are no more friends to invite.\nMake you sure that you are on right page.";
                document.querySelector('#clickEvent').disabled = false;
                document.querySelector('#click').disabled = false;
                document.querySelector('#load').style.display = 'none';
            } else {
                outputLog.value = rez+" friends invited successfully!";
                document.querySelector('#clickEvent').disabled = false;
                document.querySelector('#click').disabled = false;
                document.querySelector('#load').style.display = 'none';
            }
        });
    });

}


function init() {
    clicker = document.querySelector('#click');
    clickerEvent = document.querySelector('#clickEvent');
    clicker.addEventListener('click', invPage, false);
    clickerEvent.addEventListener('click', invEve, false);
}
document.addEventListener('DOMContentLoaded', init);
