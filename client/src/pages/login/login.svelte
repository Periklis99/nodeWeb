<script>
  import axios from "axios";
  import{ push } from "svelte-spa-router";
  import { user } from "../../stores";
  import toastr from "toastr"
  
  let email;
  let password;
  
    async function login() {
      try {
        const { data } = await axios.post("http://localhost:3636/api/auth/login", {
          email,
          password,
        });
  
        $user = data.user;
        console.log(data.user);
        toastr.success("Logged in");
        push("/main");
      } catch (error) {
          toastr.warning('Incorrect login');
      }
    }
  
  
  
  </script>
  
  <main >
    <h1>The Green room</h1>
    
    <h2>Login</h2>
    
    <div id="room">
      <form on:submit|preventDefault={login}>
      
              
        <div>
          <p>Email</p>
            <input class="input" type="text" bind:value={email} required placeholder="youremail@email.com">
         </div>
  
        <div>
          <p>Password</p>
            <input class="input" type="password" bind:value={password} placeholder="******" required>
        </div>
   
        <div>
            <div class="button">
              <input type="submit" value="Submit" />
            </div>
        </div>
  
      </form>
    </div>
  </main>
  <style>
    #room {
      display: flex;
      justify-content: center;
    }

    h1{
      font: 50px Arial, Helvetica, sans-serif;
    }

    h2{
      font-size: 28px;
      text-align: center;
    }

    p{
      text-align: center;
    }

    div.button{
      position: fixed;
      top: 65%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    
    </style>

