// import { Database } from './database';
// import { Category } from './category';
// import { Post } from './post';

// export interface CommentData {
//     key?:string;
//     author: string;
//     password: string;
//     content: string;
//     created: number;
//     updated: number;       
//     email: string;
//     name: string;
//     like: number;
//     dislike: number;
// }

// export class Comment {
//     db: Database;
//     category: Category;
//     post: Post;
//     ref: firebase.database.Reference;
//     data: CommentData = <CommentData> {};

//     constructor ( comment_path = 'comment', post_path = 'post', 
//                     category_path = 'category' ) {
//             this.db = new Database();
//             this.category = new Category( category_path );
//             this.post = new Post( post_path );
//             this.ref = this.db.child( comment_path )                    
//         }

//         set( property: string, value: string ): Comment {
//             this.data[ property ] = value;
//             return this;
//         }
        
//         key( key: string ) { return this.set('key', key); }
//         author( author: string ) { return this.set('author', author); }
//         password( password: string ) { return this.set('password', password); }
//         content( content: string ) { return this.set('content', content); }
//         email( email: string ) { return this.set('email', email); }
//         name( name: string ) { return this.set('name', name); }
        
//         clear() {
//             this.data = <CommentData> {};
//         }

//         /**
//          * Creating a new comment
//          */

//         create() {
            
//         }
// }