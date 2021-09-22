import React from 'react';
import BlogCard from "./BlogCard";


const blogPosts = [
    {
        id: '1',
        title: "How to build the Google Maps clone in react native",
        slug: 'the_importance_of_learning_css',
        except: "In this video blog, I am going to show you how to build the Google Maps clone in react native",
        image: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2338&q=80',
    },
    {
        id: '2',
        title: "How to build the Mapbox Maps clone in react native",
        slug: 'the_importance_of_learning_javascript',
        except: "In this video blog, I am going to show you how to build the Google Maps clone in react native",
        image: 'https://images.unsplash.com/photo-1632158874682-4b661fa27d9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80',
    },
];

const Blog = () => {
    return (
        <div className="">
            <h1 className="text-3xl text-white font-bold">Blog</h1>
            <p className="text-gray-500 text-center mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci cum eligendi ipsam itaque laudantium magnam magni optio. Amet, quibusdam?</p>

            {blogPosts.map(post => <BlogCard post={post} />)}
        </div>
    );
};

export default Blog;
