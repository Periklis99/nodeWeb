<script>
    import { user } from "../src/stores"
    import axios from "axios";
    import{ push } from "svelte-spa-router";
    import toastr from "toastr"
    
    async function logout() {
        try {
          const { data } = await axios.post("http://localhost:3636/api/auth/logout", {
          });
          
          $user = null
          console.log(data)
          toastr.success("Logged out")
          push("/");
        
        } catch (error) {
          console.log(error)
        }
      }
    </script>
    
    <button class="button is-info is-light" on:click= {logout}>Logout</button>