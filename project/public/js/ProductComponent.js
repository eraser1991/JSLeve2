Vue.component('products', {
   props: ['products', 'img'],
   template: `<div class="products">
                <product v-for="item of products" 
                :key="item.id_product" 
                :img="img"
                :product="item"></product>
               </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `
            <div class="product-item">
                <img :src="img" alt="Some img">
                <div class="desc">
                    <div class="product-bio-desc">
                        <h3>{{product.product_name}}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Ducimus a laudantium placeat dicta aperiam, quis reprehenderit quibusdam eum 
                         fugit nobis esse labore est delectus soluta porro facilis in praesentium optio
                          assumenda dolores consequuntur impedit minima? Sit consequatur soluta velit fugit ipsa
                           accusamus nam ex, consequuntur modi? Exercitationem id illum libero reiciendis eos blanditiis
                            velit non culpa, consequatur facilis, delectus expedita, tempore maxime. Culpa repellat voluptatum incidunt
                             officia vel dicta aliquam alias, rerum consequuntur minima nulla? Pariatur voluptatem accusamus dolorum, libero
                              reiciendis labore minima nostrum recusandae. Eligendi obcaecati non, repellat, culpa voluptatibus ipsa vero architecto
                               neque repellendus ullam optio ipsum error?</p>
                        <p>{{product.price}}</p>
                    </div>
                    <button class="buy-btn" @click="$parent.$emit('add-product', product)">Купить</button>
                </div>
            </div>
    `
})