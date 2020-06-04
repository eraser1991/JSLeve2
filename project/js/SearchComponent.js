Vue.component('search', {
    props:['value'],
    template: `
                <form action="#" class="search-form" @submit="$parent.$emit('search-click', '')">
                <input type="text" class="search-field" v-bind:value="value"
                v-on:input="$parent.$emit('input', $event.target.value)">
                <button class="btn-search" type="submit" >
                    <i class="fas fa-search"></i>
                </button>
                </form>
                `
 });