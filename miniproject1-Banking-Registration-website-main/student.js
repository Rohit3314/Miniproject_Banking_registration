function formvalidation(){
    if(register.Aname.value==""){
    alert("***PLEASE ENTER YOUR NAME TO PROCEED FURTHUR***");
    register.Aname.focus();
    return false;
    }
    var letter=/^[a-z,A-Z]+$/
    if(!register.Aname.value.match(letter)){
        alert("***Only Alphabets Allow.....do not enter number in name***");
        register.Aname.focus();
        return false;
    }
    if(register.Aname.value.length>15){
        alert("***PLEASE ENTER NAME PROPERLY***");
        register.Aname.focus();
        return false;
    }
    if(register.date.value=="")
    {
        alert("***PLEASE ENTER YOUR DOB***");
        register.date.focus();
        return  false;
    }
    if(register.age.value=="")
    {
        alert("***PLEASE ENTER YOUR AGE***");
        register.age.focus();
        return false;
    }
    var number=/^[0-9]+$/;
    if(!register.age.value.match(number))
    {
        alert("***ENTER YOUR AGE IN NUMBER ONLY***");
        register.age.focus();
        return false;
    }
    if(register.age.value.length>3)
    {
        alert("***PLEASE ENTER YOUR AGE PROPERLY***");
        register.age.focus();
        return false;
    }
    if(register.gen.selectedIndex<1)
    {
        alert("***PLEASE SELECT AN OPTION IN GENDER!!***");
        register.gen.focus();
        return false;
    }
    if(register.nation.value=="")
    {
        alert("***PLEASE ENTER YOUR NATIONALITY***");
        register.nation.focus();
        return false;
    }
    var letter=/^[a-z.A-Z]+$/
    if(!register.nation.value.match(letter))
    {
        alert("***ONLY ENTER ALPHABETS....!!!! DO NOT ENTER NUMBER... ENTER YOUR NATIONALITY PROPERLY***");
        register.nation.focus();
        return false;
    }
    if(register.nation.value.length>15)
    {
        alert("***PLEASE ENTER PROPERLY***");
        register.nation.focus();
        return false;
    }
    if(register.caste.selectedIndex<1)
    {
        alert("***PLEASE SELECT AN OPTION IN CATOGERY***");
        register.caste.focus();
        return false;
    }
    var mo=/^\d{10}(.\d{10})*$/;
    if(register.mob.value=="")
    {
        alert("***PLEASE ENTER YOUR PHONE NUMBER***");
        register.mob.focus();
        return false;
    }
    if(!register.mob.value.match(mo))
    {
        alert("***PLEASE ENTER THE VALID PHONE NUMBER***");
        register.mob.focus();
        return false;
    }
    if(register.exp.value=="")
    {
        alert("***PLEASE ENTER THE EXPERIENCE IN YEARS***");
        register.exp.focus();
        return false;
    }
    if(!register.exp.value.match(number))
    {
        alert("***EXPERIENCE SHOULD BE IN NUMBER***");
        register.exp.focus();
        return false;
    }
    if(register.exp.value<"0"|| register.exp.value>"40")
    {
        alert("***EXPERIENCE shiuld be in the range 0-40 yrs alone!!!***");
        register.exp.focus();
        return false;
    }
    if(register.state.selectedIndex<1)
    {
        alert("***PLEASE SELECT YOUR STATE!!***");
        register.state.focus();
        return false;
    }
    if(register.center.selectedIndex<1)
    {
        alert("***PLEASE SELECT YOUR EXAM CENTER!!!***");
        register.center.focus();
        return false;
    }
    if(register.exam.selectedIndex<1)
    {
        alert("***PLEASE SELECT RESPECTIVE EXAM NAME***");
        register.exam.focus();
        return false;
    }
    if(register.gd.selectedIndex<1)
    {
        alert("***PLEASE SELECT GRADUATION DEGREE***");
        register.gd.focus();
        return false;
    }
    if(register.gb.selectedIndex<1)
    {
        alert("***PLEASE SELECT YOUR GRADUATION BRANCH!!!!***");
        register.gb.focus();
        return false;
    }
    if(register.gag.value=="")
    {
        alert("***PLEASE ENTER YOUR graduation AGGREGATION***");
        register.gag.focus();
        return false;
    }
    if(register.gyr.value=="")
    {
        alert("***PLEASE ENTER GRADUATED YEAR***");
        register.gyr.focus();
        return false;
    }
    var ye=/^\d{4}$/;
    if(!register.gyr.value.match(ye))
    {
        alert("***ERROR::PLEASE ENTER GRADUATION YEAR PROPERLY***");
        register.gyr.focus();
        return false;
    }
    if(register.gub.selectedIndex<1)
    {
        alert("***PLEASE SELECT UNIVERSITY NAME!!!***");
        register.gub.focus();
        return false;
    }
    if(register.hb.selectedIndex<1)
    {
        alert("***PLEASE SELECT YOUR HSC BRANCH***");
        register.hb.focus();
        return false;
    }
    if(register.hag.value=="")
    {
        alert("***PLEASE ENTER HSC AGGREGATION***");
        register.hag.focus();
        return false;
    }
    if(!register.hag.value.match(re))
    {
        alert("***ERROR::PLEASE ENTER HSC AGGREGATION PROPERLY***");
        register.hag.focus();
        return  false;
    }
    if(register.hyr.value=="")
    {
        alert("***PLEASE ENTER HSC YEAR***");
        register.hyr.focus();
        return false;
    }
    if(!register.hyr.value.match(ye))
    {
        alert("***ERROR::PLEASE ENTER HSC YEAR PROPERLY***");
        register.hyr.focus();
        return false;
    }
    if(register.hub.selectedIndex<1)
    {
        alert("***PLEASE SELECT YOUR HSC UNIVERSITY NAME!!***");
        register.hub.focus();
        return  false;
    }
    if(register.sag.value=="")
    {
        alert("***PLEASE ENTER YOUR SSLC AGGREGATION***");
        register.sab.focus();
        return false;
    }
    if(!register.sag.value.match(re))
    {
        alert("***ERROR::PLEASE ENTER SSLC AGGREGATION PROPERLY***");
        register.sag.focus();
        return false;
    }
    if(register.syr.value=="")
    {
        alert("***PLEASE ENTER YOUR SSLC YEAR***");
        register.syr.focus();
        return false;
    }
    if(!register.syr.value.match(re))
    {
        alert("***ERROE::PLEASE ENTER SSLC YEAR PROPERLY***");
        register.syr.focus();
        return false;
    }
    if(register.sub.selectedIndex<1)
    {
        alert("***PLEASE SELECT SSLC UNIVERSITY NAME!!***");
        register.sub.focus();
        return false;
    }
    if(register.fl.value==""||register.sl.value=="")
    {
        alert("***ENTER VALID ADDRESS***");
        document.forms['register'].elements['fl'].focus();
        return false;
    }
    var n=register.Aname.value;
    var k=register.fl.value;
    if(n===k)
    {
        alert("***PLEASE DONT ENTER YOUR NAME AGAIN***");
        document.forms['register'].elements['fl'].focus();
        return false;
    }
    if(register.fl.value.length>75)
    {
        alert("***MAXIMUN LIMIT FOR FIRST LINE IS 75 CHARACTERS***");
        register.fl.focus();
        return false;
    }
    if(register.sl.value.length>75)
    {
        alert("***MAXIMUM LIMIT FOR SECOND LINE IS 75 CHARACTERS***");
        register.sl.focus();
        return false;
    }
    if(register.pin.value=="")
    {
        alert("***PLEASE VALID PINCODE***");
        register.pin.focus();
        return false;
    }
    var p=/^\d{6}$/;
    if(!register.pin.value.match(p))
    {
        alert("***PINCODE should be in 6 DIGITS NUMBER alone!!!!***");
        register.pin.focus();
        return false;
    }
    if(!register.pin.value.match(letter))
    {
        alert("***ONLY ENTER NUMBER..!! ENTER YOUR PINCODE PROPERLY***");
        register.pin.focus();
        return false;
    }

    if(register.pro.value=="")
    {
        alert("***PLEASE ENTER YOUR PROJECT***");
        register.pro.focus();
        return false;
    }
    var letter=/^[a-z.A-Z]+$/
    if(!register.pro.valu.match(letter))
    {
        alert("***ONLY ALPHABETS ALLOWED!!!!***");
        register.pro.focus();
        return false;
    }
    if(register.pro.value.length>1)
    {
        alert("***MAXIMUN LIMIT FOR YOR PROJECT NAME IS ONLY 75 CHARACTERS***");
        register.pro.focus();
        return false;
    }
    if(register.mail.value=="")
    {
        alert("***PLEASE ENTER VALID EMAIL ID***");
        document.forms['register'].elements['mail'].focus();
        return false;
    }
    if(register.mail.value.length>25)
    {
        alert("***MAXIMUM LIMIT FOR EMAIL ID IS 25 CHARACTERS***");
        document.forms['register'].elements['mail'].focus();
        return false;
    }
    if((register.mail.value.indexOf("@",0)<0)||(register.mail.value.indexOf(".",0)<0))
    {
        alert("***ENTER VALID EMAIL ADDRESS***");
        document.forms['register'].elements['mail'].focus();
         return false;
    }
}   