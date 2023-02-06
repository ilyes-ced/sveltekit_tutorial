<script lang='ts'>
    import type { PageData } from "./$types"

    export let data: PageData


    $: ({ article } = data)

</script>

<div id='main'>


    <div class="container">
        <form action="?/createArticle" method='POST'>
            <div class="block">
                <h1 class='title'> article {article.id}   </h1>
                <div class="field">
                  <label class="label" for='title' >Title</label>
                  <div class="control">
                    <input class="input"  value={article.title} required type="text" name='title' placeholder="Text input">
                  </div>
                </div>
    
                <div class="field">
                  <label class="label" for='content'>Content</label>
                  <div class="control">
                    <textarea class="textarea"  value={article.content} required name='content' placeholder="Textarea"></textarea>
                  </div>
                </div>
                <button class="button is-primary">Button</button>
            </div>
        </form>
    </div>


</div>

<style>

    #main{

        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>