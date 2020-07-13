async function downloadData() {
    const res = await fetch('ifsc.json');
     window.ifscData = await res.json();
     let banks=[];
     let states=[];
     let districts=[];
     let branches=[];
for (i=0;i<14281;i++)
{
 if(!banks.includes ( ifscData[i]["BANK"] ) )
 banks.push(ifscData[i]["BANK"]);
}

function fillBankListIntoSelect() {

    var bankSelect = document.getElementById('sel1');
    for (var i = 0; i < banks.length; i++) { 
        var el = document.createElement("OPTION"); 
        el.textContent = banks[i]; 
        el.value = banks[i]; 
        bankSelect.add(el)
    }
    }

    fillBankListIntoSelect();
    document.getElementById('sel1').onchange = function(){

var ss = document.getElementById('sel2');
var length = ss.options.length;

for (i = length-1; i >= 0; i--) {
ss.options[i]=null;
}
var ss = document.getElementById('sel4');
                         length = ss.options.length;
                        
                        for (i = length-1; i >= 0; i--) {
                        ss.options[i]=null;
                        }
                        var ss = document.getElementById('sel3');
                         length = ss.options.length;
                        
                        for (i = length-1; i >= 0; i--) {
                        ss.options[i]=null;
                        }
                        
                                        districts=[];
                        branches=[];
states=[];
        for (i=0;i<14281;i++)
{
    var bnk=document.getElementById('sel1').value;
 if(ifscData[i]["BANK"]==bnk && !states.includes ( ifscData[i]["STATE"] ) )
 states.push(ifscData[i]["STATE"]);
}
            var statesSelect = document.getElementById('sel2');
            for (var i = 0; i < states.length; i++) { 
                var el = document.createElement("OPTION"); 
                el.textContent = states[i]; 
                el.value = states[i]; 
                statesSelect.add(el)
            }
            if(states.length==1)
            {
                var ss = document.getElementById('sel3');
                var length = ss.options.length;
                
                for (i = length-1; i >= 0; i--) {
                ss.options[i]=null;
                }
                
                                districts=[];
                                for (i=0;i<14281;i++)
                        {
                            var bnk=document.getElementById('sel1').value
                            var state=document.getElementById('sel2').value;
                         if(ifscData[i]["STATE"]==state && ifscData[i]["BANK"]==bnk && !districts.includes( ifscData[i]["DISTRICT"] ) )
                         districts.push(ifscData[i]["DISTRICT"]);
                        }
                                    var distSelect = document.getElementById('sel3');
                                    for (var i = 0; i < districts.length; i++) { 
                                        var el = document.createElement("OPTION"); 
                                        el.textContent = districts[i]; 
                                        el.value = districts[i]; 
                                        distSelect.add(el)
                                    }
            }
            }
            document.getElementById('sel2').onchange = function(){

                var ss = document.getElementById('sel3');
var length = ss.options.length;

for (i = length-1; i >= 0; i--) {
ss.options[i]=null;
}

                districts=[];
                for (i=0;i<14281;i++)
        {
            var bnk=document.getElementById('sel1').value
            var state=document.getElementById('sel2').value;
         if(ifscData[i]["STATE"]==state && ifscData[i]["BANK"]==bnk && !districts.includes( ifscData[i]["DISTRICT"] ) )
         districts.push(ifscData[i]["DISTRICT"]);
        }
                    var distSelect = document.getElementById('sel3');
                    for (var i = 0; i < districts.length; i++) { 
                        var el = document.createElement("OPTION"); 
                        el.textContent = districts[i]; 
                        el.value = districts[i]; 
                        distSelect.add(el)
                    }
                    if(districts.length==1)
                    {

                            var ss = document.getElementById('sel4');
                            var length = ss.options.length;
                            
                            for (i = length-1; i >= 0; i--) {
                            ss.options[i]=null;
                            }
                            branches=[];
                            
                            for (i=0;i<14281;i++)
                    {
                        var bnk=document.getElementById('sel1').value
                        var state=document.getElementById('sel2').value;
                        var dis=document.getElementById('sel3').value;
                     if(ifscData[i]["STATE"]==state && ifscData[i]["BANK"]==bnk && ifscData[i]["DISTRICT"]==dis && !branches.includes( ifscData[i]["BRANCH"] ) )
                     branches.push(ifscData[i]["BRANCH"]);
                    }
                                var brSelect = document.getElementById('sel4');
                                for (var i = 0; i < branches.length; i++) { 
                                    var el = document.createElement("OPTION"); 
                                    el.textContent = branches[i]; 
                                    el.value = branches[i]; 
                                    brSelect.add(el)
                                }
                    }
                    }
                    document.getElementById('sel3').onchange = function(){

                        var ss = document.getElementById('sel4');
                        var length = ss.options.length;
                        
                        for (i = length-1; i >= 0; i--) {
                        ss.options[i]=null;
                        }
                        branches=[];
                        
                        for (i=0;i<14281;i++)
                {
                    var bnk=document.getElementById('sel1').value
                    var state=document.getElementById('sel2').value;
                    var dis=document.getElementById('sel3').value;
                 if(ifscData[i]["STATE"]==state && ifscData[i]["BANK"]==bnk && ifscData[i]["DISTRICT"]==dis && !branches.includes( ifscData[i]["BRANCH"] ) )
                 branches.push(ifscData[i]["BRANCH"]);
                }
                            var brSelect = document.getElementById('sel4');
                            for (var i = 0; i < branches.length; i++) { 
                                var el = document.createElement("OPTION"); 
                                el.textContent = branches[i]; 
                                el.value = branches[i]; 
                                brSelect.add(el)
                            }
if(branches==1)
{
    
    var br=document.getElementById('sel4').value;
    var f;
    for (i=0;i<14281;i++)
    {
    if(ifscData[i]["BRANCH"]==br )
                    f=ifscData[i]["IFSC"];
                                }
                                if(f==undefined)
                                f="Fill More Details"
    alert(f);
    
}

                            }

                            document.getElementById('b1').onclick = function() {
                                var br=document.getElementById('sel4').value;
                                var f;
                                for (i=0;i<14281;i++)
                                {
                                if(ifscData[i]["BRANCH"]==br )
                                                f=ifscData[i]["IFSC"];
                                                            }
                                                            if(f==undefined)
                                                            f="Fill More Details"
                                alert(f);
                                
                                    }

    };
    
    downloadData();
  
