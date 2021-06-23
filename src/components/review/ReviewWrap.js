import React from 'react';
import Reviews from './Reviews';
import ReviewInput from './ReviewInput';

export default function ReviewWrap() {
    return (
        <div className="rounded-lg h-1/3 w-full p-4 shadow-lg bg-gray-100">
            <Reviews />
            <ReviewInput />
        </div>
    )
}
