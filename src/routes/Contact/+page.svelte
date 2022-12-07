  
<script>

  import { onMount } from "svelte";
  import { supabase } from "$lib/supabaseClient";


 let firstnameproposal = undefined
 let lastnameproposal = undefined
 let emailproposal = undefined
 let messageproposal = undefined


let contactproposal = []
const handleClick = async () => {
	const {data, error} = await supabase
		.from('Contact')
		.insert([
			{firstname: firstnameproposal, lastname: lastnameproposal, email: emailproposal, message: messageproposal}
		])
}

</script>

<div class = "absolute2">

  <label for="fname">First Name:</label><br>
  <input type="text" id="fname" name="fname" bind:value={firstnameproposal}><br>
  <p> </p>
  <label for="lname">Last Name:</label><br>
  <input type="text" id="lname" name="lname" bind:value={lastnameproposal}><br>
  <p> </p>
  <label for="fname">E-mail:</label><br>
  <input type="text" id="fname" name="fname" bind:value={emailproposal}><br>
  <p> </p>
  <label for="fname">Message:</label><br>
  <input type="text" id="fname" name="fname" bind:value={messageproposal}><br>

  <p> </p>

   <button on:click={handleClick}>
      <span>SUBMIT</span>
    </button>
</div>
  
<div class = "absolute">

<p> To contact Ashley Debord, please fill out the form. Thanks for your comments and questions.</p>

</div>

<style>

      button {
        display: inline-block;
        background-color: #FFFFF;
        border-radius: 10px;
        border: 4px double #000000;
        color: #000000;
        text-align: center;
        font-size: 20px;
        padding: 10px;
        width: 160px;
        transition: all 0.5s;
        cursor: pointer;
        margin: 5px;
      }
      button span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
      }
      button span:after {
        content: "\00bb";
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
      }
      button:hover {
        background-color: #E2E2E2;
      }
      button:hover span {
        padding-right: 20px;
      }
      button:hover span:after {
        opacity: 1;
        right: 0;
      }

.absolute2 {
   position: absolute;
   top: 100px;
   left: 650px;
   width: 300px;
   text-align: center;
}

.absolute {
   position: absolute;
   top: 250px;
   left: 200px;
   width: 300px;
   text-align: center;
}

label {
color: #9D8791;
font-size: 1.3em;
font-family: Calibri light;
}


</style>