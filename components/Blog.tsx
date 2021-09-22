import React from 'react';
import BlogCard from "./BlogCard";
import Button from "./Button";


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
        <section className="flex flex-col items-center">
            <h1 className="text-white text-3xl font-bold mb-2">Blog</h1>
            <p className="text-gray-500 text-center">
                Check out our blog for the latest tips, tricks, and best practices on
                Javascript, React/React Native, AWS and Startups.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
                {blogPosts.map((post) => (
                    <BlogCard post={post} key={post.slug} />
                ))}
            </div>

            <Button text="See all posts" href="/blog" type="secondary" />
        </section>
    );
};

export default Blog;
