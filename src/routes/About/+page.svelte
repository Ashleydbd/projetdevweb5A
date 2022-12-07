<script>

  import { onMount } from "svelte";
  import { supabase } from "$lib/supabaseClient";

  let table = null;
  let errorMessage = null;

  onMount(async () => {
    let { data, error } = await supabase.from("about").select("*");
    if (error) {
      return (errorMessage = error.message);
    }
    table = data;
    console.log(data);
  });
</script>

<body>

<section>
  {#if table}
    {#each table as table}
      <div class="card-white">{table.nom}
        <p> </p>
          <div><img 
            src={"https://wlgcrbhsnqmrertxdxfl.supabase.co/storage/v1/object/public/photorecette/" +table.image} height = "45"/></div>
            
          <div> {table.annee} </div>
          <div> {table.formation} </div> 
      </div> 
      <p> </p>     
          
    {/each}
  {/if}     
</section>


</body>

<style>
  body {
    background: #ffffff;
    front-family: "Lora", sherif;
    front-size: 17px;
    front-weight: lighter;
  }

  h1 {
    front-family: "Geogia", sherif;
    color: #204b57;
    text-align: center;
    front-size: 50px;
    front-weight: 50;
  }

  h2 {
    front-family: "Geogia", sherif;
    color: #204b57;
    text-align: center;
    front-size: 50px;
    front-weight: 50;
  }

  .center {
    display: bock;
    margin-left: auto;
    margin-right: auto;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

.absolute {
   position: absolute;
   top: 100px;
   left: 100px;
   width: 300px;
   border: 2px solid blue;
   text-align: center;
}

.absolute2 {
   position: absolute;
   top: 100px;
   left: 100px;
   width: 300px;
   border: 2px solid blue;
   text-align: center;
}

  .card-white {
    padding: 20px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    border-radius: 1px;
    margin: 1px 0px;
    text-align: center;
  }


</style>

