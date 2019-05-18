<?php
    include("class.phpmailer.php"); 

  	//PHPMailer()寄送郵件的php程式套件，必須要先引用它，才能把它new實體化，include("class.phpmailer.php");要同一個目錄下
    $mail = new PHPMailer();

    //php的連接符號是「.」字串連結變數，前面用get(post)就用get(post)去接
  	$html = '<table bgcolor="#EAEAEA" width="410" height="202" border="0" cellpadding="0" cellspacing="0" class="style_2">
                <tr>
                  <td width="60" class="padding_10">姓名：</td>
                  <td>'.$_POST['name'].'</td>
                </tr>
                <tr>
                  <td class="padding_10">聯絡電話：</td>
                  <td>'.$_POST['tel'].'</td>
                </tr>
                <tr>
                  <td class="padding_10">電子郵件：</td>
                  <td>'.$_POST['email'].'</td>
                  </tr>                       
          	    <tr>
                  <td class="padding_10">留言內容：</td>
                  <td>'.$_POST['message'].'</td>
                </tr>
              </table>';
              
    //phpMailer的
  	$mail->From     = $_POST['email'];
  	$mail->FromName = $_POST['name'];
  	$mail->Subject = "網路訊息";
  	$mail->MsgHTML($html);//email裡面的內文是以html格式去寄，寄的內容去抓$html的內容

  	$mail->AddAddress("rrr4408rrr@gmail.com", "Evan");
    //$mail->AddAddress($SYSTEMMAIL, $WEBTITLE);
    //$SYSTEMMAIL就是這家公司的email，$WEBTITLE這家公司的名稱(寄給誰的意思)

  	$mail->IsHTML(true); // send as HTML  //確認是html

  	if(!$mail->Send()) 
    //如果send mail這個動作失敗的話，
    //就進去執行裡面的指令。如果不在乎有沒有寄成功就只要寫$mail->Send()
  	
    {
  		$Functions->messageHref("寄信失敗", "contact.html"); //
  	}
  	else
  	{   
       print"<script>
             <!--
                 alert(\"聯絡我們已寄出\");
                 location.href=\"index.html\";
             //-->
             </script>
             ";
	}  
?>