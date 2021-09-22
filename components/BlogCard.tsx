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
        <div className="bg-gray-800 p-2 flex flex-col items-center justify-center mb-5 rounded-md py-3">
        <div className="relative w-full h-40">
            <Image  src={post.image} layout="fill" objectFit="cover" />
        </div>
            <h1 className="text-white text-2xl font-bold my-3">{post?.title}</h1>
            <p className="text-white text-center mb-2 text-sm text-light">{post?.except}</p>
            <Button text="read-more" href={`/post/${post?.slug}`} type={"tertiary"} />
        </div>
    );
};

export default BlogCard;
