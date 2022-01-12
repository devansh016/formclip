# Formclip
Get form submissions directly in your inbox without any hassle. Its completely free!

# What is FormClip?
Formclip is a easy way to save responses from your website via forms without a server. Formclip  is build on the premise that form responses from static sites should not be requiring a backend server and should be free. We want to profit our users, not to profit from them.

# Get Access Key
Enter your email in the register form and click on get started button. You will receive a email with the access key.
Access Key helps us to identify you.

# Website Integration

## Step 1
Create a HTML form with the fields you want the user to fill and don't forget to add name attribute to the input fields and a submit button.
```
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>
```

## Step 2
Add method attribute as "post" and action attribute as "https://api.formclip.xyz/form/{accesskey}" of the form.
```
<form action="https://api.formclip.xyz/form/accesskey" method="post">
```
That's all you are done with the integration. Whenever someone submits the form you will receive the response in your inbox.

# What next?
Sit back and relax!
There are more features we are working on in Formclip– and don't worry, you'll discover the ones important to you over time. 
For now, you can provide us your valuable feedback and help us to grow.

# Environment Variables
```
MONGODB_URL = "xyz"
email_host = "xyz
email_port = 465
email_user = "xyz"
email_pass = "xyz"
```
