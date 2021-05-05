var images = 
["OIP (10).jpg",
"OIP (11).jpg",
"th.jpg",
"OIP (12).jpg",
"OIP (13).jpg"];

var names = ["Ranbir Singh","Diljeet Singh","Rocky Singh","Alia Singh","Soni Singh"];

var i = 0;
function update()
{
    i++;
    var number_of_family_members_in_array = 5
    if(i > number_of_family_members_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}