import { Database } from './database';
// import { Category } from './category';
import { Post } from './post';

export interface CommentData {
    key?: string;
    post_id: string;
    author: string;
    password: string;
    content: string;
    created: number;
    updated: number;       
    email: string;
    name: string;
    like: number;
    dislike: number;
}

export class Comment{
    private db: Database;
    // private category: Category;
    private post: Post;
    private ref: firebase.database.Reference;
    private data: CommentData = <CommentData> {};

    constructor( comment_path = 'comment', post_path = 'post', category_path = 'category'){
        this.db = new Database();
        // this.category = new Category( category_path );
        this.post = new Post( post_path );
        this.ref = this.db.child( comment_path );

        let comment = new Comment();
        comment
        .set('name', 'Help')
        .create( s => { // success
        }, e => { // error
            alert( e );
        });
    }

    set( property: string, value: string ): Comment {
        this.data[ property ] = value;
        return this;
    }

    key( key: string ) { return this.set('key', key); }
    post_id( post_id: string ) { return this.set('post_id', post_id); }    
    author( author: string ) { return this.set('author', author); }
    password( password: string ) { return this.set('password', password); }
    content( content: string ) { return this.set('content', content); }
    email( email: string ) { return this.set('email', email); }
    name( name: string ) { return this.set('name', name); }
    
    clear() {
        this.data = <CommentData> {};
    }

    /**
     * Creating comment   
     */



    create( successCallback, failureCallback ) {
        if ( this.data.author === void 0 ) return failureCallback('input author');
        if ( this.data.post_id === void 0 ) return failureCallback('input post_id');

        this.post.get( this.data.post_id, s => { // check post
            if ( s == null ) return failureCallback('wrong post');

            // @todo check user

            this .ref .push() .set( this.data, re => { // create a post
                if ( re ) return failureCallback( re.message );
                this.clear();
                successCallback( re );
            } )
            .then( () => { })
            .catch( e => {
                failureCallback('Synchronization failed');
            });
        });
    }

        

}
