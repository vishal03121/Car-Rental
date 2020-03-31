if(localStorage.getItem('carRent'))
{
    console.log("Found");
}
else
{
    const carRent =[{
        username:"",
        password:"",
        name:"",
        email:"",
        booking:[{
            location:"",
            pickupdate:"",
            dropofdate:"",
            pupose:"",
            pickuptime:"",
            dropoftime:"",
            status:""
        }]
    }]
    localStorage.setItem('carRent',JSON.stringify(carRent))
}
function validate()
{
    var username = document.getElementById("uname");
    var password = document.getElementById("pass");
    
    if(username.value.trim() == "" && password.value.trim()=="")
    {
        alert("Please Enter Username and Password ");
        username.style.border="solid 3px red";
        password.style.border="solid 3px red";
        return false;
    }
    else if(username.value.trim() == "")
    {
        alert("Please Enter Username");
        password.style.border="none";
        username.style.border="solid 3px red";
        return false;
    }
    else if(password.value.trim()=="")
    {
        alert("Please Enter Password");
        username.style.border="none";
        password.style.border="solid 3px red";  
        return false;
    }
    else 
    {
        return true;
    }
}
function validates()
{
    var username = document.getElementById("usern");
    var email = document.getElementById("mail");
    var name = document.getElementById("name");
    var passs1 = document.getElementById("pass1");
    var passs2 = document.getElementById("pass2");
    if(username.value.trim() =="" && email.value.trim() == "" && name.value.trim()=="" &&
    passs1.value.trim() =="" && passs2.value.trim() == "")
    {
        alert("Please Enter All the Details!");
        username.style.border="solid 3px red";
        email.style.border="solid 3px red";
        name.style.border="solid 3px red";
        passs1.style.border="solid 3px red";
        passs2.style.border="solid 3px red";
        return false;
    }
    else if(email.value.trim() == "" && name.value.trim()=="" &&
    passs1.value.trim() =="" && passs2.value.trim() == "")
    {
        alert("Please Enter All the Details!");
        username.style.border="none";
        name.style.border="solid 3px red";
        email.style.border="solid 3px red";
        passs1.style.border="solid 3px red";
        passs2.style.border="solid 3px red";
        return false;
    }
    else if(name.value.trim()=="" && passs1.value.trim() =="" && passs2.value.trim() == "")
    {
        alert("Please Enter All the Details!");
        username.style.border="none";
        email.style.border="none";
        name.style.border="solid 3px red";
        passs1.style.border="solid 3px red";
        passs2.style.border="solid 3px red";
        return false;
    }
    else if(passs1.value.trim() =="" && passs2.value.trim() == "")
    {
        alert("Please Enter All the Details!");
        username.style.border="none";
        email.style.border="none";
        name.style.border="none";
        passs1.style.border="solid 3px red";
        passs2.style.border="solid 3px red";
        return false;
    }
    else if(username.value.trim() == "")
    {
        alert("Please Enter Username");
        username.style.border="solid 3px red";
        email.style.border="none";
        name.style.border="none";
        passs1.style.border="none";
        passs2.style.border="none";
        return false;

    }
    else if(email.value.trim() == "")
    {
        alert("Please Enter Email");
        username.style.border="none";
        passs1.style.border="none";
        passs2.style.border="none";
        name.style.border="none";
        email.style.border="solid 3px red";
        return false;
    }
    else if(name.value.trim() == "")
    {
        alert("Please Enter Email");
        username.style.border="none";
        passs1.style.border="none";
        passs2.style.border="none";
        email.style.border="none";
        name.style.border="solid 3px red";
        return false;
    }
    else if(passs1.value.trim() == "")
    {
        alert("Please Enter Password");
        email.style.border="none";
        username.style.border="none";
        name.style.border="none";
        passs2.style.border="none";
        passs1.style.border="solid 3px red";
        return false;
    }
    else if(passs1.value.trim().length < 8)
    {
        alert("Password cannot be less than 8 Characters");
        passs1.style.border="solid 3px red";
        email.style.border="none";
        name.style.border="none";
        username.style.border="none";
        passs2.style.border="none";
        return false;
    }
    else if(passs2.value.trim() == "")
    {
        alert("Please Enter Retype Password");
        passs2.style.border="solid 3px red";
        email.style.border="none";
        passs1.style.border="none";
        username.style.border="none";
        name.style.border="none";
        return false;
    }
    
    
    else if(passs1.value.trim() != passs2.value.trim())
    {
        alert("Password Entered Doesn't Match!!");
        passs2.style.border="solid 3px red";
        email.style.border="none";
        name.style.border="none";
        passs1.style.border="none";
        username.style.border="none";
        return false;
    }
    else
    {
        return true;
    }
}

function signup()
{
    if(validates()){
        document.getElementById("usern").style.border="none"
        document.getElementById("mail").style.border="none"
        document.getElementById("pass1").style.border="none"
        document.getElementById("pass2").style.border="none"
        document.getElementById("name").style.border="none"
    if(localStorage.getItem("carRent")){
        var user = document.getElementById("usern").value;
        var pass =  document.getElementById("pass2").value;
        var enc = window.btoa(pass.toString());
        const carRent = JSON.parse(localStorage.getItem('carRent'))
        const userIndex = carRent.findIndex(x=>x.username == user.toString())
        if(userIndex == -1)
        {
            carRent.push({
                username: document.getElementById("usern").value,
                password: enc,
                name: document.getElementById("name").value,
                email: document.getElementById("mail").value,
                booking:[]
            })
            console.log("registered!")
            localStorage.setItem('carRent', JSON.stringify(carRent))
        }
        else
        {
            alert("Username Already Exists!");
            return false;
        }
    }
    else
    {
        const carRent =[{
            username:"",
            password:"",
            name:"",
            email:"",
            booking:[{
                location:"",
                pickupdate:"",
                dropofdate:"",
                pupose:"",
                pickuptime:"",
                dropoftime:"",
                status:""
            }]
        }]
        localStorage.setItem('carRent',JSON.stringify(carRent))
    }
    alert("You Will be Redirected to Login Page!!!")
    return true;
}
else{
    return false;
}
}
function login()
{
    if(validate()){
        document.getElementById('uname').style.border="none";
        document.getElementById('pass').style.border="none";
        if(localStorage.getItem("carRent"))
        {
            var user = document.getElementById("uname").value;
            user = user.toString()
            var pas = document.getElementById("pass").value;
            

            const carRent = JSON.parse(localStorage.getItem('carRent'))
            const userIndex = carRent.findIndex(x=>x.username == user)
            if(userIndex > 0)
            {
                var dec=window.atob(carRent[userIndex].password)
                if(dec == pas)
                {
                    localStorage.setItem("userLogin",user)
                    return true;
                }
                alert("Password Incorrect")
                document.getElementById('uname').style.border="none";
                document.getElementById('pass').style.border="solid 3px red";
                return false;
            }
            else
            {
                document.getElementById('uname').style.border="solid 3px red";
                document.getElementById('pass').style.border="none";
                alert("Username Doesn't Exists")
                return false;
            }
        }
        else
        {
            alert("Not found")
            return false;
        }
    }
    else
    {
        return false;
    }
}
function user()
{
    if(localStorage.getItem('userLogin'))
    {
        document.getElementById("nameofuser").style.display = "block"
        var user =localStorage.getItem('userLogin');
        var carRent = JSON.parse(localStorage.getItem('carRent'))
        const userIndex = carRent.findIndex(x=>x.username == user) 
        document.getElementById("nameofuser").innerHTML = carRent[userIndex].name;
        document.getElementById("logout").style.display="block"
        document.getElementById("log").style.display="none"
        document.getElementById("sign").style.display="none"
    }
}
function logout()
{
    if(localStorage.getItem('userLogin'))
    {
        var retVal = confirm("Do you want to Logout?");
        if(retVal == true)
        {
            localStorage.removeItem('userLogin')
            document.getElementById("nameofuser").style.display = "none"
            document.getElementById("logout").style.display="none"
            document.getElementById("log").style.display="block"
            document.getElementById("sign").style.display="block"
            document.getElementById("cont").style.display="block"
            return true
        }
        else
        {
            return false
        }
    }
}
function logout1()
{
    if(localStorage.getItem('userLogin'))
    {
        localStorage.removeItem('userLogin')
        document.getElementById("nameofuser").style.display = "none"
        document.getElementById("logout").style.display="none"
        document.getElementById("log").style.display="block"
        document.getElementById("sign").style.display="block"
        document.getElementById("cont").style.display="block"
        return true
    }
}
function validform()
{
    if(localStorage.getItem('userLogin'))
    {
        var today = new Date();
        var dd = today.getDate();

        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        if(dd<10) 
        {
            dd='0'+dd;
        } 

        if(mm<10) 
        {
            mm='0'+mm;
        } 
        today = yyyy+'-'+mm+'-'+dd;
        var select = document.getElementById("loc")
        var opt = select.options[select.selectedIndex].value
        var pickupdate = document.getElementById('pickupdate').value
        var dropofdate = document.getElementById('dropofdate').value
        var pickuptime = document.getElementById('from').value
        var dropoftime = document.getElementById('to').value
        if(opt=="0" && pickupdate == "" && dropofdate =="" && pickuptime =="" && dropoftime =="")
        {
            alert("Please Fill the Necessary Details!")
            return false
        }
        if(opt=="0")
        {
            alert("Please Select PickUp Location")
            return false
        }
        if(pickupdate == "")
        {
            alert("Please Select Pickup Date")
            return false
        }
        if(dropofdate =="")
        {
            alert("Please Select Drop Off Date")
            return false
        }
        if(pickuptime =="")
        {
            alert("Please Select Pick up time")
            return false
        }
        if(dropoftime =="")
        {
            alert("Please Select Drop Off Time")
            return false
        }
        if(pickupdate <= today)
        {
            alert("PickUp Date must be greater than Current Date")
            return false
        }
        if(dropofdate < pickupdate)
        {
            alert("Drop Off Date can't be less than PickUp Date")
            return false;
        }
        if(dropofdate == pickupdate)
        {
            if(dropoftime <= pickuptime)
            {
                alert("Drop Off Time can't be less than PickUp Time")
                return false
            }
        }
        return true;
    }
    else{
        alert("Login In to Book car")
        return false;
    }
}
function getInfo()
{
    if(validform())
    {

        var select = document.getElementById("loc")
        var opt = select.options[select.selectedIndex].value
                var pickupdate = document.getElementById('pickupdate').value
                var dropofdate = document.getElementById('dropofdate').value
                var rd1 = document.getElementById('business')
                var rd2 = document.getElementById('leisure')
                var final
                if(rd1.checked==true)
                {
                    final = rd1.value
                }
                else
                {
                    final = rd2.value
                }
                var pickuptime = document.getElementById('from').value
                var dropoftime = document.getElementById('to').value
        if(localStorage.getItem('userLogin'))
        {
            if(localStorage.getItem('carRent'))
            {
                var retVal = confirm("Do you want to Book?");
                if(retVal == true)
                {
                    var user =localStorage.getItem('userLogin');
                    var carRent = JSON.parse(localStorage.getItem('carRent'))
                    const userIndex = carRent.findIndex(x=>x.username == user)
                    carRent[userIndex].booking.push({
                        location: opt,
                        pickupdate: pickupdate,
                        dropofdate: dropofdate,
                        pupose:final,
                        pickuptime: pickuptime,
                        dropoftime: dropoftime,
                        status:"Booked"
                        })
                    localStorage.setItem('carRent',JSON.stringify(carRent))
                    return true
                }
                else
                {
                    return false
                }
                
            }
            else{
                return false;
            }
        }
        else
        {
            return false
        }
    }
    else
    {
        return false
    }
}
function remove(i)
{
    if(localStorage.getItem('userLogin'))
    {
        if(localStorage.getItem('carRent'))
        {
            var retVal = confirm("Do you want to Cancel Booking");
            if(retVal == true)
            {
                var carRent = JSON.parse(localStorage.getItem('carRent'))
                var user =localStorage.getItem('userLogin');
                const userIndex = carRent.findIndex(x=>x.username == user)
                carRent[userIndex].booking[i].status="Canceled"
                localStorage.setItem('carRent',JSON.stringify(carRent));
                location.reload()
                return true
            }
            else
            {
                return false
            }
        }
    }
}
function remove1(i)
{
    if(localStorage.getItem('userLogin'))
    {
        if(localStorage.getItem('carRent'))
        {
            var retVal = confirm("Do you want to Remove?");
            if(retVal == true)
            {
                var carRent = JSON.parse(localStorage.getItem('carRent'))
                var user =localStorage.getItem('userLogin');
                const userIndex = carRent.findIndex(x=>x.username == user)
                carRent[userIndex].booking.splice(i,1)
                localStorage.setItem('carRent',JSON.stringify(carRent));
                location.reload()
                return true
            }
            else
            {
                return false
            }
        }
    }
}
function tablecontent()
{
    
    if(localStorage.getItem('userLogin'))
    {
        
        if(localStorage.getItem('carRent'))
        {
            
            var today = new Date();
            
            var dd = today.getDate();

            var mm = today.getMonth()+1; 
            var yyyy = today.getFullYear();
            var hh = today.getHours()
            var min = today.getMinutes()
            if(hh<10)
            {
                hh='0'+hh;
            }
            if(min<10)
            {
                min='0'+min;
            }
            var time = hh + ":" + min;
           
            if(dd<10) 
            {
                dd='0'+dd;
            } 

            if(mm<10) 
            {
                mm='0'+mm;
            } 
            today = yyyy+'-'+mm+'-'+dd;
            document.getElementById("cont").style.display="none"
            var table= document.getElementById("content")
            var user =localStorage.getItem('userLogin');
            var carRent = JSON.parse(localStorage.getItem('carRent'))
            const userIndex = carRent.findIndex(x=>x.username == user)
            var i =-1;
            
            if(carRent[userIndex].booking.length > 0)
            {
                var count=0;
            
                document.getElementById("content").style.display="block"
                document.getElementById("nocontent").style.display="none"
                
                for(i=0 ; i < carRent[userIndex].booking.length ;i++)
                {
                    if(carRent[userIndex].booking[i].status == "Booked" &&
                    carRent[userIndex].booking[i].pickupdate < today &&
                    carRent[userIndex].booking[i].dropofdate > today)
                    {
                        count+=1
                        document.getElementById("line").style.display="block"
                        var row = table.insertRow(count)
                        var col0 = row.insertCell(0)
                        var col1 = row.insertCell(1)
                        var col2 = row.insertCell(2)
                        var col3 = row.insertCell(3)
                        var col4 = row.insertCell(4)
                        var col5 = row.insertCell(5)
                        var col6 = row.insertCell(6)
                        var col7 = row.insertCell(7)
                        var col8 = row.insertCell(8)
                        col0.style.borderBottom="1px solid #ddd"
                        col1.style.borderBottom="1px solid #ddd"
                        col2.style.borderBottom="1px solid #ddd"
                        col3.style.borderBottom="1px solid #ddd"
                        col4.style.borderBottom="1px solid #ddd"
                        col5.style.borderBottom="1px solid #ddd"
                        col6.style.borderBottom="1px solid #ddd"
                        col7.style.borderBottom="1px solid #ddd"
                        col8.style.borderBottom="1px solid #ddd"
                        col0.style.height="80px"
                        col0.innerHTML = count;
                        col1.innerHTML = carRent[userIndex].booking[i].location
                        col2.innerHTML = carRent[userIndex].booking[i].pickupdate
                        col3.innerHTML = carRent[userIndex].booking[i].dropofdate
                        col4.innerHTML = carRent[userIndex].booking[i].pupose
                        col5.innerHTML = carRent[userIndex].booking[i].pickuptime
                        col6.innerHTML = carRent[userIndex].booking[i].dropoftime
                        col7.innerHTML = carRent[userIndex].booking[i].status
                        col8.innerHTML = "In Transit"
                    }
                }
                for(i=0 ; i < carRent[userIndex].booking.length ;i++)
                {
                    if(carRent[userIndex].booking[i].status == "Booked" &&
                    carRent[userIndex].booking[i].pickupdate < today &&
                    carRent[userIndex].booking[i].dropofdate == today &&
                    carRent[userIndex].booking[i].dropoftime > time)
                    {
                        count+=1
                        document.getElementById("line").style.display="block"
                        var row = table.insertRow(count)
                        var col0 = row.insertCell(0)
                        var col1 = row.insertCell(1)
                        var col2 = row.insertCell(2)
                        var col3 = row.insertCell(3)
                        var col4 = row.insertCell(4)
                        var col5 = row.insertCell(5)
                        var col6 = row.insertCell(6)
                        var col7 = row.insertCell(7)
                        var col8 = row.insertCell(8)
                        col0.style.borderBottom="1px solid #ddd"
                        col1.style.borderBottom="1px solid #ddd"
                        col2.style.borderBottom="1px solid #ddd"
                        col3.style.borderBottom="1px solid #ddd"
                        col4.style.borderBottom="1px solid #ddd"
                        col5.style.borderBottom="1px solid #ddd"
                        col6.style.borderBottom="1px solid #ddd"
                        col7.style.borderBottom="1px solid #ddd"
                        col8.style.borderBottom="1px solid #ddd"
                        col0.style.height="80px"
                        col0.innerHTML = count;
                        col1.innerHTML = carRent[userIndex].booking[i].location
                        col2.innerHTML = carRent[userIndex].booking[i].pickupdate
                        col3.innerHTML = carRent[userIndex].booking[i].dropofdate
                        col4.innerHTML = carRent[userIndex].booking[i].pupose
                        col5.innerHTML = carRent[userIndex].booking[i].pickuptime
                        col6.innerHTML = carRent[userIndex].booking[i].dropoftime
                        col7.innerHTML = carRent[userIndex].booking[i].status
                        col8.innerHTML = "In Transit"
                    }
                }
                for(i=0 ; i < carRent[userIndex].booking.length ;i++)
                {
                    if(carRent[userIndex].booking[i].status == "Booked" &&
                    carRent[userIndex].booking[i].pickupdate == today &&
                    carRent[userIndex].booking[i].dropofdate > today &&
                    carRent[userIndex].booking[i].pickuptime < time)
                    {
                        count+=1
                        document.getElementById("line").style.display="block"
                        var row = table.insertRow(count)
                        var col0 = row.insertCell(0)
                        var col1 = row.insertCell(1)
                        var col2 = row.insertCell(2)
                        var col3 = row.insertCell(3)
                        var col4 = row.insertCell(4)
                        var col5 = row.insertCell(5)
                        var col6 = row.insertCell(6)
                        var col7 = row.insertCell(7)
                        var col8 = row.insertCell(8)
                        col0.style.borderBottom="1px solid #ddd"
                        col1.style.borderBottom="1px solid #ddd"
                        col2.style.borderBottom="1px solid #ddd"
                        col3.style.borderBottom="1px solid #ddd"
                        col4.style.borderBottom="1px solid #ddd"
                        col5.style.borderBottom="1px solid #ddd"
                        col6.style.borderBottom="1px solid #ddd"
                        col7.style.borderBottom="1px solid #ddd"
                        col8.style.borderBottom="1px solid #ddd"
                        col0.style.height="80px"
                        col0.innerHTML = count;
                        col1.innerHTML = carRent[userIndex].booking[i].location
                        col2.innerHTML = carRent[userIndex].booking[i].pickupdate
                        col3.innerHTML = carRent[userIndex].booking[i].dropofdate
                        col4.innerHTML = carRent[userIndex].booking[i].pupose
                        col5.innerHTML = carRent[userIndex].booking[i].pickuptime
                        col6.innerHTML = carRent[userIndex].booking[i].dropoftime
                        col7.innerHTML = carRent[userIndex].booking[i].status
                        col8.innerHTML = "In Transit"
                    }
                }
                for(i=0 ; i < carRent[userIndex].booking.length ;i++)
                {
                    if(carRent[userIndex].booking[i].status == "Booked" &&
                    carRent[userIndex].booking[i].pickupdate == today &&
                    carRent[userIndex].booking[i].dropofdate > today &&
                    carRent[userIndex].booking[i].pickuptime < time &&
                    carRent[userIndex].booking[i].dropoftime > time)
                    {
                        count+=1
                        document.getElementById("line").style.display="block"
                        var row = table.insertRow(count)
                        var col0 = row.insertCell(0)
                        var col1 = row.insertCell(1)
                        var col2 = row.insertCell(2)
                        var col3 = row.insertCell(3)
                        var col4 = row.insertCell(4)
                        var col5 = row.insertCell(5)
                        var col6 = row.insertCell(6)
                        var col7 = row.insertCell(7)
                        var col8 = row.insertCell(8)
                        col0.style.borderBottom="1px solid #ddd"
                        col1.style.borderBottom="1px solid #ddd"
                        col2.style.borderBottom="1px solid #ddd"
                        col3.style.borderBottom="1px solid #ddd"
                        col4.style.borderBottom="1px solid #ddd"
                        col5.style.borderBottom="1px solid #ddd"
                        col6.style.borderBottom="1px solid #ddd"
                        col7.style.borderBottom="1px solid #ddd"
                        col8.style.borderBottom="1px solid #ddd"
                        col0.style.height="80px"
                        col0.innerHTML = count;
                        col1.innerHTML = carRent[userIndex].booking[i].location
                        col2.innerHTML = carRent[userIndex].booking[i].pickupdate
                        col3.innerHTML = carRent[userIndex].booking[i].dropofdate
                        col4.innerHTML = carRent[userIndex].booking[i].pupose
                        col5.innerHTML = carRent[userIndex].booking[i].pickuptime
                        col6.innerHTML = carRent[userIndex].booking[i].dropoftime
                        col7.innerHTML = carRent[userIndex].booking[i].status
                        col8.innerHTML = "In Transit"
                    }
                }
                for(i=0 ; i < carRent[userIndex].booking.length ;i++)
                {
                    if(carRent[userIndex].booking[i].status == "Booked" &&
                    carRent[userIndex].booking[i].pickupdate == today &&
                    carRent[userIndex].booking[i].pickuptime > time)
                    {
                        count+=1
                        document.getElementById("line").style.display="block"
                        var row = table.insertRow(count)
                        var col0 = row.insertCell(0)
                        var col1 = row.insertCell(1)
                        var col2 = row.insertCell(2)
                        var col3 = row.insertCell(3)
                        var col4 = row.insertCell(4)
                        var col5 = row.insertCell(5)
                        var col6 = row.insertCell(6)
                        var col7 = row.insertCell(7)
                        var col8 = row.insertCell(8)
                        col0.style.borderBottom="1px solid #ddd"
                        col1.style.borderBottom="1px solid #ddd"
                        col2.style.borderBottom="1px solid #ddd"
                        col3.style.borderBottom="1px solid #ddd"
                        col4.style.borderBottom="1px solid #ddd"
                        col5.style.borderBottom="1px solid #ddd"
                        col6.style.borderBottom="1px solid #ddd"
                        col7.style.borderBottom="1px solid #ddd"
                        col8.style.borderBottom="1px solid #ddd"
                        col0.style.height="80px"
                        col0.innerHTML = count;
                        col1.innerHTML = carRent[userIndex].booking[i].location
                        col2.innerHTML = carRent[userIndex].booking[i].pickupdate
                        col3.innerHTML = carRent[userIndex].booking[i].dropofdate
                        col4.innerHTML = carRent[userIndex].booking[i].pupose
                        col5.innerHTML = carRent[userIndex].booking[i].pickuptime
                        col6.innerHTML = carRent[userIndex].booking[i].dropoftime
                        col7.innerHTML = carRent[userIndex].booking[i].status
                        col8.innerHTML = "<button type=\"submit\" id=\"cancel-button\"onclick='return remove("+i+")'>Cancel</button>"
                    }
                }
                for(i=0 ; i < carRent[userIndex].booking.length ;i++)
                {
                    if(carRent[userIndex].booking[i].status == "Booked" &&
                    carRent[userIndex].booking[i].pickupdate > today)
                    {
                        count+=1
                        document.getElementById("line").style.display="block"
                        var row = table.insertRow(count)
                        var col0 = row.insertCell(0)
                        var col1 = row.insertCell(1)
                        var col2 = row.insertCell(2)
                        var col3 = row.insertCell(3)
                        var col4 = row.insertCell(4)
                        var col5 = row.insertCell(5)
                        var col6 = row.insertCell(6)
                        var col7 = row.insertCell(7)
                        var col8 = row.insertCell(8)
                        col0.style.borderBottom="1px solid #ddd"
                        col1.style.borderBottom="1px solid #ddd"
                        col2.style.borderBottom="1px solid #ddd"
                        col3.style.borderBottom="1px solid #ddd"
                        col4.style.borderBottom="1px solid #ddd"
                        col5.style.borderBottom="1px solid #ddd"
                        col6.style.borderBottom="1px solid #ddd"
                        col7.style.borderBottom="1px solid #ddd"
                        col8.style.borderBottom="1px solid #ddd"
                        col0.style.height="80px"
                        col0.innerHTML = count;
                        col1.innerHTML = carRent[userIndex].booking[i].location
                        col2.innerHTML = carRent[userIndex].booking[i].pickupdate
                        col3.innerHTML = carRent[userIndex].booking[i].dropofdate
                        col4.innerHTML = carRent[userIndex].booking[i].pupose
                        col5.innerHTML = carRent[userIndex].booking[i].pickuptime
                        col6.innerHTML = carRent[userIndex].booking[i].dropoftime
                        col7.innerHTML = carRent[userIndex].booking[i].status
                        col8.innerHTML = "<button type=\"submit\" id=\"cancel-button\"onclick='return remove("+i+")'>Cancel</button>"
                    }
                }

                for(i=0 ; i < carRent[userIndex].booking.length ;i++)
                {
                    if(carRent[userIndex].booking[i].status == "Booked" &&
                    carRent[userIndex].booking[i].pickupdate < today &&
                    carRent[userIndex].booking[i].dropofdate < today )
                    {
                        count+=1
                        document.getElementById("line").style.display="block"
                        var row = table.insertRow(count)
                        var col0 = row.insertCell(0)
                        var col1 = row.insertCell(1)
                        var col2 = row.insertCell(2)
                        var col3 = row.insertCell(3)
                        var col4 = row.insertCell(4)
                        var col5 = row.insertCell(5)
                        var col6 = row.insertCell(6)
                        var col7 = row.insertCell(7)
                        var col8 = row.insertCell(8)
                        col0.style.borderBottom="1px solid #ddd"
                        col1.style.borderBottom="1px solid #ddd"
                        col2.style.borderBottom="1px solid #ddd"
                        col3.style.borderBottom="1px solid #ddd"
                        col4.style.borderBottom="1px solid #ddd"
                        col5.style.borderBottom="1px solid #ddd"
                        col6.style.borderBottom="1px solid #ddd"
                        col7.style.borderBottom="1px solid #ddd"
                        col8.style.borderBottom="1px solid #ddd"
                        col0.style.height="80px"
                        col0.innerHTML = count;
                        col1.innerHTML = carRent[userIndex].booking[i].location
                        col2.innerHTML = carRent[userIndex].booking[i].pickupdate
                        col3.innerHTML = carRent[userIndex].booking[i].dropofdate
                        col4.innerHTML = carRent[userIndex].booking[i].pupose
                        col5.innerHTML = carRent[userIndex].booking[i].pickuptime
                        col6.innerHTML = carRent[userIndex].booking[i].dropoftime
                        col7.innerHTML = "Completed"
                        col8.innerHTML = "<button type=\"submit\" id=\"cancel-button\"onclick='return remove1("+i+")'>Remove</button>"
                    }
                }
                for(i=0 ; i < carRent[userIndex].booking.length ;i++)
                {
                    if(carRent[userIndex].booking[i].status == "Booked" &&
                    carRent[userIndex].booking[i].pickupdate < today &&
                    carRent[userIndex].booking[i].dropofdate == today &&
                    carRent[userIndex].booking[i].dropoftime < time)
                    {
                        count+=1
                        document.getElementById("line").style.display="block"
                        var row = table.insertRow(count)
                        var col0 = row.insertCell(0)
                        var col1 = row.insertCell(1)
                        var col2 = row.insertCell(2)
                        var col3 = row.insertCell(3)
                        var col4 = row.insertCell(4)
                        var col5 = row.insertCell(5)
                        var col6 = row.insertCell(6)
                        var col7 = row.insertCell(7)
                        var col8 = row.insertCell(8)
                        col0.style.borderBottom="1px solid #ddd"
                        col1.style.borderBottom="1px solid #ddd"
                        col2.style.borderBottom="1px solid #ddd"
                        col3.style.borderBottom="1px solid #ddd"
                        col4.style.borderBottom="1px solid #ddd"
                        col5.style.borderBottom="1px solid #ddd"
                        col6.style.borderBottom="1px solid #ddd"
                        col7.style.borderBottom="1px solid #ddd"
                        col8.style.borderBottom="1px solid #ddd"
                        col0.style.height="80px"
                        col0.innerHTML = count;
                        col1.innerHTML = carRent[userIndex].booking[i].location
                        col2.innerHTML = carRent[userIndex].booking[i].pickupdate
                        col3.innerHTML = carRent[userIndex].booking[i].dropofdate
                        col4.innerHTML = carRent[userIndex].booking[i].pupose
                        col5.innerHTML = carRent[userIndex].booking[i].pickuptime
                        col6.innerHTML = carRent[userIndex].booking[i].dropoftime
                        col7.innerHTML = "Completed"
                        col8.innerHTML = "<button type=\"submit\" id=\"cancel-button\"onclick='return remove1("+i+")'>Remove</button>"
                    }
                }
                for(i=0 ; i < carRent[userIndex].booking.length ;i++)
                {
                    if(carRent[userIndex].booking[i].status == "Booked" &&
                    carRent[userIndex].booking[i].pickupdate == today &&
                    carRent[userIndex].booking[i].dropofdate == today &&
                    carRent[userIndex].booking[i].pickuptime < time &&
                    carRent[userIndex].booking[i].dropoftime < time)
                    {
                        count+=1
                        document.getElementById("line").style.display="block"
                        var row = table.insertRow(count)
                        var col0 = row.insertCell(0)
                        var col1 = row.insertCell(1)
                        var col2 = row.insertCell(2)
                        var col3 = row.insertCell(3)
                        var col4 = row.insertCell(4)
                        var col5 = row.insertCell(5)
                        var col6 = row.insertCell(6)
                        var col7 = row.insertCell(7)
                        var col8 = row.insertCell(8)
                        col0.style.borderBottom="1px solid #ddd"
                        col1.style.borderBottom="1px solid #ddd"
                        col2.style.borderBottom="1px solid #ddd"
                        col3.style.borderBottom="1px solid #ddd"
                        col4.style.borderBottom="1px solid #ddd"
                        col5.style.borderBottom="1px solid #ddd"
                        col6.style.borderBottom="1px solid #ddd"
                        col7.style.borderBottom="1px solid #ddd"
                        col8.style.borderBottom="1px solid #ddd"
                        col0.style.height="80px"
                        col0.innerHTML = count;
                        col1.innerHTML = carRent[userIndex].booking[i].location
                        col2.innerHTML = carRent[userIndex].booking[i].pickupdate
                        col3.innerHTML = carRent[userIndex].booking[i].dropofdate
                        col4.innerHTML = carRent[userIndex].booking[i].pupose
                        col5.innerHTML = carRent[userIndex].booking[i].pickuptime
                        col6.innerHTML = carRent[userIndex].booking[i].dropoftime
                        col7.innerHTML = "Completed"
                        col8.innerHTML = "<button type=\"submit\" id=\"cancel-button\"onclick='return remove1("+i+")'>Remove</button>"
                    }
                }
                for(i=0 ; i < carRent[userIndex].booking.length ;i++)
                {
                    if(carRent[userIndex].booking[i].status == "Canceled")
                    {
                        count+=1
                        document.getElementById("line").style.display="block"
                        var row = table.insertRow(count)
                        var col0 = row.insertCell(0)
                        var col1 = row.insertCell(1)
                        var col2 = row.insertCell(2)
                        var col3 = row.insertCell(3)
                        var col4 = row.insertCell(4)
                        var col5 = row.insertCell(5)
                        var col6 = row.insertCell(6)
                        var col7 = row.insertCell(7)
                        var col8 = row.insertCell(8)
                        col0.style.borderBottom="1px solid #ddd"
                        col1.style.borderBottom="1px solid #ddd"
                        col2.style.borderBottom="1px solid #ddd"
                        col3.style.borderBottom="1px solid #ddd"
                        col4.style.borderBottom="1px solid #ddd"
                        col5.style.borderBottom="1px solid #ddd"
                        col6.style.borderBottom="1px solid #ddd"
                        col7.style.borderBottom="1px solid #ddd"
                        col8.style.borderBottom="1px solid #ddd"
                        col0.style.height="80px"
                        col0.innerHTML = count;
                        col1.innerHTML = carRent[userIndex].booking[i].location
                        col2.innerHTML = carRent[userIndex].booking[i].pickupdate
                        col3.innerHTML = carRent[userIndex].booking[i].dropofdate
                        col4.innerHTML = carRent[userIndex].booking[i].pupose
                        col5.innerHTML = carRent[userIndex].booking[i].pickuptime
                        col6.innerHTML = carRent[userIndex].booking[i].dropoftime
                        col7.innerHTML = carRent[userIndex].booking[i].status
                        col8.innerHTML = "<button type=\"submit\" id=\"cancel-button\"onclick='return remove1("+i+")'>Remove</button>"
                    }
                }
            }
            else
            {
                document.getElementById("nocontent").style.display="block"
            }
        }
    }
}
function profileinfo()
{
    if(localStorage.getItem('userLogin'))
    {
        if(localStorage.getItem('carRent'))
        {
            var user =localStorage.getItem('userLogin');
            var carRent = JSON.parse(localStorage.getItem('carRent'))
            const userIndex = carRent.findIndex(x=>x.username == user)
            console.log(carRent[userIndex].name)
            document.getElementById("profilename").value = carRent[userIndex].name
            document.getElementById("profileusername").value = user
            document.getElementById('profileid').value= carRent[userIndex].email
        }
    }
}
function validchpass()
{
    var oldp = document.getElementById('chpass')
    var newp = document.getElementById('newpass')
    var confm = document.getElementById('newconfirmpass')
    if(oldp.value.trim()=="" && newp.value.trim()=="" && confm.value.trim()=="" )
    {
        alert("Please Enter The Required Details!")
        oldp.style.border="solid 3px red"
        newp.style.border="solid 3px red"
        confm.style.border="solid 3px red"
        return false
    }
    else if(newp.value.trim()=="" && confm.value.trim()=="" )
    {
        alert("Please Enter The Required Details!")
        oldp.style.border="none"
        newp.style.border="solid 3px red"
        confm.style.border="solid 3px red"
        return false
    }
    else if(oldp.value.trim()=="")
    {
        alert("Please Enter The Required Details!")
        oldp.style.border="solid 3px red"
        newp.style.border="none"
        confm.style.border="none"
        return false
    }
    else if(newp.value.trim()=="")
    {
        alert("Please Enter The Required Details!")
        newp.style.border="solid 3px red"
        oldp.style.border="none"
        confm.style.border="none"
        return false
    }
    else if(newp.value.trim().length < 8)
    {
        alert("Password cannot be less than 8 Characters");
        oldp.style.border="none"
        newp.style.border="solid 3px red"
        confm.style.border="none"
        return false
    }
    else if(confm.value.trim()=="")
    {
        alert("Please Enter The Required Details!")
        confm.style.border="solid 3px red"
        newp.style.border="none"
        oldp.style.border="none"
        return false
    }
    else if(confm.value.trim() != newp.value.trim())
    {
        alert("Password Entered Doesn't Match!!");
        confm.style.border="solid 3px red"
        newp.style.border="solid 3px red"
        oldp.style.border="none"
        return false
    }
    else
    {
        return true
    }
}
function changePassword()
{
    if(validchpass())
    {
        document.getElementById('chpass').style.border="none"
        document.getElementById('newpass').style.border="none"
        document.getElementById('newconfirmpass').style.border="none"
        var oldpass = document.getElementById("chpass").value
        var newpass = document.getElementById("newpass").value
        if(localStorage.getItem('userLogin'))
        {
            if(localStorage.getItem('carRent'))
            var retVal = confirm("Do you want to Change Password");
            if(retVal == true)
            {
                var user =localStorage.getItem('userLogin');
                var carRent = JSON.parse(localStorage.getItem('carRent'))
                const userIndex = carRent.findIndex(x=>x.username == user)
                if(userIndex > 0)
                {
                    var dec=window.atob(carRent[userIndex].password)
                    if(dec == oldpass)
                    {
                        carRent[userIndex].password = window.btoa(newpass.toString())
                        localStorage.setItem('carRent', JSON.stringify(carRent))
                        alert("You Will Be Redirected To Login Page!!")
                        logout1();
                        return true
                        
                    }
                    alert("Incorrect Password Entered")
                    document.getElementById('chpass').style.border="solid 3px red"
                    return false
                }

            }
            else
            {
                return false
            }
        }
        else
        {
            return false
        }
    }
    else
    {
        return false
    }
}