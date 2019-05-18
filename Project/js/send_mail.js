
//表單 --------------------------------------
function checkForm()
  {
	  if(document.getElementById('name').value.length < 1)//表示是空
	  {
	    alert("請輸入姓名");
	    document.getElementById('name').focus();// 把指標focus在這個欄位
	  }
	  else if(document.getElementById('tel').value.length < 1)
	  {
	    alert("請輸入聯絡電話");
	    document.getElementById('tel').focus();
	  }
	  else if(document.getElementById('email').value.length < 1)
	  {
	    alert("請輸入電子郵件");
	    document.getElementById('email').focus();
	  }  
	  else if(document.getElementById('message').value.length < 1)
	  {
	    alert("請輸入留言內容");
	    document.getElementById('message').focus();
	  }
	  else
	  {
	    document.form1.submit();//jq是抓id，送出表單是抓name
	  }
  }
