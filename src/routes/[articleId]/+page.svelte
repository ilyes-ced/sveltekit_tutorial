<script lang='ts'>
    import type { PageData } from "./$types"

    export let data: PageData


    $: ({ article } = data)

</script>

<div>


    <form action="?/updateArticle" method='POST'>
        <h1> article {article.id}   </h1>
        <input type="text" name='title' value={article.title} >
        <textarea name="content" id="" cols="30" rows="10" value={article.content}  ></textarea>
        <button>add article</button>
    </form>


</div>