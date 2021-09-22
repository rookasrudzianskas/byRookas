import React from 'react';

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
        <div className="">

        </div>
    );
};

export default BlogCard;
