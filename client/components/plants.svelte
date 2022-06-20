<script>
    import { products } from "../src/stores"
    
 </script>
 
 <main>
    {#each products as product}
    <div>
        <ul>
          <li class="plantList">
               <img class="image" src={product.imageUrl} alt={product.name}>
               
               <h3>{product.name}</h3>
               <p class="dec">
                {product.description}
                <br>
                {product.price} DKK <button>Buy</button>
               </p>
            
            
            
          </li>
            
       
        </ul>
      </div>
  
      {/each}
</main>
 <style>
.plantList {
list-style-type: none;
margin-left:0px;
padding-left:0px;
display: inline-block;
}

.plantList img{
    width: 175px;
    height:175px;
float:left;
}

.plantList p,.plantList h3 {
text-align: right; 
display:inline-block;
padding: 0;
}

 </style>
