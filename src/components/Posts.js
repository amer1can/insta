import React, {Component} from 'react';
import InstaService from '../services/instaService';
import User from './User';
import ErrorMessage from './Error';

//синтаксис ПОЛЯ КЛАССОВ без constuctor()
export default class Posts extends Component {
    //создаем экземпляр объекта внутри класса
    InstaService = new InstaService(); //теперь у нас есть методы getResource и getAllPosts
    state = {
        posts: [],
        error: false,
    }
    // хуки состояний жизненного цикла комонента, которые можно отловить
    // componentDidMount - появление
    // componentDidUpdate - обновление
    // componentDidCatch - ошибка
    // componentWillUnmount - удаление

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts = () => {
        this.InstaService.getAllPosts()
            .then(this.onPostsLoaded)
            .catch(this.onError)
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,          // = posts: post
               error: false
        })
        console.log(this.state.posts);
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const {name, altname, photo, src, alt, descr, id} = item;
            //id нужен реакту, чтобы не грузить заново одни и те же посты, если что-то меняется
            return (
                <div key={id} className="post">
                <User 
                    src={photo}
                    alt={altname} 
                    name={name}
                    min/>
                <img src={src} alt={alt}></img>
                
                <div className="post__name">
                    {name}
                </div>
                <div className="post__descr">
                    {descr}
                </div>
            </div>
            )
        })
    }

    render() {
        const {error, posts} = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(posts);
        return (
            <div className="left">
                {items}
            </div>
        )
    }
} 