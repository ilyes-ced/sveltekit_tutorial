<script lang='ts'>
    import type { PageData } from "./$types"

    export let data: PageData


    $: ({ articles } = data)

</script>

<div >

    {#each articles as article}
        <h1> {article.title} </h1>
        <p> {article.content} </p>
        <a href="/{article.id}">edit</a>
        <form action="?/deleteArticle&id={article.id}" method='post'>
            <button>delete</button>
        </form>
    {/each}

   

    <div class="container">
        <div class="columns">

            <div class="column">
    
                <p class="title">With block</p>
                <div class="block">
                    <div class="field is-grouped">
                        <div class="control is-expanded">
                            <input class="input" type="text" placeholder="Text input">
                        </div>
                        <div class="control">
                            <button class="button is-primary">Button</button>
                        </div>
                    </div>
                </div>
                
                <article class="message is-danger">
                    <div class="message-header">
                        <p>Error</p>
                        <button class="delete" aria-label="delete"></button>
                    </div>
                    <div class="message-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                    </div>
                </article>
                
            </div>
            <div class="column">
        
                <p class="title">With block</p>
                <div class="block">
                    <div class="field is-grouped">
                        <div class="control is-expanded">
                            <input class="input" type="text" placeholder="Text input">
                        </div>
                        <div class="control">
                            <button class="button is-primary">Button</button>
                        </div>
                    </div>
                </div>
                
                <article class="message is-danger">
                    <div class="message-header">
                        <p>Error</p>
                        <button class="delete" aria-label="delete"></button>
                    </div>
                    <div class="message-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                    </div>
                </article>
                
            </div>
        </div>
    </div>





    
    <form action="?/createArticle" method='POST'>
        <input type="text" name='title'>
        <textarea name="content" id="" cols="30" rows="10"></textarea>
        <button>add article</button>
    </form>

</div>


<style>
    
</style>