<script>
    import axios from "axios";
    import{ push } from "svelte-spa-router";
    import toastr from "toastr"
    import { user } from "../../stores"


    let email;
    let name;
    let message;

    async function sendMail() {
        try {
          const { data } = await axios.post("http://localhost:3636/mail/send", {
            name,
            email,
            message,
          });
          toastr.success('Mail Sent, We will get back to you');
          push("/dashboard");
        } catch (error) {
          console.log(error.response.data.message)
          toastr.warning('Something did not work. Try again')
      }
      }
      
    function redirect(url) {
        push(url)
    }
    </script>
    
    <main>
        {#if user}
        <div class=boxes id="container">
            <form on:submit ={()=>sendMail}>
            
                    
              <div>
                <label for="" >Name</label>
                <div>
                  <input type="text" bind:value={name} required>
                </div>
              </div>
        
              <div>
                <label for="" >Email</label>
                <div>
                  <input type="text" bind:value={email} required>
                </div>
              </div>
    
              <div >
                <label for="" >Message</label>
                <div class="control">
                    <textarea class="textarea" rows=8 bind:value={message}></textarea>
                </div>
              </div>
        
        
              <div>
                  <div>
                    <input type="submit"  value="Submit" on:click={()=> sendMail} />
                    <a href="#/main"  >Go back</a>
                  </div>
              </div>
        
            </form>
          </div>
          {:else}
          <h1>Not logged in</h1>
            <button on:click={() => redirect("/login")}>Login</button>
        {/if}
    
    </main>
    <style>
        div.boxes{
            margin-top: 100px;
            margin-right: 180px;
            float: right;
        }
    </style>