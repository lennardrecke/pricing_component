import React from 'react';
import Benefit from './benefit';

const Card = (props) => {
    return (
        <div className="flex flex-col relative gap-4 w-full max-w-[352px] min-h-[420px] cursor-pointer border border-[#5DA8FF] px-8 py-12 rounded-lg border-solid bg-[#f7faff] hover:bg-[#fffffd]">
            <h3 className="text-lg font-bold text-left m-0">{props.title}</h3>
            <div className="w-full bg-[#E5F1FF] min-h-[56px] flex gap-1.5 items-center font-bold flex-wrap leading-[25.6px] px-4 py-1.5 rounded-lg">
                {props.discount} €
                <s className='text-[#697089] text-sm'>{props.price} €</s>
            </div>
            <a href="#" className="w-full font-bold cursor-pointer flex items-center justify-center min-h-[48px] text-[#605DFF] no-underline tracking-[0.75px] rounded-lg border-0 border-solid border-[#605DFF] bg-[#e8eafb] hover:border hover:border-[#605DFF] hover:transition-[border-width] hover:duration-[0.2s] hover:ease-linear hover:border-solid">
                Buy now!
            </a>
            <div className="border border-solid border-[#E6E8F0]"></div>
            <ul className="w-full flex flex-col gap-4">
            {props.benefits.map((benefit, index) => (
                <li className="relative font-medium list-none text-sm items-center flex gap-2" key={index} >
                    <Benefit />
                    <span>{benefit}</span>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default Card;