var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/9XZG6qN8/mom-and-me.jpg", "https://i.postimg.cc/zBWgY9pb/bday.jpg" , "https://i.postimg.cc/tgn1FLKS/meh.jpg", "https://i.postimg.cc/mgthGvgL/me-and-sis.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","mom", "dad", "me", "sis", ""];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
