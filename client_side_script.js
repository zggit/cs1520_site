var items = [
  "announcements",
  "schedule",
  "assignments",
  "policies",
  "other"
];

function toggleItem(itemName)
{
	var item = document.getElementById(itemName);
	var itemtoggle = document.getElementById(itemName.concat("toggle"));
	if(item.style.display == "none")
	{
		item.style.display = "";
		itemtoggle.innerHTML = "&#8722";
	}
	else
	{
		item.style.display = "none";
		itemtoggle.innerHTML = "+";
	}
}


function hideAll()
{
	for(var i in items)
	{
		if(items.hasOwnProperty(i))
		{
			var item = document.getElementById(items[i]);
			item.style.display = "none";
		}
	}
}
