var url = new URL(window.location.href);
document.getElementById('tagno').innerHTML=url.searchParams.get("tagno");
document.getElementById('tagtype').innerHTML=url.searchParams.get("tagtype");
document.getElementById('effective-timestamp').innerHTML=url.searchParams.get("effective-timestamp");
document.getElementById('verification-code').innerHTML=url.searchParams.get("verification-code");
document.getElementById('create-timestamp').innerHTML=url.searchParams.get("create-timestamp");
document.getElementById('end-timestamp').innerHTML=url.searchParams.get("end-timestamp");
document.getElementById('status-code').innerHTML=url.searchParams.get("status-code");
document.getElementById('vin').innerHTML=url.searchParams.get("vin");
document.getElementById('year').innerHTML=url.searchParams.get("year");
document.getElementById('make').innerHTML=url.searchParams.get("make");
document.getElementById('body').innerHTML=url.searchParams.get("body");
document.getElementById('color').innerHTML=url.searchParams.get("color");
document.getElementById('gdn').innerHTML=url.searchParams.get("gdn");
document.getElementById('name').innerHTML=url.searchParams.get("name");
document.getElementById('dba').innerHTML=url.searchParams.get("dba");
document.getElementById('address').innerHTML=url.searchParams.get("address");
//http://127.0.0.1:5500/index.html?tagno=algo1&tagtype=algo2&effective-timestamp=algo3&verification-code=algo5&create-timestamp=algo6&end-timestamp=algo7&status-code=algo8&vin=algo9&year=algo10&make=algo11&body=algo12&color=algo13&gdn=algo14&name=algo15&dba=algo16&address=algo17