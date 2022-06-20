<script>
import Router from "svelte-spa-router";
import signup from "./pages/signup/signup.svelte";
import login from "./pages/login/login.svelte";
import home from "./pages/home/home.svelte";
import main from "./pages/main/main.svelte";
import contact from "./pages/contact/contact.svelte"

const routes = {
"/" : home,
"/signup" : signup,
"/login" : login,
"/main" : main,
"/contact" : contact

};

</script>
<Router {routes} />

<style>


</style>