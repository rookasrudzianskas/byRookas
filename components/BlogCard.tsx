import React from 'react';
import Image from "next/image";
import Button from "./Button";

interface BlogCardProps {
    post: {
        id: string,
        slug: string,
        title: string,
        excerpt: string,
        image: string,
    }

}

const BlogCard = ({post}: BlogCardProps) => {
    return (
        <div className="">
            <Image  src={post.image} layout="fill" objectFit="cover" />
            <h1>{post?.title}</h1>
            <p>{post?.excerpt}</p>
            <Button text="read-more" href={`/post/${post?.slug}`} type={"tertiary"} />
        </div>
    );
};

export default BlogCard;
