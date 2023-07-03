export interface Post{
    id?:Number;
    nome: string;
    descricao?: string;
    categoria: string;
}

const postArray = new Array<Post>();

export const create = (post: Post) => {
    post = {id: postArray.length,...post}

    postArray.map(postElement => {
        if(Number(postElement.id) >= Number(post.id)){
            post.id = Number(post.id)+1
        }
    })
    postArray.push(post);
    return JSON.stringify(post);
}

export const update = (post: Post,id:string) => {
    const index = postArray.findIndex((post:Post) => post.id === Number(id))
    if(index !== -1) {
        post = {id: index,...post}
        postArray[index] = post;
        return JSON.stringify(postArray[index]);
    }else{
        return  JSON.stringify("Post não encontrado");
    }
};

export const destroy = (id:string) => {
    const foundIndex = postArray.findIndex(post => post.id == Number(id));
    const post = postArray[foundIndex];
    postArray.splice(foundIndex,1);
    return JSON.stringify(post) +JSON.stringify(" Deleted");
};

export const show = (id:string) => {
    const foundIndex = postArray.findIndex(post => post.id == Number(id));
    return JSON.stringify(postArray[foundIndex]);
}

export const getAll = () => {
    console.log(JSON.stringify(postArray))
    return JSON.stringify(postArray);
}