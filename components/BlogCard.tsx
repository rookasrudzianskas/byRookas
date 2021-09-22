import React from 'react';
import Image from "next/image";
import Button from "./Button";

interface BlogCardProps {
    post: {
        id: string,
        slug: string,
        title: string,
        except: string,
        image: string,
    }

}

const BlogCard = ({post}: BlogCardProps) => {
    return (
        <div className="bg-gray-800">
        <div className="relative w-full h-40">
            <Image  src={post.image} layout="fill" objectFit="cover" />
        </div>
            <h1 className="text-white">{post?.title}</h1>
            <p className="text-white">{post?.except}</p>
            <Button text="read-more" href={`/post/${post?.slug}`} type={"tertiary"} />
        </div>
    );
};

export default BlogCard;
