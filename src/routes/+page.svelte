<script lang='ts'>
    import type { PageData } from "./$types"

    export let data: PageData


    $: ({ articles } = data)

</script>

<div id="main">

   

    <div class="container">
        <div class="columns">

            <div class="column">
                <p class="title">With block</p>
                {#each articles as article}

                    <article class="message is-danger">
                        <div class="message-header">
                            <p> { article.title }  &nbsp;&nbsp; <a id='edit' href="/{article.id}" class=''><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/></svg></a> </p>
                            <form action="?/deleteArticle&id={article.id}" method='post'>
                                <button class="delete" aria-label="delete"></button>
                            </form>
                        </div>
                        <div class="message-body">
                            { article.title }
                        </div>
                    </article>
                {/each}
               
                
            </div>
            <div class="column">
        
                <p class="title">Create a new article</p>

                <form action="?/createArticle" method='POST'>
                    <div class="block">
                        <div class="field">
                          <label class="label" for='title'>Title</label>
                          <div class="control">
                            <input class="input" type="text" name='title' placeholder="Text input">
                          </div>
                        </div>

                        <div class="field">
                          <label class="label" for='content'>Content</label>
                          <div class="control">
                            <textarea class="textarea" name='content' placeholder="Textarea"></textarea>
                          </div>
                        </div>
                        <button class="button is-primary">Button</button>
                    </div>
                </form>
        
                
            </div>
        </div>
    </div>





    
</div>


<style>

    #main{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    .column{
                
        overflow-y: scroll;
    }
    /*#edit{
        aspect-ratio: 1/1;
        width: 10px;
        height: 10px;
        background-color: rgba(0, 0, 0, 0.2);
        padding: 2px;
        border-radius: 100%;

    }*/
    
</style>