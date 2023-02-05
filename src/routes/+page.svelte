<script lang='ts'>
    import type { PageData } from "./$types"

    export let data: PageData


    $: ({ articles } = data)

</script>

<div>

    {#each articles as article}
        <h1> {article.title} </h1>
        <p> {article.content} </p>
        <a href="/{article.id}">edit</a>
        <form action="?/deleteArticle&id={article.id}" method='post'>
            <button>delete</button>
        </form>
    {/each}


    <form action="?/createArticle" method='POST'>
        <input type="text" name='title'>
        <textarea name="content" id="" cols="30" rows="10"></textarea>
        <button>add article</button>
    </form>

</div>